import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css";

class About extends Component {
    render() {
        //About loop start
        const aboutdata = this.props.aboutsData.map((about, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
                <div className="about-info">
                    <Icofont icon={about.Icon} />
                    <h3>{about.title}</h3>
                    <p>{about.content}</p>
                </div>
            </div>
        ));
        //About loop END
        return (
            <React.Fragment>
                <section id="about" className="about-us ptb-100">
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
                        {aboutdata}
                    </div>
                </div>
            </section>   
            </React.Fragment>
        );
    }
}
//Props Types
About.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
    SectionbgTitle: "About",
    sectionTitle: "About Us",
    sectionDescription:
        "CodeHype is a platform that scrapes and verifies site-specific elements, functionality, issues and many more relevant web metrics. The ambition behind CodeHype is to encourage our users to test their websites and receive a score and badges for any metrics that CodeHype currently checks for. Our users may add a meta tag to their sites to “claim” a site and it will be added to their profile along with the badges and a tally of scores.  It can be used on their linkedin profile and even serve as a portfolio.",
        aboutsData: [
/*
        {
            Icon: "icofont-binoculars",
            title: "Backgrounds",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-direction-sign",
            title: "Our Approach",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-thermometer",
            title: "Methodology",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-users-social",
            title: "Our Rich Experience",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-money",
            title: "Value for Money",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            Icon: "icofont-unique-idea",
            title: "Flexible Development",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
*/
    ]
};

export default About;
