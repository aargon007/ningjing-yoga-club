import React, { useState } from "react";
import {
	FaAddressBook,
	FaAt,
	FaLink,
	FaLock,
	FaPhoneAlt,
	FaUserAlt,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
	const [selectedOption, setSelectedOption] = useState("");
    const [confirmPass, setConfirmPass] = useState(null);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm();

	const gender = [
		{ value: "Male", label: "Male" },
		{ value: "Female", label: "Female" },
		{ value: "Other", label: "Other" },
	];

	const onSubmit = (data) => {
		data.gender = selectedOption;

        if(data.confirm !== data.password){
            setConfirmPass('Password did not match');
            return
        }
		console.log(data);
        reset();
        setConfirmPass('')
	};

	return (
		<div className="flex pb-10">
			<img
				src="https://i.ibb.co/3v1x5rY/13297285-5184247.jpg"
				className="w-5/12 hidden lg:block"
				alt=""
			/>
			<div className="w-full lg:border-l ">
				<div className="flex flex-col bg-white px-4 sm:px-6 md:px-8  lg:px-10">
					<div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
						Register Now
					</div>
					<div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
						Enter your credentials to get access account
					</div>

					<div className="mt-10">
						<form
							className="grid lg:grid-cols-2 grid-cols-1 md:gap-5"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="flex flex-col mb-5">
								<label
									htmlFor="name"
									className="mb-1 text-xs tracking-wide text-gray-600"
								>
									Name :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<FaUserAlt className="text-blue-500"></FaUserAlt>
									</div>

									<input
										id="name"
										type="text"
										{...register("name")}
										className="inputField"
										placeholder="Enter your name"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-5">
								<label
									htmlFor="email"
									className="mb-1 text-xs tracking-wide text-gray-600"
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
										className="inputField"
										placeholder="Enter your email"
									/>
								</div>
                                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
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
										<span>
											<FaLock className="text-blue-500"></FaLock>
										</span>
									</div>

									<input
										id="password"
										type="password"
										{...register("password", { required: true, minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
										className="inputField"
										placeholder="Enter your password"
									/>
								</div>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must have one capital letter and special character.</p>}
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="confirm"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Confirm Password :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span>
											<FaLock className="text-blue-500"></FaLock>
										</span>
									</div>

									<input
										id="confirm"
										type="password"
										{...register("confirm", { required: true })}
										className="inputField"
										placeholder="Enter your password"
									/>
								</div>
                                {confirmPass && <p className="text-red-600">Password did not match</p>}
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="photo"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Photo URL :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span>
											<FaLink className="text-blue-500"></FaLink>
										</span>
									</div>

									<input
										id="photo"
										type="url"
										{...register("photo")}
										className="inputField"
										placeholder="Enter your photo url"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="gender"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Gender :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span></span>
									</div>

									<CreatableSelect
										isClearable
										options={gender}
										onChange={setSelectedOption}
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="phone"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Phone Number :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span>
											<FaPhoneAlt className="text-blue-500"></FaPhoneAlt>
										</span>
									</div>

									<input
										id="phone"
										type="number"
										{...register("phone")}
										className="inputField"
										placeholder="Enter your phone number"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-6">
								<label
									htmlFor="address"
									className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
								>
									Address :
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span>
											<FaAddressBook className="text-blue-500"></FaAddressBook>
										</span>
									</div>

									<input
										id="address"
										type="text"
										{...register("address")}
										className="inputField"
										placeholder="Enter your address"
									/>
								</div>
							</div>

							<div className="lg:col-span-2 mb-6">
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-blue-700 hover:bg-blue-900 py-2 px-4 font-medium text-white shadow-sm"
								>
									Register
								</button>
							</div>
						</form>
						<p className="mt-3 text-center">
							Already Registered ?
							<Link
								to="/login"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ms-3"
							>
								Login Now
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
