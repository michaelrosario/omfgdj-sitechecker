import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Account extends Component {
  state = {
    user_id: '',
    loggedIn: false
  };

  componentDidMount() {

    window.analytics.page('Account');
  
    API.checkLoggedIn().then(res => {
      console.log("response on componentDidMount",res)
      if(res.data.message === "success") {
          this.setState({ 
            loggedIn: true,
            user_id: res.data.user
        });
      }
    });

  }

 


  render() {

   
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <h1>Your Account</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Account;
