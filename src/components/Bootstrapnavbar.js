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
    <Navbar.Brand href="#home">Sport club Corinthians Paulista</Navbar.Brand>
    <Nav className="me-auto">
     
    </Nav>
    </Container>
  </Navbar> 
</>
    </div>
  )
}
