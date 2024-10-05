import React from "react";
import PrivateLayout from "../../components/layouts/PrivateLayout";
import ApplicantPagination from "./components/ApplicantPagination";
import ApplicationHeading from "./components/ApplicationHeading";
import SingleApplicant from "./components/SingleApplicant";

const NewApplication = () => {
  return (
    <PrivateLayout>
      <div className="border-[1px] border-[#E5E5E5] m-[24px_24px_24px_0] rounded-[16px]">
        <ApplicationHeading />

        <div className="grid grid-cols-4 gap-[24px_21px]">
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
          <SingleApplicant />
        </div>
        <ApplicantPagination />
      </div>
    </PrivateLayout>
  );
};

export default NewApplication;
