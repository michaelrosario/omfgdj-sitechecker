import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Portfolio extends Component {
  state = {
    user_id: '',
    loggedIn: false
  };
 

  componentDidMount() {
    

    API.checkLoggedIn().then(response => {
      console.log("response on componentDidMount",response)
      if(response.data.user){
          this.setState({ 
            loggedIn: true,
            user_id: response.data.user._id
        });
      }
    });
    
  }

 


  render() {

   
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <h1>Your Sites</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
