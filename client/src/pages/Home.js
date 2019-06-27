import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteShowcase from '../components/SiteShowcase';
import SiteCheckCard from '../components/SiteCheckCard';

class Home extends Component {
  state = {
    siteDB: []
  };
 
  componentDidMount() {
    
    API.getsites().then(res => {
      console.log("getsites res",res);
      this.setState({
        siteDB: res.data
      });
    });

  }

  componentWillUnmount() {
 
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
