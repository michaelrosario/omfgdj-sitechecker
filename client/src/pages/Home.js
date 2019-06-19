import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import socket from 'socket.io-client';

class Home extends Component {
  state = {
    site: '',
    siteData: {},
    messages: "",
    endpoint: process.env.NODE_ENV === "production" ? "/" : "localhost:3001"
  };
 

  componentDidMount() {
   /* API.getAllBadges()
      .then()
    */
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
    socket.off("toReact");

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { site } = this.state;
    
    console.log("SEARCH "+site+" VIA API");


    API.checkSite(site) .then(res => {
      console.log("res",res);

      const io = socket(this.state.endpoint, { secure: true });
      // send site to all users
      io.emit('fromReact', { data: site });

      this.setState({
        siteData: res.data
      })

    });
  
   
  };

  render() {

    const { site, siteData } = this.state;

    const io = socket(this.state.endpoint);

    let siteTitle = siteData.title || "";

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{color: "white", textShadow: "2px 2px 4px #000000"}}>JetSet Site Checker V.000001</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row styleClass="justify-content-center">
          <Col size="md-6" >
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
          </Row>

          <Row styleClass="justify-content-center">
            <Col size="md-6" >
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
               : ""}

               {this.state.messages ? <div>Someone is checking {this.state.messages}</div> : ""}

              
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Home;
