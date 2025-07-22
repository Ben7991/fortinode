import Image from 'next/image'
import { HiOutlineLightBulb, HiOutlineShieldCheck } from 'react-icons/hi2'
import { HiOutlineEye } from 'react-icons/hi2'
import { MdOutlineRefresh } from 'react-icons/md'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Hero from '@/components/organisms/hero/Hero'
import Button from '@/components/atoms/button/Button'
import Testimonial from '@/components/organisms/testimonial/Testimonial'
import Footer from '@/components/organisms/footer/Footer'
import AcademyAd from '@/components/molecules/academy-ad/AcademyAd'
import SectionHeading from '@/components/molecules/section-heading/SectionHeading'
import { FiSettings } from 'react-icons/fi'
import ServiceCard from '@/components/molecules/service-card/ServiceCard'

export default function Home() {
  return (
    <>
      <Hero />
      <article className="py-15 md:py-10 xl:py-15">
        <Container>
          <Row className="flex-col gap-10 md:gap-20 lg:gap-0 lg:flex-row lg:items-center">
            <div className="basis-1/2 md:order-2 lg:order-1 text-center relative">
              <div className="absolute w-15 h-15 lg:w-20 lg:h-20 xl:w-36 xl:h-36 bg-[var(--blue-100)] -top-5 left-3 md:left-32 lg:-top-7 lg:-left-0 rounded-md -z-[1]" />
              <div className="absolute w-15 h-15 lg:w-20 lg:h-20 xl:w-36 xl:h-36 bg-[var(--dark-blue-200)] -bottom-5 right-3 md:right-32 lg:-bottom-7 lg:-right-0 rounded-md -z-[1]" />
              <Image
                src="/img/fortinode-2.jpg"
                alt="Men in suit image"
                className="w-[300px] md:w-[400px] lg:w-[430px] xl:w-[450px] 2xl:w-[500px] inline-block rounded-md"
                width={300}
                height={300}
              />
            </div>
            <div className="md:p-3 basis-1/2 md:order-1 lg:order-2 lg:ps-8 xl:ps-10 2xl:ps-15">
              <SectionHeading text="Why Choose Us?" />
              <p className="mb-2">
                The digital realm is constantly evolving, bringing with it both
                incredible opportunities and persistent threats. Choosing a
                cybersecurity partner is about more than just technical
                expertise
              </p>
              <p className="mb-2">
                It is about trust, reliability, and a shared commitment to your
                success. At Cybersive, our core values guide every interaction
                and service we provide:
              </p>
              <ul className="list-disc mx-5 mb-5">
                <li>SME-Centric Focus & Local Understanding</li>
                <li>Proactive Protection & Prevention</li>
                <li>Hands-On Expertise & Practical Solutions</li>
                <li>Transparency & Trust</li>
              </ul>
              <Button
                el="link"
                href="/about-us"
                variant="light"
                className="inline-block px-5"
              >
                Read More
              </Button>
            </div>
          </Row>
        </Container>
      </article>
      <article className="py-5 md:py-10 xl:py-15" id="services">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading text="Our Core Offerings" />
            <p className="md:w-2/3 mx-auto">
              At Cybersive, we're your dedicated shield in the digital world. We
              specialize in proactive, robust cybersecurity solutions and
              services designed to protect your business from evolving threats.
              Our services are tailored to build resilience, detect attacks
              early, and ensure your operations remain secure and uninterrupted.
            </p>
          </div>
          <Row className="flex-wrap justify-center gap-y-4 lg:gap-y-10">
            <Col colSize="col-4">
              <ServiceCard
                icon={
                  <HiOutlineShieldCheck className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Proactive Prevention & Hardening"
                description="Don't wait for an attack to happen. We help you build a strong
                foundation, making your systems less attractive and more
                resistant to cyber threats"
              />
            </Col>
            <Col colSize="col-4">
              <ServiceCard
                icon={
                  <HiOutlineEye className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Detection & Monitoring"
                description="Continuous detection and real-time monitoring to identify and respond to threats before they impact your business."
              />
            </Col>
            <Col colSize="col-4">
              <ServiceCard
                icon={
                  <MdOutlineRefresh className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Response & Recovery"
                description="Swift incident response and effective recovery strategies to minimize downtime and protect your critical assets."
              />
            </Col>
            <Col colSize="col-4">
              <ServiceCard
                icon={
                  <HiOutlineLightBulb className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Cybersecurity Training & Awareness"
                description="Your employees are your first line of defense. We empower your
                team with the knowledge and skills to recognize and resist cyber
                threats"
              />
            </Col>
            <Col colSize="col-4">
              <ServiceCard
                icon={
                  <FiSettings className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Managed IT Services"
                description="We provide continuous monitoring, proactive
                maintenance, and expert support to keep your systems secure and
                running smoothly."
              />
            </Col>
          </Row>
        </Container>
      </article>
      <AcademyAd />
      <Testimonial />
      <Footer />
    </>
  )
}
