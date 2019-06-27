import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Portfolio from "./pages/Portfolio";
import Aboutus from "./pages/Aboutus";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";

const siteStyle = {
  paddingTop: 60,
}

function App() {
  return (
    <Router>
       
      <div style={siteStyle}>
      <Nav />
        <Switch>
           {/*
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
          */}
          <Route exact path="/" component={Home} />
          <Route exact path="/user/" component={Portfolio} />
          <Route exact path="/account" component={Account} />
          <Route component={Aboutus} />

          
          <Route component={NoMatch} />
  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
