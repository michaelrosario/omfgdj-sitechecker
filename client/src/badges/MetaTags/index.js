import React from "react";
import Badge from "../../components/Badge";

const MetaTags = (props) => {

  console.log("meta");
  let siteData = props.siteData || {};
  let showStyle = false;
  
  if(Object.keys(siteData).length !== 0 && siteData.constructor === Object && siteData.meta.length) {
    if(siteData.meta.some(item => item.name === "description")){
      console.log(props.badge.badge_name + " FOUND");
      // run only once
      props.updateScore(props.badge.badge_score,props.badge._id);
      showStyle = true;
    }
  } else {
    console.log(props.badge.badge_name + " NOT FOUND");
  }


return <Badge 
          show={showStyle} 
          name={props.badge.badge_name}
          icon={"/assets/images/icons/"+props.badge.badge_icon}
          description={props.badge.badge_description}
          score={props.badge.badge_score}
        />;
}

export default MetaTags;