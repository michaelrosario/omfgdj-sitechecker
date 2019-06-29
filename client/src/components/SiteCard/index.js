import React, { Component } from "react";
import { Card } from 'react-bootstrap';


export default class SiteCard extends Component {
    render() {
        return (
            <Card className="bgdarko fiftyfifty" >
                <Card.Body className="text-light " style={{minHeight: "18rem;"}}>
                    <Card.Title className="codehypefont">
                        <h3 className="codehypefont">
                            {this.props.site.site_name}
                        </h3>
                        <h5 className="text-secondary">{this.props.site.site_url}</h5>
                    </Card.Title>
                    <Card.Text>
                        <p className="text-secondary">{this.props.site.site_desc}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={this.props.site.site_imgsrc} />
            </Card>
        );
    }
}