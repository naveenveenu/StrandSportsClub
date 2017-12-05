var entity = require("../db/mongoEntity");
var sportsDb = "sports"

var sport = {
  getSport: function(req, res, next) {
    entity
      .read(sportsDb, {})
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
    var sport_name = req.body.sport_name;
    var userid = "USER_"+ new Date().getTime();
    entity
      .insert(sportsDb, [{ name: sport_name, userId : userid }])
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
      .remove(sportsDb, { "userId" : req.body.userId })
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
    .update(sportsDb, {"userId" : req.body.sport.userId}, {"name" : req.body.sport.name})
    .then(function(result){
      res.json({status : "Success", "result" : result});
    }).catch(function(error){
      console.log("Error");
      res.json({status : "Failed", "error" : error});
    });
  }

};

module.exports = sport;
