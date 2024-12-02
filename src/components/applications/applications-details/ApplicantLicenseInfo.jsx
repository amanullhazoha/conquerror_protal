import moment from "moment";
import { Form, Formik } from "formik";
import useToast from "@/hooks/useToast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { InfoCard } from "@/shared/InfoCard";
import ApplicantPhoto from "./ApplicantPhoto";
import EditButtons from "@/components/EditButtons";
import { downloadImage } from "@/utils/downloadImage";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import CountryInput from "@/components/inputs/CountryInput";
import InputFieldNew from "@/components/inputs/InputFielNew";
import InputFieldRadio from "@/components/inputs/InputFieldRadio";
import DateInputField from "@/components/inputs/DateInputField";

import { countryCode, countries } from "@/assets/staticData/countryInfo";
import { jobApplyLicenseSchema } from "@/schema/application/applicant.schema";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";

const ApplicantLicenseInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();

  const [updateApplicationById, { isLoading, isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const onSubmit = (formData) => {
    const data = {
      ...application,
      appli_dri_number: formData?.appli_dri_number,
      appli_dri_expiry: formData?.appli_dri_expiry
        ? formData.appli_dri_expiry
        : null,
      have_uae_licence: formData?.have_uae_licence,
      UAE_Resident_Visa_No: formData?.UAE_Resident_Visa_No,
      UAE_License_No: formData?.UAE_License_No,
      SIM_No: formData?.SIM_No,
      ref1_name: formData?.ref1_name,
      ref1_email: formData?.ref1_email,
      ref1_phone: formData?.ref1_phone,
      ref1_country: formData?.ref1_country,
      ref1_address: formData?.ref1_address,
      ref2_name: formData?.ref2_name,
      ref2_email: formData?.ref2_email,
      ref2_phone: formData?.ref2_phone,
      ref2_country: formData?.ref2_country,
      ref2_address: formData?.ref2_address,
    };

    updateApplicationById({ id: application?.id, data });
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("License information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      console.log(error);
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <Formik
        initialValues={{
          ref1_phone_code: "",
          ref2_phone_code: "",
          appli_dri_number: application?.appli_dri_number
            ? application?.appli_dri_number
            : "",
          appli_dri_expiry: application?.appli_dri_expiry
            ? application?.appli_dri_expiry
            : "",
          have_uae_licence: application?.have_uae_licence
            ? application?.have_uae_licence
            : "",
          UAE_Resident_Visa_No: application?.UAE_Resident_Visa_No
            ? application?.UAE_Resident_Visa_No
            : "",
          UAE_License_No: application?.UAE_License_No
            ? application?.UAE_License_No
            : "",
          SIM_No: application?.SIM_No ? application?.SIM_No : "",
          position_id: application?.position_id ? application?.position_id : "",
          ref1_name: application?.ref1_name ? application?.ref1_name : "",
          ref1_email: application?.ref1_email ? application?.ref1_email : "",
          ref1_phone: application?.ref1_phone ? application?.ref1_phone : "",
          ref1_country: application?.ref1_country
            ? application?.ref1_country
            : "",
          ref1_address: application?.ref1_address
            ? application?.ref1_address
            : "",
          ref2_name: application?.ref2_name ? application?.ref2_name : "",
          ref2_email: application?.ref2_email ? application?.ref2_email : "",
          ref2_phone: application?.ref2_phone ? application?.ref2_phone : "",
          ref2_country: application?.ref2_country
            ? application?.ref2_country
            : "",
          ref2_address: application?.ref2_address
            ? application?.ref2_address
            : "",
        }}
        validationSchema={jobApplyLicenseSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, values, setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-[24px]">
              <h2 className="text-[18px] leading-[27px] font-semibold">
                License information
              </h2>

              <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
            </div>

            {isEdit ? (
              <>
                {values?.position_id === 50 && (
                  <div>
                    <div className="grid grid-cols-1 gap-6">
                      <InputFieldNew
                        errors={errors}
                        name="appli_dri_number"
                        touched={touched}
                        label="License Number"
                        placeholder="Enter passport number"
                      />

                      <DateInputField
                        pervDate={false}
                        errors={errors}
                        touched={touched}
                        name="appli_dri_expiry"
                        label="License Expiry Date"
                        value={values?.appli_dri_expiry}
                        handleSelect={(date) =>
                          setFieldValue("appli_dri_expiry", date)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-8">
                      <InputFieldRadio
                        required={true}
                        label="UAE License"
                        name="have_uae_licence"
                        value={values?.have_uae_licence}
                        handleSelect={(value) =>
                          setFieldValue("have_uae_licence", value)
                        }
                        items={[
                          {
                            id: "1",
                            name: "yes",
                            value: "yes",
                            label: "Yes",
                          },
                          {
                            id: "2",
                            name: "no",
                            value: "no",
                            label: "No",
                          },
                        ]}
                      />

                      {values?.have_uae_licence === "yes" && (
                        <InputFieldNew
                          errors={errors}
                          touched={touched}
                          name="UAE_License_No"
                          label="UAE License Number"
                          required={true}
                          placeholder="Enter uae License Number"
                        />
                      )}
                    </div>

                    {values?.have_uae_licence === "yes" && (
                      <div className="grid grid-cols-1 gap-6 pt-8">
                        <InputFieldNew
                          errors={errors}
                          touched={touched}
                          name="UAE_Resident_Visa_No"
                          label="UAE Resident Visa Number"
                          required={true}
                          placeholder="Enter uae resident visa number"
                        />

                        <InputFieldNew
                          errors={errors}
                          touched={touched}
                          name="SIM_No"
                          label="SIM Number"
                          required={false}
                          placeholder="Enter sim number"
                        />
                      </div>
                    )}
                  </div>
                )}

                {values?.position_id === 52 && (
                  <div>
                    <div className="grid grid-cols-1 gap-6">
                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        name="ref1_name"
                        label="Refer 1 Name"
                        required={false}
                        placeholder="Enter name"
                      />

                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        type="email"
                        name="ref1_email"
                        label="Refer 1 Email"
                        required={false}
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-8">
                      <PhoneNumberInputField
                        type="number"
                        name="ref1_phone"
                        required={false}
                        errors={errors}
                        touched={touched}
                        items={countryCode}
                        keyValue="shortName"
                        label="Refer 1 Phone Number"
                        placeholder="000000000"
                        setFieldValue={setFieldValue}
                        value={values?.ref1_phone}
                        handleSelect={(value) =>
                          setFieldValue("ref1_phone_code", value?.name)
                        }
                        selectCountryCode={
                          values?.ref1_phone_code
                            ? countryCode?.find(
                                (item) => item?.name === values?.ref1_phone_code
                              )?.shortName
                            : countryCode?.find(
                                (item) => item?.name === "Pakistan"
                              )?.shortName
                        }
                      />

                      <CountryInput
                        errors={errors}
                        touched={touched}
                        keyValue="name"
                        items={countries}
                        name="ref1_country"
                        label="Referer 1 Country Name"
                        value={values?.ref1_country}
                        placeholder="Enter country"
                        handleSelect={(name) =>
                          setFieldValue("ref1_country", name)
                        }
                      />
                    </div>

                    <div className="pt-4">
                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        required={false}
                        name="ref1_address"
                        placeholder="Enter address"
                        label="Referer 1 Address"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-8">
                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        name="ref2_name"
                        label="Refer 2 Name"
                        required={false}
                        placeholder="Enter name"
                      />

                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        type="email"
                        name="ref2_email"
                        label="Refer 2 Email"
                        required={false}
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 pt-8">
                      <PhoneNumberInputField
                        type="number"
                        name="ref2_phone"
                        required={false}
                        errors={errors}
                        touched={touched}
                        items={countryCode}
                        keyValue="shortName"
                        label="Refer 2 Phone Number"
                        placeholder="000000000"
                        setFieldValue={setFieldValue}
                        value={values?.ref2_phone}
                        handleSelect={(value) =>
                          setFieldValue("ref2_phone_code", value?.name)
                        }
                        selectCountryCode={
                          values?.ref2_phone_code
                            ? countryCode?.find(
                                (item) => item?.name === values?.ref2_phone_code
                              )?.shortName
                            : countryCode?.find(
                                (item) => item?.name === "Pakistan"
                              )?.shortName
                        }
                      />

                      <CountryInput
                        errors={errors}
                        touched={touched}
                        keyValue="name"
                        items={countries}
                        name="ref2_country"
                        label="Referer 2 Country Name"
                        value={values?.ref2_country}
                        placeholder="Enter country"
                        handleSelect={(name) =>
                          setFieldValue("ref2_country", name)
                        }
                      />
                    </div>

                    <div className="pt-4">
                      <InputFieldNew
                        errors={errors}
                        touched={touched}
                        required={false}
                        name="ref1_address"
                        placeholder="Enter address"
                        label="Referer 1 Address"
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div>
                {application?.position_id === 50 && (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <InfoCard
                        title="Driving License"
                        content={application?.appli_dri_number}
                      />

                      <InfoCard
                        title="Expiry Date"
                        content={
                          application?.appli_dri_expiry
                            ? moment(
                                application?.appli_dri_expiry || new Date()
                              ).format("D-MMMM-YYYY")
                            : "Null"
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <InfoCard
                        title="UAE Resident"
                        className="capitalize"
                        content={application?.uaeresident}
                      />
                      <InfoCard
                        title="UAE License Number"
                        content={application?.UAE_License_No}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <InfoCard
                        title="UAE Resident Visa Number"
                        content={application?.UAE_Resident_Visa_No}
                      />
                      <InfoCard
                        title="SIM Number"
                        content={application?.SIM_No}
                      />
                    </div>
                  </>
                )}

                {application?.position_id === 52 && (
                  <>
                    <div className="grid grid-cols-1 gap-4">
                      <InfoCard
                        title="Refer 1 Name"
                        content={application?.ref1_name}
                      />
                      <InfoCard
                        title="Refer 1 Email Address"
                        content={application?.ref1_email}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <InfoCard
                        title="Refer 1 Phone Number"
                        content={application?.ref1_phone}
                      />
                      <InfoCard
                        title="Refer 1 Country"
                        content={application?.ref1_country}
                      />
                    </div>

                    <div className="mt-4">
                      <InfoCard
                        title="Refer 1 Address"
                        content={application?.ref1_address}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <InfoCard
                        title="Refer 2 Name"
                        content={application?.ref2_name}
                      />
                      <InfoCard
                        title="Refer 2 Email Address"
                        content={application?.ref2_email}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <InfoCard
                        title="Refer 2 Phone Number"
                        content={application?.ref2_phone}
                      />
                      <InfoCard
                        title="Refer 2 Country"
                        content={application?.ref2_country}
                      />
                    </div>

                    <div className="mt-4">
                      <InfoCard
                        title="Refer 2 Address"
                        content={application?.ref2_address}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </Form>
        )}
      </Formik>

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
    </div>
  );
};

export default ApplicantLicenseInfo;
