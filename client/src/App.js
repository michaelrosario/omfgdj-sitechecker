import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";


function App() {
  return (
    <Router>
      <div>
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
          
          <Route component={NoMatch} />
  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
