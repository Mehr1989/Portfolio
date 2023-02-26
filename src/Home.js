import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';


function Home() {
  return (
    <>
  {/*Navbar*/}
 
 <Navbar collapseOnSelect expand="lg"   >
      <Container>
      <Navbar.Brand href="#home" >
      <img src="https://cdn-icons-png.flaticon.com/512/49/49334.png" alt="" width="50" height="50"/>
      
      
      </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='pb-3
        '>
          <Nav className="me-auto text-center ">
          </Nav>
          <Nav className='text-center'>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Button className='btn'    variant='none'  style={{border:"solid black 4px"}}  >Order Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  {/*Hero*/}
  <section className='hero'style={{position:"relative"}} >
    <Container className='text-center'>
      <Row  >
        <Col  style={{position:'absolute',top:"50%",color:"white", right:"27%"}}>
        <h1 style={{fontWeight:"700"}}  >David Luck</h1>
        <h4 style={{fontWeight:"700"}}>Photographer</h4>
        </Col>
      </Row>
    </Container>
  </section>

 
  
    </>
  )
}

export default Home
