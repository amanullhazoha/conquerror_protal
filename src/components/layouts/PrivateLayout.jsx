import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BellIcon from "../../assets/icons/BellIcon";
import UserIcon from "../../assets/icons/UserIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import DataIcon from "../../assets/icons/DataIcon";
import ArrowDown from "../../assets/icons/ArrowDown";
import { useDispatch, useSelector } from "react-redux";
import RoundArrow from "../../assets/icons/RoundArrow";
import SearchIcon from "../../assets/icons/SearchIcon";
import { logout } from "@/redux/features/auth/authSlice";
import SettingIcon from "../../assets/icons/SettingIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import logo from "../../assets/images/conqueror_logo.png";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import FinancialIcon from "../../assets/icons/FinancialIcon";
import AnalyticsIcon from "../../assets/icons/AnalyticsIcon";
import ContactInfoIcon from "../../assets/icons/ContactInfoIcon";
import MainCategoryIcon from "../../assets/icons/MainCategoryIcon";
import UploadBannerIcon from "../../assets/icons/UploadBannerIcon";
import UserManagementIcon from "../../assets/icons/UserManagementIcon";
import OccasionalOfferIcon from "../../assets/icons/OccasionalOfferIcon";
import NotificationManagementIcon from "../../assets/icons/NotificationManagementIcon";

const PrivateLayout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [openSidebar, setOpenSidebar] = useState(true);

  console.log(user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const isActiveLink = ({ isActive }) =>
    isActive
      ? "flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group bg-[#E6F7EF]"
      : "flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group";

  return (
    <section className="bg-white min-h-screen">
      <header className="pl-6 bg-white flex flex-grow items-center sticky top-0 z-[999999]">
        <div className={`w-[263px] py-4 flex items-center justify-between`}>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px]" />
          </Link>

          <p
            onClick={() => setOpenSidebar((prev) => !prev)}
            className={`cursor-pointer ${
              openSidebar ? "rotate-0" : "rotate-180"
            } duration-300`}
          >
            <RoundArrow />
          </p>
        </div>

        <div className="py-5 pr-6 flex justify-between flex-grow items-center border-b border-gray-200">
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
              <p className="text-gray-500 font-medium">
                {user?.first_name} {user?.last_name}
              </p>
              <ArrowDown />
            </div>
          </div>
        </div>
      </header>

      <section className="flex">
        {/* <aside
          className={`${
            openSidebar ? "w-72" : "w-24"
          } h-[calc(100vh-83px)] duration-300 border-r border-gray-200 py-6 sticky left-0 top-[82px]`}
        >
          <div className="flex flex-col gap-2 border-b border-gray-200 px-6 pb-6">
            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div className="duration-500">
                <DashboardIcon />
              </div>

              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Dashboard
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <MainCategoryIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Main category title
              </span>
            </Link>

            <Link
              to="/new-application"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <UserManagementIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                User Management
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <DataIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Data Name
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <FinancialIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Financial Management
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <NotificationManagementIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Notification Management
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <AnalyticsIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Analytics and Reports
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <ContactInfoIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Contact info
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <OccasionalOfferIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Occasional Offer
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <UploadBannerIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Upload Banner
              </span>
            </Link>
          </div>

          <div className="flex h-10 flex-col gap-2 px-6 pt-[90px]">
            <Link
              to="/"
              className="flex gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <SupportIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Support
              </span>
            </Link>

            <Link
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <SettingIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Settings
              </span>
            </Link>
          </div>
        </aside> */}

        <aside
          className={`${
            openSidebar ? "w-72" : "w-24"
          } h-[calc(100vh-83px)] duration-300 border-r border-gray-200 py-6 sticky left-0 top-[82px]`}
        >
          <div className="flex flex-col gap-2 border-b border-gray-200 px-6 pb-6">
            <NavLink
              to="/dashboard"
              className={(isActive) => isActiveLink(isActive)}
            >
              <div className="duration-500">
                <DashboardIcon />
              </div>

              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Dashboard
              </span>
            </NavLink>

            <NavLink
              to="/applications"
              className={(isActive) => isActiveLink(isActive)}
            >
              <div>
                <DataIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                All Application
              </span>
            </NavLink>

            <NavLink
              to="/new-application"
              className={(isActive) => isActiveLink(isActive)}
            >
              <div>
                <MainCategoryIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                New Application
              </span>
            </NavLink>

            <NavLink
              to="/applicant-interview-list"
              className={(isActive) => isActiveLink(isActive)}
            >
              <div>
                <UserManagementIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Applicant Interview List
              </span>
            </NavLink>

            <NavLink
              to="/applicant-invited-list"
              className={(isActive) => isActiveLink(isActive)}
            >
              <div>
                <UserManagementIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Applicant Invited List
              </span>
            </NavLink>
          </div>

          <div className="flex h-10 flex-col gap-2 px-6 pt-[90px]">
            <NavLink to="/" className={(isActive) => isActiveLink(isActive)}>
              <div>
                <SupportIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Support
              </span>
            </NavLink>

            <NavLink
              to="/"
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <SettingIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Settings
              </span>
            </NavLink>

            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 gap-x-4 items-center p-2 rounded-lg hover:bg-[#E6F7EF] group"
            >
              <div>
                <SettingIcon />
              </div>
              <span
                className={`text-base font-medium text-gray-500 group-hover:text-gray-900 ${
                  !openSidebar && "scale-0"
                }`}
              >
                Logout
              </span>
            </button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col flex-grow min-h-[calc(100vh-83px)]">
          <section className="p-6 border-t border-gray-200">{children}</section>

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
