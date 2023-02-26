import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import about from "./images/about.jpg"




function Main() {
  return (
    <>
    <section className='main'>
 
    <Container  className='text-center mt-5'  >
      <Row >
        <Col md={12} sm={12} lg={4} >
        <Card className='align-center bg-none' >
      <Card.Img variant="top" src={about} />
   
    </Card>

        </Col>
        

        <Col md={12} sm={12} lg={8} style={{marginTop:'3%'}}  >

    <Card style={{border:"solid black 4px"}} className='mainCard'>
     
      <Card.Body >
        <Card.Title>Creative Photographer</Card.Title>
        <Card.Title>Based in London</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

           <Button variant="dark" >Dowload CV</Button>
      </Card.Body>
    </Card>
       
        </Col>
      </Row>
    </Container>
    </section>
  
    </>
 
      
   
  )
}

export default Main
