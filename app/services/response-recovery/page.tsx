import Image from 'next/image'
import { MdOutlineEmergency } from 'react-icons/md'
import { FaFingerprint } from 'react-icons/fa'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import Notifier from '@/components/molecules/notifier/Notifier'
import Card from '@/components/molecules/card/Card'

export default function ResponseRecovery() {
  return (
    <>
      <article className="pb-10 xl:pb-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <Headline tag="h3" className="mb-4">
                Response & Recovery Services
              </Headline>
              <p>
                When an incident occurs, every second counts. Our rapid and
                decisive incident response and digital forensics services
                minimize damage, contain breaches, and get your business back on
                track swiftly.
              </p>
            </Col>
            <Col colSize="col-6">
              <div className="basis-1/2 md:order-2 lg:order-1 text-center">
                <Image
                  src="/img/svg-10.svg"
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
                  <MdOutlineEmergency className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Incident Response (IR) Planning & Execution"
                description="We develop tailored incident response plans for your organization, outlining clear procedures for handling security breaches. In the event of an incident (e.g., malware outbreak, data breach, ransomware attack), our expert team provides rapid, hands-on support to detect, contain, eradicate, and recover your systems and data."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaFingerprint className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Digital Forensics"
                description="If a security incident occurs, our digital forensics experts meticulously investigate to determine the root cause, assess the scope of the compromise, identify affected systems, and gather crucial evidence for internal analysis or potential legal proceedings."
              />
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}
