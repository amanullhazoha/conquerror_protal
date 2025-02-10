import { ErrorMessage, Field, Form, Formik } from "formik";
import { Mail } from "lucide-react";
import * as yup from "yup";
import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";
import EmailEditor from "./EmailEditor";


const schema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});

export default function EmailModalContent() {


    const initialValues = {
        subject: "",
        message: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="p-5">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="space-y-4">
                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full py-1.5 px-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-slate-400"
                                placeholder="Enter subject"
                            />
                            <ErrorMessage
                                name="subject"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <EmailEditor setFieldValue={setFieldValue} />
                            <ErrorMessage
                                name="message"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <DialogTrigger asChild>
                                <Button variant="outline" className="rounded-full">Cancel</Button>
                            </DialogTrigger>
                            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-600/80 rounded-full"><Mail />Send Email</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
