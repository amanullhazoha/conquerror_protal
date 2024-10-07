import CheckMarkIcon from "@/assets/icons/CheckMarkIcon";

const RadioInput = ({
	name,
	label,
	register,
	options,
	rules,
	errors,
	required,
}) => {
	return (
		<div>
			<label htmlFor={name}>
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			<div className="flex items-center space-x-4 mt-2">
				{options.map((option, index) => (
					<label
						key={index}
						htmlFor={option.value}
						className="flex items-center cursor-pointer"
					>
						<input
							type="radio"
							id={option.value}
							name={name}
							value={option.value}
							{...register(name, rules)}
							className="hidden peer"
						/>
						<CheckMarkIcon />
						<div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:hidden"/>
						<span className="ml-2">{option.label}</span>
					</label>
				))}
			</div>

			{/* Show error message if validation fails */}
			{errors[name] && (
				<p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
			)}
		</div>
	);
};

export default RadioInput;
