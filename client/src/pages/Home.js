import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Home extends Component {
  state = {
    site: '',
    badges: {}
  };

  componentDidMount() {
   /* API.getAllBadges()
      .then()
    */
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { site } = this.state;
    
    console.log("SEARCH "+site+" VIA API");

    API.checkSite(site) .then(res => {
      console.log("res",res);
      this.setState({
        badges: res.data.badges
      })

    });
  
   
  };

  render() {

    const { site } = this.state;

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Check your website!</h1>
            </Jumbotron>
            <form>
              <Input
                value={site}
                onChange={this.handleInputChange}
                name="site"
                placeholder="Enter a URL"
              />
              
              <FormBtn
                disabled={!site}
                onClick={this.handleFormSubmit}
              >
                Check
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
