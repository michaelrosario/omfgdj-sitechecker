import React, { Component } from "react";
import SignInModal from "../SignIn"
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './node_modules/font-awesome/css/font-awesome.min.css';
import "./style.css";

class Nav extends Component {

  state = {
    isLoggedIn: false
  }

  handleLoggedIn = bool => {
    this.setState({
      isLoggedIn: bool
    })
  }

  render() {

    return (
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
            <NavLink to="/aboutus" exact activeStyle={{ color: 'white' }}>
                <i className="fa fa-users"></i> &nbsp;<span>About Us</span>
            </NavLink>
          </li>
          
        </ul>
      
        <div className={this.state.isLoggedIn ? "modal-links logged-in" : "modal-links logged-out"}><SignInModal setUserSession={this.handleLoggedIn} /></div>
      </Navbar>

    );
  }
}

export default Nav;