import { Link } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import Head from "./Head";

const CheckEmail = ({ nextStep, resetEmail }) => {
	return (
		<div>
			<div className="max-w-[450px] w-full">
				{/* Head */}
				<Head
					title={"Check your email"}
					subtitle={"We sent a password reset link to"}
					description={resetEmail || ""}
					logo={logo}
				/>

				<div className=" bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg">
					<Link to={"https://mail.google.com/mail"} target="_blank">
						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							Open email app
						</button>
					</Link>
				</div>

				<div className="flex gap-1 justify-center items-center text-sm mt-5">
					<p className="text-[#6B7280]">Don't receive the email?</p>
					<Link className="text-[#1C64F2] text-sm font-semibold" to={"/signup"}>
						<p>Click to resend</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CheckEmail;
