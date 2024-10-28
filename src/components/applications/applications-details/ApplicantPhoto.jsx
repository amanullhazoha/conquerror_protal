import { useState } from "react";
import EyeIcon from "@/assets/icons/EyeIcon";
import Lightbox from "react-18-image-lightbox";
import BorderImg from "@/assets/images/border.png";
import EditImgIcon from "@/assets/icons/EditImgIcon";
import DownloadIcon from "@/assets/icons/DownloadIcon";

const ApplicantPhoto = ({ title, downloadImage, image, className }) => {
  const [viewImage, setViewImage] = useState("");

  return (
    <div>
      <div className={className}>
        <h2 className="text-sm text-gray-900 font-medium mb-2">{title}</h2>

        <div className="w-[183px] h-[183px] flex items-center justify-center relative  rounded-lg">
          <img className="w-[175px] h-[175px]" src={image} alt="applicant" />
          <img className="absolute inset-0" src={BorderImg} alt="border" />
        </div>
        <div className="flex items-center gap-x-4 mt-2">
          <div onClick={() => setViewImage(image)} className="cursor-pointer">
            <EyeIcon className="cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            <EditImgIcon />
          </div>

          <div onClick={downloadImage} className="cursor-pointer">
            <DownloadIcon className="cursor-pointer" />
          </div>
        </div>
      </div>

      {viewImage && (
        <Lightbox mainSrc={image} onCloseRequest={() => setViewImage(false)} />
      )}
    </div>
  );
};

export default ApplicantPhoto;
