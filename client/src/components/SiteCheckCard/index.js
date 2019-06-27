import React from "react";
import API from "../../utils/API";
import socket from 'socket.io-client';
import { Input, FormBtn } from "../Form";
import { Card, CardGroup, CardDeck } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";


export default class SiteCheckCard extends React.Component {
        constructor(props, context) {
            super(props, context);
             this.state = {
                site: '',
                siteData: {},
                badges: [],
                messages: "",
                processing: false,
                loggedIn: false,
            };           
            
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
            this.checkLoggedIn= this.checkLoggedIn.bind(this);
            this.saveSiteToDB = this.saveSiteToDB.bind(this);

          }
            
  componentDidMount() {
    
    this.checkLoggedIn();

    const io = socket(this.state.endpoint, { secure: true });
    io.on('toReact',site => {

      console.log(site);
      this.setState({
        messages: site.data.data
      });

    })
    
  }

  componentWillUnmount() {
    const io = socket(this.state.endpoint, { secure: true });
    io.off("toReact");

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

      this.setState({
        site: '',
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
      badges
    } = this.state;

    let badgeIcons = "";

    if(badges.length){
        badgeIcons = badges.map((icon,index) => {
          return (
            <CardDeck key={`card`+index}>
              <Card>
                  <Card.Img variant="left" src={icon.badge_icon} alt={icon.badge_name} width="25" height="25" className="badge-icon" />
                  <Card.Body style={{float: 'right'}}>
                    <h5>{icon.badge_name}</h5>
                    {/* <img src={icon.badge_icon} alt={icon.badge_name} width="50" height="50" className="badge-icon" /> */}
                  </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </CardDeck>
          );
        });
    }

    let siteTitle = siteData.title || "";

    return (
        <CardGroup className="sitecheckcard">
            <Card className="thirty">
                <Card.Body>
                  

                    <form>
                        <Input
                            value={site}
                            onChange={this.handleInputChange}
                            name="site"
                            placeholder="Enter a URL"
                        />
                        <FormBtn
                            disabled={!(site && !this.state.processing)}
                            onClick={this.handleFormSubmit}
                        >
                            {this.state.processing ?   
                              <span> &nbsp; &nbsp; <i class="fa fa-spinner fa-spin"></i> &nbsp; &nbsp; </span> : 
                              "Check"}
                        </FormBtn>
                    </form>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className="seventy">
                <Card.Body>
                {siteTitle ? 
                        <div>
                        <h5>We are now checking <u>{siteTitle}</u></h5> 
                        {badgeIcons}
                        <p>H1: {siteData.header1.length}</p>
                        <p>H2: {siteData.header2.length}</p>
                        <p>H3: {siteData.header3.length}</p>
                        <p>H4: {siteData.header4.length}</p>
                        <p>H5: {siteData.header5.length}</p>
                        <p>Images: {siteData.images.length}</p>
                        <p>Links: {siteData.links.length}</p>
                        <p>Meta: {siteData.meta.length}</p>
                        <p>Scripts: {siteData.script.length}</p>
                        
                        </div>
                    : "HEY THERES NO RESULTS, SO YEAH...."}
                    {this.state.messages ? <div>Someone is checking {this.state.messages}</div> : ""}
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>    
        </CardGroup>
    );
  }
}



