import Image from 'next/image'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'
import Notifier from '@/components/molecules/notifier/Notifier'
import Card from '@/components/molecules/card/Card'
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa'
import { MdOutlinePhishing } from 'react-icons/md'

export default function CybersecurityTraining() {
  return (
    <>
      <article className="pb-10 xl:pb-15">
        <Container>
          <Row className="flex-col md:flex-row md:items-center">
            <Col colSize="col-6">
              <Headline tag="h3" className="mb-4">
                Training & Awareness
              </Headline>
              <p>
                Your employees are your first and strongest line of defense. We
                empower your team with the knowledge and skills necessary to
                recognize, avoid, and report cyber threats, fostering a
                security-conscious culture.
              </p>
            </Col>
            <Col colSize="col-6">
              <div className="basis-1/2 md:order-2 lg:order-1 text-center">
                <Image
                  src="/img/svg-12.svg"
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
                  <FaChalkboardTeacher className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Technical IT & Cybersecurity Training"
                description="Equip your IT staff and key personnel with advanced knowledge and practical skills in cybersecurity best practices, defensive tools, and threat mitigation techniques. Our specialized training programs are designed to enhance your team's technical capabilities and contribute directly to your organization's security posture."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <FaUserShield className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Cybersecurity Awareness Training"
                description="We deliver engaging and informative workshops tailored for all employees, focusing on common threats like phishing, social engineering, strong password practices, and safe Browse. We turn your entire workforce into an active part of your defense."
              />
            </Col>
            <Col colSize="col-4">
              <Card
                icon={
                  <MdOutlinePhishing className="text-[var(--blue-100)] text-5xl mx-auto" />
                }
                title="Phishing Simulations"
                description="Test your team's readiness with realistic simulated phishing attacks. We design and execute customized campaigns, providing valuable insights into your organization's susceptibility and offering targeted training based on the results to significantly improve your human firewall."
              />
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}
