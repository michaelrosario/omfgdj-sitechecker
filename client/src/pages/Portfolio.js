import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Redirect } from 'react-router-dom'


class Portfolio extends Component {
  state = {
    siteId: '',
    userId: '',
    firstName: '',
    lastName: '',
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
      return <img src={site._siteId.site_imgsrc} alt={site._siteId.site_name} />;
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
           <Col size="md-12">
              
           </Col>
        </Row>
        <Row>
          <Col size="md-12">
              {sites}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Portfolio;
