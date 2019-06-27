import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText  } from 'react-bootstrap';


class SiteCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h3>
                            {this.props.site.site_name}
                        </h3>
                        <h5>{this.props.site.site_url}</h5>
                    </Card.Title>
                    <Card.Text>
                        <p>{this.props.site.site_desc}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={this.props.site.site_imgsrc} />
            </Card>
        );
    }
}

export default SiteCard;