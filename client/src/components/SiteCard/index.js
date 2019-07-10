import React, { Component } from "react";
import { Card, Accordion } from 'react-bootstrap';


export default class SiteCard extends Component {

    componentDidMount(){
        console.log("this.props.site.site_badges",this.props.site.site_badges);
    }

    render() {

        const imgurl = "https://www.wappalyzer.com/images/icons/";
        const imgurl2 = "/assets/images/icons/";

        console.log("this.props.badgey",this.props.badgey);
        
        let siteBadges = this.props.site.site_badges ? this.props.site.site_badges.map(badgeId => {
                let currentBadge = this.props.badgey[badgeId] || "";

                if(currentBadge && currentBadge.badge_icon){
                    let image = imgurl+encodeURI(currentBadge.badge_icon);
                    if(currentBadge.badge_type != "Wappalyzer"){
                        image = imgurl2+encodeURI(currentBadge.badge_icon);
                    }
                    return (
                        <span className={currentBadge.badge_component} key={currentBadge._id} style={{ display: 'inline-block', width: 17, height: 17, background: 'url('+image+') center center no-repeat', backgroundSize: 'cover', margin: '0 10px 10px 0'}}>

                        </span>
                    );
                }
            }) : "";       

        return (
            <Card className="bgdarko fiftyfifty" key={this.props.site._id}>
                    <Card.Header>
                    <h3 className="codehypefont ml-1" style={{ paddingTop: '10px', color: "#FFF" }}>
                            {this.props.site.site_name}
                            <a href={this.props.site.site_protocol+'://'+this.props.site.site_url} target="_blank" style={{ fontSize: '1.2rem', width: '100%', display: 'inline-block'}}>
                                {this.props.site.site_url}
                            </a>
                    </h3>
                    </Card.Header>
                    <Card.Title>
                   
                    </Card.Title>
                    <Card.Body className="text-light">
                        {siteBadges}
                        {this.props.site.site_imgsrc ? <a href={this.props.site.site_protocol+'://'+this.props.site.site_url} target="_blank"><Card.Img variant="bottom" style={{ border: '1px solid #333' }} src={this.props.site.site_imgsrc} /></a> : ""}
                    </Card.Body>
                    <Card.Text style={{ padding: '0 0 20px 20px', fontFamily: 'Helvetica, sans-serif'}}>
                        
                        <span className="text-secondary" style={{ fontSize: '16px', lineHeight: '10px' }}>{this.props.site.site_desc}</span>
                        
                    </Card.Text>
            </Card>
        );
    }
}

