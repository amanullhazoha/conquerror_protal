import { Button } from "@/components/ui/button";
import useToast from "@/hooks/useToast";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import logo from "../../assets/images/conqueror_logo.png";
import Head from "./Head";

const ResetPassword = ({ nextStep, token }) => {
	const { showSuccess, showError } = useToast();

	const [isPasswordViewable, setIsPasswordViewable] = useState(false);
	const [isConfirmPasswordViewable, setIsConfirmPasswordViewable] =
		useState(false);

	const [
		resetPassword,
		{ data: response, isLoading, isSuccess, isError, error },
	] = useResetPasswordMutation();

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});

	// Handle form submission
	const onSubmit = (formData) => {
		const data = {
			password: formData.password,
			token,
		};

		resetPassword(data);
	};

	useEffect(() => {
		if (isSuccess) {
			showSuccess(response?.message);
			nextStep();
		}

		if (isError) {
			showError(error?.data);
		}
	}, [isError, isSuccess]);

	return (
		<div>
			{/* Head */}
			<Head
				title={"Set new password"}
				subtitle={
					"Your new password must be different to previously used passwords."
				}
				logo={logo}
				width="w-[80%]"
			/>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid gap-4 bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg"
			>
				<div>
					<label className="text-[#111928] text-sm" htmlFor="password">
						Password
					</label>
					<div className="relative flex flex-col items-center">
						<input
							className={`w-full p-2 border rounded-lg mt-1 pr-8 outline-none ${
								errors.password && "border-red-500"
							}`}
							type={isPasswordViewable ? "text" : "password"}
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
							onClick={() => setIsPasswordViewable((prev) => !prev)}
						>
							{isPasswordViewable ? (
								<FaRegEyeSlash className="text-sm text-[#6B7280]" />
							) : (
								<FaRegEye className="text-sm text-[#6B7280]" />
							)}
						</div>
					</div>

					{errors.password && (
						<p className="text-sm text-red-500">{errors.password.message}</p>
					)}
				</div>

				<div>
					<label className="text-[#111928] text-sm" htmlFor="confirmPassword">
						Confirm Password
					</label>
					<div className="relative flex flex-col items-center">
						<input
							className={`w-full p-2 border rounded-lg mt-1 pr-8 outline-none ${
								errors.confirmPassword && "border-red-500"
							}`}
							type={isConfirmPasswordViewable ? "text" : "password"}
							name="confirmPassword"
							id="confirmPassword"
							placeholder="Confirm password"
							{...register("confirmPassword", {
								required: "Confirm password is required",
								minLength: {
									value: 8,
									message: "Password must be at least 8 characters long",
								},
								validate: (value) => {
									const { password } = getValues();
									return value === password || "Passwords do not match";
								},
							})}
						/>

						<div
							className="absolute right-2 top-[40%] z-10 cursor-pointer"
							onClick={() => setIsConfirmPasswordViewable((prev) => !prev)}
						>
							{isConfirmPasswordViewable ? (
								<FaRegEyeSlash className="text-sm text-[#6B7280]" />
							) : (
								<FaRegEye className="text-sm text-[#6B7280]" />
							)}
						</div>
					</div>

					{errors.confirmPassword && (
						<p className="text-sm text-red-500">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>

				<div className="flex flex-col gap-4 py-2">
					<div className="flex gap-2 items-center">
						<div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-[#0E9F6E]">
							<FaCheck className="text-white text-sm" />
						</div>
						<p className="text-[#6B7280] text-sm">
							Must be at least 8 characters
						</p>
					</div>

					<div className="flex gap-2 items-center">
						<div className="flex justify-center items-center w-[20px] h-[20px] rounded-full bg-[#D1D5DB]">
							<FaCheck className="text-white text-sm" />
						</div>
						<p className="text-[#6B7280] text-sm">
							Must be at least 8 characters
						</p>
					</div>
				</div>

				<Button
					className="w-full bg-[#1A56DB] hover:bg-[#1A56DB] text-white rounded-lg py-2"
					disabled={isLoading}
				>
					{isLoading ? "Loading..." : "Reset password"}
				</Button>
			</form>
		</div>
	);
};

export default ResetPassword;
