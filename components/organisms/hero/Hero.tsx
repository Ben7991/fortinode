import { Container, Row } from '@/components/atoms/grid/Grid'
import { HeroImage, HeroMessage } from './Hero.partials'

export default function Hero() {
  return (
    <section>
      <Container>
        <Row className="flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center">
          <HeroMessage />
          <HeroImage />
        </Row>
      </Container>
    </section>
  )
}
