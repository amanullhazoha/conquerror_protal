import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import useToast from "@/hooks/useToast";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
import { InfoCard } from "@/shared/InfoCard";
import { downloadImage } from "@/utils/downloadImage";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantPassportInfo = ({ application }) => {
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
				passportNumber: application?.passportno,
				expiryDate: application?.date_of_expiry
			});
		}
	}, [application, reset]);

	const onSubmit = (formData) => {
		const data = {
			passportno: formData.passportNumber,
			date_of_expiry: formData.expiryDate
		};

		console.log(data);

		updateApplicationById({ id: application?.id, data });
	};

	const apiUrl = import.meta.env.VITE_APP_API_URL;

	useEffect(() => {
		if (isSuccess) {
			showSuccess("Passport information updated successful");
			setIsEdit(false);
		}

		if (isError) {
			showError(error?.data);
		}
	}, [isError, isSuccess]);

	return (
		<div className="grid grid-cols-2 gap-6">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
			>
				{/* Header */}
				<div className="flex items-center justify-between mb-[24px]">
					<h2 className="text-[18px] leading-[27px] font-semibold">
						Passport information
					</h2>

					<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
				</div>

				{/* Main component */}
				{isEdit ? (
					<div>
						<InputField
							name="passportNumber"
							label="Passport Number"
							type="number"
							placeholder="Enter your passport number"
							register={register}
							required
							rules={{
								required: "Passport number is required",
								maxLength: {
									value: 18,
									message: "Maximum length is 18 characters"
								}
							}}
							errors={errors}
						/>

						<div className="pt-4">
							<InputField
								name="expiryDate"
								label="Expiry Date"
								type="date"
								placeholder="Enter your expiry date"
								register={register}
								required
								rules={{
									required: "Expiry date is required"
								}}
								errors={errors}
							/>
						</div>
					</div>
				) : (
					<div>
						<InfoCard
							title="Passport Number"
							content={application?.passportno || ""}
						/>
						<InfoCard
							title="Expiry Date"
							content={moment(application?.date_of_expiry || new Date()).format(
								"D-MMMM-YYYY"
							)}
						/>
					</div>
				)}
			</form>

			<div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto
					title="Passport Front Page"
					className="mb-5"
					downloadImage={() =>
						downloadImage(
							`${apiUrl}/uploads/${application?.applicant_passport}`,
							application?.applicant_passport
						)
					}
					image={`${apiUrl}/uploads/${application?.applicant_passport}`}
				/>
				<ApplicantPhoto
					title="Signature Page"
					downloadImage={() =>
						downloadImage(
							`${apiUrl}/uploads/${application?.applicant_resume}`,
							application?.applicant_resume
						)
					}
					image={`${apiUrl}/uploads/${application?.applicant_resume}`}
				/>
			</div>
		</div>
	);
};

export default ApplicantPassportInfo;
