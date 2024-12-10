import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from "react"
import { Combobox } from "./combobox"
// import { Combobox } from "./combobox"
import logo from "@/assets/images/conqueror_logo.png"

export default function ScheduleInterview() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1)) // November 2024
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

    const days = Array.from({ length: 42 }, (_, i) => {
        const day = i - firstDayOfMonth + 1
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        return { date, status: getDateStatus(date) }
    }).filter(day => day !== undefined);

    function getDateStatus(date) {
        if (date.getMonth() !== currentDate.getMonth()) return "other-month"
        if (date.getDate() === 23) return "light-blue"
        if (date.getDate() === 18) return "light-pink"
        if (selectedDate && date.toDateString() === selectedDate.toDateString()) return "selected"
        return "normal"
    }

    const timeSlots = Array.from({ length: 8 }, (_, i) => `${9 + i}:00${i < 3 ? 'am' : 'pm'}`)

    const navigateMonth = (direction = "next") => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + (direction === 'next' ? 1 : -1), 1))
    }

    useEffect(() => {
        setSelectedDate(null)
        setSelectedTime(null)
    }, [currentDate])

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-[640px] bg-white rounded-[20px] p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-[24px] font-semibold text-[#1D2939] mb-1">Reschedule Your Interview</h1>
                        <p className="text-[#475467]">Pick a new date and time that works for you.</p>
                    </div>
                    <img
                        src={logo}
                        alt="Conqueror Services LLC"
                        width={150}
                        height={40}
                        className="mt-1"
                    />
                </div>
                <div className="flex gap-8">
                    {/* Calendar Section */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => navigateMonth('prev')}>
                                <ChevronLeft className="w-5 h-5 text-[#344054]" />
                            </button>
                            <span className="text-[#344054] font-medium">
                                {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </span>
                            <button className="p-2 hover:bg-gray-100 rounded-full" onClick={() => navigateMonth('next')}>
                                <ChevronRight className="w-5 h-5 text-[#344054]" />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 gap-y-2">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <div key={day} className="text-center text-sm text-[#475467]">
                                    {day}
                                </div>
                            ))}
                            {days?.map(({ date, status }, index) => (
                                <button
                                    key={index}
                                    className={`h-8 w-8 rounded-full text-sm flex items-center justify-center ${status === "selected"
                                        ? "bg-[#2E90FA] text-white"
                                        : status === "light-blue"
                                            ? "bg-[#EFF8FF] text-[#2E90FA]"
                                            : status === "light-pink"
                                                ? "bg-[#FEE4E2] text-[#F04438]"
                                                : status === "other-month"
                                                    ? "text-[#D0D5DD]"
                                                    : "text-[#344054] hover:bg-gray-100"
                                        }`}
                                    onClick={() => setSelectedDate(date)}
                                    disabled={status === "other-month"}
                                >
                                    {date.getDate()}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Time Slots Section */}
                    <div className="flex-1">
                        <div className="text-[#344054] font-medium mb-4">
                            {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Select a date'}
                        </div>
                        <div className="space-y-3">
                            {selectedDate && timeSlots?.map((time, index) => (
                                <div key={index} className="flex gap-2">
                                    <button
                                        className={`flex-1 py-2 px-4 rounded-[8px] border ${selectedTime === time
                                            ? "bg-[#1D2939] text-white border-[#1D2939]"
                                            : "border-[#D0D5DD] text-[#344054] hover:bg-gray-50"
                                            }`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </button>
                                    {selectedTime === time && (
                                        <button className="bg-[#2E90FA] text-white px-4 py-2 rounded-[8px] font-medium">
                                            Submit
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Combobox />
                </div>
            </div>
        </div>
    )
}

