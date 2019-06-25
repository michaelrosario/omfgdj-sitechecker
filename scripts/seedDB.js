const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/sitechecker"
);

const badgeSeed = [ // Omar: These dummy entries are actually real values from the Wappalyzer API call
  {
    badge_name: "React",
    badge_version: "16.3.0",
    badge_icon: "React.png",
    badge_category: "Javascript Frameworks", // Omar: view RES object. need to properly get this data from res
    badge_score: 1,
  },
  {
    badge_name: "Nginx",
    badge_version: "", // Omar: RES object is NULL, this field is not required in Schema so i am leaving the dummy data blank 
    badge_icon: "Nginx.svg",
    badge_category: "Web Servers",
    badge_score: 1,
  },
  {
    badge_name: "jQuery",
    badge_version: "1.8.3",
    badge_icon: "jQuery.svg",
    badge_category: "JavaScript Libraries",
    badge_score: 1,
  },
  {
    badge_name: "Google Analytics",
    badge_version: "", // Omar: another NULL response, we dont really need this so I guess we can remote this in the Schema and here???
    badge_icon: "Google Analytics.svg",
    badge_category: "Analytics",
    badge_score: 1,
  },
  {
    badge_name: "Twitter",
    badge_version: "",
    badge_icon: "Twitter.svg",
    badge_category: "Widgets",
    badge_score: 1,
  },
  {
    badge_name: "Bootstrap",
    badge_version: "",
    badge_icon: "Bootstrap.png",
    badge_category: "Web Frameworks",
    badge_score: 1,
  },
  {
    badge_name: "AngularJS",
    badge_version: "",
    badge_icon: "AngularJS.svg",
    badge_category: "JavaScript Frameworks",
    badge_score: 1,
  },
  {
    badge_name: "Apache",
    badge_version: "",
    badge_icon: "Apache.svg",
    badge_category: "Web Servers",
    badge_score: 1,
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
      user_login: "user",
      user_password: "password",
      user_email: "email",
      user_firstname: "FirstName",
      user_lastname: "LastName",
      user_phone: "123-456-7891",
      user_imgsrc: "",
      user_github: "http://github.com",
      user_preference: "undefined",
      user_sites: []
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
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
      site_name: "Columbia University",
      site_url: "www.columbia.edu",
      site_desc: "Columbia University in the city of New York",
      site_imgsrc: "/image",
      site_badges: [] // how to populate with assigned badges
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

