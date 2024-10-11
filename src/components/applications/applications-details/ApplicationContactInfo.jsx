import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import NumberInput from "@/components/inputs/NumberInput";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
import { InfoCard } from "@/shared/InfoCard";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ApplicationContactInfo = ({ application }) => {
	const [isEdit, setIsEdit] = useState(false);

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
				email: application?.email,
				contactNumber: application?.contact_number,
				whatsappNumber: application?.whatsapp_number
			});
		}
	}, [application, reset]);

	const onSubmit = (formData) => {
		const data = {
			email: formData.email,
			contact_number: formData.contactNumber,
			whatsapp_number: formData.whatsappNumber
		};

		console.log(data);

		updateApplicationById({ id: application?.id, data });
	};

	useEffect(() => {
		if (isSuccess) {
			showSuccess("Contact information updated successful");
			setIsEdit(false);
		}

		if (isError) {
			showError(error?.data);
		}
	}, [isError, isSuccess]);

	return (
		<div className="grid grid-cols-2">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
			>
				{/* Header */}
				<div className="flex items-center justify-between mb-[24px]">
					<h2 className="text-[18px] leading-[27px] font-semibold">
						Contact information
					</h2>

					<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
				</div>

				{/* Main component */}
				{isEdit ? (
					<div>
						<div className="">
							<InputField
								name="email"
								label="Email"
								type="email"
								placeholder="Enter your email"
								register={register}
								required
								rules={{
									required: "Email is required",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Please enter a valid email address"
									}
								}}
								errors={errors}
							/>
						</div>

						<div className="pt-4">
							<NumberInput
								name="contactNumber"
								label="Contact Number"
								placeholder="Enter your contact number"
								required
								control={control}
								rules={{
									required: "Contact number is required"
								}}
								errors={errors}
							/>
						</div>

						<div className="pt-5">
							<NumberInput
								name="whatsappNumber"
								label="WhatsApp Number"
								placeholder="Enter your whatsapp number"
								required
								control={control}
								rules={{
									required: "WhatsApp number is required"
								}}
								errors={errors}
							/>
						</div>
					</div>
				) : (
					<div>
						<InfoCard title="Email" content={application?.email || ""} />
						<InfoCard
							title="Contact Number"
							content={application?.contact_number || ""}
						/>
						<InfoCard
							title="WhatsApp Number"
							content={application?.whatsapp_number || ""}
						/>
					</div>
				)}
			</form>
		</div>
	);
};

export default ApplicationContactInfo;
