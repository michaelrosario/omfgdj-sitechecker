import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Claim from "./pages/Claim";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";

const siteStyle = {
  paddingTop: 60,
}

class App extends Component {
  
  state = {
    userModal: ""
  };

  updateValue = (key, val) => {
    this.setState({[key]: val});
  }

  render() {

    return (
      <Router>
        {/*
        UserContext.Provider to be used through out the pages
        */}
        <UserContext.Provider value={{state: this.state, updateValue: this.updateValue}}>   
        <div style={siteStyle}>
        <Nav />
          <Switch>
            {/*
              <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
            */}
            
            <Route exact path="/" component={Home} />
            <Route path="/claim/:site" component={Claim} />
            <Route path="/user/:user" component={Portfolio} />
            <Route exact path="/account" component={Account} />
            <Route path="/about" component={About} />

            
            <Route component={NoMatch} />
    
          </Switch>
        </div>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
