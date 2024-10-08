import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import { InfoCard } from "@/shared/InfoCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantPassportInfo = () => {
	const [isEdit, setIsEdit] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			passportNumber: "7845798745",
			expiryDate: "2024-06-20",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

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
									message: "Maximum length is 18 characters",
								},
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
									required: "Expiry date is required",
								}}
								errors={errors}
							/>
						</div>
					</div>
				) : (
					<div>
						<InfoCard title="Passport Number" content="7875489745" />
						<InfoCard title="Expiry Date" content="10-June-24" />
					</div>
				)}
			</form>

			<div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto title="Passport Front Page" className="mb-5" />
				<ApplicantPhoto title="Signature Page" />
			</div>
		</div>
	);
};

export default ApplicantPassportInfo;
