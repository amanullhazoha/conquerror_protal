import { Formik, Form } from "formik";
import InputFieldNew from "../inputs/InputFielNew";
import DateInputField from "../inputs/DateInputField";
import InputFieldRadio from "../inputs/InputFieldRadio";
import { countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "../inputs/PhoneNumberInputField";

const INITIALVALUES = {
  email: "",
  gender: "",
  last_name: "",
  first_name: "",
  mother_name: "",
  position_id: "",
  nationality: "",
  date_of_birth: "",
  contact_number: "",
  whatsapp_number: "",
  applicant_image: "",
  hiring_position: "",
};

const EmployPassportForm = () => {
  return (
    <div className="pt-[48px] px-[48px]">
      <h2 className="mb-5 font-bold text-2xl text-[#111928]">
        Passport & Residency Details
      </h2>

      <Formik
        enableReinitialize={true}
        initialValues={INITIALVALUES}
        // validationSchema={jobApplyBasicSchema(id)}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Father’s Name"
                    placeholder="Enter your reference name"
                  />

                  <InputFieldNew
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Mother’s Name"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Passport Number"
                    placeholder="Enter your mother name"
                  />

                  <DateInputField
                    startYear={19}
                    errors={errors}
                    touched={touched}
                    name="date_of_birth"
                    label="Date of birth"
                    value={values?.date_of_birth}
                    handleSelect={(date) =>
                      setFieldValue("date_of_birth", date)
                    }
                  />
                </div>

                <InputFieldRadio
                  required={true}
                  label="Marital status"
                  name="have_uae_licence"
                  value={values?.have_uae_licence}
                  handleSelect={(value) =>
                    setFieldValue("have_uae_licence", value)
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

                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    type="email"
                    label="Spouse Name"
                    errors={errors}
                    name="last_name"
                    onlyLetter={true}
                    touched={touched}
                    placeholder="Enter your spouse name"
                  />

                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    touched={touched}
                    items={countryCode}
                    keyValue="shortName"
                    name="contact_number"
                    changeDisable={false}
                    label="Spouse Contact Number"
                    placeholder="Enter your phone number"
                    value={values?.contact_number}
                    setFieldValue={setFieldValue}
                    selectCountryCode={
                      values?.nationality
                        ? countryCode?.find(
                            (item) => item?.name === values?.nationality
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />
                </div>

                <InputFieldRadio
                  required={true}
                  label="UAE Resident"
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

                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Emirates ID"
                    placeholder="Enter your mother name"
                  />

                  <DateInputField
                    startYear={19}
                    errors={errors}
                    touched={touched}
                    name="date_of_birth"
                    label="Expiry date"
                    value={values?.date_of_birth}
                    handleSelect={(date) =>
                      setFieldValue("date_of_birth", date)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    type="email"
                    label="NID/CNIC No"
                    errors={errors}
                    name="last_name"
                    onlyLetter={true}
                    touched={touched}
                    placeholder="Enter NID/CNIC number"
                  />

                  <PhoneNumberInputField
                    type="number"
                    errors={errors}
                    touched={touched}
                    items={countryCode}
                    keyValue="shortName"
                    name="contact_number"
                    changeDisable={false}
                    label="WhatsApp Number"
                    placeholder="Enter your phone number"
                    value={values?.contact_number}
                    setFieldValue={setFieldValue}
                    selectCountryCode={
                      values?.nationality
                        ? countryCode?.find(
                            (item) => item?.name === values?.nationality
                          )?.shortName
                        : countryCode?.find((item) => item?.name === "Pakistan")
                            ?.shortName
                    }
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
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

export default EmployPassportForm;
