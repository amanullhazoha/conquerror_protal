import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import SelectInput from "@/components/inputs/SelectInput";
import { countries } from "@/data/countryList";
import useToast from "@/hooks/useToast";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
import { InfoCard } from "@/shared/InfoCard";
import { downloadImage } from "@/utils/downloadImage";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantBasicInfo = ({ application }) => {
	const [isEdit, setIsEdit] = useState(false);
	const { showSuccess, showError } = useToast();

	const [updateApplicationById, { isLoading, isError, isSuccess, error }] =
		useUpdateApplicationByIdMutation();

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	// Update form values when 'application' data is available
	useEffect(() => {
		if (application) {
			reset({
				firstName: application.first_name,
				lastName: application.last_name,
				fatherName: application.father_name,
				motherName: application.mother_name,
				dob: application.date_of_birth,
				gender: application.gender,
				nationality: application.nationality,
				position: application.position_id,
				referenceNumber: application.reference
			});
		}
	}, [application, reset]);

	const onSubmit = (formData) => {
		const data = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			father_name: formData.fatherName,
			mother_name: formData.motherName,
			date_of_birth: formData.dob,
			gender: formData.gender,
			nationality: formData.nationality,
			position_id: formData.position,
			reference: formData.referenceNumber
		};

		console.log(data);

		updateApplicationById({ id: application?.id, data });
	};

	const apiUrl = import.meta.env.VITE_APP_API_URL;

	useEffect(() => {
		if (isSuccess) {
			showSuccess("Basic information updated successful");
			setIsEdit(false);
		}

		if (isError) {
			showError(error?.data);
		}
	}, [isError, isSuccess]);

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
											message: "Maximum length is 50 characters"
										}
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
											message: "Maximum length is 50 characters"
										}
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
											message: "Maximum length is 50 characters"
										}
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
											message: "Maximum length is 50 characters"
										}
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
										required: "Date of Birth is required"
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<RadioInput
									name="gender"
									label="Gender"
									options={[
										{ label: "Male", value: "male" },
										{ label: "Female", value: "female" },
										{ label: "Others", value: "others" }
									]}
									register={register}
									required
									rules={{ required: "Please select an option" }} // Validation rule
									errors={errors}
								/>
							</div>

							<div className="pt-8">
								<SelectInput
									name="nationality"
									label="Nationality"
									placeholder="Select Nationality"
									required={true}
									options={countries}
									control={control}
									rules={{ required: "Nationality is required" }}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="position"
									label="Position"
									type="number"
									placeholder="Enter position number"
									register={register}
									required
									rules={{
										required: "Position number is required"
									}}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="referenceNumber"
									label="Reference Number"
									type="number"
									placeholder="Enter your reference number"
									register={register}
									required
									rules={{
										required: "Reference number is required"
									}}
									errors={errors}
								/>
							</div>
						</div>
					) : (
						<div>
							<div className="grid grid-cols-2 gap-6">
								<InfoCard
									title="First Name"
									content={application?.first_name}
								/>
								<InfoCard title="Last Name" content={application?.last_name} />
							</div>

							<InfoCard
								title="Father Name"
								content={application?.father_name || ""}
							/>
							<InfoCard
								title="Mother Name"
								content={application?.mother_name}
							/>
							<InfoCard
								title="Date of Birth"
								content={moment(
									application?.date_of_birth || new Date()
								).format("D-MMMM-YYYY")}
							/>
							<InfoCard title="Gender" content={application?.gender} />
							<InfoCard
								title="Nationality"
								content={application?.nationality}
							/>
							<InfoCard title="Position" content={application?.position_id} />
							<InfoCard
								title="Reference Number"
								content={application?.reference}
							/>
						</div>
					)}
				</div>
			</form>

			<div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto
					title="Applicant Photo"
					downloadImage={() =>
						downloadImage(
							`${apiUrl}/uploads/${application?.applicant_image}`,
							application?.applicant_image
						)
					}
					image={`${apiUrl}/uploads/${application?.applicant_image}`}
				/>
			</div>
		</div>
	);
};

export default ApplicantBasicInfo;
