var express = require('express');
var router = express.Router();

// var team = require('../services/teams/team');
var sport = require('../services/sports/sport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/team/getTeams', team.getTeams);
// router.post('/team/insertTeam', team.insertTeam);
// router.post('/team/deleteTeam', team.deleteTeam);
// router.post('/team/updateTeam', team.updateTeam);

router.get('/sport/getSport', sport.getSport);
router.post('/sport/addSport', sport.insertSport);
router.post('/sport/deleteSport', sport.deleteSport);
router.post('/sport/updateSport', sport.updateSport);


module.exports = router;
