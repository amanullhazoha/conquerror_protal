import moment from "moment";
import { Formik, Form } from "formik";
import useToast from "@/hooks/useToast";
import { useEffect, useState } from "react";
import { InfoCard } from "@/shared/InfoCard";
import ApplicantPhoto from "./ApplicantPhoto";
import EditButtons from "@/components/EditButtons";
import { downloadImage } from "@/utils/downloadImage";
import InputFieldNew from "@/components/inputs/InputFielNew";
import DateInputField from "@/components/inputs/DateInputField";
import { jobApplyPassportSchema } from "@/schema/application/applicant.schema";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";

const ApplicantPassportInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();

  const [updateApplicationById, { isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const onSubmit = (formData, resetForm) => {
    const data = {
      ...application,
      passportno: formData.passportno,
      date_of_expiry: formData.date_of_expiry,
    };

    const res = updateApplicationById({ id: application?.id, data });

    if (res?.data) {
      resetForm();
    }
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Passport information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <Formik
        initialValues={{
          passportno: application?.passportno ? application?.passportno : "",
          date_of_expiry: application?.date_of_expiry
            ? application?.date_of_expiry
            : "",
        }}
        validationSchema={jobApplyPassportSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, values, setFieldValue }) => (
          <Form
            onSubmit={handleSubmit}
            className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]"
          >
            <div className="flex items-center justify-between mb-[24px]">
              <h2 className="text-[18px] leading-[27px] font-semibold">
                Passport information
              </h2>

              <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
            </div>

            {isEdit ? (
              <div>
                <InputFieldNew
                  errors={errors}
                  name="passportno"
                  touched={touched}
                  label="Passport Number"
                  placeholder="Enter passport number"
                />

                <div className="pt-4">
                  <DateInputField
                    pervDate={false}
                    errors={errors}
                    touched={touched}
                    name="date_of_expiry"
                    label="Passport Date of Expiry"
                    value={values?.date_of_expiry}
                    handleSelect={(date) =>
                      setFieldValue("date_of_expiry", date)
                    }
                  />
                </div>
              </div>
            ) : (
              <div>
                <InfoCard
                  title="Passport Number"
                  content={application?.passportno}
                />
                <InfoCard
                  title="Expiry Date"
                  content={
                    application?.date_of_expiry
                      ? moment(
                          application?.date_of_expiry || new Date()
                        ).format("D-MMMM-YYYY")
                      : "Null"
                  }
                />
              </div>
            )}
          </Form>
        )}
      </Formik>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto
          title="Passport Front Page"
          className="mb-5"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.applicant_passport}`,
              application?.applicant_passport
            )
          }
          image={`${apiUrl}/uploads/${application?.applicant_passport}`}
        />

        {application?.applicant_resume && (
          <ApplicantPhoto
            title="Signature Page"
            downloadImage={() =>
              downloadImage(
                `${apiUrl}/uploads/${application?.applicant_resume}`,
                application?.applicant_resume
              )
            }
            image={`${apiUrl}/uploads/${application?.applicant_resume}`}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicantPassportInfo;
