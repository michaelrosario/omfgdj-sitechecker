import React from "react";

const AngularJS = (props) => {

  let siteData = props.siteData;

return (
    <div>
      Hello AngularJS! 
      {siteData.title}
      {props.badge.badge_name}<br />
      {props.badge._id}<br />
      {props.badge.badge_image}<br />
      {props.badge.badge_score}<br />
      <button onClick={() => props.updateScore(10)}>CLICK</button>
    </div>
  );
}

export default AngularJS;