import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteShowcase from '../components/SiteShowcase';
import SiteCheckCard from '../components/SiteCheckCard';

class Home extends Component {
  state = {
    siteDB: [],
    badgeOneFive: [],
    badgeSixTen: [],
    badgeElevenFifteen: []
  };

  componentDidMount() {
    
    API.getsites().then(res => {
      console.log("Getsites Heres the Data",res.data);
      this.setState({
        siteDB: res.data
      });
    });

    API.getAllBadges().then(res => {
      console.log("Gettin dem badges",res.data);
      let badgeUno = res.data.slice(0,5); // O: first five badges for dummi display
      let badgeDos = res.data.slice(5,10); // O: next five....
      let badgeTres = res.data.slice(10,15); // O: more for that mock data but from real badge collection in database woot woot
      this.setState({
        badgeOneFive: badgeUno,
        badgeSixTen: badgeDos,
        badgeElevenFifteen: badgeTres
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
              badgeUno={this.state.badgeOneFive}
              badgeDos={this.state.badgeSixTen}
              badgeTres={this.state.badgeElevenFifteen}
            />
          </Col>
          <Col size="md-1" />
        </Row>
      </Container>
    );
  }
}

export default Home;
