const db = require("../models");

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
    db.User
      .findById({ _id: req.body.userId })
      .then(dbModel => {
        console.log("dbModel",dbModel)
        if(!dbModel.user_sites.some(x => x._id === req.body.siteId) || dbModel.user_sites.length === 0){
          dbModel.user_sites.push({
            _id: req.body.siteId 
          });
          console.log("dbModel update",dbModel);
          db.User
            .findByIdAndUpdate(req.params.userId,dbModel)
            .then(dbModel2 => res.json(dbModel2))
            .catch(err => res.status(422).json(err));
        } else {
          return res.status(200).json("site is already added")
        }
       
      })
      .catch(err => res.status(200).json(err));
  }
};
