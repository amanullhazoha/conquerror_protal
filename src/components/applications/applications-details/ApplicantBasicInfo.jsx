// import moment from "moment";
// import useToast from "@/hooks/useToast";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { InfoCard } from "@/shared/InfoCard";
// import ApplicantPhoto from "./ApplicantPhoto";
// import { countries } from "@/data/countryList";
// import EditButtons from "@/components/EditButtons";
// import { downloadImage } from "@/utils/downloadImage";
// import InputField from "@/components/inputs/InputField";
// import RadioInput from "@/components/inputs/RadioInput";
// import SelectInput from "@/components/inputs/SelectInput";
// import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
// import ApplicantBasicInfoForm from "./ApplicantBasicInfoForm";

// const ApplicantBasicInfo = ({ application }) => {
//   const [isEdit, setIsEdit] = useState(false);
//   const { showSuccess, showError } = useToast();

//   const [updateApplicationById, { isLoading, isError, isSuccess, error }] =
//     useUpdateApplicationByIdMutation();

//   const {
//     register,
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//   });

//   useEffect(() => {
//     if (application) {
//       reset({
//         firstName: application.first_name,
//         lastName: application.last_name,
//         fatherName: application.father_name,
//         motherName: application.mother_name,
//         dob: application.date_of_birth,
//         gender: application.gender,
//         nationality: application.nationality,
//         position: application.position_id,
//         referenceNumber: application.reference,
//       });
//     }
//   }, [application, reset]);

//   const onSubmit = (formData) => {
//     const data = {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       father_name: formData.fatherName,
//       mother_name: formData.motherName,
//       date_of_birth: formData.dob,
//       gender: formData.gender,
//       nationality: formData.nationality,
//       position_id: formData.position,
//       reference: formData.referenceNumber,
//     };

//     updateApplicationById({ id: application?.id, data });
//   };

//   const apiUrl = import.meta.env.VITE_APP_API_URL;

//   useEffect(() => {
//     if (isSuccess) {
//       showSuccess("Basic information updated successful");
//       setIsEdit(false);
//     }

//     if (isError) {
//       showError(error?.data);
//     }
//   }, [isError, isSuccess]);

//   return (
//     <div className="grid grid-cols-12 gap-6">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="col-span-6 xl:col-span-7"
//       >
//         <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
//           <div className="flex items-center justify-between mb-[24px]">
//             <h2 className="text-[18px] leading-[27px] font-semibold">
//               Basic Information
//             </h2>

//             <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
//           </div>

//           {isEdit ? (
//             <ApplicantBasicInfoForm
//               errors={errors}
//               control={control}
//               register={register}
//             />
//           ) : (
//             <div>
//               <div className="grid grid-cols-2 gap-6">
//                 <InfoCard
//                   title="First Name"
//                   content={
//                     application?.first_name ? application.first_name : "Null"
//                   }
//                 />

//                 <InfoCard title="Last Name" content={application?.last_name} />
//               </div>

//               <InfoCard
//                 title="Father Name"
//                 content={application?.father_name || ""}
//               />

//               <InfoCard
//                 title="Mother Name"
//                 content={application?.mother_name}
//               />

//               <InfoCard
//                 title="Date of Birth"
//                 content={
//                   application?.date_of_birth
//                     ? moment(application?.date_of_birth || new Date()).format(
//                         "D-MMMM-YYYY"
//                       )
//                     : "Null"
//                 }
//               />

//               <InfoCard title="Gender" content={application?.gender} />

//               <InfoCard
//                 title="Nationality"
//                 content={application?.nationality}
//               />

//               <div
//                 className={`grid gap-6 ${
//                   application?.position_id === 52
//                     ? "grid-cols-2"
//                     : "grid-cols-1"
//                 }`}
//               >
//                 <InfoCard
//                   title="Position"
//                   content={
//                     application?.position_id === 50
//                       ? "Rider"
//                       : application?.position_id === 52
//                       ? "Freelancer"
//                       : "Null"
//                   }
//                 />

//                 {application?.position_id === 52 && (
//                   <InfoCard
//                     title="Hiring Position"
//                     content={application?.hiring_position}
//                   />
//                 )}
//               </div>

//               <InfoCard
//                 title="Reference Number"
//                 content={application?.reference}
//               />
//             </div>
//           )}
//         </div>
//       </form>

//       <div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
//         <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
//           Documents
//         </h2>

//         <ApplicantPhoto
//           title="Applicant Photo"
//           downloadImage={() =>
//             downloadImage(
//               `${apiUrl}/uploads/${application?.applicant_image}`,
//               application?.applicant_image
//             )
//           }
//           image={`${apiUrl}/uploads/${application?.applicant_image}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default ApplicantBasicInfo;

import moment from "moment";
import useToast from "@/hooks/useToast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { InfoCard } from "@/shared/InfoCard";
import ApplicantPhoto from "./ApplicantPhoto";
// import { countries } from "@/data/countryList";
import EditButtons from "@/components/EditButtons";
import { downloadImage } from "@/utils/downloadImage";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import SelectInput from "@/components/inputs/SelectInput";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
import ApplicantBasicInfoForm from "./ApplicantBasicInfoForm";
import { Formik, Form } from "formik";
import InputFieldRadio from "@/components/inputs/InputFieldRadio";
import InputFieldNew from "@/components/inputs/InputFielNew";
import SelectInputField from "@/components/inputs/SelectInputField";
import CountryInput from "@/components/inputs/CountryInput";
import DateInputField from "@/components/inputs/DateInputField";
import { hiringPositions } from "@/assets/staticData/hiringPosition";
import { countries } from "@/assets/staticData/countryInfo";
import { jobApplyBasicSchema } from "@/schema/auth/signup.schema";

const ApplicantBasicInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();

  const [updateApplicationById, { isLoading, isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (application) {
      reset({
        firstName: application.first_name,
        lastName: application.last_name,
        fatherName: application.father_name,
        motherName: application.mother_name,
        dob: application.date_of_birth,
        gender: application.gender,
        nationality: application.nationality,
        position: application.position_id,
        referenceNumber: application.reference,
      });
    }
  }, [application, reset]);

  const onSubmit = (formData) => {
    const data = {
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      father_name: formData?.father_name,
      mother_name: formData?.mother_name,
      date_of_birth: formData?.date_of_birth,
      gender: formData?.gender,
      nationality: formData?.nationality,
      position_id: formData?.position_id,
      reference: formData?.reference ? formData?.reference : null,
      hiring_position: formData?.hiring_position
        ? formData?.hiring_position
        : null,
    };

    updateApplicationById({ id: application?.id, data });
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Basic information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError(error?.data);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <Formik
        initialValues={{
          first_name: application?.first_name ? application?.first_name : "",
          last_name: application?.last_name ? application?.last_name : "",
          father_name: application?.father_name ? application?.father_name : "",
          mother_name: application?.mother_name ? application?.mother_name : "",
          date_of_birth: application?.date_of_birth
            ? application?.date_of_birth
            : "",
          gender: application?.gender ? application?.gender : "",
          nationality: application?.nationality ? application?.nationality : "",
          position_id: application?.position_id ? application?.position_id : "",
          reference: application?.reference ? application?.reference : "",
          hiring_position: application?.hiring_position
            ? application?.hiring_position
            : "",
        }}
        validationSchema={jobApplyBasicSchema}
        onSubmit={handleSubmit(onSubmit)}
      >
        {({ handleSubmit, errors, touched, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="col-span-6 xl:col-span-7">
            <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
              <div className="flex items-center justify-between mb-[24px]">
                <h2 className="text-[18px] leading-[27px] font-semibold">
                  Basic Information
                </h2>

                <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
              </div>

              {isEdit ? (
                <>
                  <div className="grid grid-cols-2 gap-6">
                    <InputFieldNew
                      errors={errors}
                      name="first_name"
                      onlyLetter={true}
                      touched={touched}
                      label="First Name"
                      placeholder="Enter your first name"
                    />

                    <InputFieldNew
                      errors={errors}
                      name="last_name"
                      onlyLetter={true}
                      touched={touched}
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div className="pt-4">
                    <InputFieldNew
                      errors={errors}
                      name="father_name"
                      onlyLetter={true}
                      touched={touched}
                      label="Father Name"
                      placeholder="Enter your father name"
                    />
                  </div>

                  <div className="pt-4">
                    <InputFieldNew
                      errors={errors}
                      name="mother_name"
                      onlyLetter={true}
                      touched={touched}
                      label="Mother Name"
                      placeholder="Enter your mother name"
                    />
                  </div>

                  <div className="pt-4">
                    <DateInputField
                      startYear={19}
                      errors={errors}
                      touched={touched}
                      name="date_of_birth"
                      label="Date Of Birth"
                      value={values?.date_of_birth}
                      handleSelect={(date) =>
                        setFieldValue("date_of_birth", date)
                      }
                    />
                  </div>

                  {console.log(values)}

                  <div className="pt-4">
                    <InputFieldRadio
                      required={true}
                      label="Gender"
                      name="gender"
                      value={values?.gender}
                      handleSelect={(value) => setFieldValue("gender", value)}
                      items={[
                        {
                          id: "1",
                          name: "male",
                          value: "male",
                          label: "Male",
                        },
                        {
                          id: "2",
                          name: "female",
                          value: "female",
                          label: "Female",
                        },
                        {
                          id: "3",
                          name: "others",
                          value: "others",
                          label: "Others",
                        },
                      ]}
                    />
                  </div>

                  <div className="pt-8">
                    <CountryInput
                      errors={errors}
                      touched={touched}
                      keyValue="name"
                      items={countries}
                      name="nationality"
                      label="Nationality"
                      value={values.nationality}
                      placeholder="Select Nationality"
                      handleSelect={(name) =>
                        setFieldValue("nationality", name)
                      }
                    />
                  </div>

                  <div className="pt-4">
                    <SelectInputField
                      name="position_id"
                      errors={errors}
                      keyValue="name"
                      touched={touched}
                      label="Position"
                      value={
                        [
                          { id: 50, name: "Rider" },
                          { id: 52, name: "Freelancer" },
                        ].find((item) => item.id == values.position_id)?.name
                      }
                      placeholder="Select your position"
                      items={[
                        { id: 50, name: "Rider" },
                        { id: 52, name: "Freelancer" },
                      ]}
                      handleSelect={(item) =>
                        setFieldValue("position_id", item?.id)
                      }
                    />
                  </div>

                  <div className="pt-4">
                    {values?.position_id === 52 && (
                      <SelectInputField
                        errors={errors}
                        touched={touched}
                        keyValue="name"
                        searchField={true}
                        name="hiring_position"
                        label="Hiring Position"
                        placeholder="Select position"
                        items={hiringPositions}
                        // suggestedItems={hiringPositionSuggest}
                        suggestionPlaceholder="Search more positions"
                        handleSelect={(item) =>
                          setFieldValue("hiring_position", item.name)
                        }
                        value={
                          hiringPositions.find(
                            (item) => item.name === values.hiring_position
                          )?.name
                        }
                      />
                    )}
                  </div>

                  <div className="pt-4">
                    <InputFieldNew
                      required={false}
                      errors={errors}
                      name="reference"
                      touched={touched}
                      label="Reference Code"
                      placeholder="Enter reference code"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <div className="grid grid-cols-2 gap-6">
                    <InfoCard
                      title="First Name"
                      content={
                        application?.first_name
                          ? application.first_name
                          : "Null"
                      }
                    />

                    <InfoCard
                      title="Last Name"
                      content={application?.last_name}
                    />
                  </div>

                  <InfoCard
                    title="Father Name"
                    content={application?.father_name || ""}
                  />

                  <InfoCard
                    title="Mother Name"
                    content={application?.mother_name}
                  />

                  <InfoCard
                    title="Date of Birth"
                    content={
                      application?.date_of_birth
                        ? moment(
                            application?.date_of_birth || new Date()
                          ).format("D-MMMM-YYYY")
                        : "Null"
                    }
                  />

                  <InfoCard title="Gender" content={application?.gender} />

                  <InfoCard
                    title="Nationality"
                    content={application?.nationality}
                  />

                  <div
                    className={`grid gap-6 ${
                      application?.position_id === 52
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    <InfoCard
                      title="Position"
                      content={
                        application?.position_id === 50
                          ? "Rider"
                          : application?.position_id === 52
                          ? "Freelancer"
                          : "Null"
                      }
                    />

                    {application?.position_id === 52 && (
                      <InfoCard
                        title="Hiring Position"
                        content={application?.hiring_position}
                      />
                    )}
                  </div>

                  <InfoCard
                    title="Reference Number"
                    content={application?.reference}
                  />
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto
          title="Applicant Photo"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_image}`,
              application?.applicant_image
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_image}`}
        />
      </div>
    </div>
  );
};

export default ApplicantBasicInfo;
