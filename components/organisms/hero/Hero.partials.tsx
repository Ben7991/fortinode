import Image from 'next/image'
import { BsPatchCheckFill } from 'react-icons/bs'

import Button from '@/components/atoms/button/Button'
import Headline from '@/components/atoms/headline/Headline'

export function HeroMessage() {
  return (
    <div className="basis-1/2 order-2 lg:order-1 md:text-center lg:text-start relative">
      <small className="flex gap-2 items-center text-[var(--blue-100)] md:justify-center lg:justify-start">
        <BsPatchCheckFill className="text-xl" /> Your Trusted Partner in
        Cybersecurity and IT Support Excellence
      </small>
      <Headline tag="h1" className="mb-3">
        Defend. Detect. Respond. Repeat.
      </Headline>
      <p>
        In today's interconnected world, robust IT infrastructure and
        impenetrable cybersecurity aren't just assets - they're necessities. At
        FortiNode, we empower businesses like yours to thrive securely in the
        digital landscape.
      </p>
      <div className="flex gap-4 mt-7 md:justify-center lg:justify-start">
        <Button el="link" href="#services" variant="light" className="px-5">
          Explore Our Services
        </Button>
        <Button
          el="link"
          href="/contact-us"
          variant="primary"
          className="px-5 cursor-pointer"
        >
          Hire Us
        </Button>
      </div>

      <Image
        src="/img/arrow-04.png"
        alt="Dots"
        width={100}
        height={100}
        className="rounded-lg hidden lg:inline-block lg:absolute lg:w-[70px] lg:right-19 lg:bottom-2 xl:right-28 2xl:right-40"
      />
    </div>
  )
}

export function HeroImage() {
  return (
    <div className="basis-1/2 relative text-center order-1 lg:order-2">
      <Image
        src="/img/svg-4.svg"
        alt="Happy Customer"
        width={300}
        height={300}
        className="inline-block rounded-lg w-[300px] md:w-[350px] xl:w-[400px] 2xl:w-[500px]"
      />
    </div>
  )
}
