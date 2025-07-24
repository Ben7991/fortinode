import Image from 'next/image'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import Notifier from '@/components/molecules/notifier/Notifier'
import Card from '@/components/molecules/card/Card'
import { MdBackup, MdSupportAgent } from 'react-icons/md'
import { FaCloud, FaNetworkWired } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'

export default function ManagedServices() {
  return (
    <>
      <article className="pb-10 xl:pb-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <Headline tag="h3" className="mb-4">
                Managed IT Services
              </Headline>
              <p>
                Beyond cybersecurity, we offer comprehensive Managed IT Services
                to ensure your entire technology infrastructure runs smoothly,
                efficiently, and reliably. We handle your IT, so you can focus
                on your core business.
              </p>
            </Col>
            <Col colSize="col-6">
              <div className="basis-1/2 md:order-2 lg:order-1 text-center">
                <Image
                  src="/img/svg-11.svg"
                  alt="Managed IT Services"
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
                  <MdSupportAgent className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Proactive IT Support & Maintenance"
                description="We provide continuous monitoring of your IT systems, servers, and networks to identify and address potential issues before they cause downtime. This includes regular updates, patches, and health checks."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaNetworkWired className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Network Management"
                description="From initial setup to ongoing optimization, we manage your network infrastructure to ensure reliable connectivity, optimal performance, and robust security for all your operations."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <MdBackup className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Data Backup & Disaster Recovery"
                description="We implement and manage robust data backup solutions, ensuring your critical information is regularly secured. In case of a system failure or data loss, we provide swift recovery services to minimize disruption."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <BiSupport className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Help Desk Support"
                description="Your team will have access to expert technical support for their day-to-day IT challenges, ensuring quick resolution of issues and maintaining productivity."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaCloud className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Cloud Services Management"
                description="We assist with the setup, migration, and ongoing management of your cloud-based applications and infrastructure, optimizing performance, cost, and security in environments like Microsoft 365, Google Workspace, and other cloud platforms."
              />
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}
