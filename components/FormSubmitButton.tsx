"use client"

import { StringToBoolean } from 'class-variance-authority/types'
import React, { Children, ComponentProps } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"
import { useFormStatus } from 'react-dom'
import { Props } from 'next/script'
import { Spinner } from '@/components/ui/shadcn-io/spinner'
// import  experimental_useFormStatus as useFormState  from 'react-dom' 


type FormSubmitButtonProps = {
    // children: React.ReactNode,
    className?: string,
    
} & ComponentProps<"button">
export default function FormSubmitButton({
    children,
    className,
    ...props
}: FormSubmitButtonProps) {
    const {pending} = useFormStatus();
    return (
        <Button size={'default'} variant={'default'} className={'bg-[#2dc168]  w-full rounded-xs ${className}'}
        disabled={pending}
        {...props}
            
        >
            {children}
            {pending && <Loader2Icon className='animate-spin flex justify-end'/> }
        
        </Button> 
    )
}
