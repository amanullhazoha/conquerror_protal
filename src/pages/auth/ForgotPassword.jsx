import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const ForgotPassword = () => {
	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Forgot password?"}
						subtitle={"No worries, we’ll send you reset instructions."}
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

						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							Reset Password
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

export default ForgotPassword;
