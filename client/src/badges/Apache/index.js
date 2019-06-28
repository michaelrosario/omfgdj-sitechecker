import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Apache(props) => {
  let siteData = props.siteData;

return (
    <div>
      Hello Apache! 
      {siteData.title}
      {props.badge.badge_name}<br />
      {props.badge._id}<br />
      {props.badge.badge_image}<br />
      {props.badge.badge_score}<br />
      <button onClick={() => props.updateScore(10)}>CLICK</button>
    </div>
  );
}

export default Apache;