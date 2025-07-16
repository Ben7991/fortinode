import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'

import { Col, Container, Row } from '@/components/atoms/grid/Grid'
import Headline from '@/components/atoms/headline/Headline'

export default function AcademyAd() {
  return (
    <article className="py-5 md:py-10 xl:py-15 select-none">
      <Container>
        <Row>
          <Col colSize="col-12">
            <div className="academy-ad h-[450px] md:h-80 xl:h-96 rounded-xl flex flex-col items-center justify-center overflow-hidden relative">
              <Image
                src="/img/blue-wave.png"
                alt="Wave"
                className="w-[300px] h-[450px] md:h-80 xl:h-96 inline-block rounded-md absolute top-0 left-0"
                width={300}
                height={300}
              />
              <Image
                src="/img/blue-wave.png"
                alt="Wave"
                className="w-[300px] h-[450px] md:h-80 xl:h-96 hidden md:inline-block rounded-md absolute top-0 right-0 rotate-180"
                width={300}
                height={300}
              />
              <div className="text-center text-white w-[80%] xl:w-4/7 md:mb-10 md:space-y-5 relative z-10">
                <Headline className="academy-ad__text" tag="h1">
                  Start Your Journey with Our Expert-Led Cybersecurity Academy
                </Headline>
                <p>
                  Whether you're changing careers or leveling up, our hands-on
                  training and real-world scenarios prepare you to thrive in a
                  high-demand field.
                </p>
              </div>
              <a
                href="academy.domain.com"
                className="text-white hover:bg-[var(--dark-blue-200)] py-2 px-5 rounded-md flex items-center gap-2"
              >
                Let's Go <GoArrowRight className="text-xl" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  )
}
