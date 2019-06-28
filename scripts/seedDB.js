const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcryptjs');
// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sitechecker"
);

const badgeSeed = [ // Omar: These dummy entries are actually real values from the Wappalyzer API call
  {
    _id: "5d141c9854f7cf9fdff32b39",
    badge_name: "React",
    badge_component: "BadgeReact",
    badge_description: "",
    badge_version: "16.3.0",
    badge_icon: "React.png",
    badge_category: "Javascript Frameworks", // Omar: view RES object. need to properly get this data from res
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3a",
    badge_name: "Nginx",
    badge_component: "Nginx",
    badge_description: "",
    badge_version: "", // Omar: RES object is NULL, this field is not required in Schema so i am leaving the dummy data blank 
    badge_icon: "Nginx.svg",
    badge_category: "Web Servers",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3b",
    badge_name: "jQuery",
    badge_component: "jQuery",
    badge_description: "",
    badge_version: "1.8.3",
    badge_icon: "jQuery.svg",
    badge_category: "JavaScript Libraries",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3d",
    badge_name: "Twitter",
    badge_component: "Twitter",
    badge_description: "",
    badge_version: "",
    badge_icon: "Twitter.svg",
    badge_category: "Widgets",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3e",
    badge_name: "Bootstrap",
    badge_component: "Bootstrap",
    badge_description: "",
    badge_version: "",
    badge_icon: "Bootstrap.png",
    badge_category: "Web Frameworks",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3f",
    badge_name: "AngularJS",
    badge_component: "AngularJS",
    badge_description: "",
    badge_version: "",
    badge_icon: "AngularJS.svg",
    badge_category: "JavaScript Frameworks",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b40",
    badge_name: "Apache",
    badge_component: "Apache",
    badge_description: "Providing HTTP servers from the 90's. Keepin' it retro!",
    badge_version: "",
    badge_icon: "Apache.svg",
    badge_category: "Web Servers",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdf011111",
    badge_name: "CloudFlare",
    badge_component: "CloudFlare",
    badge_description: "CloudFlare DNS integration! Way to go!",
    badge_version: "",
    badge_icon: "CloudFlare.svg",
    badge_category:"Network Services",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf022222",
    badge_name: "Font Awesome",
    badge_component: "FontAwesome",
    badge_description: "Font Awesome serves some really awesome fonts and icons! Great work, you earned points!",
    badge_version: "",
    badge_icon: "Font Awesome.png",
    badge_category: "Web Framework",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf033333",
    badge_name: "Google Analytics",
    badge_component: "GoogleAnalytics",
    badge_description: "",
    badge_version: "",
    badge_icon: "Google Analytics.svg",
    badge_category: "Web Analytics Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf044444",
    badge_name: "Google Font API",
    badge_component: "GoogleFontAPI",
    badge_description: "",
    badge_version: "",
    badge_icon: "Google Font API.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf055555",
    badge_name: "Gravatar",
    badge_component: "Gravatar",
    badge_description: "The next Spielberg billion dollar movie! You made getting avatars easy.",
    badge_version: "",
    badge_icon: "Gravatar.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf066666",
    badge_name: "WooCommerce",
    badge_component: "WooCommerce",
    badge_description: "",
    badge_version: "",
    badge_icon: "WooCommerce.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf077777",
    badge_name: "WordPress",
    badge_component: "WordPress",
    badge_description: "PHP & MYSQL's love child. You're a cool kid now.",
    badge_version: "",
    badge_icon: "WordPress.svg",
    badge_category: "Content Management System",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf088888",
    badge_name: "PHP",
    badge_component: "PHP",
    badge_description: "Rasmus Lerdof would be proud. Well done you earned a badge!",
    badge_version: "",
    badge_icon: "PHP.svg",
    badge_category: "Programming Language",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf099999",
    badge_name: "MySQL",
    badge_component: "MySQL",
    badge_description: "You're really great at making relationships. You get points for being a great match maker!",
    badge_version: "",
    badge_icon: "MySQL.svg",
    badge_category: "Programming Language",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf100000",
    badge_name: "Google Tag Manager",
    badge_component: "GoogleTagManager",
    badge_description: "Google must know so much about your HTML & Javascript.",
    badge_version: "1.0",
    badge_icon: "Google Tag Manager.png",
    badge_category: "Tag Managers",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf100001",
    badge_name: "Meta Tags",
    badge_component: "MetaTags",
    badge_description: "Meta description is important for SEO, and your site has one.",
    badge_version: "1.0",
    badge_icon: "meta.svg",
    badge_category: "SEO",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf100002",
    badge_name: "Typekit",
    badge_component: "Typekit",
    badge_description: "Typekit serves really cool fonts.  For styling, you get a few points!",
    badge_version: "1.0",
    badge_icon: "Typekit.png",
    badge_category: "Font Scripts",
    badge_score: 10
  }
];


db.Badges
  .remove({})
  .then(() => db.Badges.collection.insertMany(badgeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const userSeed = [
    {
      user_login: "james",
      user_password: "james123",
      user_email: "tagorda@gmail.com",
      user_firstname: "James",
      user_lastname: "Tagorda",
      user_phone: "123-456-7891",
      user_imgsrc: "",
      user_github: "http://github.com",
      user_preference: "undefined",
      user_sites: []
    },
    {
      user_login: "Francesca",
      user_password: "Francesca123",
      user_email: "francesca@gmail.com",
      user_firstname: "Francesca",
      user_lastname: "Gonzalez",
      user_phone: "123-456-7891",
      user_imgsrc: "",
      user_github: "http://github.com",
      user_preference: "undefined",
      user_sites: []
    },
    {
      user_login: "Omar",
      user_password: "omar123",
      user_email: "omar@gmail.com",
      user_firstname: "Omar",
      user_lastname: "Ong",
      user_phone: "123-456-7891",
      user_imgsrc: "",
      user_github: "http://github.com",
      user_preference: "undefined",
      user_sites: []
    },
    {
      user_login: "Danny",
      user_password: "danny123",
      user_email: "danny@gmail.com",
      user_firstname: "Danny",
      user_lastname: "Lee",
      user_phone: "123-456-7891",
      user_imgsrc: "",
      user_github: "http://github.com",
      user_preference: "undefined",
      user_sites: []
    }
];

const newUserSeed = [];
userSeed.map(user => {
  user.user_password = bcrypt.hashSync(user.user_password, 10);
  newUserSeed.push(user);
});

//console.log(newUserSeed);

db.User
.remove({})
.then(() => db.User.collection.insertMany(newUserSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});


  const sitesSeed = [
    {
      site_name: "Yelp",
      site_url: "www.yelp.com",
      site_desc: "Yelp is a business directory service and crowd-sourced review forum. The company develops, hosts and markets the Yelp.com website and mobile app, which publishes crowd-sourced reviews about businesses.",
      site_imgsrc: "https://res.cloudinary.com/jetsetengine/image/upload/v1561738721/site%20snapshots/yelppage_xveupr.jpg",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3c"}, {_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3b"}, {_id:"5d141c9854f7cf9fdff32b39"}] // how to populate with assigned badges
    },
    {
      site_name: "MLB",
      site_url: "www.mlb.com",
      site_desc: "Major League Baseball (MLB) is a professional baseball organization. A total of 30 teams play in the National League (NL) and American League (AL), with 15 teams in each league.",
      site_imgsrc: "https://res.cloudinary.com/jetsetengine/image/upload/v1561738721/site%20snapshots/mlbSite_fqsucs.jpg",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3d"}, {_id:"5d141c9854f7cf9fdff32b3b"}] // how to pop cv gn ulate with assigned badges
    },
    {
      site_name: "Homedepot",
      site_url: "www.homedepot.com",
      site_desc: "Home Depot is an American home improvement supplies retailing company that sells tools, construction products, and services. The company is headquartered in Atlanta, Georgia",
      site_imgsrc: "https://res.cloudinary.com/jetsetengine/image/upload/v1561738721/site%20snapshots/homedepotSite_pm0ei6.jpg",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3e"}, {_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3b"}] // how to populate with assigned badges
    },
    {
      site_name: "Columbia University",
      site_url: "www.columbia.edu",
      site_desc: "Columbia University is a private Ivy League research university in New York City. Established in 1754, Columbia is the oldest institution of higher education in New York and the fifth-oldest institution of higher learning in the United States",
      site_imgsrc: "https://res.cloudinary.com/jetsetengine/image/upload/v1561738721/site%20snapshots/columbiaSite_wrawyp.jpg",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3f"}, {_id:"5d141c9854f7cf9fdff32b3c"}, {_id:"5d141c9854f7cf9fdff32b40"}] // how to populate with assigned badges
    }
  ];


db.Sites
.remove({})
.then(() => db.Sites.collection.insertMany(sitesSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

