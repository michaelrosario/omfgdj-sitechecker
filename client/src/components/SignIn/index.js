import React, { Component } from "react";
import API from "../../utils/API";
import {Button, Modal} from 'react-bootstrap';
import { Input, FormBtn } from "../Form";

export default class SignInModal extends React.Component {
  constructor(props, context) {
    
    super(props, context);

    this.handleShowSignIn = this.handleShowSignIn.bind(this);
    this.handleShowSignup = this.handleShowSignup.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      show: "",
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      loggedIn: false
    };
}

componentDidMount(){
  API.checkLoggedIn().then(response => {
    console.log("response on checkLoggedIn",response);
    if(response.data.user){
      this.setState({ loggedIn: true });
    }
  });
}

handleClose = () => {
  this.setState({ show: ""});
}

handleLogout = () => {
  API.logout().then(res => {
    console.log("res", res);
    if(res.status === 200) {
      this.setState({
        loggedIn: false,
      });
    }
  });
}

formSubmit = event => {
  event.preventDefault();
  //TODO is to check for logged in error and display the error
  //this.handleClose();
}

handleInputChange = event => {
  event.preventDefault();
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
}

handleShowSignIn = event => {
  event.preventDefault();
  this.setState({ show: "signin"});
}

handleShowSignup = event => {
  event.preventDefault();
  this.setState({ show: "signup" });
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
      this.handleClose();
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
    this.handleClose();
  });

}
render() {

const { 
  username, 
  password, 
  firstName,
  lastName, 
  email } = this.state;

return (
<div>

{this.state.loggedIn ? ( <Button variant= "primary" onClick={this.handleLogout}>
Logout
</Button>
   ) : (
    <div>
    <Button variant="primary" onClick={this.handleShowSignIn}>
    Login 
    </Button>
    
    <Button variant= "primary" onClick={this.handleShowSignup}>
    Sign Up
    </Button>
    </div>
  
)}



<Modal show={this.state.show !== "" } onHide={this.handleClose}>
<Modal.Header closeButton>
<Modal.Title>Sign In</Modal.Title>
</Modal.Header>
<Modal.Body>  

{this.state.show === "signin" ? (
  <form onSubmit={this.formSubmit}>
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
</form>) : (

<form onSubmit={this.formSubmit}>
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
)}
            


</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={this.handleClose}>
Close
</Button>

</Modal.Footer>
</Modal>

</div>

);
}
}



