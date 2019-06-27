import React from "react";
import API from "../../utils/API";
import socket from 'socket.io-client';
import {Row, Col, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import { Card, CardGroup } from "react-bootstrap";
import ListofBadges from "../ListofBadges";
import "./style.css";


export default class SiteCheckCard extends React.Component {
        constructor(props, context) {
            super(props, context);
             this.state = {
                site: '',
                siteData: {},
                siteMoreData: {},
                messages: "",
                loggedIn: false,
                siteBadges : []
            };           
            
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
            this.checkLoggedIn= this.checkLoggedIn.bind(this);
            this.saveSiteToDB = this.saveSiteToDB.bind(this);

          }
            
  componentDidMount() {
    
    this.checkLoggedIn();

    const io = socket(this.state.endpoint, { secure: true });
    io.on('toReact',site => {

      console.log(site);
      this.setState({
        messages: site.data.data
      });

    })
    
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    io.off("toReact");

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { site } = this.state;
    
    console.log("SEARCH "+site+" VIA APIs");

    API.checkSite(site).then(res => {
    console.log("API.checkSite res is >>>>>",res);
    
    let resObj = res.data.wappalyzer; // omar
    console.log("Wappa Obj is >>",resObj);
    
    const iconURL = "https://www.wappalyzer.com/images/icons/";

    const badgeArr = resObj.map(thing => {
        return {
            badge_name : thing.name,
            badge_icon : iconURL+thing.icon,
            badge_score : 1
        }
    })

    this.setState({
      siteBadges: badgeArr
    })

    console.log ("object badgeArr to db is",badgeArr);

    const io = socket(this.state.endpoint, { secure: true });
    // Send site to all users
      io.emit('fromReact', { data: site });
      this.setState({
        siteData: res.data
      })

      this.setState({
        siteData: res.data
      });

      this.saveSiteToDB(badgeArr);

    });
  }

  checkLoggedIn = () => {
    API.checkLoggedIn().then(response => {
      console.log("response on checkLoggedIn",response);
      if(response.data.user){
        this.setState({ loggedIn: true });
      }
    });
  }

  saveSiteToDB = (badgeArr) => {
      const { siteData, site } = this.state;
      const pushBadges = badgeArr;
      const info = {
        site_name: siteData.title,
        site_url: site,
        site_desc: "test",
        site_imgsrc: "",
        site_badges: pushBadges
      };
      console.log("OMAR: site obj to be entered to siteDB is: ", info);
      API.saveSite(info);
  }


  render() {

    const { 
      site, 
      siteData, 
    } = this.state;

    //const io = socket(this.state.endpoint);

    let siteTitle = siteData.title || "";

    return (
        <CardGroup className="sitecheckcard">
            <Card className="thirty">
                <Card.Body>
                    {this.state.loggedIn ? "YOU ARE LOGGED IN" : "YOU ARE LOGGED OUT"}
                    {/* INSERT SEARCH BAR HERE*/}

                    <form>
                        <Input
                            value={site}
                            onChange={this.handleInputChange}
                            name="site"
                            placeholder="Enter a URL"
                        />
                        <FormBtn
                            disabled={!site}
                            onClick={this.handleFormSubmit}
                        >
                            Check
                        </FormBtn>
                    </form>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className="seventy">
                <Card.Body>
                {siteTitle ? 
                        <div>
                          <h5>Now Analyzing: <u>{siteTitle}</u></h5>
                          <p># of Images: {siteData.images.length}</p>
                          <p># of Scripts: {siteData.script.length}</p>
                          
                          <ListofBadges badgez={this.state.siteBadges} />
                        </div>
                    : "Enter Your Website For Your CodeHype Rank"}
                    {this.state.messages ? <div>Someone is checking {this.state.messages}</div> : ""}
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>    
        </CardGroup>
    );
  }
}



