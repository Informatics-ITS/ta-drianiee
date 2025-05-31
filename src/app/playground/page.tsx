"use client" 
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle } from "lucide-react"
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
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"


const playground = () => {
const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="p-4 bg-amber-100">
        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Button Template 🤢🤮
                </h2>
                <div className='flex gap-2'>
                    <Button>Default Button</Button>
                    <Button variant="destructive">
                        Destructive Button
                    </Button>
                    <Button variant="outline">
                        Outline Button
                    </Button>
                    <Button variant="secondary">
                        Secondary Button
                    </Button>
                    <Button variant="ghost" aria-label="Icon Button">
                        {/* Bisa pasang icon di sini */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Ghost Button
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Icon Button">
                    {/* Bisa pasang icon di sini */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    </Button>
                    {/* Contoh pakai asChild untuk wrapping link */}
                    <Button asChild variant="link">
                        <a href="https://example.com" target="_blank" rel="noreferrer">
                            Link Button
                        </a>
                    </Button>
                </div>
            </div>
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Button Aan punya 😋
                </h2>
                <div className='flex gap-2'>
                    <Button variant="bluetpka">
                        Bluetpka Button
                    </Button>
                    <Button variant="greentpka">
                        Greentpka Button
                    </Button>
                    <Button variant="redoutlinetpka">
                        Redoutlinetpka Button
                    </Button>
                    <Button variant="ghosttpka">
                        Ghosttpka Button
                    </Button>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Badge Template 🤢🤮
                </h2>
                <div className='flex gap-2'>
                    <Badge>Default Button</Badge>
                    <Badge variant="destructive">
                    Destructive Button
                    </Badge>
                    <Badge variant="outline">
                    Outline Button
                    </Badge>
                    <Badge variant="secondary">
                    Secondary Button
                    </Badge>
                </div>
            </div>
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Badge Aan punya 😋
                </h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <Badge variant="greentpka">
                        Green Badge
                        </Badge>
                        <Badge variant="redtpka">
                        Red Badge
                        </Badge>
                        <Badge variant="graytpka">
                        Gray Badge
                        </Badge>
                    </div>
                    <div className='flex gap-2'>
                        <Badge variant="biggreentpka">
                        Big Green Badge
                        </Badge>
                    </div>
                </div>

            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Alert Template 🤢🤮
                </h2>
                <div className='flex gap-2'>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components and dependencies to your app using the cli.
                        </AlertDescription>
                    </Alert>                    
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Alert Aan punya 😋 ( Belum )
                </h2>
                <div className='flex gap-2'>
                    <Alert>
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components and dependencies to your app using the cli.
                        </AlertDescription>
                    </Alert>                    
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            Your session has expired. Please log in again.
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Alert Dialog Template 🤢🤮
                </h2>
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
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Alert Dialog Aan punya 😋
                </h2>
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
                                <AlertDialogAction variant="bluetpka">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Breadcrumb ( sudah bagus 😋 )
                </h2>
                <div className='flex gap-2'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbEllipsis />
                                </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/docs/components">Components</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
        
        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Calendar Template ( sudah bagus 😋 ) #gakepake
                </h2>
                <div className='flex gap-2'>
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    />
                </div>
            </div>
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Calendar Aan punya 😋
                </h2>
                <p>Form Date</p>
                <p>Range Date</p>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Card Template ( sudah bagus 😋 )
                </h2>
                <div className='flex gap-2'>
                    <Card className='w-full'>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                    </Card>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Checkbox Template 🤢🤮 ( sudah dibenerin 😋 )
                </h2>
                <div className='flex gap-2'>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Combobox Template ( sudah bagus 😋 )
                </h2>
                <div className='flex gap-2'>
                    <p>buat filter, cari dan tambah mitra</p>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Data Table Template ( sudah bagus 😋 )
                </h2>
                <div className='flex gap-2'>
                    <p>buat pagination, combo badge, button</p>
                </div>
            </div>
        </div>

        <div className="mb-10 flex gap-4">
            <div className="p-4 bg-white w-fit h-fit border rounded-sm">
                <h2 className="text-lg font-semibold mb-4">
                Date Picker Template ( sudah bagus 😋 )
                </h2>
                <p>Form Date</p>
                <p>Range Date</p>
            </div>
        </div>
    </div>

  )
}

export default playground