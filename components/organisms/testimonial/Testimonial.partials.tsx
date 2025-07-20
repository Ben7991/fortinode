'use client'

import { ComponentPropsWithoutRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi'

import Headline from '@/components/atoms/headline/Headline'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { testimonials } from '@/data/testimonials'

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
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <TestimonialItem
            name={testimonial.name}
            companyName={testimonial.companyName}
            message={testimonial.message}
          />
        </SwiperSlide>
      ))}
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
