
import { useNavigate, useLocation } from 'react-router';

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from '../../Hooks/useAuth';
import { saveorupdateuser } from '../../Hooks/Utility';



const SocialButton = () => {
    const { signInWithGoogle, loading } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();



    const handleGoogleLogin = async () => {



        try {

            const result = await signInWithGoogle()
            const user = result?.user


            const res = await saveorupdateuser({ name: user.displayName, email: user.email, image: user.photoURL })

            if (result.user) {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome to MealMind!',
                    text: `Glad to see you, ${result.user.displayName.split(' ')[0]}!`,
                    timer: 2000,
                    showConfirmButton: false
                });


                navigate(location?.state ? location?.state : '/');
            }
        } catch (error) {
            console.error("Login Error:", error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with Google Login!',
            });
        }
    };

    return (
        <div className="w-full">
            <button
                onClick={handleGoogleLogin}
                className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:border-slate-300 w-full py-3 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 normal-case font-bold text-slate-700"
                disabled={loading}
            >
                {loading ? (
                    <span className="loading loading-spinner loading-sm text-primary"></span>
                ) : (
                    <>
                        <FcGoogle className="text-2xl" />
                        <span>Continue with Google</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default SocialButton;