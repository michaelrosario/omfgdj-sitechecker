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

  render() {

    return (

      <Container fluid>
        <Row>
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
