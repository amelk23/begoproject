var mongoose = require("mongoose");
require("../models/db")
require("../models/Project");
require("../models/account")

var Project = mongoose.model('Project');
var Account = mongoose.model('Account');
var Task = mongoose.model('Task');



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
            Task.find({'_id': {$in: data.mytasks}}, function(e,taskdata){
                console.log(data,'displayed');
                res.render('Projectdetails',{
                    projdetail: data,
                    tasklist : taskdata,
                    });
                })
            }})
        }; 

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

//Retrieve
module.exports.taskList = index;

function index(req, res, next){
    Task.find().exec(
        function(err, data){
            if(err){
                res.render('error', {
                    message:err.message,
                    error:err
                })
            }else{
                console.log('Find complete');

                res.render('taskList', {
                    title: 'List of tasks', task:data , user:req.user
                });
                    
            }
        }
    )
}

//Post new task
module.exports.newTask = function(req, res, next){
    var newTask = new Task({
        name: req.body.name, 
        member: req.body.member,
        rank: req.body.rank,
        deadline: req.body.deadline
    });

    newTask.save(function(err,data){
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
            Project.update({_id: req.params.id},
                {$push: {mytasks: newTask._id}}, function(err,accdata){
                    if(err){
                        console.log(err);
                        res.status(500);
                        res.render('error',{
                            message:err.message,
                            error:err
                        });
                    }else{
                        console.log(accdata, 'tasklist updated');
                        index(req,res,next);
                        res.redirect('/Projectdetails/'+ req.params.id)
                    }
                });   
            }
    });   
};


/*module.exports.newPrjdetail = function(req, res, next){

    Project.findOne({_id: req.params.id}, function(err, data){
        
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            Account.find({'_id': {$nin: data.mymembers}, function(e,memberdata){
                if(err){
                    console.log(err);
                    res.status(500);
                    res.render('error',{
                        message: err.message,
                        error: err
                    });
                }
                else{
                    if(err){
                        console.log(err);
                        res.status(500);
                        res.render('error',{
                            message: err.message,
                            error:err
                        });
                    }
                    else{
                        Task.find({'_id': {$in: data.mytasks}}, function(e,taskdata){
                            console.log(data,'displayed');
                            res.render('Projectdetails',{
                                projdetail: data,
                                tasklist : taskdata,
                                projectmembers: memberdata
                            });
                        })
                    }}
                }})
            }})};*/
