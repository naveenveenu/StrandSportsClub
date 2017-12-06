var entity = require("../db/mongoEntity");
var adminDb = "adminView"

var admin = {
  getSport: function(req, res, next) {
    entity
      .read(adminDb, {})
      .then(function(result) {
        console.log(result.length);
        res.json(result);
      })
      .catch(function(error) {
        console.log("Here is the error");
        console.log(error);
        res.json([]);
      });
  },

  insertSport: function(req, res, next) {
    var sport_name = req.body.name;
    var userid = "USER_"+ new Date().getTime();
    entity
      .insert(adminDb, [{ name: sport_name, userId : userid }])
      .then(function(result) {
        res.json({ status: "Success" });
      })
      .catch(function(error) {
        console.log("Error");
        console.log(result);
        res.json({ status: "Failed" });
      });
  },

  deleteSport: function(req, res, next) {
    entity
      .remove(adminDb, { "userId" : req.body.userId })
      .then(function(result) {
        res.json({ status: "Success", "result" : result });
      })
      .catch(function(error) {
        console.log("Error");
        res.json({ status: "Failed", "error" : error });
      });
  },

  updateSport: function(req, res, next){
    entity
    console.log("came into update sport...")
    console.log(req.body.userId)
    .update(adminDb, {"userId" : req.body.userId}, {"name" : req.body.sportName})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  },

  getTeams: function(req, res, next) {
    entity
      .read(adminDb, {})
      .then(function(result) {
        console.log(result.length);
        res.json(result);
      })
      .catch(function(error) {
        console.log("Here is the error");
        console.log(error);
        res.json([]);
      });
  },

  insertTeam: function(req, res, next) {
    var team_name = req.body.name;
    var userid = "USER_"+ new Date().getTime();
    entity
      .insert(adminDb, [{ name: team_name, userId : userid }])
      .then(function(result) {
        res.json({ status: "Success" });
      })
      .catch(function(error) {
        console.log("Error");
        console.log(result);
        res.json({ status: "Failed" });
      });
  },

  deleteTeam: function(req, res, next) {
    entity
      .remove(adminDb, { "userId" : req.body.userId })
      .then(function(result) {
        res.json({ status: "Success", "result" : result });
      })
      .catch(function(error) {
        console.log("Error");
        res.json({ status: "Failed", "error" : error });
      });
  },

  updateTeam: function(req, res, next){
    entity
    .update(adminDb, {"userId" : req.body.address.userId}, {"name" : req.body.address.name})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  }

};

module.exports = admin;
