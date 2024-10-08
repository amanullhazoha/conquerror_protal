import { isValidPhoneNumber } from "libphonenumber-js";
import { Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";

const NumberInput = ({
	name,
	label,
	placeholder,
	required = false,
	control,
	rules,
	errors,
}) => {
	return (
		<div>
			<div className="grid gap-2">
				<label htmlFor={name}>
					{label} {required && <span className="text-red-500">*</span>}
				</label>

				<Controller
					name={name}
					control={control}
					rules={{
						...rules,
						validate: (value) =>
							isValidPhoneNumber(value) || "Invalid phone number",
					}}
					render={({ field: { onChange, value } }) => (
						<PhoneInput
							value={value || ""}
							onChange={onChange}
							placeholder={placeholder}
							defaultCountry="bd"
							className="custom-phone-input"
							inputClassName="custom-phone-input"
						/>
					)}
				/>
			</div>

			{errors?.[name] && (
				<p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
			)}
		</div>
	);
};

export default NumberInput;
