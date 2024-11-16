import { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import InputFieldNew from "../inputs/InputFielNew";
import DateInputField from "../inputs/DateInputField";
import SelectInputField from "../inputs/SelectInputField";
import { countries, timeZones } from "@/assets/staticData/countryInfo";
import InputTextareaField from "../inputs/InputTextareaField";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";
import { getStatesByCountry, getCitiesByState } from "@/lib/addressFind";

const MeetingModal = ({ openModal, setOpenModal }) => {
  const [interviewType, setInterviewType] = useState("in-person");

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
            Schedule with molla bhai
          </DialogTitle>
        </DialogHeader>

        {interviewType === "in-person" ? (
          <Formik
            initialValues={{
              name: "aman",
              nationality: "",
            }}
            onSubmit={(values) => console.log(values, "submit")}
          >
            {({ handleSubmit, errors, touched, values, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 border-t border-b py-3 px-6">
                  <div className="col-span-2">
                    <label className="text-sm text-[#27303F] font-medium">
                      Format <span className="text-[#F04438]">*</span>
                    </label>

                    <div className="flex gap-4 mt-2">
                      <button
                        type="button"
                        onClick={() => setInterviewType("in-person")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1A56DB] text-white text-sm font-medium border border-transparent"
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
                            fill="#6B7280"
                          />
                        </svg>
                        In-person
                      </button>

                      <button
                        type="button"
                        onClick={() => setInterviewType("online")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white text-[#6B7280] text-sm font-medium border border-[#6B7280]"
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
                            fill="#6B7280"
                          />
                        </svg>
                        Online
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      touched={touched}
                      keyValue="name"
                      items={countries}
                      name="nationality"
                      label="Country"
                      value={values.nationality}
                      placeholder="Select Country"
                      handleSelect={(item) =>
                        setFieldValue("nationality", item.name)
                      }
                    />
                  </div>

                  <div className="col-span-2">
                    <InputFieldNew
                      errors={errors}
                      touched={touched}
                      name="homeaddrss"
                      label="Interview address"
                      placeholder="Enter address"
                    />
                  </div>

                  <SelectInputField
                    errors={errors}
                    name="province"
                    keyValue="name"
                    touched={touched}
                    placeholder="Select"
                    value={values?.province}
                    label="State / Province"
                    items={getStatesByCountry(values?.nationality)}
                    handleSelect={(item) =>
                      setFieldValue("province", item.name)
                    }
                  />

                  <SelectInputField
                    errors={errors}
                    name="city"
                    keyValue="name"
                    touched={touched}
                    value={values?.city}
                    placeholder="Select"
                    label="City / District"
                    items={getCitiesByState(values?.province)}
                    handleSelect={(item) => setFieldValue("city", item.name)}
                  />

                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="policeStation"
                    label="Police station"
                    placeholder="Enter police station"
                  />

                  <InputFieldNew
                    errors={errors}
                    touched={touched}
                    name="zip"
                    label="Post office"
                    placeholder="Enter post office"
                  />

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="city"
                      keyValue="name"
                      touched={touched}
                      value={values?.city}
                      placeholder="Select"
                      label="Required Document"
                      items={getCitiesByState(values?.province)}
                      handleSelect={(item) => setFieldValue("city", item.name)}
                    />
                  </div>

                  <div className="col-span-2">
                    <InputTextareaField
                      label="Note"
                      type="textarea"
                      errors={errors}
                      name="reference"
                      required={false}
                      touched={touched}
                      className="h-[100px]"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="city"
                      keyValue="timeZone"
                      touched={touched}
                      value={values?.city}
                      placeholder="Select"
                      label="Time zone"
                      items={timeZones}
                      handleSelect={(item) =>
                        setFieldValue("city", item.timeZone)
                      }
                    />
                  </div>

                  <DateInputField
                    errors={errors}
                    pervDate={false}
                    touched={touched}
                    name="date_of_birth"
                    label="Date"
                    value={values?.date_of_birth}
                    handleSelect={(date) =>
                      setFieldValue("date_of_birth", date)
                    }
                  />

                  <InputFieldNew
                    type="time"
                    errors={errors}
                    touched={touched}
                    name="policeStation"
                    label="Police station"
                    placeholder="Enter police station"
                  />
                </div>

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
                    className="rounded-full hover:bg-transparent font-medium border-[#046C4E] text-[#046C4E] hover:text-[#046C4E]"
                  >
                    Send Interview Invite
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              name: "aman",
              nationality: "",
            }}
            onSubmit={(values) => console.log(values, "submit")}
          >
            {({ handleSubmit, errors, touched, values, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 border-t border-b py-3 px-6">
                  <div className="col-span-2">
                    <label className="text-sm text-[#27303F] font-medium">
                      Format <span className="text-[#F04438]">*</span>
                    </label>

                    <div className="flex gap-4 mt-2">
                      <button
                        type="button"
                        onClick={() => setInterviewType("in-person")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1A56DB] text-white text-sm font-medium border border-transparent"
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
                            fill="#6B7280"
                          />
                        </svg>
                        In-person
                      </button>

                      <button
                        type="button"
                        onClick={() => setInterviewType("online")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white text-[#6B7280] text-sm font-medium border border-[#6B7280]"
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
                            fill="#6B7280"
                          />
                        </svg>
                        Online
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <InputFieldNew
                      errors={errors}
                      disabled={true}
                      touched={touched}
                      name="homeaddrss"
                      label="Zoom Link"
                      placeholder="Enter address"
                    />
                  </div>

                  <div className="col-span-2">
                    <InputTextareaField
                      label="Note"
                      type="textarea"
                      errors={errors}
                      name="reference"
                      required={false}
                      touched={touched}
                      className="h-[100px]"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="col-span-2">
                    <SelectInputField
                      errors={errors}
                      name="city"
                      keyValue="timeZone"
                      touched={touched}
                      value={values?.city}
                      placeholder="Select"
                      label="Time zone"
                      items={timeZones}
                      handleSelect={(item) =>
                        setFieldValue("city", item.timeZone)
                      }
                    />
                  </div>

                  <DateInputField
                    errors={errors}
                    pervDate={false}
                    touched={touched}
                    name="date_of_birth"
                    label="Date"
                    value={values?.date_of_birth}
                    handleSelect={(date) =>
                      setFieldValue("date_of_birth", date)
                    }
                  />

                  <InputFieldNew
                    type="time"
                    errors={errors}
                    touched={touched}
                    name="policeStation"
                    label="Police station"
                    placeholder="Enter police station"
                  />
                </div>

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
                    className="rounded-full hover:bg-transparent font-medium border-[#046C4E] text-[#046C4E] hover:text-[#046C4E]"
                  >
                    Send Interview Invite
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
