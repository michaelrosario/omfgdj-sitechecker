import React from "react";
import SignInModal from "../SignIn"
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


function Nav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavLink to="/" exact activeStyle={{ color: 'red' }}>
        <Navbar.Brand href="#home"><img src="/assets/images/logo/logo-coderhype.svg" alt="coderhype"/></Navbar.Brand>
      </NavLink>
      <SignInModal />
      <NavLink to="/account" exact activeStyle={{ color: 'red' }}>
              <i className="fa fa-user"></i> &nbsp; My Account
      </NavLink>
      <NavLink to="/user" exact activeStyle={{ color: 'red' }}>
              <i className="fa fa-link"></i> &nbsp; Sites
      </NavLink>
    </Navbar>
  );
}

export default Nav;