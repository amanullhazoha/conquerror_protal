import { Link } from "react-router-dom";
import AnalyticsIcon from "../../assets/icons/AnalyticsIcon";
import ArrowDown from "../../assets/icons/ArrowDown";
import BellIcon from "../../assets/icons/BellIcon";
import ContactInfoIcon from "../../assets/icons/ContactInfoIcon";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import DataIcon from "../../assets/icons/DataIcon";
import FinancialIcon from "../../assets/icons/FinancialIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import MainCategoryIcon from "../../assets/icons/MainCategoryIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import NotificationManagementIcon from "../../assets/icons/NotificationManagementIcon";
import OccasionalOfferIcon from "../../assets/icons/OccasionalOfferIcon";
import RoundArrow from "../../assets/icons/RoundArrow";
import SearchIcon from "../../assets/icons/SearchIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import UploadBannerIcon from "../../assets/icons/UploadBannerIcon";
import UserIcon from "../../assets/icons/UserIcon";
import UserManagementIcon from "../../assets/icons/UserManagementIcon";
import logo from "../../assets/images/conqueror_logo.png";

const PrivateLayout = ({ children }) => {
	return (
		<section className="bg-white min-h-screen">
			<header className="pl-6 bg-white flex flex-grow items-center">
				<div className="w-[275px] py-4 flex items-center justify-between">
					<Link to="/">
						<img src={logo} alt="logo" className="w-[150px]" />
					</Link>

					<p>
						<RoundArrow />
					</p>
				</div>

				<div className="py-5 pr-6 border-b border-gray-200 flex justify-between flex-grow items-center">
					<div></div>

					<div className="relative flex items-center">
						<input
							type="text"
							placeholder="Search"
							className="bg-[#F7FAFC] rounded-xl pl-7 pr-3 py-2.5 text-sm text-[#A1A1AA] 
                         border border-[#E2E8F0] outline-none w-[490px]"
						/>

						<div className="absolute left-2">
							<SearchIcon color="#046C4E" />
						</div>
					</div>

					<div className="flex gap-5 items-center">
						<HomeIcon className="w-6 h-6" />
						<BellIcon className="w-6 h-6" />
						<MessageIcon className="w-6 h-6" />

						<div className="flex gap-3 border border-gray-300 rounded-lg p-2">
							<UserIcon />
							<p className="text-gray-500 font-medium">Molla Bhai</p>
							<ArrowDown />
						</div>
					</div>
				</div>
			</header>

			<section className="flex">
				<aside className="w-[300px] h-[calc(100vh-83px)] border-r border-gray-200 py-6">
					<div className="flex flex-col gap-2 border-b border-gray-200 px-6 pb-6">
						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<DashboardIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Dashboard
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<MainCategoryIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Main category title
							</span>
						</Link>

						<Link
							to="/new-application"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<UserManagementIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								User Management
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<DataIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Data Name
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<FinancialIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Financial Management
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<NotificationManagementIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Notification Management
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<AnalyticsIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Analytics and Reports
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<ContactInfoIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Contact info
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<OccasionalOfferIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Occasional Offer
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<UploadBannerIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Upload Banner
							</span>
						</Link>
					</div>

					<div className="flex flex-col gap-2 px-6 pt-[90px]">
						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<SupportIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Support
							</span>
						</Link>

						<Link
							to="/"
							className="flex gap-2 items-center w-full px-3 py-2 rounded-lg hover:bg-[#E6F7EF] group"
						>
							<SettingIcon />
							<span className="text-base font-medium text-gray-500 group-hover:text-gray-900">
								Settings
							</span>
						</Link>
					</div>
				</aside>

				<main className="w-[70%] flex flex-col flex-grow min-h-[calc(100vh-83px)]">
					<section className="p-6">{children}</section>

					<footer className="mt-auto py-4 text-center">
						<p className="text-lg text-gray-900">
							&copy; 2024 - Powered by conquerorservices.com
						</p>
					</footer>
				</main>
			</section>
		</section>
	);
};

export default PrivateLayout;
