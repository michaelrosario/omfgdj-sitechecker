import React, { Component } from "react";
import API from "../../utils/API";
import {Button, Modal} from 'react-bootstrap';
import { Input, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";



export default class SignInModal extends React.Component {
constructor(props, context) {
super(props, context);


this.handleShowsignin = this.handleShowsignin.bind(this);

this.handleShowsignup = this.handleShowsignup.bind(this);

this.handleClose = this.handleClose.bind(this);
this.handleInputChange = this.handleInputChange.bind(this);
this.handleLogin = this.handleLogin.bind(this);
this.handleSignUp = this.handleSignUp.bind(this);



this.state = {
show: "",
username: "",
password: "",
email: "",
firstName: "",
lastName: "",
};
}

handleClose() {
this.setState({ show: ""});

}
handleInputChange = event => {
const { name, value } = event.target;
this.setState({
[name]: value
});
}

handleShowsignin() {
this.setState({ show: "signin"});
}
handleShowsignup() {
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
render() {

const { 
username, 
password, 
firstName,
lastName, 
email } = this.state;

return (
<div>
<Button variant="primary" onClick={this.handleShowsignin}>
Login 
</Button>

<Button variant= "primary" onClick={this.handleShowsignup}>
Sign Up
</Button>



<Modal show={this.state.show !== "" } onHide={this.handleClose}>
<Modal.Header closeButton>
<Modal.Title>Sign In</Modal.Title>
</Modal.Header>
<Modal.Body>  

{this.state.show === "signin" ? (
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
onClick={this.handleShowsignin}
>
Login

</FormBtn>
</form>) : (

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
onClick={this.handleShowsignup}
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



