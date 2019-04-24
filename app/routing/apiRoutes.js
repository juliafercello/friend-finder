var friendData = require("../data/friends");

//API Routing
module.exports = function(app) {
    
  //Return JSON of all possible friends  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Add new friend to the array after finding the perfect match
  app.post("/api/friends", function(req, res) {
      var friend = req.body; 
      var matchingScore = 0; 
      var matchingfriend; 
      var totalDifference = 0; 

      //for each friend, compare scores
      for (var i = 0; i<friendData.length; i++){
        // console.log("checking match for " + friendData[i].name)
        for(var j = 0; j<friend.scores.length; j++) {
          var difference = parseInt(friend.scores[j]) - parseInt(friendData[i].scores[j]); 
          totalDifference += Math.abs(difference);
          // console.log(totalDifference)
        } 
        //Return the first lowest match 
        if (totalDifference < matchingScore || !matchingfriend) {
          matchingScore = totalDifference; 
          matchingfriend = friendData[i]; 
        }    
        totalDifference = 0;   
        // console.log(matchingfriend)  
      }
      friendData.push(req.body); 
      res.json(matchingfriend);
      // console.log(matchingfriend);
  });

};
