'use client'

import { ReactNode } from 'react'

import Button from '@/components/atoms/button/Button'
import Headline from '@/components/atoms/headline/Headline'

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="p-4 lg:py-0 md:px-4 text-center border border-gray-200 rounded-md md:border-none">
      {icon}
      <Headline tag="h4" className="my-3">
        {title}
      </Headline>
      <p className="mb-3">{description}</p>
      <Button
        el="link"
        href={href}
        variant="light"
        className="inline-block px-4"
      >
        Read More
      </Button>
    </div>
  )
}
