import { Formik, Form } from "formik";
import useToast from "@/hooks/useToast";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import InputFieldNew from "../inputs/InputFielNew";
import TimeInputField from "../inputs/TimeInputField";
import DateInputField from "../inputs/DateInputField";
import SelectInputField from "../inputs/SelectInputField";
import InputTextareaField from "../inputs/InputTextareaField";
import { countries, timeZones } from "@/assets/staticData/countryInfo";
import { getStatesByCountry, getCitiesByState } from "@/lib/addressFind";
import {
  useCreateZoomMeetingByUserIdMutation,
  useCreateInPersonMeetingByUserIdMutation,
} from "@/redux/features/applications/applications";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import {
  onlineInterviewSchema,
  inPersonInterviewSchema,
} from "@/schema/application/interviewInvitaion.schema";

const ModalHeader = ({ interviewType, setInterviewType }) => {
  return (
    <div className="col-span-2">
      <label className="text-sm text-[#27303F] font-medium">
        Format <span className="text-[#F04438]">*</span>
      </label>

      <div className="flex gap-4 mt-2">
        <button
          type="button"
          onClick={() => setInterviewType("in-person")}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border ${
            interviewType === "in-person"
              ? "bg-[#1A56DB] text-white border-transparent"
              : "bg-white text-[#6B7280] border-[#6B7280]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill={interviewType === "in-person" ? "#ffff" : "#6B7280"}
              d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12L4.00738 12.3463L4.03275 12.7283C4.12433 13.7422 4.4066 14.7186 4.86169 15.6153L4.925 15.735L4.01493 19.3787L4.00114 19.4624L4.00131 19.5438C4.02622 19.8369 4.31127 20.0625 4.62109 19.9851L8.266 19.075L8.38669 19.1393C9.49591 19.7018 10.7268 20 12 20C16.4183 20 20 16.4183 20 12ZM8 10C8 9.44772 8.44772 9 9 9H12C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15H9C8.44772 15 8 14.5523 8 14V10ZM15.1464 9.85355C15.4614 9.53857 16 9.76165 16 10.2071V13.7929C16 14.2383 15.4614 14.4614 15.1464 14.1464L14 13V11L15.1464 9.85355Z"
            />
          </svg>
          In-person
        </button>

        <button
          type="button"
          onClick={() => setInterviewType("online")}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium border ${
            interviewType === "online"
              ? "bg-[#1A56DB] text-white border-transparent"
              : "bg-white text-[#6B7280] border-[#6B7280]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12L4.00738 12.3463L4.03275 12.7283C4.12433 13.7422 4.4066 14.7186 4.86169 15.6153L4.925 15.735L4.01493 19.3787L4.00114 19.4624L4.00131 19.5438C4.02622 19.8369 4.31127 20.0625 4.62109 19.9851L8.266 19.075L8.38669 19.1393C9.49591 19.7018 10.7268 20 12 20C16.4183 20 20 16.4183 20 12ZM8 10C8 9.44772 8.44772 9 9 9H12C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15H9C8.44772 15 8 14.5523 8 14V10ZM15.1464 9.85355C15.4614 9.53857 16 9.76165 16 10.2071V13.7929C16 14.2383 15.4614 14.4614 15.1464 14.1464L14 13V11L15.1464 9.85355Z"
              fill={interviewType === "online" ? "#ffff" : "#6B7280"}
            />
          </svg>
          Online
        </button>
      </div>
    </div>
  );
};

const ModalFooter = ({ setOpenModal, isLoading }) => {
  return (
    <div className="flex justify-end gap-4 px-6 pt-6">
      <Button
        variant="outline"
        className="rounded-full font-medium hover:bg-transparent"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        Cancel
      </Button>

      <Button
        type="submit"
        variant="outline"
        disabled={isLoading}
        className="rounded-full font-normal bg-primary-700 text-white flex items-center justify-center gap-2 py-2.5 hover:bg-primary-700 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M1 5.53807V10.5C1 11.6046 1.89543 12.5 3 12.5H11C12.1046 12.5 13 11.6046 13 10.5V4.5C13 3.39543 12.1046 2.5 11 2.5H3C1.89543 2.5 1 3.39543 1 4.5V5.53807C1 5.53809 1 5.53804 1 5.53807ZM3 3.5H11C11.5523 3.5 12 3.94772 12 4.5V5.23987L7.0001 7.93212L2 5.23976V4.5C2 3.94772 2.44772 3.5 3 3.5ZM2 6.37552L6.76305 8.94024C6.91104 9.01992 7.08916 9.01992 7.23715 8.94024L12 6.37562V10.5C12 11.0523 11.5523 11.5 11 11.5H3C2.44772 11.5 2 11.0523 2 10.5V6.37552Z"
            fill="white"
          />
        </svg>
        Send Interview Invite
      </Button>
    </div>
  );
};

const MeetingModal = ({ application, openModal, setOpenModal }) => {
  const { showSuccess, showError } = useToast();

  const [interviewType, setInterviewType] = useState("in-person");

  const [createInPersonMeeting, { isLoading, isSuccess, error, isError }] =
    useCreateInPersonMeetingByUserIdMutation();
  const [
    createOnlineMeeting,
    {
      error: errorOnline,
      isError: isErrorOnline,
      isLoading: loadingOnline,
      isSuccess: successOnline,
    },
  ] = useCreateZoomMeetingByUserIdMutation();

  const handleSubmit = (data) => {
    if (interviewType === "in-person") {
      createInPersonMeeting({ data, id: application.id });
    } else if (interviewType === "online") {
      createOnlineMeeting({ id: application?.id, data });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Create in-person meeting scheduled successfully");

      setOpenModal(false);
    }

    if (isError) {
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (successOnline) {
      showSuccess("Create online meeting scheduled successfully");

      setOpenModal(false);
    }

    if (isErrorOnline) {
      showError(errorOnline?.data?.message);
    }
  }, [successOnline, isErrorOnline]);

  return (
    <Dialog
      open={openModal}
      onOpenChange={() => {
        setOpenModal(false);
        setActiveFile("");
      }}
    >
      <DialogContent className="px-0 max-w-[760px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="pl-4 text-2xl">
            Schedule with {application?.first_name} {application?.last_name}
          </DialogTitle>
        </DialogHeader>

        {interviewType === "in-person" ? (
          <Formik
            initialValues={{
              time: "",
              city: "",
              state: "",
              message: "",
              address: "",
              post_office: "",
              zonecountry: "",
              scheduled_at: "",
              police_station: "",
              required_document: "",
              applicant_id: application?.id,
              interview_method: interviewType,
              nationality: application?.nationality,
            }}
            validationSchema={inPersonInterviewSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, errors, touched, values, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 border-t border-b py-3 px-6">
                  <ModalHeader
                    interviewType={interviewType}
                    setInterviewType={setInterviewType}
                  />

                  <div className="col-span-2">
                    <SelectInputField
                      disabled={true}
                      errors={errors}
                      touched={touched}
                      keyValue="name"
                      items={countries}
                      name="nationality"
                      label="Country"
                      value={values?.nationality}
                      placeholder="Select Country"
                      handleSelect={(item) =>
                        setFieldValue("nationality", item.name)
                      }
                    />
                  </div>

                  <div className="col-span-2">
                    <InputFieldNew
                      name="address"
                      errors={errors}
                      touched={touched}
                      label="Interview address"
                      placeholder="Enter address"
                    />
                  </div>

                  <SelectInputField
                    errors={errors}
                    name="state"
                    keyValue="name"
                    touched={touched}
                    placeholder="Select"
                    value={values?.state}
                    label="State / Province"
                    items={getStatesByCountry(values?.nationality)}
                    handleSelect={(item) => setFieldValue("state", item.name)}
                  />

                  <SelectInputField
                    errors={errors}
                    name="city"
                    keyValue="name"
                    touched={touched}
                    value={values?.city}
                    placeholder="Select"
                    label="City / District"
                    items={getCitiesByState(values?.state)}
                    handleSelect={(item) => setFieldValue("city", item.name)}
                  />

                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="police_station"
                    label="Police station"
                    placeholder="Enter police station"
                  />

                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="post_office"
                    label="Post office"
                    placeholder="Enter post office"
                  />

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="required_document"
                      keyValue="name"
                      touched={touched}
                      value={values?.required_document}
                      placeholder="Select"
                      label="Required Document"
                      items={[
                        { name: "Docs 1", value: "docs_1" },
                        { name: "Docs 2", value: "docs_2" },
                      ]}
                      handleSelect={(item) =>
                        setFieldValue("required_document", item.name)
                      }
                    />
                  </div>

                  <div className="col-span-2">
                    <InputTextareaField
                      label="Note"
                      type="textarea"
                      errors={errors}
                      name="message"
                      required={true}
                      touched={touched}
                      className="h-[100px]"
                      placeholder="Enter your message"
                      onChange={(e) => setFieldValue("message", e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="zonecountry"
                      keyValue="timeZone"
                      touched={touched}
                      value={values?.zonecountry}
                      placeholder="Select"
                      label="Time zone"
                      items={timeZones}
                      handleSelect={(item) =>
                        setFieldValue("zonecountry", item.timeZone)
                      }
                    />
                  </div>

                  <DateInputField
                    label="Date"
                    errors={errors}
                    pervDate={false}
                    touched={touched}
                    name="scheduled_at"
                    value={values?.scheduled_at}
                    handleSelect={(date) => setFieldValue("scheduled_at", date)}
                  />

                  <TimeInputField
                    type="time"
                    name="time"
                    errors={errors}
                    touched={touched}
                    label="Start time"
                    placeholder="Start time"
                  />
                </div>

                <ModalFooter
                  setOpenModal={setOpenModal}
                  isLoading={isLoading}
                />
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              time: "",
              message: "",
              zonecountry: "",
              scheduled_at: "",
              applicant_id: application?.id,
              interview_method: interviewType,
            }}
            validationSchema={onlineInterviewSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, errors, touched, values, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 border-t border-b py-3 px-6">
                  <ModalHeader
                    interviewType={interviewType}
                    setInterviewType={setInterviewType}
                  />

                  {/* <div className="col-span-2">
                    <InputFieldNew
                      errors={errors}
                      disabled={true}
                      touched={touched}
                      name="homeaddrss"
                      label="Zoom Link"
                      placeholder="Enter address"
                    />
                  </div> */}

                  <div className="col-span-2">
                    <InputTextareaField
                      label="Note"
                      type="textarea"
                      errors={errors}
                      name="message"
                      required={true}
                      touched={touched}
                      className="h-[100px]"
                      placeholder="Enter your message"
                      onChange={(e) => setFieldValue("message", e.target.value)}
                    />
                  </div>

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="zonecountry"
                      keyValue="timeZone"
                      touched={touched}
                      value={values?.zonecountry}
                      placeholder="Select"
                      label="Time zone"
                      items={timeZones}
                      handleSelect={(item) =>
                        setFieldValue("zonecountry", item.timeZone)
                      }
                    />
                  </div>

                  <DateInputField
                    label="Date"
                    errors={errors}
                    pervDate={false}
                    touched={touched}
                    name="scheduled_at"
                    value={values?.scheduled_at}
                    handleSelect={(date) => setFieldValue("scheduled_at", date)}
                  />

                  <TimeInputField
                    type="time"
                    name="time"
                    errors={errors}
                    touched={touched}
                    label="Start time"
                    placeholder="Start time"
                  />
                </div>

                <ModalFooter
                  setOpenModal={setOpenModal}
                  isLoading={loadingOnline}
                />
              </Form>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
