import React from 'react';
import useAxiosGlobal from './useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

//fetch data for manage instructor class
const useInstructorClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosGlobal();

    const { refetch, data: instructorClasses = [], isLoading: isInstructorClass } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/instructor/${user?.email}`)
            return res.data;
        },
    })

    return [instructorClasses, refetch, isInstructorClass]
};

export default useInstructorClass;