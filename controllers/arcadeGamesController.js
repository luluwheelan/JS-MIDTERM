const Resource = require('../models/resource');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    ArcadeGame.find()
        .then(arcadeGames => {
            res.render("arcadeGames/index", {
                arcadeGames: arcadeGames,
                title: "arcadeGames"
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/");
        });
};

exports.show = (req, res) => {
    ArcadeGame.findById({
            _id: req.params.id
        })
        .then(arcadeGame => {
            res.render("arcadeGames/show", {
                title: arcadeGame.fullName,
                arcadeGames: arcadeGame
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/arcadeGames");
        });
};

exports.new = (req, res) => {
    res.render("arcadeGames/new", {
        title: "Create New arcadeGame"
    });
};

exports.edit = (req, res) => {
    ArcadeGame.findById({
            _id: req.params.id
        })
        .then(arcadeGame => {
            res.render("arcadeGames/edit", {
                title: arcadeGame.fullName,
                arcadeGame: arcadeGame
            });
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/arcadeGames");
        });
};

exports.create = async (req, res) => {
    ArcadeGame.create(req.body.arcadeGame)
        .then(() => {
            req.flash("success", "Create arcade Game succeed!");
            res.redirect("/arcadeGames");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("arcadeGames/new");
        });
};

exports.update = (req, res) => {
    ArcadeGame.updateOne({
            _id: req.body.id
        }, req.body.arcadeGames, {
            runValidators: true
        })
        .then(() => {
            req.flash("success", "Update arcade Game succeed!");
            res.redirect("/arcadeGames");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/arcadeGames");
        });
};


exports.destroy = (req, res) => {
    ArcadeGame.deleteOne({
            _id: req.body.id
        })
        .then(() => {
            req.flash("success", "Delete arcade Game succeed!");
            res.redirect("/arcadeGames");
        })
        .catch(err => {
            console.log(`ERROR: ${err}`);
            req.flash("error", `ERROR: ${err}`);
            res.redirect("/arcadeGames");
        });
};