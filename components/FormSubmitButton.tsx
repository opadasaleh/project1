"use client"


import { StringToBoolean } from 'class-variance-authority/types'
import React, { Children, ComponentProps } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"


type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string,
} & ComponentProps<"button">
export default function FormSubmitButton({ children, className }: FormSubmitButtonProps) {
    return (
        <Button size={'default'} variant={'default'} className={'bg-[#00ff66] w-full rounded-xs ${className}'}>{children}
        {/* <Loader2Icon className='animate-spin'/> */}
        </Button>
    )
}
