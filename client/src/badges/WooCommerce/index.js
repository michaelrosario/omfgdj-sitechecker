import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const WooCommerce = (props) => {

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
    console.log(props.badge.badge_name + " NOT FOUND");
  }


return (
    <div style={showStyle}>
      <img 
        src={"https://www.wappalyzer.com/images/icons/"+props.badge.badge_icon} 
        alt={props.badge.badge_name} 
        width={100} height={100} />
      <h3>{props.badge.badge_name}</h3>
      
    </div>
  );
}

export default WooCommerce;