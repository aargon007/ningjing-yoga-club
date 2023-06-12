import React from 'react';
import useAuth from './useAuth';
import useAxiosGlobal from './useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';

//fetch data for user profile
const useProfile = () => {
    const { user, loading } = useAuth();
    
    const [axiosSecure] = useAxiosGlobal();
    
    const { refetch, data: userProfile = [], isLoading: isProfile } = useQuery({
        queryKey: ['userProfile', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/${user?.email}`)
            return res.data;
        },
    })

    return [userProfile, refetch, isProfile]
};

export default useProfile;