import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Home extends Component {
  state = {
    site: '',
    siteData: {},
    badges: {}
  };

  componentDidMount() {
   /* API.getAllBadges()
      .then()
    */
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
      this.setState({
        siteData: res.data
      })

    });
  
   
  };

  render() {

    const { site, siteData } = this.state;

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

              
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Home;
