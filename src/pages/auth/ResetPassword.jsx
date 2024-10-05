import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const ResetPassword = () => {
	const [isPasswordViewable, setIsPasswordViewable] = useState(false);
	const [isConfirmPasswordViewable, setIsConfirmPasswordViewable] =
		useState(false);

	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Log in to your account"}
						subtitle={"Welcome back! Please enter your details."}
						logo={logo}
					/>

					<form className="grid gap-4 bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg">
						<div>
							<label className="text-[#111928] text-sm" htmlFor="password">
								Password
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className="w-full p-2 border rounded-lg mt-1 pr-8"
									type={isPasswordViewable ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Password"
								/>

								<div
									className="absolute right-2 top-[40%] z-10 cursor-pointer"
									onClick={() => setIsPasswordViewable((prev) => !prev)}
								>
									<SearchIcon />
								</div>
							</div>
						</div>

						<div>
							<label
								className="text-[#111928] text-sm"
								htmlFor="confirmPassword"
							>
								Confirm Password
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className="w-full p-2 border rounded-lg mt-1 pr-8"
									type={isConfirmPasswordViewable ? "text" : "password"}
									name="confirmPassword"
									id="confirmPassword"
									placeholder="Confirm password"
								/>

								<div
									className="absolute right-2 top-[40%] z-10 cursor-pointer"
									onClick={() => setIsConfirmPasswordViewable((prev) => !prev)}
								>
									<SearchIcon />
								</div>
							</div>
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

						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							Reset password
						</button>
					</form>

					<div className="flex justify-center text-sm mt-5">
						<Link
							className="text-[#6B7280] text-sm font-semibold"
							to={"/login"}
						>
							<p>← Back to login</p>
						</Link>
					</div>
				</div>
			</div>
		</PublicLayout>
	);
};

export default ResetPassword;
