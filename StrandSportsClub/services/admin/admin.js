var entity = require("../db/mongoEntity");
var teamDB = "teamCol"
var playerDB = "playerCol"

var admin = {
  getPlayer: function(req, res, next) {
    entity
      .read(playerDB, {})
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

  insertPlayer: function(req, res, next) {
    var player_name = req.body.name;
    var userid = "USER_"+ new Date().getTime();
    entity
      .insert(playerDB, [{ name: player_name, userId : userid }])
      .then(function(result) {
        res.json({ status: "Success" });
      })
      .catch(function(error) {
        console.log("Error");
        console.log(result);
        res.json({ status: "Failed" });
      });
  },

  deletePlayer: function(req, res, next) {
    entity
      .remove(playerDB, { "userId" : req.body.userId })
      .then(function(result) {
        res.json({ status: "Success", "result" : result });
      })
      .catch(function(error) {
        console.log("Error");
        res.json({ status: "Failed", "error" : error });
      });
  },

  updatePlayer: function(req, res, next){
    entity
    .update(playerDB, {"userId" : req.body.players.userId}, {"name" : req.body.players.name})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  },
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  getTeam: function(req, res, next) {
    entity
      .read(teamDB, {})
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
      .insert(teamDB, [{ name: team_name, userId : userid }])
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
      .remove(teamDB, { "userId" : req.body.userId })
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
    .update(teamDB, {"userId" : req.body.teams.userId}, {"name" : req.body.teams.name})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  }

};

module.exports = admin;
