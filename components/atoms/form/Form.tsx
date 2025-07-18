"use client"

import { ComponentPropsWithoutRef, useRef } from 'react'
import { InputProps, TextareaProps } from '@/components/atoms/form/Form.type'

export function FormGroup(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export function FormLabel(props: ComponentPropsWithoutRef<'label'>) {
  const { className, ...remainingProps } = props

  return (
    <label className={`inline-block mb-1 ${className}`}>{remainingProps.children}</label>
  )
}

export function FormControl(props: InputProps | TextareaProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  if (props.el === "textarea") {
    const { className, hasError, ...remainingProps } = props

    return (
      <textarea className={`outline-none form-control w-full ${className} bg-white border ${hasError ? 'border-red-700' : 'border-gray-300'} focus:border-[var(--blue-100)] rounded-md py-2 px-4`} {...remainingProps} />
    )
  }

  const { className, hasError, ...remainingProps } = props

  return (
    <div className={`flex items-center gap-3 bg-white py-2 px-4 border ${hasError ? 'border-red-700' : 'border-gray-300'} rounded-md cursor-text`}
      onClick={() => inputRef.current?.focus()}>
      {props.icon}
      <input className={`outline-none form-control flex-grow-1 ${className}`} {...remainingProps} />
    </div>
  )
}

export function FormControlError({message}: {message?: string}) {
  return (
    <small className="inline-block mt-1 text-red-700">{message}</small>
  )
}
