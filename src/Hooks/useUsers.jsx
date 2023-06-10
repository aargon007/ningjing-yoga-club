import React from 'react';
import useAxiosGlobal from './useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    
    const [axiosSecure] = useAxiosGlobal();
    const { refetch, data: users = [], isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure("/users")
            return res.data;
        },
    })

    return [users, refetch, loading]
};

export default useUsers;