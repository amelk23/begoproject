var mongoose = require("mongoose");
require("../models/db")
require("../models/Project");

var Project = mongoose.model('Project');
var Account = mongoose.model('Account');



//Retrieve
module.exports.projectList = index;

function index(req, res, next){
    Project.find().exec(
        function(err, data){
            if(err){
                res.render('error', {
                    message:err.message,
                    error:err
                })
            }else{
                console.log('Find complete');

                res.render('projectList', {
                    title: 'List of projects', projects:data , user:req.user
                });
                    
            }
        }
    )
}

//Post new project
module.exports.newPrj = function(req, res, next){
    //Add new project to project database
    var newProject = new Project({
        name: req.body.name, 
        field: req.body.field,
        location: req.body.location,
        description: req.body.description,
        startdate: req.body.startdate
    });
    newProject.save(function(err,data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            console.log(data, ' saved')
            //add new project to user database
            Account.update({ _id: req.user.id}, 
                {$push: {myprojects: newProject._id}}, function(err,accdata){
                    if(err){
                        console.log(err);
                        res.status(500);
                        res.render('error',{
                            message:err.message,
                            error:err
                        });
                    }else{
                        console.log(accdata, 'projectlist updated');
                        index(req,res,next);
                        res.redirect('/Homelogin');
                    }
                });   
            }
    });   
};

module.exports.newPrjdetail = function(req, res, next){

    Project.findOne({_id: req.params.id}, function(err, data){
        
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            console.log(data, 'displayed');
            res.render('Projectdetails', {
                projdetail : data
            });
        }
    });
}

//Post new project
module.exports.joinproject = function(req, res, next){
    Project.findOne({_id: req.params.projid}, function(err, data){
        
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            //add new project to account db
            Account.update({ _id: req.user.id}, 
                {$push: {myprojects: data._id}}, function(err,accdata){
                    if(err){
                        console.log(err);
                        res.status(500);
                        res.render('error',{
                            message:err.message,
                            error:err
                        });
                    }else{
                        console.log(accdata, 'projectlist updated');
                        index(req,res,next);
                        res.redirect('/Homelogin');
                    }
                }); 
        }
        }
    );
}