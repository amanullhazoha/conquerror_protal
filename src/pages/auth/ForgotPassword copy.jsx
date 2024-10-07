import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/images/conqueror_logo.png";
import PublicLayout from "../../components/layouts/PublicLayout";
import Head from "./Head";

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onChange",
	});

	// Handle form submission
	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<PublicLayout>
			<div className="flex justify-center items-center h-[90vh] px-4 py-32 lg:py-80">
				<div className="max-w-[450px] w-full">
					{/* Head */}
					<Head
						title={"Forgot password?"}
						subtitle={"No worries, we’ll send you reset instructions."}
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

						<Button className="w-full bg-[#1A56DB] hover:bg-[#1A56DB] text-white rounded-lg py-2">
							Reset Password
						</Button>
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
