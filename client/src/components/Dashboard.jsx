import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Header } from "./Header";
import { LinkContainer } from "react-router-bootstrap";
import australiavisa from "./images/australiavisa.png";
import cananda from "./images/canada.png"
import us from "./images/uslogo.png"
import japan from "./images/Japan-Visa.jpg"
import visa from './images/visa.jpg';
import slide2 from './images/slide2.jpeg'
import slide3 from './images/slide3.jpg'

export function Dashboard(){
    return(
        //hello this is my new comment i have added
        <Container>
            {/* <Header text="Welcome to Student CRUD APP"></Header> */}
            <style>
        {`
          body {
            background-color:#FFEBD8; 
          }
        `}
      </style>
            <p></p>
            <Container className="middlebody">     
          <Row>

    <Carousel>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={visa}
          alt="Canada"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-50"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


          </Row>

            <Row className="justify-content-md-center mt-5">
                    <Col lg={3}>
                        <Card >
                           
                        <Card.Img variant="top" src={australiavisa} className="" style={{ height: '226px',width:'300px' }} font-style="Rust"/>
                            <Card.Body>
                                <Card.Title>Australia Visa</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Explore the wonders of Australia with our streamlined visa process. 
                                Unlock opportunities to study, work, and experience the beauty of the Land Down Under
                                </Card.Text>  
                                <LinkContainer to="/visa-registration">
                                <Button variant="primary"className='mt-3'>Apply for Visa</Button>
                              </LinkContainer>
                              </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                           <Card.Img variant="top" src={cananda} style={{ height: '226px',width:'300px' }} />  
                           {/* <hr typeof="rectangle" color="black"></hr> */}
                            <Card.Body>
                                <Card.Title>Canada Visa</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                   Start your Canadian adventure with our hassle-free visa solutions. From study permits, 
                                   we are well known for its friendly communities and breathtaking landscapes.
                                </Card.Text>
                                <LinkContainer to="/visa-registration">
                                <Button variant="primary"className='mt-3'>Apply for Visa</Button>
                              </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>
                        <Card>
                           <Card.Img variant="top" src={us} style={{ height: '227px' }}/> 
                            <Card.Body>
                                <Card.Title>American Visa</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Embark on your American journey with our own efficient visa services. Whether for study, 
                                work or to
                                discover the diverse landscapes and opportunities.
                                
                                </Card.Text>
                                <LinkContainer to="/visa-registration">
                                <Button variant="primary"className='mt-3'>Apply for Visa</Button>
                              </LinkContainer>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col lg={3}>
                        <Card>
                           <Card.Img variant="top" src={japan} style={{ height: '227px' }}/> 
                            <Card.Body>
                                <Card.Title>Japan Visa</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Immerse yourself in the rich culture  of Japan with our visa assistance. 
                                  Explore the Land of the Rising Sun and discover a perfect blend of tradition
                                </Card.Text>
                                <LinkContainer to="/visa-registration">
                                <Button variant="primary"className='mt-3'>Apply for Visa</Button>
                              </LinkContainer>
                                {/* <Button variant="primary"  className='mt-3' href='/DrivingSchoolRegistration'>Enroll Now</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
           </Container> 
        </Container>
    );
}