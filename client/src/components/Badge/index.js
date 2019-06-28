import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const Badge = (props) => {

  let showStyle = props.show ? { display: "block"} : { display: "none" };
  let badgeType = "";
  if(props.score > 0){
    badgeType = "score-badge positive";
  } else if(props.score < 0){
    badgeType = "score-badge negative";
  } else {
    badgeType = "score-badge neutral";
  }

return (
    <div className={badgeType} style={showStyle}>
      <span className="score-icon"><img 
        src={props.icon} 
        alt={props.name} 
        width={100} height={100} />
      </span>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Badge;