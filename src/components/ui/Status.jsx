import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusVariant = cva(
  "rounded-[50px] text-white absolute right-2 top-2 inline-block text-white rounded-[32px] p-[3px_8px] text-[12px] font-medium capitalize",
  {
    variants: {
      variant: {
        hired: "bg-primary-600",
        pending: "bg-pink-500",
        accepted: "bg-green-500",
        rejected: "bg-red-500",
        new_entry: "bg-purple-500",
        under_review: "bg-yellow-300",

        checked: "",
        editted: "",
        invited: "",
        shortlisted: "",
        offer_extended: "",
        offer_declined: "",
        reschedule_requested: "",
        called: "",
      },
    },
    defaultVariants: {
      variant: "new_entry",
    },
  }
);

const Status = React.forwardRef(({ className, variant, ...props }, ref) => {
  const Comp = "p";

  console.log(variant);

  return (
    <Comp
      className={cn(statusVariant({ variant, className }))}
      ref={ref}
      {...props}
    >
      {variant?.replace("_", " ")}
    </Comp>
  );
});

Status.displayName = "Status";

export { Status, statusVariant };
