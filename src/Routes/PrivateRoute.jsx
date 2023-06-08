import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../Pages/Shared/Spinner";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
	const { user, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <Spinner/>
	}

	if (user) {
		return children;
	}
	Swal.fire(
        "Stop!",
        "You have to log in first to continue",
        "error"
    );
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
