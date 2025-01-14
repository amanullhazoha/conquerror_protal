import { Formik, Form } from "formik";
import InputFieldNew from "../inputs/InputFielNew";
import InputFieldRadio from "../inputs/InputFieldRadio";
import { useState, useCallback, useEffect } from "react";
import { countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "../inputs/PhoneNumberInputField";
import { agentContactFormSchema } from "@/schema/auth/signup.schema";

const INITIALVALUES = {
  spouse: "",
  alt_phone: "",
  whatsappCode: "",
  father_name: "",
  mother_name: "",
  facebook_id: "",
  whatsapp_no: "",
  telegram_id: "",
  telegramCode: "",
  altPhoneCode: "",
  reference_name: "",
  marital_status: "",
  spouse_contact_no: "",
  spouseConCode: "",
};

const AgentContactInfoForm = ({ setStep }) => {
  let count = 0;
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("agentContactInfoForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async (values, { resetForm }) => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("agentContactInfoForm");

    if (storedValues) {
      const parseValues = JSON.parse(storedValues);

      setInitialValues({
        ...parseValues,
      });
    }
  }, []);

  return (
    <div className="pt-[48px] px-[48px]">
      <h2 className="mb-5 font-bold text-2xl text-[#111928]">
        Contact Information Details
      </h2>

      <Formik
        onSubmit={handleSubmit}
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={agentContactFormSchema}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => {
          handleSetLocalStorageValue(values);

          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="father_name"
                    touched={touched}
                    label="Father’s Name"
                    placeholder="Enter your father name"
                  />

                  <InputFieldNew
                    errors={errors}
                    name="mother_name"
                    touched={touched}
                    label="Mother’s Name"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    name="alt_phone"
                    touched={touched}
                    keyValue="name"
                    items={countryCode}
                    changeDisable={false}
                    value={values?.alt_phone}
                    setFieldValue={setFieldValue}
                    label="Alternative Phone Number"
                    placeholder="Enter your phone number"
                    handleSelect={(value) =>
                      setFieldValue("altPhoneCode", value?.name)
                    }
                    selectCountryCode={
                      values?.altPhoneCode
                        ? countryCode?.find(
                            (item) => item?.name === values?.altPhoneCode
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />

                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="facebook_id"
                    label="Facebook ID"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    keyValue="name"
                    touched={touched}
                    name="whatsapp_no"
                    label="WhatsApp"
                    items={countryCode}
                    changeDisable={false}
                    placeholder="Enter your whatsapp number"
                    value={values?.whatsapp_no}
                    setFieldValue={setFieldValue}
                    handleSelect={(value) =>
                      setFieldValue("whatsappCode", value?.name)
                    }
                    selectCountryCode={
                      values?.whatsappCode
                        ? countryCode?.find(
                            (item) => item?.name === values?.whatsappCode
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />

                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    keyValue="name"
                    touched={touched}
                    name="telegram_id"
                    label="Telegram"
                    items={countryCode}
                    changeDisable={false}
                    placeholder="Enter your phone number"
                    value={values?.telegram_id}
                    setFieldValue={setFieldValue}
                    handleSelect={(value) =>
                      setFieldValue("telegramCode", value?.name)
                    }
                    selectCountryCode={
                      values?.telegramCode
                        ? countryCode?.find(
                            (item) => item?.name === values?.telegramCode
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />
                </div>

                <InputFieldRadio
                  required={true}
                  label="Marital status"
                  name="marital_status"
                  value={values?.marital_status}
                  handleSelect={(value) =>
                    setFieldValue("marital_status", value)
                  }
                  items={[
                    {
                      id: "1",
                      name: "single ",
                      value: "single ",
                      label: "Single ",
                    },
                    {
                      id: "2",
                      name: "married",
                      value: "married",
                      label: "Married",
                    },
                    {
                      id: "3",
                      name: "divorced",
                      value: "divorced",
                      label: "Divorced",
                    },
                  ]}
                />

                {values?.marital_status === "married" && (
                  <div className="grid grid-cols-2 gap-5">
                    <InputFieldNew
                      type="text"
                      label="Spouse Name"
                      errors={errors}
                      name="spouse"
                      onlyLetter={true}
                      touched={touched}
                      placeholder="Enter your spouse name"
                    />

                    <PhoneNumberInputField
                      type="number"
                      errors={errors}
                      touched={touched}
                      items={countryCode}
                      keyValue="name"
                      name="spouse_contact_no"
                      changeDisable={false}
                      label="Spouse Contact Number"
                      placeholder="Enter your phone number"
                      value={values?.spouse_contact_no}
                      setFieldValue={setFieldValue}
                      handleSelect={(value) =>
                        setFieldValue("spouseConCode", value?.name)
                      }
                      selectCountryCode={
                        values?.spouseConCode
                          ? countryCode?.find(
                              (item) => item?.name === values?.spouseConCode
                            )?.shortName
                          : countryCode?.find(
                              (item) => item?.name === "Pakistan"
                            )?.shortName
                      }
                    />
                  </div>
                )}

                <InputFieldNew
                  type="text"
                  errors={errors}
                  touched={touched}
                  placeholder="Select"
                  name="reference_name"
                  label="Reference Name"
                />

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="text-black bg-white rounded-lg px-5 py-2.5 text-sm font-medium border border-[# E5E7EB]"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="text-white bg-[#1A56DB] rounded-lg px-5 py-2.5 text-sm font-medium"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AgentContactInfoForm;
