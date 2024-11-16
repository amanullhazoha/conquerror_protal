import { Formik, Form } from "formik";
import InputFieldNew from "../inputs/InputFielNew";
import InputFieldRadio from "../inputs/InputFieldRadio";
import { countryCode } from "@/assets/staticData/countryInfo";
import PhoneNumberInputField from "../inputs/PhoneNumberInputField";
import FileInputField from "../inputs/FileInputFiled";

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

const AgentDocumentForm = ({ setStep }) => {
  return (
    <div className="pt-[48px] px-[48px]">
      <h2 className="mb-5 font-bold text-2xl text-[#111928]">
        Document Upload & Job Information
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
                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Passport Front Page "
                    placeholder="Enter your mother name"
                  />

                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Passport Special Page"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="NID/CNIC Front"
                    placeholder="Enter your mother name"
                  />

                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="NID/CNIC Back"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Your Photo"
                    placeholder="Enter your mother name"
                  />

                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Resident Visa"
                    placeholder="Enter your mother name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <FileInputField
                    errors={errors}
                    name="first_name"
                    onlyLetter={true}
                    touched={touched}
                    label="Business License Copy"
                    placeholder="Enter your mother name"
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
                    type="button"
                    onClick={() => setStep((prev) => prev + 1)}
                    className="text-white bg-[#1A56DB] rounded-lg px-5 py-2.5 text-sm font-medium"
                  >
                    Submit
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

export default AgentDocumentForm;
