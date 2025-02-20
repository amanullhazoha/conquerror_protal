import ApplicantPhoto from "@/components/applications/applications-details/ApplicantPhoto";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const AgentDocument = ({ application }) => {
  return (
    <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
      <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
        Documents
      </h2>

      <div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
        <ApplicantPhoto
          title="Driving License Front"
          className="mb-5"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_passport}`,
              application?.applicant_passport
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_passport}`}
        />

        <ApplicantPhoto
          title="Driving License Back"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_passport}`,
              application?.applicant_passport
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_passport}`}
        />
      </div>

      <div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
        <ApplicantPhoto
          title="UAE DL Front"
          className="mb-5"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_passport}`,
              application?.applicant_passport
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_passport}`}
        />

        <ApplicantPhoto
          title="UAE DL Back"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_passport}`,
              application?.applicant_passport
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_passport}`}
        />
      </div>
    </div>
  );
};

export default AgentDocument;
