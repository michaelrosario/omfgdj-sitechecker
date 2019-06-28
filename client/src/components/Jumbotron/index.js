import React from "react";



function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        paddingTop: 120, 
        textAlign: "center", 
        backgroundImage: "url(https://i.pinimg.com/originals/1d/15/ef/1d15ef35ba5f1928a0e81065a503c17e.jpg", backgroundRepeat: 'repeat',
        backgroundPosition: 'center', 
        backgroundSize: '25%'}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
