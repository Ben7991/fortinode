import { FiMail, FiPhone } from 'react-icons/fi'
import Link from 'next/link'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Footer from '@/components/organisms/footer/Footer'
import Headline from '@/components/atoms/headline/Headline'
import ContactForm from '@/components/organisms/contact-form/ContactForm'

export default function ContactUs() {
  return (
    <>
      <article className="py-15 md:py-10 xl:py-15">
        <Container>
          <Headline tag="h1" className="mb-5">Let's Get In Touch</Headline>
          <Row className="mb-5">
            <Col colSize="col-4">
              <div className="flex flex-col items-start gap-y-3">
                <div className="inline-block py-2 px-3 border border-gray-300 bg-white rounded-md">
                  <FiPhone className="text-xl" />
                </div>
                <Link href="tel:+233531937928" className="hover:underline">
                  +233 53 193 7928
                </Link>
              </div>
            </Col>
            <Col colSize="col-4">
              <div className="flex flex-col items-start gap-y-3">
                <div className="inline-block py-2 px-3 border border-gray-300 bg-white rounded-md">
                  <FiMail className="text-xl" />
                </div>
                <Link href="mailto:cybersive.solutions@gmail.com" className="hover:underline">
                  cybersive.solutions@gmail.com
                </Link>
              </div>
            </Col>
          </Row>
          <hr className="border-t border-t-gray-300" />
        </Container>
      </article>
      <ContactForm />
      <Footer />
    </>
  )
}
