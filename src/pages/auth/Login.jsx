import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const Login = () => {
	const [isViewable, setIsViewable] = useState(false);

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
							<label className="text-[#111928] text-sm" htmlFor="email">
								Email
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className="w-full p-2 border rounded-lg mt-1 pl-8"
									type="text"
									name="email"
									id="email"
									placeholder="name@example.com"
								/>

								<div className="absolute left-2 top-[40%]">
									<SearchIcon />
								</div>
							</div>
						</div>

						<div>
							<label className="text-[#111928] text-sm" htmlFor="password">
								Password
							</label>
							<div className="relative flex flex-col items-center">
								<input
									className="w-full p-2 border rounded-lg mt-1 pr-8"
									type={isViewable ? "text" : "password"}
									name="password"
									id="password"
									placeholder="Password"
								/>

								<div
									className="absolute right-2 top-[40%] z-10 cursor-pointer"
									onClick={() => setIsViewable((prev) => !prev)}
								>
									<SearchIcon />
								</div>
							</div>
						</div>

						<div className="flex justify-between py-2">
							<div className="flex gap-2 items-center">
								<input type="checkbox" name="checkbox" id="checkbox" />
								<p className="text-[#6B7280] text-sm">Remember me</p>
							</div>

							<Link
								className="text-[#1C64F2] text-sm"
								to={"/auth/forgot-password"}
							>
								<p>Forgot Password</p>
							</Link>
						</div>

						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							Log in
						</button>
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
