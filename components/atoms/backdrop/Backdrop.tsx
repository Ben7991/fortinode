import { ComponentPropsWithoutRef } from 'react'

export default function Backdrop(props: ComponentPropsWithoutRef<'div'>) {
  const { className, ...rest } = props

  return (
    <div
      className={`fixed w-full h-screen inset-0 bg-black/50 z-10 backdrop-blur-sm ${className}`}
      {...rest}
    />
  )
}
