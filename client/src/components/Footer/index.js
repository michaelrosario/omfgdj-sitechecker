import React, {Component} from 'react';
import {Link} from 'react-router'
import {Footer} from 'react-materialize';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";


class RT_Footer extends Component{
  render(){
    return (
    <div>
      {this.props.children}
      <Footer copyrights="&copy; 2019 Copyright OMFGD"
          moreLinks={
            <Link className="grey-text text-lighten-4 right" href="#!">More Links</Link>
          }
          links={
            <ul>
              <li><Link to="/About Us" className="grey-text text-lighten-3">About Us</Link></li>
             
            </ul>
          }
          className='example'
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">Test Test Test</p>
      </Footer>
    </div>
    );
  }
}
export default RT_Footer;
