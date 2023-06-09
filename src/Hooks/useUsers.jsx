import React from 'react';
import useAxiosGlobal from './useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    
    const [axiosSecure] = useAxiosGlobal();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure("/users")
            return res.data;
        },
    })

    return [users, refetch]
};

export default useUsers;