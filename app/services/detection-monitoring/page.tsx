import Image from 'next/image'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import Notifier from '@/components/molecules/notifier/Notifier'
import Card from '@/components/molecules/card/Card'
import { MdAnalytics, MdOutlinePhishing } from 'react-icons/md'
import { FaFileAlt, FaShieldAlt } from 'react-icons/fa'

export default function DetectionMonitoring() {
  return (
    <>
      <article className="pb-10 xl:pb-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <Headline tag="h3" className="mb-4">
                Detection & Monitoring
              </Headline>
              <p>
                Vigilance is key. Our advanced detection and monitoring services
                ensure that any suspicious activity is quickly identified,
                analyzed, and addressed, often before it can escalate into a
                major incident.
              </p>
            </Col>
            <Col colSize="col-6">
              <div className="basis-1/2 md:order-2 lg:order-1 text-center">
                <Image
                  src="/img/svg-9.svg"
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
          <Row className="flex-wrap flex-col md:justify-center gap-y-4 md:flex-row">
            <Col colSize="col-4">
              <Card
                icon={
                  <MdAnalytics className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="SIEM Implementation & Management"
                description="We deploy, configure, and continuously manage Security Information and Event Management (SIEM) systems tailored for your business. Our experts aggregate and analyze security logs from all your critical IT assets, providing centralized visibility and real-time alerts for anomalies and potential threats."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaShieldAlt className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Intrusion Detection/Prevention Systems (IDS/IPS) Management"
                description="We implement, optimize, and manage sophisticated Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) within your network. These vital tools actively monitor network traffic for malicious patterns and can automatically block known threats, acting as your crucial digital gatekeepers."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaFileAlt className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Log Management & Analysis"
                description="Every action on your network and systems generates logs, which contain crucial security intelligence. We provide comprehensive services for collecting, securely storing, and rigorously analyzing these logs to uncover attack patterns, identify unauthorized access attempts, and provide critical insights for investigations."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <MdOutlinePhishing className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Phishing Analysis"
                description="When a suspicious email lands in an inbox, our experts can analyze it to determine if it's a genuine threat, helping you identify and block ongoing phishing campaigns targeting your organization."
              />
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}
