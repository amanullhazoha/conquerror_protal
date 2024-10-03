import React from "react";
import UserImage from '../../assets/images/applicant.jpg'

const ApplicationCard = () => {
  return (
    <div className="rounded-2xl border-[1px] border-[#F2F2F2] relative">
      <img className="rounded-t-2xl" src={UserImage} alt="applicant" />
      <span className="absolute right-2 top-2 inline-block bg-[#9061F9] text-white rounded-[32px] p-[2px_8px] text-[12px] font-medium">
        New
      </span>
      <div className="p-[16px]">
        <h3 className="text-[18px] text-[#515151] font-bold">
          Abu Taher Molla
        </h3>
        <h4 className="text-[16px] text-[#717171] my-2">Rider</h4>
        <h4 className="text-[16px] text-[#717171]">Bangladesh</h4>
        <h5 className="text-[16px] text-[#717171] my-2">+8801770066585</h5>
        <h5 className="text-[16px] text-[#717171]">5-June-2024</h5>
      </div>
    </div>
  );
};

export default ApplicationCard;
