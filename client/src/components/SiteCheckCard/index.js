import React,{ lazy, Suspense, Component } from "react";
import * as Badges from "../../badges/";
import API from "../../utils/API";
import socket from 'socket.io-client';
import { Input, FormBtn } from "../Form";
import { Card, CardGroup, CardColumns } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

export default class SiteCheckCard extends React.Component {
        constructor(props, context) {
            super(props, context);
             this.state = {
                site: '',
                siteImage: "",
                userScore: [],
                siteBadgeId: [],
                siteData: {},
                badges: [],
                siteBadges: [],
                processing: false,
                loggedIn: false
            };           
            
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
            this.checkLoggedIn= this.checkLoggedIn.bind(this);
            this.saveSiteToDB = this.saveSiteToDB.bind(this);
            this.handleAddScore = this.handleAddScore.bind(this);
          }
            
  componentDidMount() {
    this.checkLoggedIn();

    // get all badges from DB
    API.getAllBadges().then(badges =>{
      
      // store all badges to state
      this.setState({ siteBadges: badges.data });
      console.log("siteBadges",badges.data);
      
    });
    const io = socket(this.state.endpoint, { secure: true });
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    io.off("toReact");

  }

  handleAddScore = (points,id) => {
    let { 
      siteBadgeId,
      userScore
    } = this.state;
    
    console.log("SCORE"+userScore);

    if((Array.isArray(siteBadgeId) && siteBadgeId.indexOf(id) === -1) || siteBadgeId.length === 0){
      siteBadgeId.push(id);
      userScore.push(points);
      console.log("Updating Score for "+id+" for "+points+" points");
      this.setState({ 
        siteBadgeId,
        userScore
      });
    }
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { site } = this.state;  
    console.log("SEARCH "+site+" VIA APIs");

    this.setState({
      processing: true
    });

    API.checkSite(site).then(res => {
      
      console.log("API.checkSite res is >>>>>",res);
      
      let resObj = res.data.wappalyzer; // omar
      console.log("Wappa Obj is >>",resObj);
      
      const iconURL = "https://www.wappalyzer.com/images/icons/";

      const badgeArr = resObj ? resObj.map(thing => {
          return {
              badge_name : thing.name,
              badge_icon : iconURL+thing.icon,
              badge_score : 1
          }
      }) : [];

      // empty score and array
      this.setState({
        userScore: [],
        siteBadgeId: [],
        processing: false
      });

      console.log ("object badgeArr to db is",badgeArr);

      const io = socket(this.state.endpoint, { secure: true });
      // Send site to all users
        io.emit('fromReact', { data: site });
        this.setState({
          siteData: res.data,
          badges: badgeArr
        });

        this.saveSiteToDB(badgeArr);

    });
  }

  checkLoggedIn = () => {
    API.checkLoggedIn().then(response => {
      console.log("response on checkLoggedIn",response);
      if(response.data.user){
        this.setState({ loggedIn: true });
      }
    });
  }

  saveSiteToDB = (badgeArr) => {
      const { siteData, site } = this.state;
      const pushBadges = badgeArr;
      const info = {
        site_name: siteData.title,
        site_url: site,
        site_desc: "test",
        site_imgsrc: "",
        site_badges: pushBadges
      };
      
      console.log("OMAR: site obj to be entered to siteDB is: ", info);
      API.saveSite(info);
  }

  render() {

    const { 
      site, 
      siteData, 
      badges,
      userScore,
      siteBadgeId,
      siteBadges
    } = this.state;

   const components = siteData ? siteBadges.map(badge => {
     //console.log(badge.badge_name + " component is being lazy loaded");
     const Component = Badges[badge.badge_component] ? Badges[badge.badge_component] : Badges.AngularJS;
     return <Component key={badge._id} siteData={siteData} updateScore={this.handleAddScore} badge={badge} />;
   }) : {};
   
    let badgeIcons = [];
    let calculatedScore = userScore.length ? userScore.reduce((a, b) => a + b, 0) : 0;

    if(badges.length){
        badgeIcons = badges.map((icon,index) => {
          return (
              <Card className="badgeCard" key={`card`+index}>
                  <Card.Body variant="left" className="badgeContent">
                    <img src={icon.badge_icon} alt={icon.badge_name} width="25" height="25" className="badgeIcon" />
                  </Card.Body>
                <Card.Footer className="badgeFooter"><p>{icon.badge_name}</p></Card.Footer>
              </Card>
          );
        });
    }
  
    let siteTitle = siteData.title || "";

    return (
        <CardGroup className="sitecheckcard">
            <Card className="thirty bgdarko">
                <Card.Body className="">

                    <form>
                        <Input
                            value={site}
                            className="bgdarkish"
                            onChange={this.handleInputChange}
                            name="site"
                            placeholder="  Enter your URL"
                        />
                        <FormBtn
                            disabled={!(site && !this.state.processing)}
                            onClick={this.handleFormSubmit}
                        >
                            {this.state.processing ?   
                              <span> &nbsp; &nbsp; <i className="fa fa-spinner fa-spin"></i> &nbsp; &nbsp; </span> : 
                              "Check"}
                        </FormBtn>
                        {siteTitle ? (
                          <div>
                            <img className="site-screen" src={siteData.image} alt={siteTitle} />
                            <h5 className="text-light">Coder Rank Score: {calculatedScore}</h5>
                          </div>
                        ) : ""}
                    </form>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className="seventy bgdarko">
                <Card.Body className="text-light jetsetfont1">
                <Suspense fallback={<div>Loading...</div>}>{components}</Suspense>
                {siteTitle ? 
                        <div>
                        <h5 className="jetsetfont1">Here's the awesome tech we found on your site >>{siteTitle}</h5>
                <CardColumns>
                  {badgeIcons}
                </CardColumns>
                        {/* <p>H1: {siteData.header1.length}</p>
                        <p>H2: {siteData.header2.length}</p>
                        <p>H3: {siteData.header3.length}</p>
                        <p>H4: {siteData.header4.length}</p>
                        <p>H5: {siteData.header5.length}</p>
                        <p>Images: {siteData.images.length}</p>
                        <p>Links: {siteData.links.length}</p>
                        <p>Meta: {siteData.meta.length}</p>
                        <p>Scripts: {siteData.script.length}</p> */}
                        </div>
                    : <h4 className="jetsetfont1">Enter your URL and CodeHype will perform an algorithmic scan and reward you with DevChops badges and a CodeHype Score. The more advanced tools you use, the higher your badge count and score will be!</h4>}
              
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>    
        </CardGroup>
    );
  }
}



