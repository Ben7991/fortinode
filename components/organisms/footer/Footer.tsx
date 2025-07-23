import { Container, Row } from '@/components/atoms/grid/Grid'
import {
  BrandDetails,
  ContactDetails,
  Copyrights,
  QuickLinks,
} from './Footer.partials'

export default function Footer() {
  return (
    <footer className="bg-[var(--dark-blue-200)] text-gray-400 py-5 md:py-10 xl:py-15">
      <Container>
        <Row className="flex-col gap-6 md:flex-row md:gap-0">
          <BrandDetails />
          <QuickLinks />
          <ContactDetails />
        </Row>
      </Container>
      <Copyrights />
    </footer>
  )
}
