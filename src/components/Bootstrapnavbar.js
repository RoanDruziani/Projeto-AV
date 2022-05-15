import React from 'react'
import {Container} from "react-bootstrap"
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"

export default function Bootstrapnavbar() {
  return (
    <div>
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Teste</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Teste</Nav.Link>
      <Nav.Link href="#features">Teste</Nav.Link>
      <Nav.Link href="#pricing">Teste</Nav.Link>
      <Nav.Link href="#pricing">Teste</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
</>
    </div>
  )
}
