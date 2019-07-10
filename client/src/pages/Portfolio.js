import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SiteCard from '../components/SiteCard';
import { Redirect } from 'react-router-dom'


class Portfolio extends Component {
  state = {
    siteId: '',
    userId: '',
    firstName: '',
    lastName: '',
    allbadges: {},
    sites: []
  };

  componentDidMount() {
    
    window.analytics.page('/user/'+this.props.match.params.user);

    this.checkLoggedIn();
    API.getUserByLogin(this.props.match.params.user).then(user => {
      const {
        user_login,
        user_firstname,
        user_lastname,
        user_sites
      } = user.data;

      console.log("user",user);

      this.setState({
        userLogin: user_login,
        firstName: user_firstname,
        lastName: user_lastname,
        sites: user_sites
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
 
  }
 
  checkLoggedIn = () => {
    API.checkLoggedIn().then(response => {
      console.log("response on checkLoggedIn",response);
      if(response.data.user){
        this.setState({ 
          userId: response.data.user._id,
          loggedIn: true 
        });
      } 
    });
  }


  render() {
    
    const sites = this.state.sites.map( site => {
      return <Col size="md-4"><SiteCard className="fiftyfifty" site={site._siteId} key={site._id} badgey={this.state.allbadges}/></Col>
    })

    return (

    
        <div>
         
        <Jumbotron>
            <h1 className="text-white">
              Sites by {this.state.firstName} {this.state.lastName}
            </h1>
        </Jumbotron>
                   
      <Container>
        <Row>
         
              {sites}
         
        </Row>
      </Container>
      </div>
    );
  }
}

export default Portfolio;
