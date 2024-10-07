import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import { useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantBasicInfo = () => {
	const [isEdit, setIsEdit] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "Anik",
			lastName: "Molla",
			fatherName: "Anika",
			motherName: "Anika",
			dob: "1998-06-05",
			gender: "male",
			nationality: "Pakistan",
			position: "Rider",
			referenceNumber: "4552212",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data); // Handle form submission
		// Here you can send the data to your API or handle it accordingly
	};

	return (
		<div className="grid grid-cols-12 gap-6">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="col-span-6 xl:col-span-7"
			>
				{/* Header */}
				<div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
					<div className="flex items-center justify-between mb-[24px]">
						<h2 className="text-[18px] leading-[27px] font-semibold">
							Basic Information
						</h2>

						<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
					</div>

					{/* Main component */}
					{isEdit ? (
						<div>
							<div className="grid grid-cols-2 gap-6">
								<InputField
									name="firstName"
									label="First Name"
									type="text"
									placeholder="Enter your first name"
									required
									register={register}
									rules={{
										required: "First name is required",
										maxLength: {
											value: 50,
											message: "Maximum length is 50 characters",
										},
									}}
									errors={errors}
								/>

								<InputField
									name="lastName"
									label="Last Name"
									type="text"
									placeholder="Enter your last name"
									register={register}
									required
									rules={{
										required: "Last name is required",
										maxLength: {
											value: 50,
											message: "Maximum length is 50 characters",
										},
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="fatherName"
									label="Father Name"
									type="text"
									placeholder="Enter your father name"
									register={register}
									required
									rules={{
										required: "Father name is required",
										maxLength: {
											value: 50,
											message: "Maximum length is 50 characters",
										},
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="motherName"
									label="Mother Name"
									type="text"
									placeholder="Enter your mother name"
									register={register}
									required
									rules={{
										required: "Mother name is required",
										maxLength: {
											value: 50,
											message: "Maximum length is 50 characters",
										},
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="dob"
									label="Date of Birth"
									type="date"
									placeholder="Enter your date of birth"
									register={register}
									required
									rules={{
										required: "Date of Birth is required",
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<RadioInput
									name="gender"
									label="Gender"
									options={[
										{ label: "Male", value: "Male" },
										{ label: "Female", value: "Female" },
										{ label: "Others", value: "Others" },
									]}
									register={register}
									rules={{ required: "Please select an option" }} // Validation rule
									errors={errors}
									required={true}
								/>
							</div>
						</div>
					) : (
						<div>
							<div className="grid grid-cols-2 gap-10 border-b-2 border-b-[#F9FAFB] pb-4 mb-4">
								<div>
									<p className="text-[#9CA3AF] pb-2">First Name</p>
									<p>Anik</p>
								</div>

								<div>
									<p className="text-[#9CA3AF] pb-2">Last Name</p>
									<p>Molla</p>
								</div>
							</div>

							<InfoCard title="Father Name" content="Test Name" />
							<InfoCard title="Mother Name" content="Test Name" />
							<InfoCard title="Date of Birth" content="5-June-1998" />
							<InfoCard title="Gender" content="Male" />
							<InfoCard title="Nationality" content="Bangladeshi" />
							<InfoCard title="Position" content="Rider" />
							<InfoCard title="Reference Number" content="12345678" />
						</div>
					)}
				</div>
			</form>

			<div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto title="Applicant Photo" />
			</div>
		</div>
	);
};

// User name card
const InfoCard = ({ title, content }) => {
	return (
		<div className="border-b-2 border-b-[#F9FAFB] pb-4 mb-4">
			<p className="text-[#9CA3AF] pb-2">{title}</p>
			<p>{content}</p>
		</div>
	);
};

export default ApplicantBasicInfo;
