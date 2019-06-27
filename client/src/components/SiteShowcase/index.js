import React, { Component } from "react";
// import API from "../utils/API";
import { Card, CardImg, CardBody, CardText  } from 'react-bootstrap';
import { SiteCard } from "./SiteCard"

class SiteShowcase extends Component {
    render() {
        return (
            <CardColumns>
                {
                    this.props.sitez.map(site => {
                        return <SiteCard site={site} key={site.id} />
                    })
                }
            </CardColumns>
        )
    }
}