// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
console.log("apiRouates page has loaded");
var path = require("path");
var friends= require("/app/data/friends.js");



module.exports = function(app){

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var userData = req.body;
        console.log("user input= " + JSON.stringify(userData));
        var UserScores = userData.scores;

        var matchName= "";
        var matchImage="";
        var totalDifference = 1000000;

        for(var i=0; i < friends.length; i++){
            var difference = 0;
            
            for(var j =0; j <userScores.length; j++){
                difference+= Math.abs(friends[i].scores[j] - userScores[j]);
            }
            console.log("difference= " + difference);

            if(difference < totalDifference){

                totalDifference = difference;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(userData);
       
    });

}


