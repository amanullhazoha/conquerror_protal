import moment from "moment";
import { Formik, Form } from "formik";
import useToast from "@/hooks/useToast";
import { useEffect, useState } from "react";
import { InfoCard } from "@/shared/InfoCard";
import ApplicantPhoto from "./ApplicantPhoto";
import EditButtons from "@/components/EditButtons";
import { downloadImage } from "@/utils/downloadImage";
import CountryInput from "@/components/inputs/CountryInput";
import InputFieldNew from "@/components/inputs/InputFielNew";
import DateInputField from "@/components/inputs/DateInputField";
import InputFieldRadio from "@/components/inputs/InputFieldRadio";
import SelectInputField from "@/components/inputs/SelectInputField";
import { hiringPositions } from "@/assets/staticData/hiringPosition";
import { countries, allCountry } from "@/assets/staticData/countryInfo";
import { jobApplyBasicSchema } from "@/schema/application/applicant.schema";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";

const ApplicantBasicInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();
  const [resData, setResData] = useState(application);

  const [updateApplicationById, { isError, isSuccess }] =
    useUpdateApplicationByIdMutation();

  const onSubmit = async (formData, resetForm) => {
    const data = {
      ...application,
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      father_name: formData?.father_name,
      mother_name: formData?.mother_name,
      date_of_birth: formData?.date_of_birth,
      gender: formData?.gender,
      nationality: formData?.nationality,
      position_id: formData?.position_id,
      reference: formData?.reference ? formData?.reference : "",
      hiring_position: formData?.hiring_position
        ? formData?.hiring_position
        : "",
    };

    const res = updateApplicationById({ id: application?.id, data });

    if (res?.data) {
      resetForm();
    }
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Basic information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError("There was an error");
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (application) {
      setResData(application);
    }
  }, [application]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <Formik
        initialValues={{
          first_name: resData?.first_name ? resData?.first_name : "",
          last_name: resData?.last_name ? resData?.last_name : "",
          father_name: resData?.father_name ? resData?.father_name : "",
          mother_name: resData?.mother_name ? resData?.mother_name : "",
          date_of_birth: resData?.date_of_birth ? resData?.date_of_birth : "",
          gender: resData?.gender ? resData?.gender : "",
          nationality: resData?.nationality ? resData?.nationality : "",
          position_id: resData?.position_id ? resData?.position_id : "",
          reference: resData?.reference ? resData?.reference : "",
          hiring_position: resData?.hiring_position
            ? resData?.hiring_position
            : "",
        }}
        validationSchema={jobApplyBasicSchema}
        onSubmit={onSubmit}
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
                    {/* <CountryInput
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
                    /> */}

                    <SelectInputField
                      errors={errors}
                      touched={touched}
                      keyValue="name"
                      items={allCountry}
                      // items={countries}
                      name="nationality"
                      searchField={true}
                      label="Nationality"
                      value={values.nationality}
                      suggestedItems={countries}
                      suggestionPlaceholder="Search for a nationality"
                      placeholder="Select Nationality"
                      handleSelect={(item) =>
                        setFieldValue("nationality", item.name)
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
                        resData?.first_name ? resData.first_name : "Null"
                      }
                    />

                    <InfoCard title="Last Name" content={resData?.last_name} />
                  </div>

                  <InfoCard
                    title="Father Name"
                    content={resData?.father_name || ""}
                  />

                  <InfoCard
                    title="Mother Name"
                    content={resData?.mother_name}
                  />

                  <InfoCard
                    title="Date of Birth"
                    content={
                      resData?.date_of_birth
                        ? moment(resData?.date_of_birth || new Date()).format(
                            "D-MMMM-YYYY"
                          )
                        : "Null"
                    }
                  />

                  <InfoCard title="Gender" content={resData?.gender} />

                  <InfoCard
                    title="Nationality"
                    content={resData?.nationality}
                  />

                  <div
                    className={`grid gap-6 ${
                      resData?.position_id === 52
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    <InfoCard
                      title="Position"
                      content={
                        resData?.position_id === 50
                          ? "Rider"
                          : resData?.position_id === 52
                          ? "Freelancer"
                          : "Null"
                      }
                    />

                    {resData?.position_id === 52 && (
                      <InfoCard
                        title="Hiring Position"
                        content={resData?.hiring_position}
                      />
                    )}
                  </div>

                  <InfoCard
                    title="Reference Number"
                    content={resData?.reference}
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
