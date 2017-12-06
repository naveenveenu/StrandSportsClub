var express = require('express');
var router = express.Router();

var admin = require('../services/admin/admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/getSport', admin.getSport);
router.post('/admin/addSport', admin.insertSport);
router.post('/admin/deleteSport', admin.deleteSport);
router.post('/admin/updateSport', admin.updateSport);


module.exports = router;
