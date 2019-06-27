import React, { Component } from "react";
// import API from "../utils/API";
import { CardColumns  } from 'react-bootstrap';
import SiteCard from '../SiteCard';

export default class SiteShowcase extends Component {
    render() {
        return (
            <CardColumns>
                {
                    this.props.sitez.map(site => {
                        return <SiteCard site={site} key={site._id}/>
                    })
                }
            </CardColumns>
        )
    }
}

