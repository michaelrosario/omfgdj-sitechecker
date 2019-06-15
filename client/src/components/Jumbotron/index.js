import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        paddingTop: 120, 
        textAlign: "center", 
        backgroundImage: "url(https://avatars.mds.yandex.net/get-pdb/931959/99e3a2f8-25f7-47a0-b135-b2bbfe67c69a/s1200", backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        backgroundSize: 'cover'}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
