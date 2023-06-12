import React from 'react';
import useAuth from '../useAuth';
import useAxiosGlobal from '../useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';

const useEnrolledClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosGlobal();

    const { refetch, data: enrolledClasses = [], isLoading: isEnrolledLoading } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledClasses/${user?.email}`)
            return res.data;
        },
    })

    return [enrolledClasses, refetch, isEnrolledLoading]
};

export default useEnrolledClass;