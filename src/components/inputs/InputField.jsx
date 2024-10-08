import { useState } from "react";

const InputField = ({
	name,
	label,
	type = "text",
	placeholder,
	required = false,
	register,
	rules,
	errors,
}) => {
	const [inputError, setInputError] = useState("");

	// Handle keydown validation for text/number input types
	const handleKeyDown = (e) => {
		setInputError("");

		if (type === "text") {
			const isLetterOrSpace = /^[a-zA-Z\s]$/.test(e.key);

			if (!isLetterOrSpace && e.key !== "Backspace") {
				e.preventDefault();
				setInputError("Only input letters and space.");
			}
		} else if (type === "number") {
			const isNumber = /^[0-9]$/.test(e.key);

			if (!isNumber && e.key !== "Backspace") {
				e.preventDefault();
				setInputError("Only input number.");
			}
		}
	};

	return (
		<div>
			<label htmlFor={name}>
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			<input
				className={`outline-none border ${
					errors?.[name] || inputError ? "border-red-500" : "border-gray-300"
				} focus:border-blue-500 py-2 px-4 rounded-lg mt-2 w-full`}
				id={name}
				type={type}
				placeholder={placeholder}
				onKeyDown={handleKeyDown}
				characters
				{...register(name, rules)}
			/>

			{errors?.[name] && (
				<p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
			)}

			{inputError && <p className="text-red-500 text-sm mt-1">{inputError}</p>}
		</div>
	);
};

export default InputField;
