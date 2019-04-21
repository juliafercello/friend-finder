var friendData = require("../data/friends");

//API Routing
module.exports = function(app) {
    
  //Return JSON of all possible friends  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  
  app.post("/api/friends", function(req, res) {
      //FIND MATCH
      friendData.push(req.body);
      res.json(req.body);
  });

//   app.post("/api/deletefriends", function(req, res) {
//     friendData.length = 0;
//   });
};
