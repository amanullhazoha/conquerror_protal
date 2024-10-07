import { Button } from "@/components/ui/button";
import useToast from "@/hooks/useToast";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const Login = () => {
	const navigate = useNavigate();

	const [isViewable, setIsViewable] = useState(false);
	const { showSuccess, showError } = useToast();

	const [userLogin, { isLoading, isSuccess, isError, error }] =
		useUserLoginMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});

	// Handle form submission
	const onSubmit = (formData) => {
		const data = {
			email: formData.email,
			password: formData.password,
		};

		userLogin(data);
	};

	useEffect(() => {
		if (isSuccess) {
			showSuccess("Login successful");
			navigate("/dashboard");
		}

		if (isError) {
			showError(error?.data);
		}
	}, [isError, isSuccess]);

	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4 py-32 lg:py-80">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Log in to your account"}
						subtitle={"Welcome back! Please enter your details."}
						logo={logo}
					/>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid gap-4 bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg"
					>
						<div>
							<label className="text-[#111928] text-sm" htmlFor="email">
								Email
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className={`w-full p-2 border rounded-lg mt-1 pl-8 outline-none ${
										errors.email && "border-red-500"
									}`}
									type="text"
									name="email"
									id="email"
									placeholder="name@example.com"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
											message: "Enter a valid email",
										},
									})}
								/>

								<div className="absolute left-2 top-[40%]">
									<IoMailOutline className="text-sm text-[#6B7280]" />
								</div>
							</div>

							{errors.email && (
								<p className="text-sm text-red-500">{errors.email.message}</p>
							)}
						</div>

						<div>
							<label className="text-[#111928] text-sm" htmlFor="password">
								Password
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className={`w-full p-2 border rounded-lg mt-1 pr-8 outline-none ${
										errors.password && "border-red-500"
									}`}
									type={isViewable ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Password"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 8,
											message: "Password must be at least 8 characters long",
										},
									})}
								/>

								<div
									className="absolute right-2 top-[40%] z-10 cursor-pointer"
									onClick={() => setIsViewable((prev) => !prev)}
								>
									{isViewable ? (
										<FaRegEyeSlash className="text-sm text-[#6B7280]" />
									) : (
										<FaRegEye className="text-sm text-[#6B7280]" />
									)}
								</div>
							</div>
							{errors.password && (
								<p className="text-sm text-red-500">
									{errors.password.message}
								</p>
							)}
						</div>

						<div className="flex justify-between py-2">
							<div className="flex gap-2 items-center">
								<input type="checkbox" name="checkbox" id="checkbox" />
								<p className="text-[#6B7280] text-sm">Remember me</p>
							</div>

							<Link className="text-[#1C64F2] text-sm" to={"/forgot-password"}>
								<p>Forgot Password</p>
							</Link>
						</div>

						<Button
							className="w-full bg-[#1A56DB] hover:bg-[#1A56DB] text-white rounded-lg py-2"
							disabled={isLoading}
						>
							{isLoading ? "Loading..." : "Log in"}
						</Button>
					</form>

					<div className="flex gap-1 justify-center items-center text-sm mt-5">
						<p className="text-[#6B7280]">Don't have an account?</p>
						<Link
							className="text-[#1C64F2] text-sm font-semibold"
							to={"/signup"}
						>
							<p>Sign up</p>
						</Link>
					</div>
				</div>
			</div>
		</PublicLayout>
	);
};

export default Login;
