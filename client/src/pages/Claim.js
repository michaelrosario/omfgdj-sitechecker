import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Redirect } from 'react-router-dom'


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
        return <Redirect to={`/user/${res.user_login}`} />
      });
    }
  }

  render() {

    return (

    
        <div>
          {this.renderRedirect()}
                        <Jumbotron>
                            <h1 class="text-white">Claim the Site</h1>
                        </Jumbotron>
                   
      <Container>
        <Row>
           <Col size="md-12">
              <h3 className="text-white">How to claim <u>{this.props.match.params.site}</u> to your profile:</h3>
              <button onClick={() => this.handleClaimSite()}>Claim this Site</button>
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

export default Claim;
