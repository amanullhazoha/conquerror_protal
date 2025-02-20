import { useState } from "react";
import { Form, Formik } from "formik";
import { InfoCard } from "@/shared/InfoCard";
import EditButtons from "@/components/EditButtons";
import InputFieldNew from "@/components/inputs/InputFielNew";
import SelectInputField from "@/components/inputs/SelectInputField";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";
import {
  countries,
  allCountry,
  countryCode,
} from "@/assets/staticData/countryInfo";

const EmployeeContactInfoForm = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Formik
      initialValues={{
        full_name: "",
        last_name: "",
        email: "",
        phone: "",
        nationality: "",
        passportno: "",
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors, touched, values, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
        >
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="text-[18px] leading-[27px] font-semibold">
              Contact Information
            </h2>

            <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>

          {isEdit ? (
            <>
              <div className="grid grid-cols-1">
                <InputFieldNew
                  errors={errors}
                  name="full_name"
                  onlyLetter={true}
                  touched={touched}
                  label="Full Name"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="grid grid-cols-1 pt-8">
                <InputFieldNew
                  type="email"
                  label="Email"
                  name="email"
                  errors={errors}
                  touched={touched}
                  placeholder="name@example.com"
                />
              </div>

              <div className="grid grid-cols-1 pt-8">
                <PhoneNumberInputField
                  type="number"
                  keyValue="name"
                  errors={errors}
                  touched={touched}
                  items={countryCode}
                  label="Phone Number"
                  changeDisable={true}
                  name="contact_number"
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

              <div className="grid grid-cols-2 gap-6 pt-8">
                <SelectInputField
                  errors={errors}
                  touched={touched}
                  keyValue="name"
                  items={allCountry}
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

                <InputFieldNew
                  errors={errors}
                  name="passportno"
                  touched={touched}
                  label="Passport Number"
                  placeholder="Enter passport number"
                />
              </div>
            </>
          ) : (
            <div>
              <div className="grid grid-cols-1 gap-6">
                <InfoCard title="First Name" content="Amanullha Zoha" />
              </div>

              <div className="grid grid-cols-1">
                <InfoCard title="Email" content="amaullha@gmail.com" />
              </div>

              <div className="grid grid-cols-1">
                <InfoCard title="Phone Number" content="+8801715378419" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <InfoCard title="Nationality" content="Bangladesh" />

                <InfoCard title="Passport Number" content="85345454" />
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeContactInfoForm;
