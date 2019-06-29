import React from "react";
import Badge from "../../components/Badge";

const Chartbeat = (props) => {

  let siteData = props.siteData || {};
  let showStyle = false;
  //console.log(siteData);
  
  if(Object.keys(siteData).length !== 0 && siteData.constructor === Object && siteData.wappalyzer.length) {
    if(siteData.wappalyzer.some(item => item.name === props.badge.badge_name)){
      console.log(props.badge.badge_name + " FOUND");
      
      // run only once
      props.updateScore(props.badge.badge_score,props.badge._id);
      showStyle = true;
    }
  } 

  let icon = "https://www.wappalyzer.com/images/icons/"+props.badge.badge_icon;

  return <Badge 
            show={showStyle} 
            name={props.badge.badge_name}
            icon={icon}
            description={props.badge.badge_description}
            score={props.badge.badge_score}
        />;
}

export default Chartbeat;