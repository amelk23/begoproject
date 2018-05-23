var mongoose = require("mongoose");
require("../models/db")
var passport = require('passport');
var Account = mongoose.model('Account');


//Post new project
module.exports.regist = function(req, res){
    Account.register(new Account({
        name: req.body.name, email: req.body.username, country: req.body.country, 
        fieldName: req.body.fieldName}),req.body.password,
        function(err,account){
            console.log(err)
            if(err){
                return res.render('home', { msg : 'rego failed'});
            }
            passport.authenticate('local')(req, res, function () {
                res.redirect('/Homelogin');
            });
    });
};

module.exports.login =  function(req, res) {
    passport.authenticate('local')(req, res, function () { 
        console.log(data, 'displayed');
        index(req,res,next);
        res.redirect('/Homelogin');
    });
};

 //passport.authenticate('local', { successRedirect: '/',
 //        failureRedirect: '/login'
 //        failureFlash: true 
//})
    
module.exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};