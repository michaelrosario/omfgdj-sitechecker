import React from "react";

export default class ListofBadges extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {
                    this.props.badges.forEach(badges => {
                        return (
                        <div>
                            <p>Name: {badges.badge_name}</p>
                            <img src={badges.badge_icon} alt="badges betch" />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
