import * as React from "react"
import { cn } from "../../libs/cn"

const Table = React.forwardRef<HTMLTableElement,React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm", className)}
            {...props}
        />
    </div>
))

const TableHeader = React.forwardRef<HTMLTableSectionElement,React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn("border-b select-none", className)} {...props} />
))

const TableBody = React.forwardRef<HTMLTableSectionElement,React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tbody
    ref={ref}
    className={cn("select-none", className)}
    {...props}
    />
))

const TableFooter = React.forwardRef<HTMLTableSectionElement,React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",className)}
        {...props}
    />
))

const TableRow = React.forwardRef<HTMLTableRowElement,React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn("border-b",className)}
        {...props}
    />
))

const TableHead = React.forwardRef<HTMLTableCellElement,React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn("h-14 px-2 text-left align-middle font-bold uppercase",className)}
        {...props}
    />
))

const TableCell = React.forwardRef<HTMLTableCellElement,React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn( "p-2.5 align-middle", className)}
        {...props}
    />
))

const TableCaption = React.forwardRef<HTMLTableCaptionElement,React.HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-muted-foreground", className)}
        {...props}
    />
))

Table.displayName = "Table"
TableHeader.displayName = "TableHeader"
TableBody.displayName = "TableBody"
TableFooter.displayName = "TableFooter"
TableRow.displayName = "TableRow"
TableHead.displayName = "TableHead"
TableCell.displayName = "TableCell"
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
