import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Globe } from 'lucide-react'
import * as React from "react"

const timezones = [
    { value: "asia-dhaka", label: "Asia/Dhaka" },
    { value: "america-new_york", label: "America/New York" },
    { value: "europe-london", label: "Europe/London" },
    { value: "asia-tokyo", label: "Asia/Tokyo" },
    { value: "australia-sydney", label: "Australia/Sydney" },
]
console.log(timezones)
export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("asia-dhaka")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#475467]" />
                        <span>{timezones?.find((timezone) => timezone.value === value)?.label}</span>
                    </div>
                    <span className="text-[#F04438] ml-1">*</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search timezone..." />
                    <CommandEmpty>No timezone found.</CommandEmpty>
                    <CommandGroup>
                        {timezones?.map((timezone) => (
                            <CommandItem
                                key={timezone.value}
                                value={timezone.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {timezone.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

