import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Redirect } from 'react-router-dom';
import "./app.css";


class Claim extends Component {
  state = {
    siteId: '',
    userId: '',
    redirect: false,
    loggedIn: false
  };

  componentDidMount() {
    
    this.checkLoggedIn();

    API.getSiteByUrl(this.props.match.params.site).then(siteRes => {
      console.log("siteRes",siteRes);
      if(siteRes.data === "new"){
        this.setState({
          redirect: true
        });
      } else {
        this.setState({
          siteId: siteRes.data._id
        });
      }
    });

  }

  componentWillUnmount() {
 
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  checkLoggedIn = () => {
    API.checkLoggedIn().then(response => {
      console.log("response on checkLoggedIn",response);
      if(response.data.user){
        this.setState({ 
          userId: response.data.user._id,
          loggedIn: true 
        });
      } else {
        this.setState({ redirect: true });
      }
    });
  }

  handleClaimSite = () => {
    const {
      siteId,
      userId
    } = this.state;
    if(siteId && userId){
      API.addSiteToUser(userId,siteId).then(res => {
        console.log("res",res);
        if(res.data.type === "success"){
            // redirect to user login
        }
      });
    }
  }

  render() {

    return (

    
        <div>
          {this.renderRedirect()}
                        <Jumbotron>
                            <h1 className="text-white">Claim the Site</h1>
                        </Jumbotron>
                   
      <Container>
        <Row>
           <Col size="md-12">
              <h3 className="text-white">How to claim <u>{this.props.match.params.site}</u> to your profile:</h3>
             
           </Col>
        </Row>
        <Row>
          <Col size="md-12">
              <p>Add the following meta tag to your header:</p>
              <pre className="code">
                {`<meta name="coderhype" content="${this.state.userId}"></meta>`.toString()}
              </pre>
              <br />
              
              <p>Once that is added, click the button below to confirm:</p>
              <button className="claim" onClick={() => this.handleClaimSite()}>Claim this Site</button>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Claim;
