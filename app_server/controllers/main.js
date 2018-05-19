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
    res.render('Homelogin.pug');
};

/*GET Find Project PAGE*/
module.exports.findproject = function(req, res) {
    res.render('Findproject.pug');
};

/*GET Project list PAGE*/
module.exports.listresult = function(req, res) {
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null,err);
        var cursor = db.collection('projects').find();
        cursor.forEach(function(doc, err){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function(){
            db.close();
            res.render('projects', {item: resultArray});
        });
    });
};

/*GET Project details PAGE*/
module.exports.projectdetails = function(req, res) {
    res.render('Projectdetails.pug');
};

/*GET Edit Profile PAGE*/
module.exports.editprofile = function(req, res) {
    res.render('Editprofile.pug');
};

/*GET Edit Preference PAGE*/
module.exports.editpreference = function(req, res) {
    res.render('Preference.pug');
};