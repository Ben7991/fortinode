'use client'

import { Container } from '@/components/atoms/grid/Grid'
import { TestimonialSlider } from './Testimonial.partials'
import SectionHeading from '@/components/molecules/section-heading/SectionHeading'

export default function Testimonial() {
  return (
    <article className="py-5 md:py-10 xl:py-15 testimonial">
      <Container>
        <div className="text-center mb-5">
          <SectionHeading text="Testimonials" />
          <p className="md:w-2/3 lg:w-2/4 mx-auto">
            Find out what our clients are saying about us and why they always
            want to do handle their I.T. needs
          </p>
        </div>
        <TestimonialSlider />
      </Container>
    </article>
  )
}
