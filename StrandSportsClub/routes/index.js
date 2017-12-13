var express = require('express');
var router = express.Router();

var admin = require('../services/admin/admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/getPlayer', admin.getPlayer);
router.post('/admin/addPlayer', admin.insertPlayer);
router.post('/admin/deletePlayer', admin.deletePlayer);
router.post('/admin/updatePlayer', admin.updatePlayer);

router.get('/admin/getTeam', admin.getTeam);
router.post('/admin/addTeam', admin.insertTeam);
router.post('/admin/deleteTeam', admin.deleteTeam);
router.post('/admin/updateTeam', admin.updateTeam);

module.exports = router;
