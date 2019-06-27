import React from "react";
import API from "../../utils/API";
import {Button, Modal} from 'react-bootstrap';
import { Input, FormBtn } from "../Form";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

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
    this.validateEmail = this.validateEmail.bind(this);
    this.validateText = this.validateText.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      show: "",
      message: "",
      user_id: "",
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
    if(response.data.message === "success"){
      this.setState({ loggedIn: true });
      this.props.setUserSession(this.state.loggedIn);
    }
  });
}

validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

validateText = text => {
  if(text.length > 2) {
    return true;
  } else {
    return false;
  }
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
      this.props.setUserSession(this.state.loggedIn);
    }
  });
}

formSubmit = event => {
  event.preventDefault();
  //TODO is to check for logged in error and display the error
  //this.handleClose();
}

handleInputChange = event => { 
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
    
    if(res.data.message === "success") {
      
      this.setState({
        loggedIn: true,
        user_id: res.data.user,
        message: ""
      });
      this.props.setUserSession(this.state.loggedIn);
      this.handleClose();

    } else {

      this.setState({ message: "Incorrect Login Information" });

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
    this.setState({ loggedIn: true });
    this.props.setUserSession(this.state.loggedIn);
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

  let disableSignUp = !(
    this.validateText(username) && 
    this.validateEmail(email) &&
    this.validateText(password) &&
    this.validateText(firstName) &&
    this.validateText(lastName)
  );

  let disableLogin = !(
    this.validateText(username) && 
    this.validateText(password) 
  );

return (
<div>

{this.state.loggedIn ? ( <Button variant= "primary" onClick={this.handleLogout}>
Logout
</Button>
   ) : (
    <div>
      
      <Button variant="primary" onClick={this.handleShowSignIn} className='button-spc'>
        Login 
      </Button>
    
      <Button variant= "primary" onClick={this.handleShowSignup} className='button-spc'>
        Sign Up
      </Button>

    </div>
  
)}

  <Modal show={this.state.show !== "" } onHide={this.handleClose}>
    
    <Modal.Header closeButton>
    {this.state.show === "signin" ? 
      <Modal.Title><i className="fa fa-user"></i> &nbsp; Sign In</Modal.Title> :
      <Modal.Title><i className="fa fa-sign-in"></i> &nbsp; Sign Up</Modal.Title>
    }
    </Modal.Header>
    
    <Modal.Body>    

      {this.state.message}

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
            disabled={disableLogin}
            onClick={this.handleLogin}
          >
            Login
          </FormBtn>
        </form>) : (

  <form onSubmit={this.formSubmit}>

  <p>{this.state.message}</p>

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
    disabled={disableSignUp}
    onClick={this.handleSignUp}
  >
  Signup
    </FormBtn>
        </form>
  )}
              


  </Modal.Body>

</Modal>

</div>

);
}
}



