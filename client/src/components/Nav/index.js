import React from "react";
import SignInModal from "../SignIn"
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";



function Nav() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavLink to="/" exact activeStyle={{ color: 'red' }} className="mr-auto">
       <img src="/assets/images/logo/logo-coderhype.svg" alt="coderhype"/>
      </NavLink>
      <SignInModal />
      <NavLink to="/account" exact activeStyle={{ color: 'red' }} className="mr-auto">
              <i className="fa fa-user"></i> &nbsp; My Account
      </NavLink>
      <NavLink to="/user" exact activeStyle={{ color: 'red' }} className="mr-auto">
              <i className="fa fa-link"></i> &nbsp; Sites
      </NavLink>
      <NavLink to="/aboutus" exact activeStyle={{ color: 'red' }}>
              <i className="fa fa-link"></i> &nbsp; About Us
      </NavLink>
    </Navbar>

  );
}

export default Nav;