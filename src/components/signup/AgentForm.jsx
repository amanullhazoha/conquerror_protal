import { Formik, Form, ErrorMessage } from "formik";
import { useState, useCallback, useEffect } from "react";
import CountryInput from "@/components/inputs/CountryInput";
import InputFieldNew from "@/components/inputs/InputFielNew";
import { agentFormSchema } from "@/schema/auth/signup.schema";
import { countries, countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";

const INITIALVALUES = {
  email: "",
  phone: "",
  phoneCode: "",
  full_name: "",
  nationality: "",
  passport_no: "",
  is_agree: false,
};

const AgentForm = ({ setStep }) => {
  let count = 0;
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("agentForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async (values, { resetForm }) => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("agentForm");

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
      validationSchema={agentFormSchema}
    >
      {({ handleSubmit, values, touched, errors, setFieldValue }) => {
        handleSetLocalStorageValue(values);

        return (
          <Form onSubmit={handleSubmit}>
            <div className="grid gap-5 grid-cols-1">
              <InputFieldNew
                errors={errors}
                name="full_name"
                onlyLetter={true}
                touched={touched}
                label="Full Name"
                placeholder="Enter your full name same as passport"
              />

              <InputFieldNew
                type="email"
                label="Email"
                name="email"
                errors={errors}
                touched={touched}
                placeholder="name@example.com"
              />

              <PhoneNumberInputField
                type="number"
                name="phone"
                errors={errors}
                touched={touched}
                items={countryCode}
                keyValue="name"
                label="Phone Number"
                changeDisable={false}
                placeholder="000000000"
                setFieldValue={setFieldValue}
                value={values?.phone}
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

              <div className="grid grid-cols-2 gap-5">
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

                <InputFieldNew
                  type="text"
                  errors={errors}
                  touched={touched}
                  name="passport_no"
                  label="Passport Number"
                  placeholder="Enter your passport number"
                />
              </div>

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
                // onClick={() => setStep((prev) => prev + 1)}
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

export default AgentForm;
