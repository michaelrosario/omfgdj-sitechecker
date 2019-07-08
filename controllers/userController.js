const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .populate('user_sites')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate('user_sites')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSites: function(req, res) {
    db.Sites
      .findById(req.body.siteId) 
      .then(site => {
        // stores findById to a promise to variable 'site' container
        console.log("confirming ", site.site_url);
        // scraping using cheerios
        axios.get("https://"+site.site_url)
          .then(response => {
            
            const $  = cheerio.load(response.data);
            const meta = [];
            $("meta").each((i, element) => {
              let content = $(element).attr("content");
              if(content){
                content = content.trim();
              }
              meta.push({
                name: $(element).attr("name"),
                content
              });
            });

            let userId = '';
            let validation = meta.filter(meta => meta.name === "coderhype") || [];
            console.log("validation",validation)  
            if(validation.length){
              userId = validation[0].content;
              if(userId === req.body.userId){
                console.log("Coderhype tag validated");
                db.User
                  .findById({ _id: req.body.userId })
                  .then(dbModel => {
                    console.log("dbModel",dbModel);

                    // make sure site is not already with the user
                    if(!dbModel.user_sites.find(x => x._siteId == req.body.siteId)){
                      const item = {
                        _siteId: req.body.siteId
                      }
                      dbModel.user_sites.push(item);
                      db.User
                        .findByIdAndUpdate({ _id: req.body.userId },dbModel)
                        .then(dbModel2 => {
                          console.log("dbModel2",dbModel2);
                          res.json({ type: "success", message: "The site has been added to your profile" });
                          res.redirect('/user/'+dbModel2.user_login);
                        })
                        .catch(err => res.status(422).json(err));
                    } else {
                      //res.redirect('/user/'+dbModel.user_login);
                      return res.status(200).json({ type: "success", message: "This site is already on your profile." });
                    }
                  
                  })
                  .catch(err => res.status(200).json(err));

              } else {
                return res.status(200).json({ type: "error", message: "Coderhype tag found but is invalid..." });
              }
            } else {
              return res.status(200).json({ type: "error", message: "Coderhype tag not found..." });
            }

          });
      })
      .catch(err => res.status(422).json(err));
  
  }
};
