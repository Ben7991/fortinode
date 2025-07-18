'use client'

import * as yup from 'yup'

export type ContactFormInputs = {
  name: string
  email: string
  subject: string
  description: string
}

export const contactFormSchema = yup.object({
  name: yup.string().required('Name is required').matches(/^[a-zA-Z ]*$/, 'Only letters and whitespaces are allowed').trim(),
  email: yup.string().required('Email is required').email('Invalid email address').trim(),
  subject: yup.string().required('Subject is required').matches(/^[a-zA-Z ]*$/, 'Only letters and whitespaces are allowed').trim(),
  description: yup.string().required('Message is required').trim()
})
