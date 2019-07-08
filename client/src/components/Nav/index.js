import React, { Component } from "react";
import SignInModal from "../SignIn";
import UserContext from "../../context/UserContext";
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Alert from "../Alert";
import socket from 'socket.io-client';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

class Nav extends Component {

  state = {
    alert:"",
    isLoggedIn: false,
    endpoint: process.env.NODE_ENV === "production" ? "/" : "localhost:3001"
  }

  handleLoggedIn = bool => {
    this.setState({
      isLoggedIn: bool
    })
  }

  showAlert = message => {
    //console.log("message",message);
    this.setState({ 
      alert: message, 
    });
    setInterval(() => {
      this.setState({ 
        alert: "", 
      });
    }, 5000);
  }

  componentDidMount() {
    const io = socket(this.state.endpoint, { secure: true });
    
    io.on('toReact',site => {
      console.log(site);
      this.showAlert(site.data.data)
    })
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    io.off("toReact");

  }
  render() {

    return (
      <div>
      <Navbar className="main-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/" exact activeStyle={{ color: 'red' }} className="logo">
          <img src="/assets/images/logo/logo-coderhype.svg" alt="coderhype"/>
        </NavLink>
        <ul className={this.state.isLoggedIn ? "nav logged-in" : "nav logged-out"}>
          {this.state.isLoggedIn ? (
          <li>
            <NavLink to="/account" exact activeStyle={{ color: 'white' }}>
              <i className="fa fa-user"></i> &nbsp;<span>My Account</span>
            </NavLink>
          </li>
          ) : "" }
          {this.state.isLoggedIn ? (
          <li>
            <NavLink to="/user" exact activeStyle={{ color: 'white' }}>
              <i className="fa fa-link"></i> &nbsp;<span>Sites</span>
            </NavLink>
          </li>
          ) : "" }
          
  
          <li>
            <NavLink to="/about" exact activeStyle={{ color: 'white' }}>
                <i className="fa fa-users"></i> &nbsp;<span style={{color: '#BF25D6'}}>About Us</span>
            </NavLink>
          </li>
          
        </ul>
        <UserContext.Consumer>
            {(context) => {
              return <div className={this.state.isLoggedIn ? "modal-links logged-in" : "modal-links logged-out"}>
                <SignInModal context={context} setUserSession={this.handleLoggedIn} />
              </div>
            }}
        </UserContext.Consumer>
      </Navbar>
    
      <Alert message={this.state.alert} />
          
      </div>

    );
  }
}

export default Nav;