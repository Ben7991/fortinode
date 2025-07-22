import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import AcademyAd from '@/components/molecules/academy-ad/AcademyAd'
import SectionHeading from '@/components/molecules/section-heading/SectionHeading'
import Footer from '@/components/organisms/footer/Footer'
import { coreValues } from '@/data/core-values'
import { teamMembers } from '@/data/team-members'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <>
      <article>
        <Container>
          <Headline tag="h1" className="text-center mb-4">
            About us
          </Headline>
          <p className="mb-3">
            At FortiNode, we are more than just a cybersecurity and IT services
            firm; we are your dedicated partners in navigating the complex
            digital landscape. Based in Ghana, we are deeply committed to
            empowering businesses, especially Small and Medium-sized Enterprises
            (SMEs), with robust, accessible, and effective digital protection
            and IT support.
          </p>
          <p className="mb-3">
            In today's rapidly evolving technological environment, robust
            cybersecurity and efficient IT infrastructure are not just
            advantages – they are necessities. Many SMEs face significant
            challenges in securing their operations and managing their
            technology due to limited resources and specialized expertise. This
            is precisely where FortiNode steps in.
          </p>
          <p>
            We combine deep technical knowledge with a practical understanding
            of the local business environment to deliver tailored solutions that
            protect your valuable assets, ensure operational continuity, and
            foster trust with your clients. From proactive threat prevention and
            vigilant monitoring to hands-on IT support and empowering
            cybersecurity training, we are dedicated to building a resilient and
            secure digital future for every client we serve.
          </p>
        </Container>
      </article>

      <article className="py-5 md:py-10 xl:py-15">
        <Container>
          <Row className="flex-col md:flex-row md:justify-center gap-4 xl:gap-10 md:items-center">
            <Col colSize="col-6">
              <div className="relative">
                <Image
                  src="/img/fortinode-4.jpg"
                  alt="Men in suit image"
                  className="w-[300px] md:w-[400px] lg:w-[430px] xl:w-[450px] 2xl:w-[500px] inline-block rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </Col>
            <Col colSize="col-6">
              <div>
                <SectionHeading text="Our Mission" />
                <p>
                  Our mission is to empower Ghanaian businesses and beyond,
                  particularly SMEs, with accessible, robust, and proactive
                  cybersecurity and IT solutions. We strive to be the trusted
                  partner that enables our clients to operate securely,
                  efficiently, and with confidence in the digital realm,
                  protecting their assets and ensuring their continuity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
      <article className="py-5 md:py-10 xl:py-15">
        <Container>
          <Row className="flex-col md:flex-row md:justify-center gap-4 xl:gap-10 md:items-center">
            <Col colSize="col-6">
              <div className="relative">
                <Image
                  src="/img/fortinode-3.jpg"
                  alt="Men in suit image"
                  className="w-[300px] md:w-[400px] lg:w-[430px] xl:w-[450px] 2xl:w-[500px] inline-block rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </Col>
            <Col colSize="col-6">
              <div>
                <SectionHeading text="Our Vision" />
                <p>
                  To be the leading and most trusted cybersecurity and IT
                  services provider in Ghana and Africa, recognized for our
                  unparalleled expertise, unwavering commitment to client
                  success, and dedication to building a safer, more resilient
                  digital ecosystem for all businesses.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </article>

      <article className="py-5 md:py-10 xl:py-15">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading text="Our Core Values" />
            <p className="md:w-2/4 mx-auto">
              Our values are the foundation of everything we do. They guide our
              interactions, our decisions, and our commitment to you:
            </p>
          </div>
          <Row className="flex-col md:flex-row md:flex-wrap gap-y-10">
            {coreValues.map((coreValue) => (
              <Col colSize="col-4" key={coreValue.heading}>
                <div className="text-center md:px-4">
                  <Headline tag="h4" className="mb-3">
                    {coreValue.heading}
                  </Headline>
                  <p>{coreValue.message}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </article>

      <AcademyAd />

      <article className="py-5 md:py-10 xl:py-15">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading text="Meet Our Team" />
            <p className="md:w-2/3 mx-auto">
              Our strength lies in our people. The Cybersive team is comprised
              of dedicated and certified cybersecurity and IT professionals who
              bring a wealth of experience and a passion for protecting
              businesses. We are continuously updating our skills and knowledge
              to stay ahead of the latest threats and technologies.
            </p>
          </div>
          <Row className="flex-col md:flex-row md:flex-wrap">
            {teamMembers.map((member) => (
              <Col colSize="col-4" key={member.name}>
                <div className="md:px-4 text-center">
                  <Headline tag="h4">{member.name}</Headline>
                  <p className="mb-4">{member.title}</p>
                  <p>{member.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </article>
      <Footer />
    </>
  )
}
