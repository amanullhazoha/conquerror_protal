import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import NumberInput from "@/components/inputs/NumberInput";
import { InfoCard } from "@/shared/InfoCard";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ApplicationContactInfo = () => {
	const [isEdit, setIsEdit] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "molla.ux@gmail.com",
			contactNumber: "+8801587987784",
			whatsappNumber: "+8801587987784",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

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
										message: "Please enter a valid email address",
									},
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
									required: "Contact number is required",
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
									required: "WhatsApp number is required",
								}}
								errors={errors}
							/>
						</div>
					</div>
				) : (
					<div>
						<InfoCard title="Email" content="molla.ux@gmail.com" />
						<InfoCard title="Contact Number" content="+88015879874" />
						<InfoCard title="WhatsApp Number" content="+88015879874" />
					</div>
				)}

				{/* <div className="border-b border-gray-50 pb-3">
          <FormInput
            label="Email"
            placeholder="Enter Email"
            value="molla.ux@gmail.com"
            isEdit={isEdit}
          />
        </div>
        <div className="border-b border-gray-50 pb-3">
          <NumberInput isEdit={isEdit} label="Contact Number" />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <NumberInput isEdit={isEdit} label="WhatsApp Number" />
        </div> */}
			</form>
		</div>
	);
};

export default ApplicationContactInfo;
