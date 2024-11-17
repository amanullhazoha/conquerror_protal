import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserImg from "@/assets/images/user.png";
import SendIcon from "@/assets/icons/SendIcon";
import { Button } from "@/components/ui/button";
import { Status } from "@/components/ui/Status";
import AddUserIcon from "@/assets/icons/AddUserIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import MeetingModal from "@/components/modal/MeetingModal";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const UserInfoCard = ({
  backLink,
  backTitle,
  invitedBy,
  application,
  invateForInterView,
  applicantInterview,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[#EBF5FF] border-[1px] border-[#E5E7EB] rounded-2xl p-6  w-full h-auto">
      <Link to={backLink}>
        <Button
          className="rounded-[32px] p-[8px_12px] bg-white"
          variant="secondary"
        >
          <ArrowLeftIcon className="mr-2" /> {backTitle}
        </Button>
      </Link>

      <div className="bg-custom-gradient relative p-4 rounded-[16px] mt-[48px]">
        <div className="flex items-center gap-x-3">
          <img
            alt="user"
            className="w-[100px] h-[100px] rounded-full"
            src={
              application?.applicant_image
                ? `${apiUrl}/uploads/${application?.applicant_image}`
                : UserImg
            }
          />
          <div>
            <h3 className="text-[20px] leading-[30px] font-semibold text-primary-100 mb-2">
              {`${application?.first_name} ${application?.last_name}`}
            </h3>

            <h4 className="text-gray-100 text-sm font-semibold mb-[2px]">
              {application?.contact_number}
            </h4>
          </div>
        </div>

        {!["invited"]?.includes(application?.applicant_status) && (
          <Status variant={application?.applicant_status}>
            {application?.applicant_status}
          </Status>
        )}

        <h4 className="flex items-center gap-x-2 text-gray-500 my-4">
          <CalendarIcon /> Submitted:{" "}
          {moment(application?.created_at).format("ddd, MMM D, YYYY, h:mm A")}
        </h4>
        <h4 className="flex items-center gap-x-2 text-gray-500">
          <AddUserIcon /> Submission ID: {application?.submissionid || "Null"}
        </h4>

        {invateForInterView ? (
          <div className="mt-4 grid grid-cols- gap-6">
            <Button
              variant="outline"
              onClick={() => setOpenModal((prev) => !prev)}
              className="flex gap-2 bg-white hover:bg-white text-[#1A56DB] hover:text-[#1A56DB] font-medium border-[#1A56DB] rounded-full py-5"
            >
              Invite Interview <SendIcon />
            </Button>
          </div>
        ) : (
          <h4 className="flex items-center gap-x-2 text-gray-500">
            <AddUserIcon />{" "}
            <span className="bg-[#FCD9BD] text-[#4B5563] px-2 rounded-full text-sm">
              Invited
            </span>{" "}
            by {invitedBy ? invitedBy : "Admin"} |{" "}
            {moment(applicantInterview?.created_at).format("h:mm A DD/MM/YYYY")}
          </h4>
        )}
      </div>

      <MeetingModal
        openModal={openModal}
        application={application}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default UserInfoCard;
