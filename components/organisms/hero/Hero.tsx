import { Container, Row } from '@/components/atoms/grid/Grid';
import { HeroImage, HeroMessage } from './Hero.partials';

export default function Hero() {
  return (
    <section className="py-5 md:py-10 xl:py-15">
      <Container>
        <Row className="flex-col lg:flex-row lg:items-center">
          <HeroMessage />
          <HeroImage />
        </Row>
      </Container>
    </section>
  );
}
