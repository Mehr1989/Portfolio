import React from 'react'
import { Container, Nav,Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
   <section  style={{backgroundColor:"rgb(46, 41, 37)",marginTop:"5%"}}>
    <Container>
        <Row>
            <Col>
            <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" style={{color:"white"}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" style={{color:"white"}}>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"style={{color:"white"}} >Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
       
      </Nav>


            </Col>
            <Col md={12}>
            <p className="text-center mt-4 mb-4" style={{color:"white"}}>Or right-aligned</p>
            </Col>

        </Row>
    </Container>
    

    
    </section>
      
    </>
  )
}

export default Footer
