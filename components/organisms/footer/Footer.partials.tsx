import Link from 'next/link'
import { FiMail, FiPhone } from 'react-icons/fi'
import { GrShare } from 'react-icons/gr'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import AppLogo from '@/components/molecules/app-logo/AppLogo'

export function BrandDetails() {
  return (
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
  )
}

export function ContactDetails() {
  return (
    <Col colSize="col-4">
      <div>
        <Headline tag="h5" className="text-[#fff!important] mb-2">
          Our Contact Info
        </Headline>
        <Link
          href="tel:+233531937928"
          className="mb-2 text-[0.875em] flex items-center gap-2 hover:underline"
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
  )
}

export function QuickLinks() {
  return (
    <Col colSize="col-4">
      <Headline tag="h5" className="mb-2 text-[#fff!important] md:text-center">
        Quick Links
      </Headline>
      <div className="flex flex-wrap gap-4 md:flex-col md:items-center md:gap-2">
        <Link href="/" className="hover:text-white text-[0.875em]">
          Home
        </Link>
        <Link href="/about-us" className="hover:text-white text-[0.875em]">
          About Us
        </Link>
        <Link
          href="/services/prevention-hardening"
          className="hover:text-white text-[0.875em]"
        >
          Proactive Prevention & Hardening
        </Link>
        <Link
          href="/services/detection-monitoring"
          className="hover:text-white text-[0.875em]"
        >
          Detection & Monitoring
        </Link>
        <Link
          href="/services/response-recovery"
          className="hover:text-white text-[0.875em]"
        >
          Response & Recovery
        </Link>
        <Link
          href="/services/cybersecurity-training"
          className="hover:text-white text-[0.875em]"
        >
          Cybersecurity Training
        </Link>
        <Link
          href="/services/managed-services"
          className="hover:text-white text-[0.875em]"
        >
          Managed IT Services
        </Link>
        <Link href="/contact-us" className="hover:text-white text-[0.875em]">
          Contact Us
        </Link>
      </div>
    </Col>
  )
}

export function Copyrights() {
  return (
    <Container className="mt-10 border-t border-t-white pt-10">
      <Row className="flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
        <p className="text-center md:text-start">
          Copyright &copy; 2025 Cybersive Solutions | All rights reserved
        </p>
        <Col colSize="col-4" className="flex justify-end">
          <Link
            href="/"
            className="inline-block hover:text-white"
            target="_blank"
          >
            Powered By Bernard Teye <GrShare className="inline-block" />
          </Link>
        </Col>
      </Row>
    </Container>
  )
}
