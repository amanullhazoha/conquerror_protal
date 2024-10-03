import { Link } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const CheckEmail = () => {
	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Check your email"}
						subtitle={"We sent a password reset link to"}
						description={"molla.ux@gmail.com"}
						logo={logo}
					/>

					<div className=" bg-white w-full shadow-custom-sm p-4 lg:p-[20px] border rounded-lg">
						<button className="w-full bg-[#1A56DB] text-white rounded-lg py-2">
							<Link to={"https://mail.google.com/mail"} target="_blank">
								Open email app
							</Link>
						</button>
					</div>

					<div className="flex flex-col gap-4 items-center">
            <div className="flex gap-1 justify-center items-center text-sm mt-5">
              <p className="text-[#6B7280]">Don't receive the email?</p>
              <Link className="text-[#1C64F2] text-sm font-semibold" to={"/signup"}>
                <p>Click to resend</p>
              </Link>
            </div>
            
                 <Link className="text-[#6B7280] text-sm font-semibold" to={"/login"}>
                <p>← Back to login</p>
              </Link>
          </div>
				</div>
			</div>
		</PublicLayout>
	);
};

export default CheckEmail;
