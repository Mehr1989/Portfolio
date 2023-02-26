import React, { useState } from 'react'
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row,Card,Button,ButtonGroup,ProgressBar } from 'react-bootstrap';
import { BsFillPlayCircleFill } from "react-icons/bs";



function Portfolio() {
  const[item,setItem] = useState(data)
  const filterItem = (filtering) =>{
    const updateList = data.filter((filterList)=>{
      return filterList.category === filtering
    })
    setItem(updateList)
  }
 
  return (
    <>
    {/*filter*/}
      <section style={{marginTop:"6% "}} className='portfolio'>
       
        <Container fluid className='text-center ' >
          <Row >
          
          <Col className='ms-3' ><h1 style={{fontWeight:"700"}}>Category</h1></Col>
   
       
            <Col className='flex-wrap mt-5 btn ' lg={12} md={12} sm={12} >
          <ButtonGroup aria-label="Basic example flex-wrap ">
          <Button variant="dark  mx-2 " onClick={()=>setItem(data)}>All</Button>
          <Button variant="dark mx-2 " onClick={()=>filterItem("Design")}>Design</Button>
          <Button variant="dark mx-2 " onClick={()=>filterItem("Branding")} >Branding</Button>
         <Button variant="dark mx-2 " onClick={()=>filterItem("Photography")} >Photography</Button>
    </ButtonGroup>
       
            </Col>
          </Row>
        </Container>
   

      </section>
      <Container fluid style={{backgroundColor:"black",marginTop:'3%'}}>
      <Row>
      {item.map((items)=>{
        const{category,title,source} = items
        return(
          <>
         
            
              <Col  lg={4} md={6} sm={12}  className="text-center my-3 "  >

                 <Card style={{border:"6px solid white",backgroundColor:"rgb(202, 207, 207)"}}>
                  <div >

                   <Card.Img  variant="top" src={source} alt='photo' style={{height:"50vh"}}   />
                  </div>
               
              <Card.Body>
              <h2 style={{fontWeight:'700'}}>{title}</h2>
                <Card.Title style={{fontWeight:'800'}}>{category}</Card.Title>
               
          
              <Button variant="secondary">Read More</Button>
            </Card.Body>
            </Card>

              </Col>
         
          </>
       
          
        )
        
      })}

    </Row>
    </Container>

    {/*video*/}

         <section className='videoBox'>
              <Container className='mt-5' >
                <Row style={{position:"relative"}}>
                  <Col style={{backgroundColor:"green",height:"40vh"}} className="video text-center ">
                    <div style={{width:"100%",position:"absolute",top:"20%"}}>
                      <h1 style={{color:"white",fontWeight:"700"}}>Lets Work Together</h1>

                     <Button variant='none' style={{color:"white",fontSize:"50px"}} className='px-3' ><BsFillPlayCircleFill /></Button>
                     <br></br>
                    <Button variant="secondary"npm i react-bootstrap-icons>Know More</Button>
                    </div>
                    
                    
                    
                  </Col>
                  
                </Row>
              </Container>

    {/*progress and rate*/}
            </section>


            <section>
              <Container fluid  className='mt-5'>
                <Row>
                  <Col md={4} className='ms-1'   >
                    <h3 style={{fontWeight:'700'}}>What People Rate My Work</h3>
                    <p>efeio eoioegi gioegio  eoieofi eeol eelfep eoepfl<br>
                    </br>eepot ieteop eito eiot  itoret okgo rot o </p>
                   
                  </Col>
                  <Col md={6} >
                  <div>
                    
     <h6>Customer Satisfaction <h8 style={{float:"right"}}>70%</h8><ProgressBar striped variant="success" now={70} /></h6> 
     <h6>Barnd Identify<h8 style={{float:"right"}}>40%</h8> <ProgressBar striped variant="info" now={20} /></h6>
      <h6>Logo Design<h8 style={{float:"right"}}>60%</h8><ProgressBar striped variant="warning" now={60} /></h6>
    <h6> Photography<h8 style={{float:"right"}}>80%</h8><ProgressBar striped variant="danger" now={80} /></h6> 
    </div>

                  </Col>
                </Row>
              </Container>
            </section>
    </>
    
    
  )
}

export default Portfolio

