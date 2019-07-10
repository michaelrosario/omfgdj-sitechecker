import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteShowcase from '../components/SiteShowcase';
import SiteCheckCard from '../components/SiteCheckCard';

class Home extends Component {
  state = {
    siteDB: [],
    allbadges: {},
  };

  componentDidMount() {

    window.analytics.page('Home');
    
    API.getsites().then(res => {
      console.log("Getsites Heres the Data",res.data);
      this.setState({
        siteDB: res.data
      });
    });

    API.getAllBadges().then(res => {
      console.log("Gettin dem badges",res.data);
      let badgey = {}
      res.data.map(badge => {
        badgey[badge._id] = badge;
      });
      this.setState({
        allbadges: badgey
      });
    });

  }

  componentWillUnmount() {
  } //meh


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
            <h3 className="text-secondary mb-4 ml-1" style={{ fontFamily: "'hotel-open', sans-serif", fontWeight: "400",fontStyle: "normal" }}>
            CoderHype Community Showcase
            </h3>
            <SiteShowcase 
              sitez={this.state.siteDB}
              badgey={this.state.allbadges}
              // badgeUno={this.state.badgeOneFive}
              // badgeDos={this.state.badgeSixTen}
              // badgeTres={this.state.badgeElevenFifteen}
            />
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    );
  }
}

export default Home;
