import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import LoadingPage from '../Components/Loading/LoadingPage';

const PrivateRoute = ({ children }) => {
    const location = useLocation()


    const { user, loading } = useAuth()

    if (loading) return <LoadingPage></LoadingPage>

    if (user) {
        return children
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;