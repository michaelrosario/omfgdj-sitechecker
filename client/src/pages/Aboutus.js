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
                            <h1>About Us</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">What is CodeHype?</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p><span className="span">CodeHype</span> is a platform that scrapes and verifies site-specific elements, functionality, issues and many more relevant web metrics.</p>
                            <br/>
                        <p>The ambition behind <span className="span">CodeHype</span> is to encourage our users to test their websites and receive a score and badges for any metrics that CodeHype currently checks for.</p>
                    </Col>
                    <Col size="md-6">
                        <p> Our users may add a meta tag to their sites to “claim” a site and it will be added to their profile along with the badges and a tally of scores.  It can be used on their linkedin profile and even serve as a portfolio.</p>
                        <p></p>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">The Team</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" center>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/Michael.jpg" />
                                <Card.Body>
                                    <Card.Title>Michael Rosario</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/michaelrosario/">LinkedIn</Card.Link>
                                    <Card.Link href="https://github.com/michaelrosario">Github</Card.Link>
                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/Gian.jpg" />
                                <Card.Body>
                                    <Card.Title>GIAN JALAAN</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/gian-jalaan-1b352b7/">LinkedIn</Card.Link>
                                    <Card.Link href="https://geeyancode.github.io/Updated_Portfolio_2/">Github</Card.Link>
                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/Omar.jpg" />
                                <Card.Body>
                                    <Card.Title>MARION ONG</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/marion-omar-ong-6461663/">LinkedIn</Card.Link>
                                    <Card.Link href="https://github.com/jetsetPanda">Github</Card.Link>                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" center>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/Danny.jpg" />
                                <Card.Body>
                                    <Card.Title>DANNY LEE</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/danny-lee-2952099b/">LinkedIn</Card.Link>
                                    <Card.Link href="https://github.com/dcldev">Github</Card.Link>                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/Franchesca.jpg" />
                                <Card.Body>
                                    <Card.Title>FRANCHESCA GONZALEZ</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/franchesca-gonzalez-263ba037/">LinkedIn</Card.Link>
                                    <Card.Link href="https://github.com/frenshy1031">Github</Card.Link>
                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/assets/images/team/James.jpg" />
                                <Card.Body>
                                    <Card.Title>JAMES TAGORDA</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/in/jamestagorda/">LinkedIn</Card.Link>
                                    <Card.Link href="https://github.com/JTagorda">Github</Card.Link>
                                </Card.Body>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        );
    }
}
