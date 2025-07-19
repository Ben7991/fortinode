import AppLogo from '@/components/molecules/app-logo/AppLogo'
import Nav from './Navbar.partials'
import { Container, Row } from '@/components/atoms/grid/Grid'

export default function Navbar() {
  return (
    <nav className="py-5">
      <Container className="relative lg:static">
        <Row className="items-center justify-between">
          <AppLogo />
          <Nav />
        </Row>
      </Container>
    </nav>
  )
}
