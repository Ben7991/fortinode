"use client"

import { ComponentPropsWithRef, ReactNode } from 'react'

type Error = {
  hasError?: boolean
}

export type InputProps = Error & {
  icon: ReactNode
  el: "input"
} & ComponentPropsWithRef<'input'>

export type TextareaProps = {
  el: "textarea"
} & ComponentPropsWithRef<'textarea'> & Error
