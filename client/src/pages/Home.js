import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import socket from 'socket.io-client';
import { Card } from 'react-bootstrap';

class Home extends Component {
  state = {
    site: '',
    siteData: {},
    siteMoreData: {},
    messages: "",
    user_id: "",
    loggedIn: false,
    endpoint: process.env.NODE_ENV === "production" ? "/" : "localhost:3001"
  };
 

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
    console.log("res",res);

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
    API.checkLoggedIn().then(res => {
      console.log("response on componentDidMount",res)
      if(res.data.message === "success") {
          this.setState({ 
            loggedIn: true,
            user_id: res.data.user
        });
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
        site_badges:[]
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
      <Container fluid>
        <Row>
          <Col size="md-4">

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
          </Col>
          
          <Col size="md-8">
           {/* SCRAPE RESULTS iDEALLY BADGE ICONS */}
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
          </Col>
        
        </Row>
      </Container>
    );
  }
}

export default Home;
