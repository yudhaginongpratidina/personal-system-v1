import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/UI/Table";
import { BsPencilFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

export default function UsersPage() {
    return (
        <>
            <div className="w-full p-6 min-h-screen flex justify-center bg-gray-100">
                <div className="w-full container p-4 bg-white">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-2xl font-bold">USERS</h1>
                        <button className="py-2 px-4 rounded bg-gray-800 hover:bg-gray-700 text-white">
                            New User
                        </button>
                    </div>
                    <Table className="mt-4 table-fixed">
                        <TableCaption>List of users</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">no</TableHead>
                                <TableHead className="w-[200px]">username</TableHead>
                                <TableHead className="w-[200px]">role</TableHead>
                                <TableHead className="w-[100px]">created at</TableHead>
                                <TableHead className="w-[100px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">1</TableCell>
                                <TableCell>John Doe</TableCell>
                                <TableCell>GUEST</TableCell>
                                <TableCell>2023-01-01</TableCell>
                                <TableCell className="flex gap-4">
                                    <button className="flex items-center gap-1 font-semibold text-orange-500">
                                        <BsPencilFill size={18} />
                                        <span>Edit</span>
                                    </button>
                                    <button className="flex items-center gap-1 font-semibold text-red-500">
                                        <FaRegTrashAlt size={18} />
                                        <span>Delete</span>
                                    </button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}