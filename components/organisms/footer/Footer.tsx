import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import AppLogo from '@/components/molecules/app-logo/AppLogo'
import Link from 'next/link'
import { BsSend } from 'react-icons/bs'

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
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </Col>
          <Col colSize="col-4">
            <div>
              <Headline tag="h5" className="text-[#fff!important] mb-2">
                Subscribe to Our Newsletter
              </Headline>
              <p className="mb-3 md:mb-5">
                Join our newsletter for the latest in tech trends, cybersecurity
                updates, and productivity hacks — all delivered monthly.
              </p>
              <form>
                <div className="flex bg-white ps-3 rounded-sm overflow-hidden">
                  <input
                    type="text"
                    className="basis-[90%] text-[var(--dark-blue-200)] outline-none"
                    placeholder="Email addresss..."
                  />
                  <button
                    type="submit"
                    className="bg-[var(--blue-100)] inline-block p-3 cursor-pointer hover:bg-[var(--dark-blue-100)]"
                  >
                    <BsSend className="text-xl text-white" />
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-10 border-t border-t-white pt-10">
        <p>Copyright &copy; 2025 FortiNode | All rights reserved</p>
      </Container>
    </footer>
  )
}
