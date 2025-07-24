import { ReactNode } from 'react'

import Headline from '@/components/atoms/headline/Headline'

export default function Card({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-md md:border-none">
      {icon}
      <Headline tag="h4" className="my-2 md:my-3">
        {title}
      </Headline>
      <p>{description}</p>
    </div>
  )
}
