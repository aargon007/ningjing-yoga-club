import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UseClasses = () => {

    const { refetch, data: classes = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get("https://breakable-baseball-production.up.railway.app/classes")
            return res.data;
        },
    })

    return [classes, refetch, loading]
};

export default UseClasses;