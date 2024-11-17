import { Formik, Form } from "formik";
import useToast from "@/hooks/useToast";
import { useNavigate } from "react-router-dom";
import FileInputField from "../inputs/FileInputFiled";
import { useState, useCallback, useEffect } from "react";
import SelectInputField from "../inputs/SelectInputField";
import { employDocumentFormSchema } from "@/schema/auth/signup.schema";
import { useEmployeeRegistrationMutation } from "@/redux/features/auth/authApi";

const INITIALVALUES = {
  position_id: "",
  department: "",
  passport_front_page: "",
  passport_special_page: "",
  nid_front_page: "",
  nid_back_page: "",
  profile_image: "",
  resident_visa: "",
};

const EmployDocumentForm = ({ setStep }) => {
  let count = 0;

  const navigate = useNavigate();

  const { showSuccess, showError } = useToast();
  const [initialValues, setInitialValues] = useState(INITIALVALUES);

  const [employeeRegistration, { isLoading, isSuccess, isError, error }] =
    useEmployeeRegistrationMutation();

  const handleSetLocalStorageValue = useCallback(
    (values) => {
      count = count + 1;

      if (count > 3) {
        localStorage.setItem("employAddressForm", JSON.stringify(values));
      }
    },
    [initialValues]
  );

  const handleSubmit = async (values, { resetForm }) => {
    const employForm = JSON.parse(localStorage.getItem("employForm"));
    const employPassportForm = JSON.parse(
      localStorage.getItem("employPassportForm")
    );
    const employAddressForm = JSON.parse(
      localStorage.getItem("employAddressForm")
    );

    const payload = {
      ...values,
      ...employForm,
      ...employPassportForm,
      ...employAddressForm,
    };

    const formData = new FormData();

    if (
      payload.passport_front_page &&
      payload.passport_front_page[0] instanceof File
    ) {
      formData.append("passport_front_page", payload.passport_front_page[0]);
    }

    if (
      payload.passport_special_page &&
      payload.passport_special_page[0] instanceof File
    ) {
      formData.append(
        "passport_special_page",
        payload.passport_special_page[0]
      );
    }

    if (payload.nid_front_page && payload.nid_front_page[0] instanceof File) {
      formData.append("nid_front_page", payload.nid_front_page[0]);
    }

    if (payload.nid_back_page && payload.nid_back_page[0] instanceof File) {
      formData.append("nid_back_page", payload.nid_back_page[0]);
    }

    if (payload.profile_image && payload.profile_image[0] instanceof File) {
      formData.append("profile_image", payload.profile_image[0]);
    }

    if (payload.resident_visa && payload.resident_visa[0] instanceof File) {
      formData.append("resident_visa", payload.resident_visa[0]);
    }

    Object.entries(payload).forEach(([key, value]) => {
      if (
        key !== "passport_front_page" &&
        key !== "passport_special_page" &&
        key !== "nid_front_page" &&
        key !== "nid_back_page" &&
        key !== "profile_image" &&
        key !== "resident_visa"
      ) {
        formData.append(key, value);
      }
    });

    employeeRegistration(formData);
  };

  useEffect(() => {
    const storedValues = localStorage.getItem("employAddressForm");

    if (storedValues) {
      const parseValues = JSON.parse(storedValues);

      setInitialValues({
        ...parseValues,
        passport_front_page: "",
        passport_special_page: "",
        nid_front_page: "",
        nid_back_page: "",
        profile_image: "",
        resident_visa: "",
      });
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Employee registration successful");
      localStorage.removeItem("employForm");
      localStorage.removeItem("employPassportForm");
      localStorage.removeItem("employAddressForm");
      localStorage.removeItem("employeeDocumentForm");

      navigate("/login");

      setStep(1);
    }

    if (isError) {
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="pt-[48px] px-[48px]">
      <h2 className="mb-5 font-bold text-2xl text-[#111928]">
        Document Upload & Job Information
      </h2>

      <Formik
        onSubmit={handleSubmit}
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={employDocumentFormSchema}
      >
        {({ handleSubmit, values, touched, errors, setFieldValue }) => {
          handleSetLocalStorageValue(values);

          return (
            <Form onSubmit={handleSubmit}>
              <div className="grid gap-5 grid-cols-1">
                <div className="grid grid-cols-2 gap-5">
                  <FileInputField
                    required={true}
                    errors={errors}
                    touched={touched}
                    name="passport_front_page"
                    label="Passport Front Page"
                    value={values.passport_front_page}
                    handleSelectFile={(file) =>
                      setFieldValue("passport_front_page", file)
                    }
                  />

                  <FileInputField
                    required={true}
                    errors={errors}
                    touched={touched}
                    name="passport_special_page"
                    label="Passport Special Page"
                    value={values.passport_special_page}
                    handleSelectFile={(file) =>
                      setFieldValue("passport_special_page", file)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <FileInputField
                    required={true}
                    errors={errors}
                    name="nid_front_page"
                    touched={touched}
                    label="NID/CNIC Front"
                    value={values.nid_front_page}
                    handleSelectFile={(file) =>
                      setFieldValue("nid_front_page", file)
                    }
                  />

                  <FileInputField
                    required={true}
                    errors={errors}
                    name="nid_back_page"
                    touched={touched}
                    label="NID/CNIC Back"
                    value={values.nid_back_page}
                    handleSelectFile={(file) =>
                      setFieldValue("nid_back_page", file)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <FileInputField
                    required={true}
                    errors={errors}
                    name="profile_image"
                    touched={touched}
                    label="Your Photo"
                    value={values.profile_image}
                    handleSelectFile={(file) =>
                      setFieldValue("profile_image", file)
                    }
                  />

                  <FileInputField
                    required={true}
                    errors={errors}
                    name="resident_visa"
                    touched={touched}
                    label="Resident Visa"
                    value={values.resident_visa}
                    handleSelectFile={(file) =>
                      setFieldValue("resident_visa", file)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <SelectInputField
                    required={true}
                    items={[
                      { name: "Test 1", value: "test_1" },
                      { name: "Test 2", value: "test_2" },
                    ]}
                    errors={errors}
                    keyValue="name"
                    name="department"
                    touched={touched}
                    label="Department"
                    value={values?.department}
                    placeholder="Select department"
                    handleSelect={(item) =>
                      setFieldValue("department", item?.value)
                    }
                  />

                  <SelectInputField
                    required={true}
                    items={[
                      { name: "Test 1", value: 1 },
                      { name: "Test 2", value: 2 },
                    ]}
                    errors={errors}
                    name="position_id"
                    touched={touched}
                    label="Position"
                    keyValue="name"
                    value={values?.position_id}
                    placeholder="Select position"
                    handleSelect={(item) =>
                      setFieldValue("position_id", item?.value)
                    }
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
                    disabled={isLoading}
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

export default EmployDocumentForm;
