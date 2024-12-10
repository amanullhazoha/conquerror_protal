import { Check, ChevronDown, Globe } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const timezones = [
    { value: "asia-dhaka", label: "Asia/Dhaka" },
    { value: "america-new_york", label: "America/New York" },
    { value: "europe-london", label: "Europe/London" },
    { value: "asia-tokyo", label: "Asia/Tokyo" },
    { value: "australia-sydney", label: "Australia/Sydney" },
]

export function TimezoneCombo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild id="timezone">
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    <div className="flex justify-between items-center gap-2 w-full">
                        <Globe className="w-5 h-5 text-[#475467]" />
                        {value
                            ? timezones.find((timezone) => timezone.value === value)?.label
                            : "Select timezone..."}
                        <ChevronDown size={14} />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search timezone..." />
                    <CommandList>
                        <CommandEmpty>No timezone found.</CommandEmpty>
                        <CommandGroup>
                            {timezones.map((timezone) => (
                                <CommandItem
                                    key={timezone.value}
                                    value={timezone.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === timezone.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {timezone.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
