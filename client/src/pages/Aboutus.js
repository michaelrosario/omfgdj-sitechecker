import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardDeck } from 'react-bootstrap';
import Jumbotron from "../components/Jumbotron";

export default class Aboutus extends Component {
    
    render() {

        return (
            <Container fluid center >
                <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 style={{color: 'white'}}>About Us</h1>
                    </Jumbotron>
                </Col>
                </Row>
                <Row>
                    <Col size="md-12" center>
                        <CardDeck style={{marginTop: '20px'}}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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
                                <Card.Img variant="top" src="https://pics.awwmemes.com/when-you-do-absolutely-nothing-during-the-group-project-and-56664645.png" />
                                <Card.Body>
                                    <Card.Title>BRAN STARK</Card.Title>
                                    <Card.Text style={{color: 'black'}}>
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