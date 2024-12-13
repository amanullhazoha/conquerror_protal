"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, MoreHorizontal } from 'lucide-react';
import { StatusBadge } from "./status-badge";
import userAvatar from "@/assets/images/user.png"
console.log(userAvatar)

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all" />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "sl",
    header: "SL",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        (<div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={row.original.avatar || userAvatar} alt={row.original.name} />
            <AvatarFallback>{row.original.name[0]}</AvatarFallback>
          </Avatar>
          <span>{row.original.name}</span>
        </div>)
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email & Phone",
    cell: ({ row }) => {
      return (
        (<div className="flex flex-col">
          <span>{row.original.email}</span>
          <span className="text-sm text-muted-foreground">
            {row.original.phone}
          </span>
        </div>)
      );
    },
  },
  {
    accessorKey: "submitDate",
    header: ({ column }) => {
      return (
        (<Button
          className="p-0 hover:bg-transparent hover:text-blue-500"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Submit Date & Time
          <ChevronsUpDown />
        </Button>)
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.submitDate)
      return (
        (<div className="flex flex-col">
          <span>{date.toLocaleDateString()}</span>
          <span className="text-sm text-muted-foreground">
            {date.toLocaleTimeString()}
          </span>
        </div>)
      );
    },
  },
  {
    accessorKey: "paymentDate",
    header: ({ column }) => {
      return (
        (<Button
          className="p-0 hover:bg-transparent hover:text-blue-500"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Payment Date & Time
          <ChevronsUpDown />
        </Button>)
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.original.paymentDate)
      return (
        (<div className="flex flex-col">
          <span>{date.toLocaleDateString()}</span>
          <span className="text-sm text-muted-foreground">
            {date.toLocaleTimeString()}
          </span>
        </div>)
      );
    },
  },
  {
    accessorKey: "paymentType",
    header: ({ column }) => {
      return (
        (<Button
          className="p-0 hover:bg-transparent hover:text-blue-500"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Payment Type
          <ChevronsUpDown />
        </Button>)
      );
    },
  },
  {
    accessorKey: "refAgency",
    header: "Ref/Agency",
  },
  {
    accessorKey: "passport",
    header: "Passport",
  },
  {
    accessorKey: "walletBalance",
    header: ({ column }) => {
      return (
        (<Button
          className="p-0 hover:bg-transparent hover:text-blue-500"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Wallet Balance
          <ChevronsUpDown />
        </Button>)
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("walletBalance"))
      const formatted = new Intl.NumberFormat("en-AE", {
        style: "currency",
        currency: "AED",
      }).format(amount)

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        (<StatusBadge status={status} className="capitalize" />)
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        (<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-[#EBF5FF] hover:text-[#3F83F8]">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4 rotate-90" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>View payment history</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>)
      );
    },
  },
]

