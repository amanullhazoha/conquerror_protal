/* eslint-disable no-unused-vars */
import { format } from 'date-fns'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import Cash from '@/assets/icons/Cash'
import BD, { USA } from '@/assets/icons/flagIcons'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'


// Types for the form values
// interface FormValues {
//   totalPayableAmount: number
//   discountType: 'code' | 'coupon' | 'amount'
//   discountValue: string
//   depositAmount: number
//   paymentDate: {
//     day: string
//     month: string
//     year: string
//   }
//   paymentReceived: 'cash' | 'bank'
// }

// Validation schema
const validationSchema = Yup.object().shape({
    totalPayableAmount: Yup.number()
        .required('Total payable amount is required')
        .positive('Amount must be positive'),
    discountType: Yup.string()
        .oneOf(['code', 'coupon', 'amount'], 'Invalid discount type'),
    discountValue: Yup.string()
        .when('discountType', {
            is: 'amount',
            then: Yup.string().matches(/^\d+$/, 'Must be a number'),
        }),
    depositAmount: Yup.number()
        .required('Deposit amount is required')
        .positive('Amount must be positive'),
    paymentDate: Yup.object().shape({
        day: Yup.string().required('Day is required'),
        month: Yup.string().required('Month is required'),
        year: Yup.string().required('Year is required'),
    }),
    paymentReceived: Yup.string()
        .oneOf(['cash', 'bank'], 'Invalid payment method')
        .required('Payment method is required'),
})

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

const years = ['2023', '2024', '2025', '2026', '2027']

const availableCoupons = [
    { label: 'SAVE10', value: 'SAVE10' },
    { label: 'SAVE20', value: 'SAVE20' },
    { label: 'WELCOME', value: 'WELCOME' },
]

export default function DepositForm() {
    const [discountType, setDiscountType] = useState('code')

    const initialValues = {
        totalPayableAmount: 0,
        discountType: 'code',
        discountValue: '',
        depositAmount: 0,
        paymentDate: {
            day: format(new Date(), 'dd'),
            month: format(new Date(), 'MMM'),
            year: format(new Date(), 'yyyy'),
        },
        paymentReceived: 'cash',
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    const handleReset = (resetForm) => {
        resetForm()
    }

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-none">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, resetForm }) => (
                    <Form>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-2xl font-bold">Deposit Details</CardTitle>
                            <div className="flex gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => handleReset(resetForm)}
                                    className="rounded-full"
                                >
                                    Undo changes
                                </Button>
                                <Button type="submit" variant="outline" className="rounded-full text-blue-600 border-blue-600 hover:text-blue-500">
                                    Submit
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Total Payable Amount */}
                            <div className="space-y-2">
                                <Label>
                                    Total Payable Amount <span className="text-red-500">*</span>
                                </Label>
                                <div className="flex gap-2">
                                    <Field name="totalPayableAmount">
                                        {({ field }) => (
                                            <div className="relative flex-1">
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    placeholder="Enter amount"
                                                    className="pl-8 rounded-lg"
                                                />
                                                <Cash className="absolute top-1/2 -translate-y-1/2 left-2" />
                                            </div>
                                        )}
                                    </Field>
                                    <Select defaultValue="USD">
                                        <SelectTrigger className="w-[100px] rounded-lg">
                                            <SelectValue placeholder="Currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">
                                                <div className="flex items-center">
                                                    <USA />
                                                    <span className="ml-2">USD</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="BDT">
                                                <div className="flex items-center">
                                                    <BD />
                                                    <span className="ml-2">BDT</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.totalPayableAmount && touched.totalPayableAmount && (
                                    <div className="text-red-500 text-sm">{errors.totalPayableAmount}</div>
                                )}
                            </div>

                            {/* Discount Section */}
                            <div className="space-y-2">
                                <Label>Discount Type</Label>
                                <div className="flex gap-2">
                                    <Select
                                        defaultValue={discountType}
                                        onValueChange={(value) => setDiscountType(value)}
                                    >
                                        <SelectTrigger className="w-[120px] focus:ring-0 rounded-lg">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="code">Code</SelectItem>
                                            <SelectItem value="coupon">Coupon</SelectItem>
                                            <SelectItem value="amount">Amount</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="flex flex-1">
                                        {discountType === 'code' && (
                                            <Field name="discountValue">
                                                {({ field }) => (
                                                    <Input {...field} placeholder="Enter Code" className="rounded-r-none rounded-l-lg focus-visible:ring-0" />
                                                )}
                                            </Field>
                                        )}

                                        {discountType === 'coupon' && (
                                            <Select>
                                                <SelectTrigger className="rounded-r-none rounded-l-lg focus-visible:ring-0">
                                                    <SelectValue placeholder="Select coupon" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {availableCoupons.map((coupon) => (
                                                        <SelectItem key={coupon.value} value={coupon.value}>
                                                            {coupon.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}

                                        {discountType === 'amount' && (
                                            <Field name="discountValue">
                                                {({ field }) => (
                                                    <Input {...field} type="number" placeholder="Enter amount" className="rounded-r-none rounded-l-lg focus-visible:ring-0" />
                                                )}
                                            </Field>
                                        )}
                                        <Button type="button" className="rounded-l-none rounded-r-xl bg-blue-500 hover:bg-blue-500/80">Apply</Button>
                                    </div>
                                </div>
                            </div>

                            {/* Deposit Amount */}
                            <div className="space-y-2">
                                <Label>Deposit Amount</Label>
                                <div className="flex gap-2">
                                    <Field name="depositAmount">
                                        {({ field }) => (
                                            // <Input
                                            //     {...field}
                                            //     type="number"
                                            //     placeholder="Enter amount"
                                            //     className="flex-1"
                                            // />
                                            <div className="relative flex-1">
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    placeholder="Enter amount"
                                                    className="pl-8"
                                                />
                                                <Cash className="absolute top-1/2 -translate-y-1/2 left-2" />
                                            </div>
                                        )}
                                    </Field>
                                    <Select defaultValue="USD">
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue placeholder="Currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">
                                                <div className="flex items-center">
                                                    <USA />
                                                    <span className="ml-2">USD</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="BDT">
                                                <div className="flex items-center">
                                                    <BD />
                                                    <span className="ml-2">BDT</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {errors.depositAmount && touched.depositAmount && (
                                    <div className="text-red-500 text-sm">{errors.depositAmount}</div>
                                )}
                            </div>

                            {/* Payment Date */}
                            <div className="space-y-2">
                                <Label>
                                    Payment Date <span className="text-red-500">*</span>
                                </Label>
                                <div className="flex gap-2">
                                    <Select
                                        defaultValue={initialValues.paymentDate.day}
                                        onValueChange={(value) => {
                                            // Handle day change
                                        }}
                                    >
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {days.map((day) => (
                                                <SelectItem key={day} value={day}>
                                                    {day}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select
                                        defaultValue={initialValues.paymentDate.month}
                                        onValueChange={(value) => {
                                            // Handle month change
                                        }}
                                    >
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {months.map((month) => (
                                                <SelectItem key={month} value={month}>
                                                    {month}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select
                                        defaultValue={initialValues.paymentDate.year}
                                        onValueChange={(value) => {
                                            // Handle year change
                                        }}
                                    >
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {years.map((year) => (
                                                <SelectItem key={year} value={year}>
                                                    {year}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Payment Received */}
                            <div className="space-y-2">
                                <Label>
                                    Payment Received <span className="text-red-500">*</span>
                                </Label>
                                <Field name="paymentReceived">
                                    {({ field }) => (
                                        <RadioGroup
                                            defaultValue={field.value}
                                            onValueChange={field.onChange}
                                            className="flex gap-4"
                                        >
                                            <div className="flex items-center">
                                                <RadioGroupItem className="" value="cash" id="cash-payment" />
                                                <Label htmlFor="cash-payment" className="p-2 cursor-pointer">Cash</Label>
                                            </div>
                                            <div className="flex items-center">
                                                <RadioGroupItem value="bank" id="bank" />
                                                <Label htmlFor="bank" className="p-2 cursor-pointer">Bank</Label>
                                            </div>
                                        </RadioGroup>
                                    )}
                                </Field>
                                {errors.paymentReceived && touched.paymentReceived && (
                                    <div className="text-red-500 text-sm">{errors.paymentReceived}</div>
                                )}
                            </div>
                        </CardContent>
                    </Form>
                )}
            </Formik>
        </Card>
    )
}

