import React, { Component } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import socket from 'socket.io-client';
import {Card} from 'react-bootstrap';


class Home extends Component {
  state = {
    site: '',
    siteData: {},
    messages: "",
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    loggedIn: false,
    endpoint: process.env.NODE_ENV === "production" ? "/" : "localhost:3001"
  };
 

  componentDidMount() {
   /* API.getAllBadges()
      .then()
    */
    const io = socket(this.state.endpoint, { secure: true });
    io.on('toReact',site => {

      console.log(site);
      this.setState({
        messages: site.data.data
      });

    })
    
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    socket.off("toReact");

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLogin = event => {
    event.preventDefault();
    const { 
      username, 
      password
    } = this.state;

    console.log("Login",{ username, password });
    
    const user = {
      user_login: username,
      user_password: password
    }

    API.login(user).then(res => {
      console.log("res", res);
      if(res.status === 200) {
        this.setState({
          loggedIn: true,
          username: res.data.user_login
        });
      }
    });
  }

  handleSignUp = event => {
    event.preventDefault();
    const { 
      username, 
      password,
      firstName,
      lastName,
      email 
    } = this.state;

    console.log("Sign Up",{ username, password, firstName, lastName, email });

    const user = {
      user_login: username,
      user_password: password,
      user_email: email,
      user_firstname: firstName,
      user_lastname: lastName
    }

    API.signup(user).then(res => {
      console.log("res",res);
    });

  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { site } = this.state;
    
    console.log("SEARCH "+site+" VIA API");


    API.checkSite(site).then(res => {
      console.log("res",res);

      const io = socket(this.state.endpoint, { secure: true });
      // send site to all users
      io.emit('fromReact', { data: site });

      this.setState({
        siteData: res.data
      });

      this.saveSiteToDB();

    });
  
  };

  saveSiteToDB = () => {
      const { siteData, site } = this.state;
      const info = {
        site_name: siteData.title,
        site_url: site,
        site_desc: "test",
        site_imgsrc: "",
        site_badges:[]
      };
      API.saveSite(info);
  }


  render() {

    const { 
      site, 
      siteData, 
      username, 
      password, 
      firstName,
      lastName, 
      email } = this.state;

    //const io = socket(this.state.endpoint);

    let siteTitle = siteData.title || "";

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 style={{color: "white", textShadow: "2px 2px 4px #000000"}}>JetSet Site Checker V.000001</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row styleClass="justify-content-center">
          <Col size="md-6" >
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

          <Row styleClass="justify-content-center">
            <Col size="md-6" >
              {siteTitle ? 
                <div>
                  <h5>We are now checking <u>{siteTitle}</u></h5> 
                  <p>H1: {siteData.header1.length}</p>
                  <p>H2: {siteData.header2.length}</p>
                  <p>H3: {siteData.header3.length}</p>
                  <p>H4: {siteData.header4.length}</p>
                  <p>H5: {siteData.header5.length}</p>
                  <p>Images: {siteData.images.length}</p>
                  <p>Links: {siteData.links.length}</p>
                  <p>Meta: {siteData.meta.length}</p>
                  <p>Scripts: {siteData.script.length}</p>
                </div>
               : ""}

               {this.state.messages ? <div>Someone is checking {this.state.messages}</div> : ""}

              
            </Col>
          </Row>

          <Row>
            <Col size="md-6">
              <Card>
              <Card.Img variant="top" src="https://images.websitebuilderexpert.com/wp-content/uploads/2018/09/crypton_trading.jpg" />
              <Card.Body>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col size="md-6">
              <Card>
              <Card.Img variant="top" src="https://images.websitebuilderexpert.com/wp-content/uploads/2018/09/crypton_trading.jpg" />
              <Card.Body>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col size="md-6" >
            <form>
                <Input
                  value={firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name"
                />

                <Input
                  value={lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name"
                />  

                <Input
                  value={username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                />

                <Input
                  value={password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />

                <Input
                  value={email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
                {/* TODO: Form validations and modal */}
                <FormBtn
                  disabled={!username && !password && !email && !firstName && !lastName}
                  onClick={this.handleSignUp}
                >
                  Signup
                </FormBtn>
                </form>

                <form>

                <Input
                  value={username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                />

                <Input
                  value={password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />

                {/* TODO: Form validations and modal */}
                <FormBtn
                  disabled={!username && !password}
                  onClick={this.handleLogin}
                >
                  Login
                </FormBtn>
                </form>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Home;
