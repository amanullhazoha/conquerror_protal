import { Formik, Form } from "formik";
import InputFieldNew from "../inputs/InputFielNew";
import { useState, useCallback, useEffect } from "react";
import SelectInputField from "../inputs/SelectInputField";
import { employAddressFormSchema } from "@/schema/auth/signup.schema";
import { getStatesByCountry, getCitiesByState } from "@/lib/addressFind";

const INITIALVALUES = {
  zip: "",
  city: "",
  state: "",
  home_address: "",
  police_station: "",
  reference_name: "",
};

const EmployAddressForm = ({ setStep }) => {
  let count = 0;
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("employAddressForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("employAddressForm");
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
        Address & Reference Details
      </h2>

      <Formik
        onSubmit={handleSubmit}
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={employAddressFormSchema}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => {
          handleSetLocalStorageValue(values);

          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-1 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="home_address"
                    touched={touched}
                    label="Home Address"
                    placeholder="Enter home address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <SelectInputField
                    name="state"
                    errors={errors}
                    keyValue="name"
                    touched={touched}
                    label="State/District"
                    value={values.state}
                    placeholder="Enter your state"
                    items={getStatesByCountry(values?.nationality)}
                    handleSelect={(item) => setFieldValue("state", item?.name)}
                  />

                  <SelectInputField
                    name="city"
                    label="City"
                    keyValue="name"
                    errors={errors}
                    touched={touched}
                    value={values.city}
                    placeholder="Enter your city"
                    items={getCitiesByState(values.state)}
                    handleSelect={(item) => setFieldValue("city", item.name)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <InputFieldNew
                    errors={errors}
                    name="police_station"
                    touched={touched}
                    label="Police Station"
                    placeholder="Enter police station name"
                  />

                  <InputFieldNew
                    errors={errors}
                    name="zip"
                    touched={touched}
                    label="Zip/Postal Code"
                    placeholder="Enter zip/postal code"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <InputFieldNew
                    type="text"
                    errors={errors}
                    touched={touched}
                    placeholder="Select"
                    name="reference_name"
                    label="Reference Name"
                  />
                </div>

                <div className="flex justify-between mt-3">
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

export default EmployAddressForm;
