import React from "react";
import ArrowDown from "../../../assets/icons/ArrowDown";
import SearchIcon from "../../../assets/icons/SearchIcon";

const ApplicationHeading = () => {
  return (
    <div className="flex items-center justify-between mb-[24px] p-[16px_23px_16px_17px] border-b-[1px] border-[#E5E5E5]">
      <h3 className="text-[#111928] text-[18px] leading-[28px] font-semibold">
        New Entry Application{" "}
        <span className="text-[14px] text-[#8C8F95]">(1000)</span>
      </h3>

      <div className="flex items-center gap-x-3">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F7FAFC] rounded-xl pl-7 pr-3 py-2.5 text-sm text-[#A1A1AA] border border-[#E2E8F0] outline-none w-[489px]"
          />

          <div className="absolute left-2">
            <SearchIcon color="#046C4E" />
          </div>
        </div>
        <button className="flex items-center gap-x-[10px] text-[#6B7280] bg-[#F9FAFB] p-[12px_16px] border-[1px] border-[#D1D5DB] rounded-lg">
          Sort By: New <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default ApplicationHeading;
