import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import SelectInput from "@/components/inputs/SelectInput";
import { InfoCard } from "@/shared/InfoCard";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicationNidInfo = () => {
	const [isEdit, setIsEdit] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			nidNumber: "4878754",
			maritalStatus: "Married",
			spouseName: "Monika",
			uaeResident: "Yes",
			emiratesId: "787487",
			expiryDate: "2024-06-20",
			religion: "Islam",
			permanentAddress: "Dhaka",
			state: "Dhaka",
			city: "Dhaka",
			policeStation: "Dhaka",
			postalCode: "4522",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="grid grid-cols-12 gap-6">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="col-span-6 xl:col-span-7"
			>
				<div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
					{/* Header */}
					<div className="flex items-center justify-between mb-[24px]">
						<h2 className="text-[18px] leading-[27px] font-semibold">
							NID/CNIC information
						</h2>

						<EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
					</div>

					{/* Main component */}
					{isEdit ? (
						<div>
							<InputField
								name="nidNumber"
								label="NID/CNIC Number"
								type="number"
								placeholder="Enter your nid/cnic number"
								register={register}
								required
								rules={{
									required: "NID/CNIC number is required",
									maxLength: {
										value: 20,
										message: "Maximum length is 20 characters",
									},
								}}
								errors={errors}
							/>

							<div className="pt-4">
								<RadioInput
									name="maritalStatus"
									label="Marital Status"
									options={[
										{ label: "Married", value: "Married" },
										{ label: "Unmarried", value: "Unmarried" },
									]}
									register={register}
									required
									rules={{ required: "Please select an option" }}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="spouseName"
									label="Spouse Name"
									type="text"
									placeholder="Enter your spouse name"
									register={register}
									required
									rules={{
										required: "Spouse name is required",
										maxLength: {
											value: 50,
											message: "Maximum length is 50 characters",
										},
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

							<div className="grid grid-cols-2 gap-6 pt-4">
								<InputField
									name="emiratesId"
									label="Emirates ID"
									type="number"
									placeholder="Enter your emirates id"
									register={register}
									required
									rules={{
										required: "Emirates id is required",
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
								<SelectInput
									name="religion"
									label="Religion"
									placeholder="Select Religion"
									required={true}
									options={[{ value: "Islam", label: "Islam" }]}
									control={control}
									rules={{ required: "Religion is required" }}
									errors={errors}
								/>
							</div>

							<div className="pt-4">
								<InputField
									name="permanentAddress"
									label="Permanent Address"
									type="text"
									placeholder="Enter your permanent address"
									register={register}
									required
									rules={{
										required: "Permanent address is required",
									}}
									errors={errors}
								/>
							</div>

							<div className="grid grid-cols-2 gap-6 pt-4">
								<SelectInput
									name="state"
									label="State/Province"
									placeholder="Select State/Province"
									required={true}
									options={[
										{ value: "Dhaka", label: "Dhaka" },
										{ value: "Cumilla", label: "Cumilla" },
									]}
									control={control}
									rules={{ required: "State/Province is required" }}
									errors={errors}
								/>

								<SelectInput
									name="city"
									label="City"
									placeholder="Select City"
									required={true}
									options={[
										{ value: "Dhaka", label: "Dhaka" },
										{ value: "Cumilla", label: "Cumilla" },
									]}
									control={control}
									rules={{ required: "City is required" }}
									errors={errors}
								/>
							</div>

							<div className="grid grid-cols-2 gap-6 pt-4">
								<InputField
									name="policeStation"
									label="Police Station"
									type="text"
									placeholder="Enter police station address"
									register={register}
									required
									rules={{
										required: "Police station address is required",
									}}
									errors={errors}
								/>
								<InputField
									name="postalCode"
									label="Postal Code"
									type="number"
									placeholder="Enter your postal code"
									register={register}
									required
									rules={{
										required: "Postal code is required",
										maxLength: {
											value: 6,
											message: "Maximum length is 6 characters",
										},
									}}
									errors={errors}
								/>
							</div>
						</div>
					) : (
						<div>
							<InfoCard title="NID/CNIC Number" content="4552212" />

							<div className="grid grid-cols-2 gap-6">
								<InfoCard title="Marital Status" content="Married" />
								<InfoCard title="Spouse Name" content="Monika" />
							</div>

							<div className="grid grid-cols-3 gap-6">
								<InfoCard title="UAE Resident" content="Yes" />
								<InfoCard title="Emirates ID" content="4875546" />
								<InfoCard title="Expiry Date" content="10-June-24" />
							</div>

							<InfoCard title="Religion" content="Islam" />
							<InfoCard title="Permanent Address" content="Dhaka, Bangladesh" />

							<div className="grid grid-cols-2 gap-6">
								<InfoCard title="State/Province" content="Dhaka" />
								<InfoCard title="City" content="Dhaka" />
							</div>

							<div className="grid grid-cols-2 gap-6">
								<InfoCard title="Police Station" content="Dhaka" />
								<InfoCard title="Postal Code" content="7850" />
							</div>
						</div>
					)}
				</div>
			</form>

			<div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
				<h2 className="text-[18px] leading-[27px] font-semibold mb-5">
					Documents
				</h2>

				<ApplicantPhoto title="NID/CNIC Front Page" className="mb-5" />
				<ApplicantPhoto title="NID/CNIC Back Page" />
			</div>
		</div>
	);
};

export default ApplicationNidInfo;
