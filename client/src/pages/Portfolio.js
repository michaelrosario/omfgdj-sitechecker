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
    lastName: ''
  };

  componentDidMount() {
    
    this.checkLoggedIn();

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

    return (

    
        <div>
         
                        <Jumbotron>
                            <h1 class="text-white">Sites by {this.state.firstName} {this.state.lastName}</h1>
                        </Jumbotron>
                   
      <Container>
        <Row>
           <Col size="md-12">
              
           </Col>
        </Row>
        <Row>
          <Col size="md-12">
          
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Portfolio;
