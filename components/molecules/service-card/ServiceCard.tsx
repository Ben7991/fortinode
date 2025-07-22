'use client'

import { ReactNode } from 'react'

import Button from '@/components/atoms/button/Button'
import Headline from '@/components/atoms/headline/Headline'

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="px-4 text-center">
      {icon}
      <Headline tag="h4" className="my-3">
        {title}
      </Headline>
      <p className="mb-3">{description}</p>
      <Button el="link" href="/" variant="light" className="inline-block px-4">
        Read More
      </Button>
    </div>
  )
}
