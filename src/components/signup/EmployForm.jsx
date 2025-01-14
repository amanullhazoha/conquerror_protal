import { Formik, Form, ErrorMessage } from "formik";
import DateInputField from "../inputs/DateInputField";
import { useState, useCallback, useEffect } from "react";
import CountryInput from "@/components/inputs/CountryInput";
import InputFieldNew from "@/components/inputs/InputFielNew";
import { employFormSchema } from "@/schema/auth/signup.schema";
import { countries, countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";

const INITIALVALUES = {
  phone: "",
  email: "",
  phoneCode: "",
  last_name: "",
  first_name: "",
  nationality: "",
  is_agree: false,
  date_of_birth: "",
};

const EmployForm = ({ setStep }) => {
  let count = 0;
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("employForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("employForm");

    if (storedValues) {
      const parseValues = JSON.parse(storedValues);

      setInitialValues({
        ...parseValues,
      });
    }
  }, []);

  return (
    <Formik
      onSubmit={handleSubmit}
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={employFormSchema}
    >
      {({ handleSubmit, values, touched, errors, setFieldValue }) => {
        handleSetLocalStorageValue(values);

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
                name="email"
                label="Email"
                errors={errors}
                touched={touched}
                placeholder="name@example.com"
              />

              <PhoneNumberInputField
                name="phone"
                type="number"
                errors={errors}
                touched={touched}
                items={countryCode}
                label="Phone Number"
                keyValue="name"
                changeDisable={false}
                placeholder="000000000"
                value={values?.phone}
                setFieldValue={setFieldValue}
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

              <CountryInput
                errors={errors}
                touched={touched}
                keyValue="name"
                items={countries}
                name="nationality"
                label="Nationality"
                value={values.nationality}
                placeholder="Select Nationality"
                handleSelect={(name) => setFieldValue("nationality", name)}
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
                    onChange={() =>
                      setFieldValue("is_agree", values?.is_agree ? false : true)
                    }
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
                type="submit"
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
