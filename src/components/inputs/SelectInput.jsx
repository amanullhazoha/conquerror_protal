import { Controller } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const SelectInput = ({
	name,
	label,
	placeholder,
	required,
	options,
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
					rules={rules}
					render={({ field }) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							defaultValue=""
						>
							<SelectTrigger className="py-5 border-[#1C64F2]">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent>
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
			</div>

			{/* Error Message */}
			{errors?.[name] && (
				<p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
			)}
		</div>
	);
};

export default SelectInput;
