import { Formik, Form, ErrorMessage } from "formik";
import DateInputField from "../inputs/DateInputField";
import CountryInput from "@/components/inputs/CountryInput";
import InputFieldNew from "@/components/inputs/InputFielNew";
import { countries, countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";

const INITIALVALUES = {
  first_name: "",
  last_name: "",
  mother_name: "",
  gender: "",
  date_of_birth: "",
  nationality: "",
  email: "",
  contact_number: "",
  whatsapp_number: "",
  position_id: "",
  applicant_image: "",
  hiring_position: "",
};

const EmployForm = ({ setStep }) => {
  return (
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

              <InputFieldNew
                type="email"
                label="Email"
                errors={errors}
                name="last_name"
                onlyLetter={true}
                touched={touched}
                placeholder="name@example.com"
              />

              <PhoneNumberInputField
                type="number"
                errors={errors}
                keyValue="shortName"
                touched={touched}
                name="contact_number"
                label="Phone Number"
                items={countryCode}
                changeDisable={false}
                placeholder="000000000"
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

              <CountryInput
                errors={errors}
                touched={touched}
                keyValue="name"
                items={countries}
                name="nationality"
                label="Nationality"
                value={values.nationality}
                placeholder="Select Nationality"
                handleSelect={(item) => setFieldValue("nationality", item.name)}
              />

              <DateInputField
                startYear={19}
                errors={errors}
                touched={touched}
                name="date_of_birth"
                label="Date of birth"
                value={values?.date_of_birth}
                handleSelect={(date) => setFieldValue("date_of_birth", date)}
              />

              <div>
                <div>
                  <input
                    type="checkbox"
                    name="is_agree"
                    value={values.is_agree}
                    checked={values.is_agree}
                    className="accent-[#1278BC]"
                    onChange={() => setIsOpen(true)}
                  />

                  <label className="ml-2 text-base text-[#667085]">
                    I Accept the{" "}
                    <a href="/" className="text-[#1278BC] font-medium">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <ErrorMessage
                  name="is_agree"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                className="text-white bg-[#1A56DB] rounded-lg px-5 py-2.5 text-sm font-medium"
              >
                Continue
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EmployForm;
