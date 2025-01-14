import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import EditButtons from "@/components/EditButtons";
import { InfoCard, InfoEmailCard } from "@/shared/InfoCard";
import InputFieldNew from "@/components/inputs/InputFielNew";
import { countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";
import { jobApplyContactInfoSchema } from "@/schema/application/applicant.schema";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";

const ApplicationContactInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [updateApplicationById, { isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const onSubmit = (formData, resetForm) => {
    const data = {
      email: formData.email,
      contact_number: formData.contactNumber,
      whatsapp_number: formData.whatsappNumber,
    };

    const res = updateApplicationById({ id: application?.id, data });

    if (res?.data) {
      resetForm();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Contact information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError(error?.data);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-2">
      <Formik
        initialValues={{
          phoneCode: "",
          whatsAppCode: "",
          email: application?.email ? application?.email : "",
          contact_number: application.contact_number
            ? application?.contact_number
            : "",
          whatsapp_number: application.whatsapp_number
            ? application?.whatsapp_number
            : "",
        }}
        validationSchema={jobApplyContactInfoSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, values, setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
          >
            <div className="flex items-center justify-between mb-[24px]">
              <h2 className="text-[18px] leading-[27px] font-semibold">
                Contact information
              </h2>

              <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
            </div>

            {isEdit ? (
              <div>
                <div className="">
                  <InputFieldNew
                    type="email"
                    label="Email"
                    name="email"
                    errors={errors}
                    touched={touched}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="pt-4">
                  <PhoneNumberInputField
                    type="number"
                    name="contact_number"
                    errors={errors}
                    touched={touched}
                    items={countryCode}
                    keyValue="name"
                    label="Phone Number"
                    changeDisable={true}
                    placeholder="000000000"
                    setFieldValue={setFieldValue}
                    value={values?.contact_number}
                    handleSelect={(value) =>
                      setFieldValue("phoneCode", value?.name)
                    }
                    selectCountryCode={
                      values?.phoneCode
                        ? countryCode?.find(
                            (item) => item?.name === values?.phoneCode
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />
                </div>

                <div className="pt-5">
                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    touched={touched}
                    items={countryCode}
                    keyValue="name"
                    label="Whatsapp Number"
                    name="whatsapp_number"
                    changeDisable={false}
                    placeholder="000000000"
                    setFieldValue={setFieldValue}
                    value={values?.whatsapp_number}
                    handleSelect={(value) =>
                      setFieldValue("whatsAppCode", value?.name)
                    }
                    selectCountryCode={
                      values?.whatsAppCode
                        ? countryCode?.find(
                            (item) => item?.name === values?.whatsAppCode
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />
                </div>
              </div>
            ) : (
              <div>
                <InfoEmailCard
                  title="Email"
                  content={application?.email || ""}
                  status={
                    application?.email_verify === "verified" ? true : false
                  }
                />

                <InfoCard
                  title="Contact Number"
                  content={application?.contact_number || ""}
                />
                <InfoCard
                  title="WhatsApp Number"
                  content={application?.whatsapp_number || ""}
                />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ApplicationContactInfo;
