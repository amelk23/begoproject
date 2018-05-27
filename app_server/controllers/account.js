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

/*Edit name*/
module.exports.editName = function(req, res) {
    Account.update({_id:req.user.id},{$set : {'name': req.body.fullname}}, function(err,data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            console.log(req.user.id, req.body.fullname, ' detail updated');
            res.redirect('/Editprofile')
        }
    });   
}

/*Edit Pref*/
module.exports.editPref = function(req, res) {
    Account.update({_id:req.user.id},{$set : {'fieldName': req.body.newinterest},'country': req.body.newcountry}, function(err,data){
        if(err){
            console.log(err);
            res.status(500);
            res.render('error',{
                message:err.message,
                error:err
            });
        }else{
            console.log(req.user.id, ' detail updated');
            res.redirect('Preference')
        }
    });   
}