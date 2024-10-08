import moment from "moment";
import { Link } from "react-router-dom";
import UserImage from "../../assets/images/new-applicant.png";

const ApplicationCard = ({ applicant }) => {
	return (
		<Link to={`/applications/${applicant?.id}`}>
			<div className="rounded-2xl border-[1px] border-[#F2F2F2] relative">
				<img className="rounded-t-2xl w-full" src={UserImage} alt="applicant" />
				<span className="absolute right-2 top-2 inline-block bg-[#9061F9] text-white rounded-[32px] p-[2px_8px] text-[12px] font-medium">
					New
				</span>
				<div className="p-[16px]">
					<h3 className="text-[18px] text-[#515151] font-bold">
						{`${applicant?.first_name} ${applicant?.last_name}`}
					</h3>
					<h4 className="text-[16px] text-[#717171] my-2">Rider</h4>
					<h4 className="text-[16px] text-[#717171]">
						{applicant?.nationality}
					</h4>
					<h5 className="text-[16px] text-[#717171] my-2">
						{applicant?.contact_number}
					</h5>
					<h5 className="text-[16px] text-[#717171]">
						{moment(applicant?.created_at).format("D-MMMM-YYYY")}
					</h5>
				</div>
			</div>
		</Link>
	);
};

export default ApplicationCard;
