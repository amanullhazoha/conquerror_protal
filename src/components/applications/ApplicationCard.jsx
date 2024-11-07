import moment from "moment";
import { Status } from "../ui/Status";
import { Link } from "react-router-dom";
import UserImage from "../../assets/images/new-applicant.png";

const CardContent = ({ application }) => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  return (
    <div className="rounded-2xl border-[1px] border-[#F2F2F2] relative">
      <img
        className="rounded-t-2xl w-full h-[200px] object-contain"
        src={
          application?.applicant_image
            ? `${apiUrl}/uploads/${application?.applicant_image}`
            : UserImage
        }
        alt="applicant"
      />

      <Status variant={application?.applicant_status}>
        {application?.applicant_status}
      </Status>

      <div className="p-[16px]">
        <h3 className="text-[18px] text-[#515151] font-bold">
          {`${application?.first_name} ${application?.last_name}`}
        </h3>

        <h4 className="text-[14px] text-[#717171] my-0.5">
          {application?.position_id === 50
            ? "Rider"
            : application?.position_id === 52
            ? "Freelancer"
            : "Null"}
        </h4>

        <h4 className="text-[14px] text-[#717171]">
          {application?.nationality}
        </h4>
        <h5 className="text-[14px] text-[#717171] my-0.5">
          {application?.contact_number}
        </h5>
        <h5 className="text-[16px] text-[#717171]">
          {moment(application?.updated_at).format("D-MMMM-YYYY")}
        </h5>
      </div>
    </div>
  );
};

const ApplicationCard = ({ application, link }) => {
  return link ? (
    <Link to={`${link}/${application?.id}`}>
      <CardContent application={application} />
    </Link>
  ) : (
    <CardContent application={application} />
  );
};

export default ApplicationCard;
