import { ComponentPropsWithoutRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi'

import Headline from '@/components/atoms/headline/Headline'

type TestimonialItemProps = {
  message: string
  name: string
  companyName: string
}

export function TestimonialItem({
  message,
  name,
  companyName,
}: TestimonialItemProps) {
  return (
    <div className="rounded-md border border-gray-200 py-10 px-4 slider-item">
      <p className="mb-4">{message}</p>
      <Headline tag="h5" className="flex items-center gap-2">
        <small className="w-2 h-[2px] bg-black inline-block"></small> {name},{' '}
        {companyName}
      </Headline>
    </div>
  )
}

export function TestimonialSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpointsBase="window"
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <TestimonialItem
          name="James Smith"
          companyName="Horizon Capital Group"
          message="Partnering with FortiNode was one of the best decisions we made for our security posture. They quickly identified vulnerabilities we didn't even know existed and implemented scalable, effective solutions. Their team is responsive, highly skilled, and truly understands the nuances of the financial sector."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialItem
          name="Clara Altman"
          companyName="MedBridge Clinics"
          message="In the healthcare industry, data security is non-negotiable. FortiNode gave us the peace of mind we needed by ensuring our systems were HIPAA-compliant and resilient to cyber threats. Their 24/7 monitoring and incident response team have been invaluable."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialItem
          name="Finlay Kirk"
          companyName="Atlas Defense Solutions"
          message="We experienced a serious phishing attempt last year, and FortiNode helped us contain it within hours. Since then, they've completely overhauled our security infrastructure and trained our staff on best practices. We haven't had a single incident since."
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialItem
          name="Dannette P. Cervantes"
          companyName="BrightCart Online"
          message="Our contracts require strict adherence to federal cybersecurity standards, and FortiNode has been instrumental in helping us stay compliant with NIST and CMMC frameworks. They're not just a vendor — they're a strategic partner"
        />
      </SwiperSlide>
      <Button position="left" className="left-0 top-1/2 -translate-y-1/2" />
      <Button position="right" className="right-0 top-1/2 -translate-y-1/2" />
    </Swiper>
  )
}

type ButtonProps = {
  position: 'left' | 'right'
} & ComponentPropsWithoutRef<'button'>

function Button({ position, ...props }: ButtonProps) {
  const swiper = useSwiper()
  const isVariantLeft = position === 'left'
  const { className, ...propsWithoutClassName } = props

  return (
    <button
      {...propsWithoutClassName}
      onClick={() => (isVariantLeft ? swiper.slidePrev() : swiper.slideNext())}
      className={`${className} absolute z-20 w-10 h-10 bg-blue-400 text-white text-xl rounded-full flex items-center justify-center hover:cursor-pointer`}
    >
      {isVariantLeft ? <PiCaretLeft /> : <PiCaretRight />}
    </button>
  )
}
