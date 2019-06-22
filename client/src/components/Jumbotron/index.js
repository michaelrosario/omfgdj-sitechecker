import React from "react";



function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        paddingTop: 120, 
        textAlign: "center", 
        backgroundPosition: 'center', 
        backgroundSize: 'cover'}}
      className="jumbotron"
    >
    <video autoplay muted loop id="myVideo">
      <source src="../../../asset/videos/codevid.mp4" type="video/mp4"/>
    </video>
      {children}
    </div>
  );
}

export default Jumbotron;
