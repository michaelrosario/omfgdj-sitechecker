import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const MetaTags = (props) => {

  console.log("meta");
  let siteData = props.siteData || {};
  let showStyle = {
    display: "none"
  }
  
  if(Object.keys(siteData).length !== 0 && siteData.constructor === Object && siteData.meta.length) {
    if(siteData.meta.some(item => item.name === "description")){
      console.log(props.badge.badge_name + " FOUND");
      // run only once
      props.updateScore(props.badge.badge_score,props.badge._id);
      showStyle = {
        display: "block"
      }
    }
  } else {
    console.log(props.badge.badge_name + " NOT FOUND");
  }


return (
    <div style={showStyle} key={props.badge._id}>
      <img 
        src={"/assets/images/icons/"+props.badge.badge_icon} 
        alt={props.badge.badge_name} 
        width={100} height={100} />
      <h3>{props.badge.badge_name}</h3>
    </div>
  );
}

export default MetaTags;