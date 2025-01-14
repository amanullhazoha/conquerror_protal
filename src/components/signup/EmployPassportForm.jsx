import { Formik, Form } from "formik";
import InputFieldNew from "../inputs/InputFielNew";
import DateInputField from "../inputs/DateInputField";
import InputFieldRadio from "../inputs/InputFieldRadio";
import { useState, useCallback, useEffect } from "react";
import { countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "../inputs/PhoneNumberInputField";
import { employPassportFormSchema } from "@/schema/auth/signup.schema";
import NidInputField from "../inputs/NidInputField";

const INITIALVALUES = {
  nid_number: "",

  spouse: "",
  nationality: "",
  father_name: "",
  mother_name: "",
  passport_no: "",
  emirates_id: "",
  whatsapp_no: "",
  uae_resident: "",
  whatsappCode: "",
  spouseConCode: "",
  marital_status: "",
  spouse_contact_no: "",
  passport_expiry_date: "",
  emirates_expiry_date: "",
};

const EmployPassportForm = ({ setStep }) => {
  let count = 0;
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("employPassportForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async (values, { resetForm }) => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("employPassportForm");
    const employFormValues = localStorage.getItem("employForm");

    if (storedValues) {
      const parseValues = JSON.parse(storedValues);

      setInitialValues({
        ...parseValues,
        nationality: JSON?.parse(employFormValues)?.nationality,
      });
    }
  }, []);

  return (
    <div className="pt-[48px] px-[48px]">
      <h2 className="mb-5 font-bold text-2xl text-[#111928]">
        Passport & Residency Details
      </h2>

      <Formik
        onSubmit={handleSubmit}
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={employPassportFormSchema}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => {
          handleSetLocalStorageValue(values);

          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="father_name"
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
                  <InputFieldNew
                    errors={errors}
                    name="passport_no"
                    touched={touched}
                    label="Passport Number"
                    placeholder="Enter passport number"
                  />

                  <DateInputField
                    pervDate={false}
                    errors={errors}
                    touched={touched}
                    name="passport_expiry_date"
                    label="Passport Date of Expiry"
                    value={values?.passport_expiry_date}
                    handleSelect={(date) =>
                      setFieldValue("passport_expiry_date", date)
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
                      name: "single",
                      value: "single",
                      label: "Single",
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
                      name="spouse"
                      errors={errors}
                      label="Spouse Name"
                      touched={touched}
                      placeholder="Enter your spouse name"
                    />

                    <PhoneNumberInputField
                      type="number"
                      errors={errors}
                      touched={touched}
                      items={countryCode}
                      keyValue="shortName"
                      name="spouse_contact_no"
                      changeDisable={false}
                      label="Spouse Contact Number"
                      placeholder="Enter phone number"
                      value={values?.spouse_contact_no}
                      setFieldValue={setFieldValue}
                      handleSelect={(item) =>
                        setFieldValue("spouseConCode", item?.name)
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

                <InputFieldRadio
                  required={true}
                  label="UAE Resident"
                  name="uae_resident"
                  value={values?.uae_resident}
                  handleSelect={(value) => setFieldValue("uae_resident", value)}
                  items={[
                    {
                      id: "1",
                      name: "yes",
                      value: true,
                      label: "Yes",
                    },
                    {
                      id: "2",
                      name: "no",
                      value: false,
                      label: "No",
                    },
                  ]}
                />

                {values?.uae_resident === true && (
                  <div className="grid grid-cols-2 gap-5">
                    <InputFieldNew
                      errors={errors}
                      name="emirates_id"
                      touched={touched}
                      label="Emirates ID"
                      placeholder="Enter your mother name"
                    />

                    <DateInputField
                      errors={errors}
                      pervDate={false}
                      touched={touched}
                      name="emirates_expiry_date"
                      label="Expiry date"
                      value={values?.emirates_expiry_date}
                      handleSelect={(date) =>
                        setFieldValue("emirates_expiry_date", date)
                      }
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-5">
                  <NidInputField
                    errors={errors}
                    touched={touched}
                    label="NID / CNIC"
                    name="NID/CNIC No"
                    country={values?.nationality}
                    handleChange={(e) => {
                      let value = e.target.value;

                      if (
                        values?.nationality === "Pakistan" &&
                        value.length > 5 &&
                        value[5] !== "-"
                      ) {
                        value = value.slice(0, 5) + "-" + value.slice(5);
                      }

                      if (
                        values?.nationality === "Pakistan" &&
                        value.length > 13 &&
                        value[14] !== "-"
                      ) {
                        value = value.slice(0, 13) + "-" + value.slice(14);
                      }

                      if (
                        values?.nationality === "Pakistan" &&
                        value?.length <= 15
                      ) {
                        return setFieldValue("nid_number", value);
                      }

                      if (values?.nationality !== "Pakistan") {
                        setFieldValue("nid_number", value);
                      }
                    }}
                    value={values?.nid_number}
                    placeholder="Enter NID/CNIC number"
                  />

                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    touched={touched}
                    items={countryCode}
                    keyValue="name"
                    name="whatsapp_no"
                    changeDisable={false}
                    label="WhatsApp Number"
                    placeholder="Enter your whatsapp number"
                    value={values?.whatsapp_no}
                    setFieldValue={setFieldValue}
                    handleSelect={(item) =>
                      setFieldValue("whatsappCode", item?.name)
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
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((prev) => prev - 1)}
                    className="text-black bg-white rounded-lg px-5 py-2.5 text-sm font-medium border border-[#E5E7EB]"
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

export default EmployPassportForm;
