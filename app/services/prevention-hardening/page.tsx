import Image from 'next/image'
import {
  FaGlobe,
  FaLaptopCode,
  FaNetworkWired,
  FaShieldAlt,
  FaUserCheck,
  FaUserSecret,
} from 'react-icons/fa'
import {
  MdAssessment,
  MdPhonelinkLock,
  MdReportProblem,
  MdSecurity,
} from 'react-icons/md'

import Card from '@/components/molecules/card/Card'
import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import Notifier from '@/components/molecules/notifier/Notifier'
import SectionHeading from '@/components/molecules/section-heading/SectionHeading'

export default function PreventionHardening() {
  return (
    <>
      <article className="pb-10 xl:pb-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <Headline tag="h3" className="mb-4">
                Proactive Prevention & Hardening
              </Headline>
              <p>
                Building a strong, secure foundation is the first step to
                cybersecurity. We help you establish robust defenses that make
                your systems resilient and less vulnerable to attacks.
              </p>
            </Col>
            <Col colSize="col-6">
              <div className="basis-1/2 md:order-2 lg:order-1 text-center">
                <Image
                  src="/img/svg-7.svg"
                  alt="Men in suit image"
                  className="w-[300px] md:w-[400px] lg:w-[430px] xl:w-[450px] 2xl:w-[500px] inline-block rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </Col>
          </Row>
          <Notifier />
        </Container>
      </article>

      <article className="py-10 xl:py-15">
        <Container>
          <div className="text-center mb-4 md:mb-5">
            <SectionHeading text="Security Architecture & Design" />
          </div>
          <Row className="flex-wrap flex-col md:justify-center gap-y-4 md:flex-row">
            <Col colSize="col-4">
              <Card
                icon={
                  <FaNetworkWired className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Network Security Design"
                description="We design and implement secure network infrastructures, including robust firewall configurations, intelligent network segmentation, and secure communication protocols, ensuring your data flows safely."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaShieldAlt className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Device Hardening"
                description="We configure and optimize your operating systems, applications, and devices to minimize vulnerabilities, reducing the attack surface for potential threats."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <MdSecurity className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Endpoint Security"
                description="We deploy and manage advanced endpoint detection and response (EDR) solutions on all your devices (laptops, desktops, servers) to provide real-time protection against malware, ransomware, and sophisticated attacks."
              />
            </Col>
          </Row>
        </Container>
      </article>

      <article className="py-10 xl:py-15">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading text="Cybersecurity Assessments" />
          </div>
          <Row className="flex-wrap justify-center gap-y-4 lg:gap-y-10">
            <Col colSize="col-4">
              <Card
                icon={
                  <MdReportProblem className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Vulnerability Assessments"
                description="We systematically identify and prioritize weaknesses in your IT infrastructure, applications, and configurations, providing clear recommendations for remediation."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaUserSecret className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Internal Penetration Testing"
                description="Our experts simulate real-world attacks from within your network to uncover exploitable vulnerabilities and assess the effectiveness of your internal controls."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaLaptopCode className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Web Application Security Testing"
                description="We scrutinize your web applications for security flaws, helping you protect your online presence and customer data from common web-based attacks."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <MdAssessment className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Security Posture Assessments"
                description="We scrutinize your web applications for security flaws, helping you protect your online presence and customer data from common web-based attacks."
              />
            </Col>
          </Row>
        </Container>
      </article>

      <article className="py-10 xl:py-15">
        <Container>
          <div className="text-center mb-5">
            <SectionHeading text="Identity & Access Management" />
          </div>
          <Row className="flex-wrap justify-center gap-y-4 lg:gap-y-10">
            <Col colSize="col-4">
              <Card
                icon={
                  <MdPhonelinkLock className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Multi-Factor Authentication (MFA)"
                description="We implement MFA solutions to add an essential layer of security, making it significantly harder for unauthorized users to access your accounts even if passwords are compromised."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaUserCheck className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Single Sign-On (SSO)"
                description="Streamline access for your employees while enhancing security. We integrate SSO solutions allowing secure, convenient access to multiple applications with one set of credentials."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaGlobe className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Privileged Access Management (PAM)"
                description="We secure, control, and monitor access to your most critical systems and sensitive data, ensuring that privileged accounts are tightly managed and protected from misuse."
              />
            </Col>
          </Row>
        </Container>
      </article>

      <article className="py-10 xl:py-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <div className="basis-1/2 text-center">
                <Image
                  src="/img/svg-8.svg"
                  alt="Men in suit image"
                  className="w-[300px] md:w-[400px] lg:w-[430px] xl:w-[450px] 2xl:w-[500px] inline-block rounded-md"
                  width={300}
                  height={300}
                />
              </div>
            </Col>
            <Col colSize="col-6" className="p-4 md:p-0">
              <SectionHeading
                text="Vendor Security Management"
                className="mb-3"
              />
              <p>
                Your supply chain can be a weak link. We assess the security
                posture of your third-party vendors and partners, helping you
                manage associated risks and ensure your data remains secure
                throughout your business ecosystem.
              </p>
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}
