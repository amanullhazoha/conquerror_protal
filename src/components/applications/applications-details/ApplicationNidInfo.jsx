import EditButtons from "@/components/EditButtons";
import InputField from "@/components/inputs/InputField";
import RadioInput from "@/components/inputs/RadioInput";
import SelectInput from "@/components/inputs/SelectInput";
import useToast from "@/hooks/useToast";
import { useUpdateApplicationByIdMutation } from "@/redux/features/applications/applications";
import { InfoCard } from "@/shared/InfoCard";
import { downloadImage } from "@/utils/downloadImage";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicationNidInfo = ({ application }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { showSuccess, showError } = useToast();

  const [updateApplicationById, { isLoading, isError, isSuccess, error }] =
    useUpdateApplicationByIdMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // Update form values when 'application' data is available
  useEffect(() => {
    if (application) {
      reset({
        nidNumber: application?.nidorcnicnumber,
        maritalStatus: application?.martialstatus,
        spouseName: application?.spouse,
        uaeResident: application?.uaeresident,
        emiratesId: application?.emiratesid,
        expiryDate: application?.nidorcnicexpiry,
        religion: application?.religion,
        permanentAddress: application?.homeaddrss,
        state: application?.province,
        city: application?.city,
        policeStation: application?.policeStation,
        postalCode: application?.zip,
      });
    }
  }, [application, reset]);

  const onSubmit = (formData) => {
    const data = {
      nidorcnicnumber: formData.nidNumber,
      martialstatus: formData.maritalStatus,
      spouse: formData.spouseName,
      uaeresident: formData.uaeResident,
      emiratesid: formData.emiratesId,
      nidorcnicexpiry: formData.expiryDate,
      religion: formData.religion,
      homeaddrss: formData.permanentAddress,
      province: formData.state,
      city: formData.city,
      policeStation: formData.policeStation,
      zip: formData.postalCode,
    };

    console.log(data);

    updateApplicationById({ id: application?.id, data });
  };

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    if (isSuccess) {
      showSuccess("NID/CNIC information updated successful");
      setIsEdit(false);
    }

    if (isError) {
      showError(error?.data);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-6 xl:col-span-7"
      >
        <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-[24px]">
            <h2 className="text-[18px] leading-[27px] font-semibold">
              NID/CNIC information
            </h2>

            <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
          </div>

          {/* Main component */}
          {isEdit ? (
            <div>
              <InputField
                name="nidNumber"
                label="NID/CNIC Number"
                type="number"
                placeholder="Enter your nid/cnic number"
                register={register}
                required
                rules={{
                  required: "NID/CNIC number is required",
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters",
                  },
                }}
                errors={errors}
              />

              <div className="pt-4">
                <RadioInput
                  name="maritalStatus"
                  label="Marital Status"
                  options={[
                    { label: "Married", value: "married" },
                    { label: "Unmarried", value: "unmarried" },
                    { label: "Divorced", value: "divorced" },
                  ]}
                  register={register}
                  required
                  rules={{ required: "Please select an option" }}
                  errors={errors}
                />
              </div>

              <div className="pt-4">
                <InputField
                  name="spouseName"
                  label="Spouse Name"
                  type="text"
                  placeholder="Enter your spouse name"
                  register={register}
                  required
                  rules={{
                    required: "Spouse name is required",
                    maxLength: {
                      value: 50,
                      message: "Maximum length is 50 characters",
                    },
                  }}
                  errors={errors}
                />
              </div>

              <div className="pt-4">
                <RadioInput
                  name="uaeResident"
                  label="UAE Resident"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                  register={register}
                  required
                  rules={{ required: "Please select an option" }}
                  errors={errors}
                />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <InputField
                  name="emiratesId"
                  label="Emirates ID"
                  type="number"
                  placeholder="Enter your emirates id"
                  register={register}
                  required
                  rules={{
                    required: "Emirates id is required",
                    maxLength: {
                      value: 20,
                      message: "Maximum length is 20 characters",
                    },
                  }}
                  errors={errors}
                />

                <InputField
                  name="expiryDate"
                  label="Expiry Date"
                  type="date"
                  placeholder="Enter your expiry date"
                  register={register}
                  required
                  rules={{
                    required: "Expiry date is required",
                  }}
                  errors={errors}
                />
              </div>

              <div className="pt-4">
                <SelectInput
                  name="religion"
                  label="Religion"
                  placeholder="Select Religion"
                  required={true}
                  options={[{ value: "Islam", label: "Islam" }]}
                  control={control}
                  rules={{ required: "Religion is required" }}
                  errors={errors}
                />
              </div>

              <div className="pt-4">
                <InputField
                  name="permanentAddress"
                  label="Permanent Address"
                  type="text"
                  placeholder="Enter your permanent address"
                  register={register}
                  required
                  rules={{
                    required: "Permanent address is required",
                  }}
                  errors={errors}
                />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <SelectInput
                  name="state"
                  label="State/Province"
                  placeholder="Select State/Province"
                  required={true}
                  options={[
                    { value: "Dhaka", label: "Dhaka" },
                    { value: "Cumilla", label: "Cumilla" },
                  ]}
                  control={control}
                  rules={{ required: "State/Province is required" }}
                  errors={errors}
                />

                <SelectInput
                  name="city"
                  label="City"
                  placeholder="Select City"
                  required={true}
                  options={[
                    { value: "Dhaka", label: "Dhaka" },
                    { value: "Cumilla", label: "Cumilla" },
                  ]}
                  control={control}
                  rules={{ required: "City is required" }}
                  errors={errors}
                />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <InputField
                  name="policeStation"
                  label="Police Station"
                  type="text"
                  placeholder="Enter police station address"
                  register={register}
                  required
                  rules={{
                    required: "Police station address is required",
                  }}
                  errors={errors}
                />
                <InputField
                  name="postalCode"
                  label="Postal Code"
                  type="number"
                  placeholder="Enter your postal code"
                  register={register}
                  required
                  rules={{
                    required: "Postal code is required",
                    maxLength: {
                      value: 6,
                      message: "Maximum length is 6 characters",
                    },
                  }}
                  errors={errors}
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
      </form>

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
