// import { countries } from "@/data/countryList";
// import InputField from "@/components/inputs/InputField";
// import RadioInput from "@/components/inputs/RadioInput";
// import SelectInput from "@/components/inputs/SelectInput";

// const ApplicantBasicInfoForm = ({ register, errors, control }) => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-6">
//         <InputField
//           name="firstName"
//           label="First Name"
//           type="text"
//           placeholder="Enter your first name"
//           required
//           register={register}
//           rules={{
//             required: "First name is required",
//             maxLength: {
//               value: 50,
//               message: "Maximum length is 50 characters",
//             },
//           }}
//           errors={errors}
//         />

//         <InputField
//           name="lastName"
//           label="Last Name"
//           type="text"
//           placeholder="Enter your last name"
//           register={register}
//           required
//           rules={{
//             required: "Last name is required",
//             maxLength: {
//               value: 50,
//               message: "Maximum length is 50 characters",
//             },
//           }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <InputField
//           name="fatherName"
//           label="Father Name"
//           type="text"
//           placeholder="Enter your father name"
//           register={register}
//           required
//           rules={{
//             required: "Father name is required",
//             maxLength: {
//               value: 50,
//               message: "Maximum length is 50 characters",
//             },
//           }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <InputField
//           name="motherName"
//           label="Mother Name"
//           type="text"
//           placeholder="Enter your mother name"
//           register={register}
//           required
//           rules={{
//             required: "Mother name is required",
//             maxLength: {
//               value: 50,
//               message: "Maximum length is 50 characters",
//             },
//           }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <InputField
//           name="dob"
//           label="Date of Birth"
//           type="date"
//           placeholder="Enter your date of birth"
//           register={register}
//           required
//           rules={{
//             required: "Date of Birth is required",
//           }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <RadioInput
//           name="gender"
//           label="Gender"
//           options={[
//             { label: "Male", value: "male" },
//             { label: "Female", value: "female" },
//             { label: "Others", value: "others" },
//           ]}
//           register={register}
//           required
//           rules={{ required: "Please select an option" }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-8">
//         <SelectInput
//           name="nationality"
//           label="Nationality"
//           placeholder="Select Nationality"
//           required={true}
//           options={countries}
//           control={control}
//           rules={{ required: "Nationality is required" }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <InputField
//           name="position"
//           label="Position"
//           type="number"
//           placeholder="Enter position number"
//           register={register}
//           required
//           rules={{
//             required: "Position number is required",
//           }}
//           errors={errors}
//         />
//       </div>

//       <div className="pt-4">
//         <InputField
//           name="referenceNumber"
//           label="Reference Number"
//           type="number"
//           placeholder="Enter your reference number"
//           register={register}
//           required
//           rules={{
//             required: "Reference number is required",
//           }}
//           errors={errors}
//         />
//       </div>
//     </div>
//   );
// };

// export default ApplicantBasicInfoForm;

import { Formik, Form } from "formik";
import InputFieldRadio from "@/components/inputs/InputFieldRadio";
import InputFieldNew from "@/components/inputs/InputFielNew";
import SelectInputField from "@/components/inputs/SelectInputField";
import CountryInput from "@/components/inputs/CountryInput";
import DateInputField from "@/components/inputs/DateInputField";

const ApplicantBasicInfoForm = ({ register, errors, control }) => {
  return (
    <Formik
      initialValues={{
        first_name: data?.first_name ? data?.first_name : "",
        last_name: data?.last_name ? data?.last_name : "",
        father_name: data?.father_name ? data?.father_name : "",
        mother_name: data?.mother_name ? data?.mother_name : "",
        date_of_birth: data?.date_of_birth ? data?.date_of_birth : "",
        gender: data?.gender ? data?.gender : "",
        nationality: data?.nationality ? data?.nationality : "",
        position_id: data?.position_id ? data?.position_id : "",
        reference: data?.reference ? data?.reference : "",
      }}
      onSubmit={() => console.log("submit")}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
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

          <div className="pt-4">
            <InputFieldNew
              errors={errors}
              name="father_name"
              onlyLetter={true}
              touched={touched}
              label="Father Name"
              placeholder="Enter your father name"
            />
          </div>

          <div className="pt-4">
            <InputFieldNew
              errors={errors}
              name="mother_name"
              onlyLetter={true}
              touched={touched}
              label="Mother Name"
              placeholder="Enter your mother name"
            />
          </div>

          <div className="pt-4">
            <DateInputField
              startYear={19}
              errors={errors}
              touched={touched}
              name="date_of_birth"
              label="Date of birth"
              value={values?.date_of_birth}
              handleSelect={(date) => setFieldValue("date_of_birth", date)}
            />
          </div>

          <div className="pt-4">
            <InputFieldRadio
              required={true}
              label="Gender"
              name="gender"
              value={values?.marital_status}
              handleSelect={(value) => setFieldValue("gender", value)}
              items={[
                {
                  id: "1",
                  name: "male",
                  value: "male",
                  label: "Male",
                },
                {
                  id: "2",
                  name: "female",
                  value: "female",
                  label: "Female",
                },
                {
                  id: "3",
                  name: "others",
                  value: "others",
                  label: "Others",
                },
              ]}
            />
          </div>

          <div className="pt-8">
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
          </div>

          <div className="pt-4">
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
          </div>

          <div className="pt-4">
            <InputFieldNew
              errors={errors}
              name="reference"
              onlyLetter={true}
              touched={touched}
              label="Reference Code"
              placeholder="Enter reference code"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicantBasicInfoForm;
