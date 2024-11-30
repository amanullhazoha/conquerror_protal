import moment from "moment";
import { Formik, Form } from "formik";
import useToast from "@/hooks/useToast";
import { useEffect, useState } from "react";
import { InfoCard } from "@/shared/InfoCard";
import ApplicantPhoto from "./ApplicantPhoto";
import EditButtons from "@/components/EditButtons";
import { downloadImage } from "@/utils/downloadImage";
import { religion } from "@/assets/staticData/countryInfo";
import NidInputField from "@/components/inputs/NidInputField";
import InputFieldNew from "@/components/inputs/InputFielNew";
import DateInputField from "@/components/inputs/DateInputField";
import InputFieldRadio from "@/components/inputs/InputFieldRadio";
import SelectInputField from "@/components/inputs/SelectInputField";
import { getStatesByCountry, getCitiesByState } from "@/lib/addressFind";
import { jobApplyNidSchema } from "@/schema/application/applicant.schema";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";

const ApplicationNidInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();

  const [updateApplicationById, { isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const onSubmit = (formData, resetForm) => {
    const data = {
      ...application,
      zip: formData?.zip,
      city: formData?.city,
      spouse: formData?.spouse,
      religion: formData?.religion,
      province: formData?.province,
      homeaddrss: formData?.homeaddrss,
      emiratesid: formData?.emiratesid,
      uaeresident: formData?.uaeresident,
      policeStation: formData?.policeStation,
      martialstatus: formData?.martialstatus,
      nidorcnicnumber: formData?.nidorcnicnumber,
      nidorcnicexpiry: formData?.nidorcnicexpiry,
      emirates_expiry: formData?.emirates_expiry,
    };

    const res = updateApplicationById({ id: application?.id, data });

    if (res?.data) {
      resetForm();
    }
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("NID/CNIC information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <Formik
        initialValues={{
          nationality: application?.nationality ? application?.nationality : "",
          emirates_expiry: application?.emirates_expiry
            ? application?.emirates_expiry
            : "",
          nidorcnicnumber: application?.nidorcnicnumber
            ? application?.nidorcnicnumber
            : "",
          martialstatus: application?.martialstatus
            ? application?.martialstatus
            : "",
          spouse: application?.spouse ? application?.spouse : "",
          uaeresident: application?.uaeresident ? application?.uaeresident : "",
          emiratesid: application?.emiratesid ? application?.emiratesid : "",
          nidorcnicexpiry: application?.nidorcnicexpiry
            ? application?.nidorcnicexpiry
            : "",
          religion: application?.religion ? application?.religion : "",
          homeaddrss: application?.homeaddrss ? application?.homeaddrss : "",
          province: application?.province ? application?.province : "",
          city: application?.city ? application?.city : "",
          policeStation: application?.policeStation
            ? application?.policeStation
            : "",
          zip: application?.zip ? application?.zip : "",
        }}
        validationSchema={jobApplyNidSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors, touched, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="col-span-6 xl:col-span-7">
            <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
              <div className="flex items-center justify-between mb-[24px]">
                <h2 className="text-[18px] leading-[27px] font-semibold">
                  NID/CNIC information
                </h2>

                <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
              </div>

              {isEdit ? (
                <div>
                  <NidInputField
                    errors={errors}
                    touched={touched}
                    label="NID / CNIC"
                    name="nidorcnicnumber"
                    country={values?.nationality}
                    handleChange={(e) => {
                      let value = e.target.value;

                      if (
                        values?.nationality === "Pakistan" &&
                        value.length > 5 &&
                        value[5] !== "-"
                      ) {
                        value = value.slice(0, 5) + "-" + value.slice(5);
                      }

                      if (
                        values?.nationality === "Pakistan" &&
                        value.length > 13 &&
                        value[14] !== "-"
                      ) {
                        value = value.slice(0, 13) + "-" + value.slice(14);
                      }

                      if (
                        values?.nationality === "Pakistan" &&
                        value?.length <= 15
                      ) {
                        return setFieldValue("nid_number", value);
                      }

                      if (values?.nationality !== "Pakistan") {
                        setFieldValue("nid_number", value);
                      }
                    }}
                    value={values?.nidorcnicnumber}
                    placeholder="Enter NID/CNIC number"
                  />

                  <div className="pt-4">
                    <InputFieldRadio
                      required={true}
                      label="Marital status"
                      name="martialstatus"
                      value={values?.martialstatus}
                      handleSelect={(value) =>
                        setFieldValue("martialstatus", value)
                      }
                      items={[
                        {
                          id: "1",
                          name: "single",
                          value: "single",
                          label: "Single",
                        },
                        {
                          id: "2",
                          name: "married",
                          value: "married",
                          label: "Married",
                        },
                        {
                          id: "3",
                          name: "divorced",
                          value: "divorced",
                          label: "Divorced",
                        },
                      ]}
                    />
                  </div>

                  {values?.martialstatus === "married" && (
                    <div className="pt-4">
                      <InputFieldNew
                        type="text"
                        name="spouse"
                        errors={errors}
                        label="Spouse Name"
                        touched={touched}
                        placeholder="Enter your spouse name"
                      />
                    </div>
                  )}

                  {console.log(values, errors)}

                  <div className="pt-4">
                    <InputFieldRadio
                      required={true}
                      label="UAE Resident"
                      name="uaeresident"
                      value={values?.uaeresident}
                      handleSelect={(value) =>
                        setFieldValue("uaeresident", value)
                      }
                      items={[
                        {
                          id: "1",
                          value: "yes",
                          label: "Yes",
                        },
                        {
                          id: "2",
                          value: "no",
                          label: "No",
                        },
                      ]}
                    />
                  </div>

                  {values?.uaeresident === "yes" && (
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <InputFieldNew
                        errors={errors}
                        name="emiratesid"
                        touched={touched}
                        label="Emirates ID"
                        placeholder="Enter your mother name"
                      />

                      <DateInputField
                        errors={errors}
                        pervDate={false}
                        touched={touched}
                        name="emirates_expiry"
                        label="Expiry date"
                        value={values?.emirates_expiry}
                        handleSelect={(date) =>
                          setFieldValue("emirates_expiry", date)
                        }
                      />
                    </div>
                  )}

                  <div className="pt-4">
                    <SelectInputField
                      errors={errors}
                      name="religion"
                      keyValue="name"
                      touched={touched}
                      value={values.religion}
                      placeholder="Select"
                      label="Religion"
                      items={religion}
                      handleSelect={(item) =>
                        setFieldValue("religion", item.name)
                      }
                    />
                  </div>

                  <div className="pt-4">
                    <InputFieldNew
                      errors={errors}
                      name="homeaddrss"
                      touched={touched}
                      label="Home Address"
                      placeholder="Enter home address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <SelectInputField
                      name="province"
                      errors={errors}
                      keyValue="name"
                      touched={touched}
                      label="State / Province"
                      value={values.province}
                      placeholder="Enter your state"
                      items={getStatesByCountry(values?.nationality)}
                      handleSelect={(item) =>
                        setFieldValue("province", item?.name)
                      }
                    />

                    <SelectInputField
                      name="city"
                      label="City"
                      keyValue="name"
                      errors={errors}
                      touched={touched}
                      value={values.city}
                      placeholder="Enter your city"
                      items={getCitiesByState(values.province)}
                      handleSelect={(item) => setFieldValue("city", item.name)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <InputFieldNew
                      errors={errors}
                      name="policeStation"
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
                </div>
              ) : (
                <div>
                  <InfoCard
                    title="NID/CNIC Number"
                    content={application?.nidorcnicnumber || ""}
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <InfoCard
                      title="Marital Status"
                      content={application?.martialstatus || ""}
                    />
                    <InfoCard
                      title="Spouse Name"
                      content={application?.spouse || ""}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <InfoCard
                      title="UAE Resident"
                      className="capitalize"
                      content={application?.uaeresident || ""}
                    />

                    <InfoCard
                      title="Emirates ID"
                      content={application?.emiratesid}
                    />

                    <InfoCard
                      title="Expiry Date"
                      content={
                        application?.emirates_expiry
                          ? moment(
                              application?.emirates_expiry || new Date()
                            ).format("D-MMMM-YYYY")
                          : "Null"
                      }
                    />
                  </div>

                  <InfoCard title="Religion" content={application?.religion} />

                  <InfoCard
                    title="Permanent Address"
                    content={application?.homeaddrss || ""}
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <InfoCard
                      title="State/Province"
                      content={application?.province || ""}
                    />
                    <InfoCard title="City" content={application?.city || ""} />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <InfoCard
                      title="Police Station"
                      content={application?.policeStation || ""}
                    />
                    <InfoCard
                      title="Postal Code"
                      content={application?.zip || ""}
                    />
                  </div>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <div className="col-span-6 xl:col-span-5 border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto
          title="NID/CNIC Front Page"
          className="mb-5"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.nid_cnic_front}`,
              application?.nid_cnic_front
            )
          }
          image={`${apiUrl}/uploads/${application?.nid_cnic_front}`}
        />
        <ApplicantPhoto
          title="NID/CNIC Back Page"
          downloadImage={() =>
            downloadImage(
              `${apiUrl}/uploads/${application?.nid_cnic_back}`,
              application?.nid_cnic_back
            )
          }
          image={`${apiUrl}/uploads/${application?.nid_cnic_back}`}
        />
      </div>
    </div>
  );
};

export default ApplicationNidInfo;
