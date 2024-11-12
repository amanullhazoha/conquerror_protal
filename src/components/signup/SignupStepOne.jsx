import agent from "@/assets/images/agent_bg.png";
import AgentIcon from "@/assets/icons/AgentIcon";
import employ from "@/assets/images/employ_bg.png";
import EmployIcon from "@/assets/icons/EmployIcon";
import { Formik, Form, ErrorMessage } from "formik";
import CountryInput from "@/components/inputs/CountryInput";
import AgentActiveIcon from "@/assets/icons/AgentActiveIcon";
import InputFieldNew from "@/components/inputs/InputFielNew";
import { countries, countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "@/components/inputs/PhoneNumberInputField";
import EmployActiveIcon from "@/assets/icons/EmployActiveIcon";
import AgentForm from "./AgentForm";
import EmployForm from "./EmployForm";

const SignupStepOne = ({ accountType, setAccountType, setStep }) => {
  const activeAccountType = (type) => {
    return type === accountType ? true : false;
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <div className="grid grid-cols-2 justify-center">
          <div
            className={`flex flex-col gap-2 px-12 pt-12 items-center rounded-lg hover:bg-white cursor-pointer ${
              activeAccountType("agent")
                ? "rounded-b-none bg-white border border-[#E5E5E5] border-b-0"
                : " border border-transparent"
            }`}
            onClick={() => setAccountType("agent")}
          >
            {activeAccountType("agent") ? <AgentActiveIcon /> : <AgentIcon />}

            <div className="w-full text-center">
              <p
                className={`text-2xl font-medium mb-1.5 ${
                  activeAccountType("agent")
                    ? "text-[#3F83F8]"
                    : "text-[#6B7280]"
                }`}
              >
                Agent
              </p>

              <p
                className={`h-1.5 w-full rounded-t-full ${
                  activeAccountType("agent") ? "bg-blue-600" : "bg-transparent"
                }`}
              ></p>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2 px-12 pt-12 items-center rounded-lg hover:bg-white cursor-pointer ${
              activeAccountType("employ")
                ? "rounded-b-none bg-white border border-[#E5E5E5] border-b-0"
                : " border border-transparent"
            }`}
            onClick={() => setAccountType("employ")}
          >
            {activeAccountType("employ") ? (
              <EmployActiveIcon />
            ) : (
              <EmployIcon />
            )}

            <div className="w-full text-center">
              <p
                className={`text-2xl font-medium mb-1.5 ${
                  activeAccountType("employ")
                    ? "text-[#3F83F8]"
                    : "text-[#6B7280]"
                }`}
              >
                Employ
              </p>

              <p
                className={`h-1.5 w-full rounded-t-full ${
                  activeAccountType("employ") ? "bg-blue-600" : "bg-transparent"
                }`}
              ></p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg border border-[#E5E5E5] px-8 py-8 ${
            activeAccountType("employ") ? "rounded-r-none" : "rounded-l-none"
          }`}
        >
          <h2 className="mb-5 font-bold text-2xl text-[#111928]">
            Create your Free Account
          </h2>

          {/* <Formik
            enableReinitialize={true}
            initialValues={INITIALVALUES}
            // validationSchema={jobApplyBasicSchema(id)}
            onSubmit={(value) => console.log(value)}
          >
            {({ handleSubmit, values, touched, errors, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="grid gap-5 grid-cols-1">
                    <InputFieldNew
                      errors={errors}
                      name="first_name"
                      onlyLetter={true}
                      touched={touched}
                      label="Full Name"
                      placeholder="Enter your full name same as passport"
                    />

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
                      label="Phone number"
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
                          : countryCode?.find(
                              (item) => item?.name === "Pakistan"
                            )?.shortName
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
                        handleSelect={(item) =>
                          setFieldValue("nationality", item.name)
                        }
                      />

                      <InputFieldNew
                        type="email"
                        label="Passport Number"
                        errors={errors}
                        name="last_name"
                        onlyLetter={true}
                        touched={touched}
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
                      type="submit"
                      className="text-white bg-[#1A56DB] rounded-lg px-5 py-2.5 text-sm font-medium"
                    >
                      Continue
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik> */}

          {activeAccountType("agent") ? (
            <AgentForm setStep={setStep} />
          ) : (
            <EmployForm setStep={setStep} />
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          alt="banner image"
          src={accountType === "agent" ? agent : employ}
        />
      </div>
    </div>
  );
};

export default SignupStepOne;
