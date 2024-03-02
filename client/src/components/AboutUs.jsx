import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import HTP from './images/About.png';
import './AboutUs.css';
import arrow from './images/arrow1.png';
import w from './images/2.png';
import u from './images/3.png';
import p from './images/4.png';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export function AboutUs(){
    return(
          <div className="middlebody">
                 <img src={HTP} alt="" />


                 <Container className="head">
                    <h1 id="h1"><b>WHY CHOOSE US</b><hr aria-setsize={1}/></h1> 
       

        
                    <Row id="cardrow"> 
                    <Col lg={3} id="co11">
                    <Card color="blue">
                        <div className="d-flex justify-content-center">
                          <Card.Img variant="top" src={arrow} style={{ height: '115px',width:'130px' ,align:'center'}} /> 
                          </div>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Speed & Simplicity</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                   <b>Our user-friendly application process is tailored for Indian travelers, offering a level of ease and convenience</b>
                                </Card.Text>   
                            </Card.Body>
                        </Card>
                        </Col>


                        <Col lg={3} id="co12" >
                    <Card>
                            <div className="d-flex justify-content-center">
                          <Card.Img variant="top" src={w} style={{ height: '115px',width:'130px' ,align:'center'}} />  
                          </div>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Get Approved</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                   <b>Rest easy knowing that a team of seasoned immigration experts meticulously reviews all your documents</b>
                                </Card.Text>   
                            </Card.Body>
                        </Card>
                        </Col>


                        <Col lg={3} id="co13">
                    <Card>
                            <div className="d-flex justify-content-center">
                           <Card.Img variant="top" src={u} style={{ height: '115px',width:'130px',align:'center' }} />
                           </div>  
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Your Safety First</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                   <b>Your credit card information remains shielded from unwanted eyes, ensuring your peace of mind throughout.</b>
                                </Card.Text>   
                            </Card.Body>
                        </Card>
                        </Col>



                        <Col lg={3} id="co14">
                    <Card>
                            <div className="d-flex justify-content-center">
                           <Card.Img variant="top" src={p} style={{height: '115px',width:'130px',align:'center'}} /> 
                           </div>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Exceptional Support</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                   <b>Our dedicated customer support operates round the clock, 24/7, and is always ready to assist you in the whole process.</b>
                                </Card.Text>   
                            </Card.Body>
                        </Card>
                        </Col>

                        </Row>
                       
                 </Container>
        </div>

        
    )
}
