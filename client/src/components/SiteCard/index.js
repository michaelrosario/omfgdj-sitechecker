import React, { Component } from "react";
import { Card, Accordion } from 'react-bootstrap';


export default class SiteCard extends Component {

    render() {

        const imgurl = "https://www.wappalyzer.com/images/icons/";

        return (
            <Card className="bgdarko fiftyfifty" >
                    <Card.Header>
                    <h5 className="text-secondary">{this.props.site.site_url}   
                        {
                            this.props.badgey.map(badgez => {
                                return <img src={imgurl+badgez.badge_icon} alt="icon" width="25" height="25" class="badgeIcon"/>
                            
                            })
                        }
                    </h5>
                    </Card.Header>
                    <Card.Title className="codehypefont">
                        <h3 className="codehypefont">
                            {this.props.site.site_name}
                        </h3>

                    </Card.Title>
                    <Card.Body className="text-light " style={{minHeight: "18rem;"}}>
                        <Card.Img variant="bottom" src={this.props.site.site_imgsrc} />
                    </Card.Body>
                    <Card.Text>
                        <p className="text-secondary">{this.props.site.site_desc}</p>
                    </Card.Text>
            </Card>
        );
    }
}

{/* 
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

*/}
