import React, { Component } from "react";
// import { CardColumns  } from 'react-bootstrap';
import { Col, Row, Container } from "../Grid"
import SiteCard from '../SiteCard';

export default class SiteShowcase extends Component {
    render() {
        return (

            <Row>
                
                    {
                        this.props.sitez.slice(0,6).map(site => {
                            return <Col size="md-4"><SiteCard className="fiftyfifty" site={site} key={site._id} badgey={this.props.badgey}/></Col>
                        })
                    }
                   
            </Row>
        )
    }
}

