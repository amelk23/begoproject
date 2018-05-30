var mongoose = require("mongoose");
var Project = require("../models/Project");
var Account = require("../models/account");
var Task = require("../models/Task");
require("../models/db")


/*GET HOME PAGE*/
module.exports.home = function(req, res) {
  res.render('home.pug');
};

/*GET About us PAGE*/
module.exports.about = function(req, res) {
    res.render('aboutus.pug');
};

/* GET Matchmaking Algo page*/
module.exports.matchmaking = function(req,res){
    res.render('matchmakingAlgo.pug');
}

/*GET Team Member Page*/
module.exports.team = function(req,res){
    res.render('teamMember.pug');
}


/*GET References Page*/
module.exports.references = function(req,res){
    res.render('references.pug');
}

/*GET Home login PAGE*/
module.exports.homelogin = function(req, res) {
    Account.findOne({_id: req.user.id}, function(err, data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            Project.find({'_id' : {$in :data.myprojects }},function(e,docs){
                res.render('Homelogin', {
                    projlist : docs
                });
            });
        }
    });
};

/*GET Find Project PAGE*/
module.exports.findproject = function(req, res) {
    Account.findOne({_id: req.user.id}, function(err, data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            Project.find({'location' : {$eq :data.country }, '_id':{$nin :data.myprojects}, 'field':{$in: data.fieldName}},function(e,docs){
                res.render('Findproject', {
                    newprojects : docs
                });
            });
        }
    });
};

/*GET Edit Profile PAGE*/
module.exports.editprofile = function(req, res) {
    Account.findOne({_id: req.user.id}, function (err,data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message: err.message,
                error:err
            });
        }else{
            res.render('Editprofile',{
                profiledtl: data
            });
        }
    })
};

/*GET Edit Preference PAGE*/
module.exports.editpreference = function(req, res) {
    Account.findOne({_id: req.user.id}, function(err, data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            res.render('Preference', {
                curruser : data
            });
        }
    });
};


/*GET Edit Task Page*/
module.exports.edittask = function(req, res) {
    Task.findOne({_id: req.params.tid}, function (err,data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message: err.message,
                error:err
            });
        }else{
            res.render('EditTask',{
                taskdata: data
            });
        }
    })
};