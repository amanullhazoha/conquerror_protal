import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import { InfoCard } from "@/shared/InfoCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantLicenseInfo = () => {
	const [isEdit, setIsEdit] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			drivingLicense: "12345678945612",
			expiryDate: "2024-06-20",
			uaeResident: "Yes",
			uaeLicense: "12345678945612",
			uaeResidentVisaNumber: "12345678945612",
			simNumber: "12345678945612",
			eyeTestResult: "Test",
			bikeNumber: "1487455",
			dataSim: "123456789",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="grid grid-cols-2 gap-6">
			<form className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
				{/* Header */}
				<div className="flex items-center justify-between mb-[24px]">
					<h2 className="text-[18px] leading-[27px] font-semibold">
						License information
					</h2>

					<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
				</div>

				{/* Main component */}
				{isEdit ? (
					<div>
						<div className="grid grid-cols-2 gap-6">
							<InputField
								name="drivingLicense"
								label="Driving License"
								type="number"
								placeholder="Enter your driving license number"
								register={register}
								required
								rules={{
									required: "Driving license number is required",
									maxLength: {
										value: 20,
										message: "Maximum length is 20 characters",
									},
								}}
								errors={errors}
							/>

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

						<div className="pt-4">
							<RadioInput
								name="uaeResident"
								label="UAE Resident"
								options={[
									{ label: "Yes", value: "Yes" },
									{ label: "No", value: "No" },
								]}
								register={register}
								required
								rules={{ required: "Please select an option" }}
								errors={errors}
							/>
						</div>

						<div className="grid grid-cols-2 gap-6 pt-8">
							<InputField
								name="uaeResidentVisaNumber"
								label="UAE Resident Visa Number"
								type="number"
								placeholder="Enter uae resident visa number"
								register={register}
								required
								rules={{
									required: "UAE resident visa number is required",
									maxLength: {
										value: 20,
										message: "Maximum length is 20 characters",
									},
								}}
								errors={errors}
							/>

							<InputField
								name="simNumber"
								label="SIM Number"
								type="number"
								placeholder="Enter sim number"
								register={register}
								required
								rules={{
									required: "Sim number is required",
									maxLength: {
										value: 15,
										message: "Maximum length is 15 characters",
									},
								}}
								errors={errors}
							/>
						</div>

						<div className="pt-4">
							<InputField
								name="eyeTestResult"
								label="Eye Test Result"
								type="text"
								placeholder="Enter your eye test result"
								register={register}
								required
								rules={{
									required: "Eye test result is required",
								}}
								errors={errors}
							/>
						</div>

						<div className="pt-4">
							<InputField
								name="bikeNumber"
								label="Bike Number"
								type="number"
								placeholder="Enter your bike number"
								register={register}
								required
								rules={{
									required: "Bike number is required",
									maxLength: {
										value: 20,
										message: "Maximum length is 20 characters",
									},
								}}
								errors={errors}
							/>
						</div>

						<div className="pt-4">
							<InputField
								name="dataSim"
								label="Data SIM"
								type="number"
								placeholder="Enter your data sim number"
								register={register}
								required
								rules={{
									required: "Data sim number is required",
									maxLength: {
										value: 20,
										message: "Maximum length is 20 characters",
									},
								}}
								errors={errors}
							/>
						</div>
					</div>
				) : (
					<div>
						<div className="grid grid-cols-2 gap-6">
							<InfoCard title="Driving License" content="4552212" />
							<InfoCard title="Expiry Date" content="10-June-24" />
						</div>
						<div className="grid grid-cols-2 gap-6">
							<InfoCard title="UAE Resident" content="Yes" />
							<InfoCard title="UAE License Number" content="78459845" />
						</div>
						<div className="grid grid-cols-2 gap-6">
							<InfoCard title="UAE Resident Visa Number" content="7849878" />
							<InfoCard title="SIM Number" content="78459845" />
						</div>

						<InfoCard title="Eye Test Result" content="Waiting" />
						<InfoCard title="Bike Number" content="12345678" />
						<InfoCard title="Data SIM" content="12345678" />
					</div>
				)}
			</form>

			<div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
					<ApplicantPhoto title="Driving License Front" className="mb-5" />
					<ApplicantPhoto title="Driving License Back" />
				</div>
				<div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
					<ApplicantPhoto title="UAE DL Front" className="mb-5" />
					<ApplicantPhoto title="UAE DL Back" />
				</div>
			</div>
		</div>
	);
};

export default ApplicantLicenseInfo;
