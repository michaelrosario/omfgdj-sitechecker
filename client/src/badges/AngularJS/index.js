import React from "react";

const AngularJS = (props) => {

  let siteData = props.siteData || {};
  let showStyle = {
    display: "none"
  }
  //console.log(siteData);
  
  if(Object.keys(siteData).length !== 0 && siteData.constructor === Object && siteData.wappalyzer.length) {
    if(siteData.wappalyzer.some(item => item.name === props.badge.badge_name)){
      console.log(props.badge.badge_name + " FOUND");
      // run only once
      props.updateScore(props.badge.badge_score,props.badge._id);
      showStyle = {
        display: "block"
      }
    }
  } else {
    //console.log(props.badge.badge_name + " NOT FOUND");
  }


return (
    <div style={showStyle}>

      Hello AngularJS! 
      {siteData.title}
      {props.badge.badge_name}<br />
      {props.badge._id}<br />
      {props.badge.badge_image}<br />
      {props.badge.badge_score}<br />
      <button onClick={() => props.updateScore(props.badge.badge_score)}>CLICK</button>
    </div>
  );
}

export default AngularJS;