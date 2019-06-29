import React from "react";
import Badge from "../../components/Badge";

const Titan = (props) => {

  let siteData = props.siteData || {};
  let showStyle = false;
  
  if(Object.keys(siteData).length !== 0 && siteData.constructor === Object && siteData.meta.length) {
    if(siteData.meta.some(item => item.name === "viewport")){
      console.log(props.badge.badge_name + " FOUND");
      // run only once
      props.updateScore(props.badge.badge_score,props.badge._id);
      showStyle = true;
    }
  } 

return <Badge 
          show={showStyle} 
          name={props.badge.badge_name}
          icon={"/assets/images/icons/"+props.badge.badge_icon}
          description={props.badge.badge_description}
          score={props.badge.badge_score}
        />;
}

export default Titan;