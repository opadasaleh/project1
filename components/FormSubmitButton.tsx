"use client"


import { StringToBoolean } from 'class-variance-authority/types'
import React, { Children, ComponentProps } from 'react'


type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string,
} & ComponentProps<"button">
export default function FormSubmitButton({ children, className }: FormSubmitButtonProps) {
    return (
        <button>{children}</button>
    )
}
