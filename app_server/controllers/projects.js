var mongoose = require("mongoose");
require("../models/db")
require("../models/Project");

var Project = mongoose.model('Project');



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
            console.log(data, ' saved');
            index(req,res,next);
            res.redirect('/Homelogin');
        }
    });   
}