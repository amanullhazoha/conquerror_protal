import { Link } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import Head from "./Head";

const PasswordResetConfirmation = () => {
	return (
		<div>
			{/* Head */}
			<Head
				title={"Password reset successful"}
				subtitle={
					"Your password has been reset successfully! Click below to log in instantly."
				}
				logo={logo}
			/>

			<div className=" bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg">
				<Link to={"/login"}>
					<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
						Continue
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PasswordResetConfirmation;
