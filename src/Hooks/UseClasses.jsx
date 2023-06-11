import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosGlobal from './useAxiosGlobal';

//fetch data for all classes data -- admin
const UseClasses = () => {
    const [axiosSecure] = useAxiosGlobal();
    const { refetch, data: classes = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure("/classes")
            return res.data;
        },
    })

    return [classes, refetch, loading]
};

export default UseClasses;