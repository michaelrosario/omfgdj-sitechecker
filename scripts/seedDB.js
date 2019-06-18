const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const badgeseed = [
  {
    badge_name: "HTML Not Broken",
    badge_description: "Good",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "HTML Broken",
    badge_description: "Broken",
    badge_score: -5,
    badge_icon: "",
  },
  {
    badge_name: "HTML 5",
    badge_description: "HTML 5",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "HTML 4",
    badge_description: "HTML 4",
    badge_score: 4,
    badge_icon: "",
  },
  {
    badge_name: "jQuery",
    badge_description: "jQuery framework",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "React",
    badge_description: "React framework",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "Angular",
    badge_description: "Angular framework",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "Bootstrap",
    badge_description: "Bootstrap Design Framework",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "Foudation",
    badge_description: "Foudation Design Framework",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "No Design Framework",
    badge_description: "No Design Framework",
    badge_score: -5,
    badge_icon: "",
  },
  {
    badge_name: "Google",
    badge_description: "Google Font",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "Adobe",
    badge_description: "Adobe TypeKit Font",
    badge_score: 10,
    badge_icon: "",
  },
  {
    badge_name: "Default font",
    badge_description: "Default font",
    badge_score: 5,
    badge_icon: "",
  },
  {
    badge_name: "Facebook",
    badge_description: "Facebook Social Media",
    badge_score: "5",
    badge_icon: "",
  },
  {
    badge_name: "Twitter",
    badge_description: "Twitter Media",
    badge_score: "5",
    badge_icon: "",
  },
  {
    badge_name: "Instagram",
    badge_description: "Instagram Media",
    badge_score: "5",
    badge_icon: "",
  },
  {
    badge_name: "Blogger",
    badge_description: "Blogger",
    badge_score: "5",
    badge_icon: "",
  },
  {
    badge_name: "No blogger",
    badge_description: "No Blogger used",
    badge_score: "-5",
    badge_icon: "",
  },
  {
    badge_name: "Http Request Greater than 5",
    badge_description: "Http Request Greater than 5",
    badge_score: "5",
    badge_icon: "",
  },
  {
    badge_name: "Http Request less than 5",
    badge_description: "Http Request less than 5",
    badge_score: "3",
    badge_icon: "",
  },
  {
    badge_name: "Static",
    badge_description: "No http request",
    badge_score: "-5",
    badge_icon: "",
  },
];
const userseed = [
  {
    user_login: "user",
    user_password: "password",
    user_email: "email",
    user_firstname: "FirstName",
    user_lastname: "LastName",
    user_phone: "123-456-7891",
    user_imgsrc: "",
    user_github: "http://github.com",
    user_preference: "undefined"
  },
];
const websiteseed = [
  {
    site_name: "Columbia University",
    site_url: "www.columbia.edu",
    site_desc: "Columbia University in the city of New York",
    site_imgsrc: "",
    site_badges: "HTML 5 Badge"
  }
];


db.Badge
    .remove({})
    .then(() => db.Badge.collection.insertMany(badgeseed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userseed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
db.Website
    .remove({})
    .then(() => db.Website.collection.insertMany(websiteseed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });