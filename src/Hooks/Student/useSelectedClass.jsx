import React from 'react';
import useAuth from '../useAuth';
import useAxiosGlobal from '../useAxiosGlobal';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosGlobal();

    const { refetch, data: selectedClasses = [], isLoading: isSelectedClasses } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses/${user?.email}`)
            return res.data;
        },
    })

    return [selectedClasses, refetch, isSelectedClasses]
};

export default useSelectedClass;