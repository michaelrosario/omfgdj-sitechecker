import React from "react";
import {Navbar} from 'react-bootstrap';


function Nav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img src="/assets/images/logo/logo-coderhype.svg" alt="coderhype"/></Navbar.Brand>
    </Navbar>
  );
}

export default Nav;