import React from "react";
import API from "../../utils/API";
import socket from 'socket.io-client';
import {Row, Col, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import { Card, CardGroup } from "react-bootstrap";
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
    
    let resObj = res.data.wappalyzer;

    console.log("Wappa Obj is >>",resObj);

    const io = socket(this.state.endpoint, { secure: true });
    // Send site to all users
      io.emit('fromReact', { data: site });
      this.setState({
        siteData: res.data
      })

      this.setState({
        siteData: res.data
      });

      this.saveSiteToDB();

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

  saveSiteToDB = () => {
      const { siteData, site } = this.state;
      const info = {
        site_name: siteData.title,
        site_url: site,
        site_desc: "test",
        site_imgsrc: "",
        site_badges: {}
      };
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
                        <h5>We are now checking <u>{siteTitle}</u></h5> 
                        <p>H1: {siteData.header1.length}</p>
                        <p>H2: {siteData.header2.length}</p>
                        <p>H3: {siteData.header3.length}</p>
                        <p>H4: {siteData.header4.length}</p>
                        <p>H5: {siteData.header5.length}</p>
                        <p>Images: {siteData.images.length}</p>
                        <p>Links: {siteData.links.length}</p>
                        <p>Meta: {siteData.meta.length}</p>
                        <p>Scripts: {siteData.script.length}</p>
                        </div>
                    : "HEY THERES NO RESULTS, SO YEAH...."}
                    {this.state.messages ? <div>Someone is checking {this.state.messages}</div> : ""}
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>    
        </CardGroup>
    );
  }
}



