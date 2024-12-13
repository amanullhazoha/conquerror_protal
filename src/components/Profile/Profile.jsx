import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
("use client");

import SendIcon from "@/assets/icons/SendIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ArrowLeft, Calendar, Mail, UserPlus, Verified, Wallet } from "lucide-react";
import * as yup from "yup";
import EmailEditor from "./EmailEditor";

const user = {
    name: "Abu Taher Molla",
    phone: "+880 1770 066 585",
    email: "molla.ux@gmail.com",
    avatar: "/placeholder.svg",
    submissionDate: new Date("2024-07-28T03:00:00"),
    submissionId: "7845545545",
    refCode: "WZ1990ZN12",
    refName: "Zahid Bin Sultan",
    status: "Hold",
    wallet: {
        totalPayable: 522,
        discount: 522,
        balance: 522,
        receivable: 522,
    },
};

const schema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});

export function UserProfile() {
    const formatCurrency = (amount) => {
        return `AED ${amount}`;
    };
    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    };

    const initialValues = {
        subject: "",
        message: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* actual profile */}
            <div className="max-w-md mx-auto p-8 bg-blue-200/50 rounded-3xl">
                <div className="mb-6">
                    <Button
                        variant="outline"
                        onClick={() => history.back()}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground rounded-full"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to payment list
                    </Button>
                </div>

                <div className="relative p-6 rounded-3xl bg-gradient-to-tr from-white via-white to-[#C3FFB7]">
                    <Badge
                        variant="secondary"
                        className="absolute right-4 top-4 bg-pink-500 text-white hover:bg-pink-500 rounded-full"
                    >
                        {user.status}
                    </Badge>

                    <div className="flex gap-3 mb-8">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-semibold text-lg mb-1">{user.name}</h2>
                            <p className="text-sm text-muted-foreground">{user.phone}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            Submitted: {formatDate(user.submissionDate)}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <UserPlus className="h-4 w-4" />
                            Submission ID: {user.submissionId}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Verified className="h-4 w-4" />
                            Ref Code: {user.refCode}
                            <div className="ml-2 font-normal bg-white py-1 px-3 border rounded-full">
                                {user.refName}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-2xl">
                        <div className="flex items-center gap-2 mb-4 p-4">
                            <Wallet className="h-5 w-5" />
                            <span className="font-medium">Wallet</span>
                        </div>

                        <div className="space-y-3 text-sm p-4">
                            <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">
                                    Total payable amount
                                </span>
                                <span>{formatCurrency(user.wallet.totalPayable)}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">Discount</span>
                                <span>{formatCurrency(user.wallet.discount)}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">Wallet balance</span>
                                <span>{formatCurrency(user.wallet.balance)}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">Receivable amount</span>
                                <span>{formatCurrency(user.wallet.receivable)}</span>
                            </div>
                        </div>

                        <div className="text-sm pt-3 border-t flex justify-end gap-4 font-medium p-4">
                            <span className="text-muted-foreground">Total Due:</span>
                            <span>{formatCurrency(user.wallet.totalPayable)}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex-1 bg-white hover:bg-gray-50 rounded-full"
                                >
                                    Request for credit <SendIcon className="rotate" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Send email to molla.ux@gmail.com</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete
                                        your account and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
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
                                                    className="w-full py-1.5 px-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
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
                            </DialogContent>
                        </Dialog>

                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-full">
                            + Add payment
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
