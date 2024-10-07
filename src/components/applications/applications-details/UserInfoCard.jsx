import UserImg from "@/assets/images/user.png";

import AddUserIcon from "@/assets/icons/AddUserIcon";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import DownIcon from "@/assets/icons/DownIcon";
import SendIcon from "@/assets/icons/SendIcon";
import ButtonV2 from "@/components/ButtonV2";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UserInfoCard = () => {
	return (
		<div className="bg-[#EBF5FF] border-[1px] border-[#E5E7EB] rounded-2xl p-6 max-w-[430px] w-full h-auto">
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

				<div className="mt-4 flex items-center justify-between">
					<ButtonV2 text="Inperson" icon={<DownIcon />} />
					<ButtonV2
						text="Invite Interview"
						icon={<SendIcon />}
						className="text-primary-700 border-primary-700"
					/>
				</div>
			</div>
		</div>
	);
};

export default UserInfoCard;
