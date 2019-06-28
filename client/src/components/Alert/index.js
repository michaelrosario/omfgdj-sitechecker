import React from "react";
import 'font-awesome/css/font-awesome.min.css';

function Alert(props) {

  let styleShow = {
    padding: '6px 20px',
    position: 'fixed',
    width: '100%',
    zIndex: "9999",
    textAlign: 'center',
    color: "#FFF",
    fontWeight: "bold",
    margin: '0 10px',
    border: '0px',
    left: -10,
    borderRadius: 0,
    borderRadius: '0px',
    float: 'right',
    textDecoration: 'none',
    transition: 'all linear .07s',
    background: 'rgba(76, 96, 60, 0.8)'
  }
  
  let styleHide = {
    transition: 'all linear .07s',
    padding: '6px 20px',
    position: 'fixed',
    width: '100%',
    textAlign: 'center',
    zIndex: "9999",
    top: -200
  }


  return (
    <div style={props.message ? styleShow : styleHide}>
        <span><i className="fa fa-check-circle"></i> &nbsp; Coder ranking<u><em> {props.message}</em></u></span>     
    </div> 
  );
}

export default Alert;