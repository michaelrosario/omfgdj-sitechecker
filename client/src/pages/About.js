import React, { Component } from 'react';

//Import Component
import About from "../components/About";
import Team from "../components/Team";

class Aboutus extends Component {

  componentDidMount(){
    window.analytics.page('About');
  }

  render() {
    return (
        <React.Fragment>
            <About />
            <Team />

        </React.Fragment>
    );
  }
}

export default Aboutus;
