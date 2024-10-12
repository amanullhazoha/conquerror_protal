import moment from "moment";
import { Link } from "react-router-dom";
import UserImage from "../../assets/images/new-applicant.png";

const ApplicationCard = ({ application }) => {
	const apiUrl = import.meta.env.VITE_APP_API_URL;

	return (
		<Link to={`/applications/${application?.id}`}>
			<div className="rounded-2xl border-[1px] border-[#F2F2F2] relative">
				<img
					className="rounded-t-2xl w-full"
					// src={`${apiUrl}/uploads/${application?.applicant_image}`}
					src={UserImage}
					alt="applicant"
				/>
				<span className="absolute right-2 top-2 inline-block bg-[#9061F9] text-white rounded-[32px] p-[2px_8px] text-[12px] font-medium">
					{application?.applicant_status}
				</span>
				<div className="p-[16px]">
					<h3 className="text-[18px] text-[#515151] font-bold">
						{`${application?.first_name} ${application?.last_name}`}
					</h3>
					<h4 className="text-[16px] text-[#717171] my-2">Rider</h4>
					<h4 className="text-[16px] text-[#717171]">
						{application?.nationality}
					</h4>
					<h5 className="text-[16px] text-[#717171] my-2">
						{application?.contact_number}
					</h5>
					<h5 className="text-[16px] text-[#717171]">
						{moment(application?.created_at).format("D-MMMM-YYYY")}
					</h5>
				</div>
			</div>
		</Link>
	);
};

export default ApplicationCard;
