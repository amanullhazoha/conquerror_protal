import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import LongArrowIcon from "../../assets/icons/LongArrowIcon";

const ApplicationPagination = () => {
	return (
		<div className="flex items-center justify-between py-3 border-t-[1px] border-[#E5E5E5] mt-6 px-[24px]">
			<div className="flex items-center gap-x-6">
				<div className="flex items-center font-semibold text-sm gap-x-3">
					<span className="text-[#4B5563]">Rows Per Page:</span>
					<span className="flex items-center">
						3 <ArrowDown />
					</span>
				</div>
				<div>
					<h4 className="font-semibold text-sm">
						1-10 <span className="text-[#6B7280]">of</span> 1000
					</h4>
				</div>
			</div>
			<div className="flex items-center gap-x-8">
				<button className="text-[14px] font-semibold text-[#111928] flex items-center gap-x-2">
					<LongArrowIcon /> Previous
				</button>
				<button className="flex items-center">
					<span className="bg-[#EBF5FF] rounded-lg flex items-center justify-center w-10 h-10 text-[#111928] font-medium">
						1
					</span>
					<span className="rounded-lg flex items-center justify-center w-10 h-10 text-[#111928] font-medium">
						2
					</span>
					<span className="rounded-lg flex items-center justify-center w-10 h-10 text-[#111928] font-medium">
						...
					</span>
					<span className="rounded-lg flex items-center justify-center w-10 h-10 text-[#111928] font-medium">
						5
					</span>
				</button>
				<button className="text-[14px] font-semibold text-[#111928] flex items-center gap-x-2">
					Next
					<span className="rotate-180">
						<LongArrowIcon />
					</span>{" "}
				</button>
			</div>
		</div>
	);
};

export default ApplicationPagination;
