import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Aboutus extends Component {

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size="md-4">
                        <h1>About Us</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Aboutus;

