import Link from 'next/link'
import { BsSend } from 'react-icons/bs'
import { GrShare } from 'react-icons/gr'
import { FiMail, FiPhone } from 'react-icons/fi'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import AppLogo from '@/components/molecules/app-logo/AppLogo'

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-blue-200)] text-gray-400 py-5 md:py-10 xl:py-15">
      <Container>
        <Row className="flex-col gap-6 md:flex-row md:gap-0">
          <Col colSize="col-4">
            <div className="bg-white py-2 px-3 rounded-md lg:w-2/3">
              <AppLogo />
            </div>
            <p className="mt-4">
              Based in Ghana, we are deeply committed to empowering businesses,
              especially Small and Medium-sized Enterprises (SMEs), with robust,
              accessible, and effective digital protection and IT support.
            </p>
          </Col>
          <Col colSize="col-4">
            <Headline
              tag="h5"
              className="mb-2 text-[#fff!important] md:text-center"
            >
              Quick Links
            </Headline>
            <div className="flex flex-wrap gap-4 md:flex-col md:items-center md:gap-2">
              <Link href="/" className="hover:text-white text-[0.875em]">
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-white text-[0.875em]"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-white text-[0.875em]"
              >
                Services
              </Link>
              <Link href="/blog" className="hover:text-white text-[0.875em]">
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="hover:text-white text-[0.875em]"
              >
                Contact Us
              </Link>
            </div>
          </Col>
          <Col colSize="col-4">
            <div className="mb-5">
              <Headline tag="h5" className="text-[#fff!important] mb-2">
                Subscribe to Our Newsletter
              </Headline>
              <p className="mb-3 text-[0.875em]">
                Join our newsletter for the latest in tech trends, cybersecurity
                updates, and productivity hacks — all delivered monthly.
              </p>
              <form>
                <div className="flex bg-white ps-3 rounded-sm overflow-hidden">
                  <input
                    type="text"
                    className="basis-[90%] text-[var(--dark-blue-200)] outline-none text-[0.875em] py-2"
                    placeholder="Email addresss..."
                  />
                  <button
                    type="submit"
                    className="bg-[var(--blue-100)] inline-block px-3 py-2 cursor-pointer hover:bg-[var(--dark-blue-100)]"
                  >
                    <BsSend className="text-xl text-white" />
                  </button>
                </div>
              </form>
            </div>
            <div>
              <Headline tag="h5" className="text-[#fff!important] mb-2">
                Our Contact Info
              </Headline>
              <Link
                href="tel:+233531937928"
                className="mb-1 text-[0.875em] flex items-center gap-2 hover:underline"
              >
                <FiPhone className="text-xl" /> +233 53 193 7928
              </Link>
              <Link
                href="mailto: cybersive.solutions@gmail.com"
                className="text-[0.875em] flex items-center gap-2 hover:underline"
              >
                <FiMail className="text-xl" /> cybersive.solutions@gmail.com
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-10 border-t border-t-white pt-10">
        <Row className="flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
          <p className="text-center md:text-start">
            Copyright &copy; 2025 Cybersive Solutions | All rights reserved
          </p>
          <Col colSize="col-4" className="flex justify-end">
            <Link href="/" className="underline inline-block" target="_blank">
              Powered By Bernard Teye <GrShare className="inline-block" />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
