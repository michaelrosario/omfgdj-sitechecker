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
    badge_name: "BadgeReact",
    badge_component: "BadgeReact",
    badge_version: "16.3.0",
    badge_icon: "React.png",
    badge_category: "Javascript Frameworks", // Omar: view RES object. need to properly get this data from res
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3a",
    badge_name: "Nginx",
    badge_component: "Nginx",
    badge_version: "", // Omar: RES object is NULL, this field is not required in Schema so i am leaving the dummy data blank 
    badge_icon: "Nginx.svg",
    badge_category: "Web Servers",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3b",
    badge_name: "jQuery",
    badge_component: "jQuery",
    badge_version: "1.8.3",
    badge_icon: "jQuery.svg",
    badge_category: "JavaScript Libraries",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3c",
    badge_name: "Google Analytics",
    badge_component: "GoogleAnalytics",
    badge_version: "", // Omar: another NULL response, we dont really need this so I guess we can remote this in the Schema and here???
    badge_icon: "Google Analytics.svg",
    badge_category: "Analytics",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3d",
    badge_name: "Twitter",
    badge_component: "Twitter",
    badge_version: "",
    badge_icon: "Twitter.svg",
    badge_category: "Widgets",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3e",
    badge_name: "Bootstrap",
    badge_component: "Bootstrap",
    badge_version: "",
    badge_icon: "Bootstrap.png",
    badge_category: "Web Frameworks",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b3f",
    badge_name: "AngularJS",
    badge_component: "AngularJS",
    badge_version: "",
    badge_icon: "AngularJS.svg",
    badge_category: "JavaScript Frameworks",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdff32b40",
    badge_name: "Apache",
    badge_component: "Apache",
    badge_version: "",
    badge_icon: "Apache.svg",
    badge_category: "Web Servers",
    badge_score: 10,
  },
  {
    _id: "5d141c9854f7cf9fdf011111",
    badge_name: "CloudFlare",
    badge_component: "CloudFlare",
    badge_version: "",
    badge_icon: "CloudFlare.svg",
    badge_category:"Network Services",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf022222",
    badge_name: "Font Awesome",
    badge_component: "FontAwesome",
    badge_version: "",
    badge_icon: "Font Awesome.png",
    badge_category: "Web Framework",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf033333",
    badge_name: "Google Analytics",
    badge_component: "GoogleAnalytics",
    badge_version: "",
    badge_icon: "Google Analytics.svg",
    badge_category: "Web Analytics Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf044444",
    badge_name: "Google Font API",
    badge_component: "GoogleFontAPI",
    badge_version: "",
    badge_icon: "Google Font API.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf055555",
    badge_name: "Gravatar",
    badge_component: "Gravatar",
    badge_version: "",
    badge_icon: "Gravatar.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf066666",
    badge_name: "WooCommerce",
    badge_component: "WooCommerce",
    badge_version: "",
    badge_icon: "WooCommerce.png",
    badge_category: "Web Service",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf077777",
    badge_name: "WordPress",
    badge_component: "WordPress",
    badge_version: "",
    badge_icon: "WordPress.svg",
    badge_category: "Content Management System",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf088888",
    badge_name: "PHP",
    badge_component: "PHP",
    badge_version: "",
    badge_icon: "PHP.svg",
    badge_category: "Programming Language",
    badge_score: 10
  },
  {
    _id: "5d141c9854f7cf9fdf099999",
    badge_name: "MySQL",
    badge_component: "MySQL",
    badge_version: "",
    badge_icon: "MySQL.svg",
    badge_category: "Programming Language",
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

console.log(newUserSeed);

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
      site_desc: "yelp site",
      site_imgsrc: "",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3c"}, {_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3b"}, {_id:"5d141c9854f7cf9fdff32b39"}] // how to populate with assigned badges
    },
    {
      site_name: "MLB",
      site_url: "www.mlb.com",
      site_desc: "Major League Baseball",
      site_imgsrc: "",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3d"}, {_id:"5d141c9854f7cf9fdff32b3b"}] // how to pop cv gn ulate with assigned badges
    },
    {
      site_name: "Homedepot",
      site_url: "www.homedepot.com",
      site_desc: "Homedepot Website",
      site_imgsrc: "",
      site_badges: [{_id:"5d141c9854f7cf9fdff32b3e"}, {_id:"5d141c9854f7cf9fdff32b3a"}, {_id:"5d141c9854f7cf9fdff32b3b"}] // how to populate with assigned badges
    },
    {
      site_name: "Columbia University",
      site_url: "www.columbia.edu",
      site_desc: "Columbia University in the city of New York",
      site_imgsrc: "/image",
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

