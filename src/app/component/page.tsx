"use client" 
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle, CircleCheck, CircleX, Trash2, Eye } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  return (
    <div className='p-4 flex justify-center items-center flex-col gap-10'>
        <div className='flex gap-2'>
            <Button variant="blue">
                Blue 1 Button
            </Button>
            <Button variant="bluenew">
                Blue 2 Button
            </Button>
            <Button variant="red">
                Red 1 Button
            </Button>            
            <Button variant="rednew">
                Red 2 Button
            </Button>
            <Button variant="normal">
                Normal Button
            </Button>
            <Button variant="ghost">
                Ghost Button
            </Button>
        </div>
        <div className='flex gap-2'>
            <Badge variant="bigsuccess">
            Success Badge
            </Badge>
            <Badge variant="bigwarning">
            Warning Badge
            </Badge>
            <Badge variant="bigdanger">
            Danger Badge
            </Badge>
            <Badge variant="bignonactive">
            Gray Badge
            </Badge>

            <Badge variant="success">
            Success Badge
            </Badge>
            <Badge variant="warning">
            Warning Badge
            </Badge>
            <Badge variant="danger">
            Danger Badge
            </Badge>
            <Badge variant="nonactive">
            Gray Badge
            </Badge>
        </div>
        <div className='flex gap-2 items-end'>
            <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            </div>    

            <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Unggah Gambar</Label>
            <Input id="picture" type="file" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input disabled type="email" placeholder="Dissabled" />            
            </div>  
        </div>  
        <div className='flex gap-2'>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="blue">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>   
        <div className='flex gap-2'>
            <Alert variant="success">
                <CircleCheck className="h-4 w-4" />
                <AlertTitle>Sukses!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>                    
            <Alert variant="warning">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Perhatian!</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
            <Alert variant="danger">
                <CircleX className="h-4 w-4" />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
        </div>   
        <div className='flex gap-2'>
            <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
            </Tooltip>
        </div>   
        <div className="w-2/3">
            <Table className="border shadow-sm rounded-lg overflow-hidden">
                <TableHeader className="">
                <TableRow>
                    <TableHead className="w-[50px]">No</TableHead>
                    <TableHead className="w-[100px]">ID Tes</TableHead>
                    <TableHead>Tanggal Pelaksanaan Tes</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Harga</TableHead>
                    <TableHead className="text-center">Peserta</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {[
                    {
                    no: "1",
                    id: "TPKA-J1",
                    date: "Sabtu, 19 April 2025",
                    status: "Tes Akan Segera Dimulai",
                    total: 250000,
                    peserta: 0/20,
                    },
                    {
                    no: "2",
                    id: "TPKA-J2",
                    date: "Senin, 21 April 2025",
                    status: "Tes Telah Selesai",
                    total: 250000,
                    peserta: 0/20,
                    },
                    {
                    no: "3",
                    id: "TPKA-J3",
                    date: "Selasa, 22 April 2025",
                    status: "Tes Telah Selesai",
                    total: 250000,
                    peserta: 0/20,
                    },
                    {
                    no: "4",
                    id: "TPKA-J4",
                    date: "Rabu, 23 April 2025",
                    status: "Tes Telah Selesai",
                    total: 250000,
                    peserta: 0/20,
                    },
                ].map((order) => (
                    <TableRow key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <TableCell className="font-normal">{order.no}</TableCell>
                    <TableCell className="font-normal">{order.id}</TableCell>
                    <TableCell>
                        <span className="font-normal">{order.date}</span>
                    </TableCell>
                    <TableCell className="text-center">
                        <Badge variant={
                            order.status === "Tes Telah Selesai" ? "success" :
                            order.status === "Tes Akan Segera Dimulai" ? "warning" :
                            order.status === "pending" ? "warning" :
                            "danger"
                        }
                        className="capitalize"
                        >
                        {order.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-center font-normal">
                        {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0
                        }).format(order.total)}
                    </TableCell>
                    <TableCell className="text-center">{order.peserta}</TableCell>
                    <TableCell className="text-center">
                        <div className="flex justify-center gap-2">
                            <Button variant="outline">Detail</Button>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default page