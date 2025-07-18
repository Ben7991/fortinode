import Image from 'next/image'
import { BsPatchCheckFill } from 'react-icons/bs'

import Button from '@/components/atoms/button/Button'
import Headline from '@/components/atoms/headline/Headline'

export function HeroMessage() {
  return (
    <div className="basis-1/2 md:text-center lg:text-start relative">
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
    <div className="basis-1/2 relative text-center py-10">
      <div className="absolute w-18 h-18 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-md top-5 left-0 md:top-3 md:left-36 lg:left-5 2xl:left-0 border border-gray-200 shadow-md">
        <Image
          src="/img/bar-chart.png"
          alt="Happy Customer"
          fill={true}
          className="p-2"
        />
      </div>
      <Image
        src="/img/fortinode-1.jpg"
        alt="Happy Customer"
        width={300}
        height={300}
        className="inline-block rounded-lg w-[300px] md:w-[350px] xl:w-[400px] 2xl:w-[500px] shadow-lg border border-gray-300"
      />
      <Image
        src="/img/dotted-cube-copy.png"
        alt="Dots"
        width={200}
        height={200}
        className="inline-block rounded-lg absolute bottom-0 left-0 md:left-20 md:-bottom-5 lg:left-5 xl:-left-3 2xl:-bottom-8 2xl:-left-13 -z-[1] w-[100px] md:w-[150px] 2xl:w-[200px]"
      />
      <div className="absolute w-28 h-28 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 bg-white rounded-md bottom-5 right-0 md:right-24 lg:right-0 2xl:-right-7 2xl:-bottom-3 border border-gray-200 shadow-md">
        <Image
          src="/img/pie-chart.png"
          alt="Happy Customer"
          fill={true}
          className="p-3"
        />
      </div>
    </div>
  )
}
