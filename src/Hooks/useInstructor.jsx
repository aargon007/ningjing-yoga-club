import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from './useAuth';
import useAxiosGlobal from './useAxiosGlobal';

//check if user is an instructor or not
const useInstructor = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosGlobal();

    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;