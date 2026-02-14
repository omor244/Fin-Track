
import { Navigate } from 'react-router';
import LoadingPage from '../Components/Loading/LoadingPage';
import useRole from './useRole';

const AdminRoute = ({ children }) => {
    const { role, isLoading } = useRole()

    if (isLoading) return <LoadingPage></LoadingPage>

    if (role == "admin") {
        return children
    }



    return <Navigate to={"/"}></Navigate>
};

export default AdminRoute;