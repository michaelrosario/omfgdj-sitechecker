import React, { Component } from "react";
import { Card, Accordion } from 'react-bootstrap';


export default class SiteCard extends Component {
    render() {
        return (
        <Accordion>
            <Card className="bgdarko fiftyfifty" >
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Title className="codehypefont">
                        <h3 className="codehypefont">
                            {this.props.site.site_name}
                        </h3>
                        <h5 className="text-secondary">{this.props.site.site_url}</h5>
                    </Card.Title>
                </Accordion.Toggle>
                    <Card.Body className="text-light " style={{minHeight: "18rem;"}}>
                        <Card.Img variant="bottom" src={this.props.site.site_imgsrc} />
                    </Card.Body>
                <Accordion.Collapse eventKey="0">
                    <Card.Text>
                        <p className="text-secondary">{this.props.site.site_desc}</p>
                    </Card.Text>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        );
    }
}



{/* <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}

