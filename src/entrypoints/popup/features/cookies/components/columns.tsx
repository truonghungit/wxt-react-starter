import { ColumnDef } from "@tanstack/react-table";
// import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox';
// import { labels, priorities, statuses } from '../data/data'
// import { Task } from '../data/schema'

import { CookieItem } from "../types/cookie";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<CookieItem>[] = [
  {
    id: "select",
    size: 32,
    maxSize: 32,
    minSize: 32,
    enableSorting: false,
    enableHiding: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] cursor-pointer"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] cursor-pointer"
      />
    ),
  },
  {
    accessorKey: "name",
    enableSorting: true,
    enableHiding: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <div className="w-full truncate">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "value",
    enableSorting: true,
    enableHiding: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Value" />,
    cell: ({ row }) => (
      <div className="w-full truncate">{row.getValue("value")}</div>
    ),
  },
  {
    accessorKey: "domain",
    enableSorting: true,
    enableHiding: true,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Domain" />
    ),
    cell: ({ row }) => <div className="w-full truncate">{row.getValue("domain")}</div>,
  },
  {
    accessorKey: "path",
    enableSorting: true,
    enableHiding: true,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Path" />,
    cell: ({ row }) => <div className="w-full truncate">{row.getValue("path")}</div>,
  },
  {
    id: "actions",
    size: 40,
    maxSize: 40,
    minSize: 40,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
