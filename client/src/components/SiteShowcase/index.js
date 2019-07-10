import React, { Component } from "react";
// import { CardColumns  } from 'react-bootstrap';
import { Col, Row, Container } from "../Grid"
import SiteCard from '../SiteCard';

export default class SiteShowcase extends Component {
    render() {
        return (

            <Row>
                <Col size="md-6">
                    {
                        this.props.sitez.slice(0,2).map(site => {
                            return <SiteCard className="fiftyfifty" site={site} key={site._id} badgey={this.props.badgey}/>
                        })
                    }
                </Col>
                <Col size="md-6">
                    {
                        this.props.sitez.slice(2,4).map(site => {
                            return <SiteCard className="fiftyfifty" site={site} key={site._id} badgey={this.props.badgey}/>
                        })
                    }
                </Col>                
            </Row>
        )
    }
}

