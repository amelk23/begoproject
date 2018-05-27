var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlAcc = require('../controllers/account');
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

/*Login to account*/
router.post('/login', ctrlAcc.login);

/*Register to account*/
router.post('/register', ctrlAcc.regist);

/* GET Home Login page. */
router.get('/Homelogin', ctrlMain.homelogin);
router.post('/Homelogin', ctrlProject.newPrj);


/* GET Project details page. */
router.get('/Projectdetails/:id', ctrlProject.newPrjdetail);
router.post('/Projectdetails/:id', ctrlProject.newTask);
router.get('/Projectdetails/:pid/addmember/:mid', ctrlProject.newMember);

/*update task */
router.post('/Projectdetails/:pid/Updatetask/:tid', ctrlProject.updateTask);

/*delete task */
router.get('/Projectdetails/:pid/Deletetask/:tid', ctrlProject.delTask);

/* GET Find Project page. */
router.get('/Findproject', ctrlMain.findproject);

/* Join new Project */
router.get('/Joinproject/:projid', ctrlProject.joinproject);

/* Leave Project */
router.get('/Leaveproject/:projid', ctrlProject.leaveProject);

/* GET Edit Profile page. */
router.get('/Editprofile', ctrlMain.editprofile);

/* GET Edit Preference page. */
router.get('/Preference', ctrlMain.editpreference);

/* POST NEW PROJECT*/
//router.get('/Homelogin', ctrlProject.projectList);

/* Logout */
router.get('/logout', ctrlAcc.logout);

module.exports = router;
