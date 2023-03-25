
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Footer = () => {
  return (
    <>
   
    <Navbar bg="primary" variant="">
        <Container>
          <Navbar.Brand href="#home">PROFILE
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#features">FOOTER</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
