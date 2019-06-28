import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardDeck} from "react-bootstrap";

class Aboutus extends Component {

    render() {

        return (
            <Container fluid center >
                <Row>
                    <Col size="md-12">
                        <h1 style={{color: '#fff'}}>About Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" center>
                        <CardDeck style={{marginTop: '20px'}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row style={{paddingTop: '20px'}}>
                    <Col size="md-12" center>
                        <CardDeck style={{marginTop: '20px'}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">LInkedIn</Card.Link>
                                    <Card.Link href="#">Github</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>




        );
    }
}

export default Aboutus;

