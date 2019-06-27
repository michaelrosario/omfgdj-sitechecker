import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import socket from 'socket.io-client';
import SiteShowcase from '../components/SiteShowcase';
import SiteCheckCard from '../components/SiteCheckCard';


class Home extends Component {
  state = {
    site: '',
    siteDB: [],
    messages: "",
    endpoint: process.env.NODE_ENV === "production" ? "/" : "localhost:3001"
  };
 

  componentDidMount() {
    
    // this.checkLoggedIn();
    const io = socket(this.state.endpoint, { secure: true });
    
    io.on('toReact',site => {
      console.log(site);
      this.setState({
        messages: site.data.data
      });
    })
    
    API.getsites().then(res => {
      console.log("getsites res",res);
      this.setState({
        siteDB: res.data
      });
    });
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    io.off("toReact");

  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { site } = this.state;
    
  //   console.log("SEARCH "+site+" VIA APIs");

  //   API.checkSite(site).then(res => {
  //   console.log("res",res);

  //   const io = socket(this.state.endpoint, { secure: true });
  //   // Send site to all users
  //     io.emit('fromReact', { data: site });
  //     this.setState({
  //       siteData: res.data
  //     })

  //     this.setState({
  //       siteData: res.data
  //     });

  //     this.saveSiteToDB();

  //   });
  // }

  // checkLoggedIn = () => {
  //   API.checkLoggedIn().then(response => {
  //     console.log("response on checkLoggedIn",response);
  //     if(response.data.user){
  //       this.setState({ loggedIn: true });
  //     }
  //   });
  // }

  // saveSiteToDB = () => {
  //     const { siteData, site } = this.state;
  //     const info = {
  //       site_name: siteData.title,
  //       site_url: site,
  //       site_desc: "test",
  //       site_imgsrc: "",
  //       site_badges:[]
  //     };
  //     API.saveSite(info);
  // }


  render() {

    // const { 
    //   site, 
    //   siteData, 
    // } = this.state;

    //const io = socket(this.state.endpoint);

    return (

      <Container fluid>
        <Row style={{backgroundColor: 'White'}}>
          <Col size="md-1" />
          <Col size="md-10">
            <SiteCheckCard />
          </Col>
          <Col size="md-1" />
        </Row>
        <Row>
            <Col size="md-1" />
            <Col size="md-10">
              <SiteShowcase 
                sitez={this.state.siteDB}
              />
            </Col>
            <Col size="md-1" />
        </Row>
      </Container>
    );
  }
}

export default Home;
