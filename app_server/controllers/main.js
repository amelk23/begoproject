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
                res.render('homelogin', {
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

/*GET Project details PAGE*/
/*module.exports.projectdetails = function(req, res) {
    Account.findOne({_id: req.user.id}, function(err, data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            Project.findOne({_id: req.params.id},  function(err,data){
                if(err){
                    console.log(err);
                    res.status(500);
                    res.render('error',{
                        message: err.message,
                        error: err
                    });
                }
                else{
                    Task.find({'_id' : {$in :data.mytasks }},function(e,data,taskdata){
                        res.render('Projectdetails', {
                            projdetail: data,
                            tasklist: taskdata
                        });
                    });
                }
            });
        }
    });
};*/

/*GET Edit Profile PAGE*/
module.exports.editprofile = function(req, res) {
    res.render('Editprofile.pug');
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