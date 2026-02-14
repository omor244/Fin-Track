import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";






const useRole = () => {

    const { user, loading } = useAuth()
    const axiossecure = useAxiosSecure()

    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],

        queryFn: async () => {

            const { data } = await axiossecure.get(`/role/user/${user?.email}`)

            return data?.role
        }
    })




    return { role, isLoading };
};

export default useRole;