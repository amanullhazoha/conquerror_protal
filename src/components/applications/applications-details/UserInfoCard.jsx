import UserImg from "@/assets/images/user.png";

import AddUserIcon from "@/assets/icons/AddUserIcon";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import SendIcon from "@/assets/icons/SendIcon";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const UserInfoCard = () => {
	return (
		<div className="bg-[#EBF5FF] border-[1px] border-[#E5E7EB] rounded-2xl p-6  w-full h-auto">
			<Link to="/applications">
				<Button
					className="rounded-[32px] p-[8px_12px] bg-white"
					variant="secondary"
				>
					<ArrowLeftIcon className="mr-2" /> Back To Application list
				</Button>
			</Link>

			<div className="bg-custom-gradient relative p-4 rounded-[16px] mt-[48px]">
				<div className="flex items-center gap-x-3">
					<img
						className="w-[100px] h-[100px] rounded-full"
						src={UserImg}
						alt="user"
					/>
					<div>
						<h3 className="text-[20px] leading-[30px] font-semibold text-primary-100 mb-2">
							Abu Taher Molla
						</h3>
						<h4 className="text-gray-100 text-sm font-semibold mb-[2px]">
							+8801770066585
						</h4>
						<h4 className="text-gray-100 text-sm font-semibold">
							molla.ux@gmail.com
						</h4>
					</div>
				</div>
				<button className="absolute top-2 right-2 bg-yellow-200 p-[2px_8px] rounded-full text-yellow-800 text-[12px] font-medium">
					New Application
				</button>
				<h4 className="flex items-center gap-x-2 text-gray-500 my-4">
					<CalendarIcon /> Submitted: Sun, Jul 28, 2024, 3:00 AM
				</h4>
				<h4 className="flex items-center gap-x-2 text-gray-500">
					<AddUserIcon /> Submission ID: 7845545545
				</h4>

				<div className="mt-4 grid grid-cols-2 gap-6">
					<Select>
						<SelectTrigger className="w-full rounded-full py-5">
							<SelectValue placeholder="Select Option" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="inperson">Inperson</SelectItem>
							<SelectItem value="rider">Rider</SelectItem>
						</SelectContent>
					</Select>

					<Button
						className="flex gap-2 bg-white hover:bg-white text-[#1A56DB] hover:text-[#1A56DB] font-medium border-[#1A56DB] rounded-full py-5"
						variant="outline"
					>
						Invite Interview <SendIcon />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UserInfoCard;
