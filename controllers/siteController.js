const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Sites
      .find(req.query)
      .populate('site_badges')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUrl: function(req, res) {
    db.Sites
      .findOne({ site_url: req.query.url })
      .then(dbModel => {
        // only send back id and lastSave
        const { _id, site_lastSave } = dbModel;
        res.json({_id,site_lastSave});

      })
      .catch(err => res.status(200).json("new"));
  },
  findById: function(req, res) {
    db.Sites
      .findById(req.params.id)
      .populate('site_badges')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Sites
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Sites
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Sites
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
