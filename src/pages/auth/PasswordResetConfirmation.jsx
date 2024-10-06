import { Link } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const PasswordResetConfirmation = () => {
	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4 py-32 lg:py-80">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Password reset successful"}
						subtitle={
							"Your password has been reset successfully! Click below to log in instantly."
						}
						logo={logo}
					/>

					<div className=" bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg">
						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							Continue
						</button>
					</div>

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

export default PasswordResetConfirmation;
