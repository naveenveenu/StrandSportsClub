var express = require('express');
var router = express.Router();

var contact = require('../services/teams/team');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/team/getTeams', team.getTeams);
//router.post('/team/insertTeam', team.insertTeam);
//router.post('/team/deleteTeam', team.deleteTeam);
//router.post('/team/updateTeam', team.updateTeam);

module.exports = router;