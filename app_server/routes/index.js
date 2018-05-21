var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlProject = require('../controllers/projects')

/* GET home page. */
router.get('/', ctrlMain.home);

/* GET home page. */
router.get('/home', ctrlMain.home);

/* GET About Us page. */
router.get('/aboutus', ctrlMain.about);

/*GET Matchmaking Algorithm page */
router.get('/matchmakingAlgo', ctrlMain.matchmaking);

/*GET Team Member page */
router.get('/teamMember', ctrlMain.team);

/*GET References page*/
router.get('/references', ctrlMain.references);

/* GET Home Login page. */
router.get('/Homelogin', ctrlMain.homelogin);

/* GET Project details page. */
router.get('/Projectdetails/:id', ctrlProject.newPrjdetail);

/* GET Find Project page. */
router.get('/Findproject', ctrlMain.findproject);

/* GET Edit Profile page. */
router.get('/Editprofile', ctrlMain.editprofile);

/* GET Edit Preference page. */
router.get('/Preference', ctrlMain.editpreference);

/* POST NEW PROJECT*/
//router.get('/Homelogin', ctrlProject.projectList);
router.post('/Homelogin', ctrlProject.newPrj);


module.exports = router;
