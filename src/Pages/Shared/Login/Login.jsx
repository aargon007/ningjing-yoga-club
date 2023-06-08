import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
	FaAt,
	FaLock,
	FaRegArrowAltCircleRight,
	FaUserPlus,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const { setUser, signIn, googleSignIn } = useAuth();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const onSubmit = (data) => {
		signIn(data.email, data.password)
			.then((result) => {
				const loggedUser = result.user;
				setUser(loggedUser);
				// console.log(loggedUser);
				reset();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
				if (error.code === "auth/wrong-password") {
					setError("Wrong password! Please provide correct one.");
				}
				if (error.code === "auth/user-not-found") {
					setError("Not a Valid User.");
				}
			});
	};

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const loggedUser = result.user;
				const { displayName, photoURL, phoneNumber, email } = loggedUser;
				axios
					.post("https://breakable-baseball-production.up.railway.app/users", {
						name: displayName,
						email,
						photo: photoURL,
						phone: phoneNumber,
						role : "student",
						gender : {value : "", label : ""},
						address : "",

					})
					.then((res) => {
						// console.log(res);
					});
				setUser(loggedUser);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="flex items-center">
			<img
				src="https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-girl-yoga-pose_97632-2867.jpg"
				alt="login yoga"
				className="w-full h-[700px] object-cover lg:block hidden"
			/>
			<div className="w-full">
				<div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 pb-10 pt-5">
					<div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
						Login To Your Account
					</div>
					<button
						onClick={handleGoogleSignIn}
						className="flex items-center justify-center mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200"
					>
						<span className="mr-3">
							<FcGoogle></FcGoogle>
						</span>
						<span>Login with Google</span>
					</button>
					<div className="relative mt-10 h-px bg-gray-300">
						<div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
							<span className="bg-white px-4 text-xs text-gray-500 uppercase">
								Or Login With Email
							</span>
						</div>
					</div>
					{error && (
						<div className="p-5 bg-red-50 mt-5">
							<p className="text-red-500 text-sm">{error}</p>
						</div>
					)}
					<div className="mt-5">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-col mb-6">
								<label
									htmlFor="email"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									E-Mail Address :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<FaAt className="text-blue-500"></FaAt>
									</div>

									<input
										id="email"
										type="email"
										{...register("email", { required: true })}
										className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
										placeholder="E-Mail Address"
									/>
								</div>
								{errors.email && (
									<span className="text-red-600 text-sm">
										Email is required
									</span>
								)}
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="password"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Password :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<FaLock className="text-blue-500"></FaLock>
									</div>

									<input
										id="password"
										type={passwordVisible ? "text" : "password"}
										{...register("password", { required: true })}
										className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
										placeholder="Password"
									/>
									<div className="inline-flex items-center justify-center absolute right-0 top-0 h-full w-10 text-gray-400">
										{passwordVisible ? (
											<RiEyeOffFill
												className="text-black text-xl"
												onClick={togglePasswordVisibility}
											/>
										) : (
											<RiEyeFill
												className="text-black text-xl"
												onClick={togglePasswordVisibility}
											/>
										)}
									</div>
								</div>
								{errors.password?.type === "required" && (
									<p className="text-red-600 text-sm">Password is required</p>
								)}
							</div>

							{/* <div className="flex items-center mb-6 -mt-4">
								<div className="flex ml-auto">
									<button className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">
										Forgot Your Password ?
									</button>
								</div>
							</div> */}

							<div className="flex w-full">
								<button
									type="submit"
									className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
								>
									<span className="mr-2 uppercase">Login</span>
									<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
								</button>
							</div>
						</form>
					</div>

					<div className="flex justify-center items-center mt-6">
						<Link
							to="/register"
							className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
						>
							<FaUserPlus></FaUserPlus>
							<span className="ml-2">Don't have an account? Register Now</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
