import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosGlobal from './useAxiosGlobal';

//check if user is an admin or not
const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosGlobal();
    
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;