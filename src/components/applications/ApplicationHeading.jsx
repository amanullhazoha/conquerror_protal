import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchIcon from "../../assets/icons/SearchIcon";

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
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By: New" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">New</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ApplicationHeading;
