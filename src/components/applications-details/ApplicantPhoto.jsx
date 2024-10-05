import DownloadIcon from "@/assets/icons/DownloadIcon";
import EditImgIcon from "@/assets/icons/EditImgIcon";
import EyeIcon from "@/assets/icons/EyeIcon";
import Img from "@/assets/images/applicant.png";
import BorderImg from "@/assets/images/border.png";

const ApplicantPhoto = ({ title, className }) => {
  return (
    <div className={className}>
      <h2 className="text-sm text-gray-900 font-medium mb-2">{title}</h2>

      <div className="w-[183px] h-[183px] flex items-center justify-center relative">
        <img className="w-[175px] h-[175px]" src={Img} alt="applicant" />
        <img className="absolute inset-0" src={BorderImg} alt="border" />
      </div>
      <div className="flex items-center gap-x-4 mt-2">
        <EyeIcon />
        <EditImgIcon />
        <DownloadIcon />
      </div>
    </div>
  );
};

export default ApplicantPhoto;
