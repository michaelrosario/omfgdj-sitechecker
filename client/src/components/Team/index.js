import React, { Component } from 'react';
import PropTypes from "prop-types";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Team extends Component {

  goToLink(link) {
    window.open(link);
  }

  render() {
    //Team loop start
    const teamdata = this.props.teamsData.map((team, index) => (
        <div className="team-box" key={index}>
            <img src={team.Image} alt="Description" />
            <div className="box-content">
                <div className="box-inner-content">
                    <h3 className="title">{team.Name}</h3>
                    <span className="post">{team.Profession}</span>
                    <ul className="icon">
                        <li><button onClick={() => this.goToLink(team.GithubLink)}><i className="fa fa-github" /></button></li>
                        <li><button onClick={() => this.goToLink(team.linkedinLink)}><i className="fa fa-linkedin" /></button></li>
                    </ul>
                </div>
            </div>
        </div>
    ));
    //Team loop END
    return (
        <React.Fragment>
             <section id="team" className="our-team ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="section-title">
                                <h2>{this.props.sectionTitle}</h2>
                                <p>{this.props.sectionDescription}</p>
                                <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="row">
                    
                        {teamdata}
                    
                </div>
            </div>
        </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Team.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    teamsData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    SectionbgTitle: "Team",
    sectionTitle: "Our Team",
    sectionDescription: "",
        teamsData: [
        {
            Image: "/assets/images/team/Michael.jpg",
            Name: "Michael Rosario",
            Profession: "",
            GithubLink: "https://github.com/michaelrosario/",
            linkedinLink: "https://www.linkedin.com/in/michaelrosario/",
            twitterLink: "/#0",
        },
        {
            Image: "/assets/images/team/Gian.jpg",
            Name: "Gian Jalaan",
            Profession: "",
            GithubLink: "https://github.com/geeyancode",
            linkedinLink: "https://www.linkedin.com/in/gian-jalaan-1b352b7/",
            twitterLink: "/#0",
        },
        {
            Image: "/assets/images/team/Omar.jpg",
            Name: "Marion Ong",
            Profession: "",
            GithubLink: "https://github.com/jetsetPanda",
            linkedinLink: "https://www.linkedin.com/in/marion-omar-ong-6461663/",
            twitterLink: "/#0",
        },
        {
            Image: "/assets/images/team/Franchesca.jpg",
            Name: "Franchesca Gonzalez",
            Profession: "",
            GithubLink: "https://github.com/frenshy1031",
            linkedinLink: "https://www.linkedin.com/in/franchesca-gonzalez-263ba037/",
            twitterLink: "/#0",
        },
        {
            Image: "/assets/images/team/Danny.png",
            Name: "Danny Lee",
            Profession: "",
            GithubLink: "https://github.com/dcldev",
            linkedinLink: "https://www.linkedin.com/in/danny-lee-2952099b/",
            twitterLink: "/#0",
        },
        {
            Image: "/assets/images/team/James.jpg",
            Name: "James Tagorda",
            Profession: "",
            GithubLink: "https://github.com/JTagorda",
            linkedinLink: "https://www.linkedin.com/in/jamestagorda/",
            twitterLink: "/#0",
        }
        
    ]
};

export default Team;
