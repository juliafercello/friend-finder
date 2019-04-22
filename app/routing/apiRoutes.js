var friendData = require("../data/friends");

//API Routing
module.exports = function(app) {
    
  //Return JSON of all possible friends  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  
  app.post("/api/friends", function(req, res) {
      var friend = req.body; 
      var matchingScore = 0; 
      var matchingfriend; 
      var totalDifference = 0; 

      //for each friend, compare the scores
      for (var i = 0; i<friendData.length; i++){
        console.log("checking match for " + friendData[i].name)
        for(var j = 0; j<friend.scores.length; j++) {
          var difference = parseInt(friend.scores[j]) - parseInt(friendData[i].scores[j]); 
          // console.log(friend.scores[j]);
          // console.log(friendData[i].scores[j]);
          // console.log(difference)

          totalDifference += Math.abs(difference);
          console.log(totalDifference)
        } 
        //Return the first lowest match 
        if (totalDifference < matchingScore || matchingScore === 0) {
          matchingScore = totalDifference; 
          matchingfriend = friendData[i]; 
        }    
        totalDifference = 0;     
      }
      friendData.push(req.body); 
      res.json(matchingfriend);
      console.log(matchingfriend);
  });

//   app.post("/api/deletefriends", function(req, res) {
//     friendData.length = 0;
//   });
};
