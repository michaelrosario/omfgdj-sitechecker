import React from "react";
import { NavDropdown, Navbar,Form, Button,FormControl } from 'react-bootstrap';


function Nav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      
      <Navbar.Brand href="#home">Super Sexy Site Checker</Navbar.Brand>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
      </Form>
      <NavDropdown className="nav-dark" title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    
      
    </Navbar>
  );
}

export default Nav;