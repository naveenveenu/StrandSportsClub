var entity = require("../db/mongoEntity");
var teamDB = "team"

var team = {
  getTeams: function(req, res, next) {
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
    var team_name = req.body.team_name;
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
    .update(teamDB, {"userId" : req.body.address.userId}, {"name" : req.body.address.name})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  }

};

module.exports = team;
