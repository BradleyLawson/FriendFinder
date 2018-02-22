var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var getClosest = require("get-closest");
var friendList = require("../data/friends.js")

var app = express();
var PORT = 3000; // process.env.PORT ||

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// will be in the htmlRoutes.js file
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/api/friends", function(request, response){
    response.json(friendList);

    // The current user filling out survey
    var current = friendList[0];

    console.log(current.totalScore);

    var currentUserTotalScore = current.totalScore

    console.log(getClosest.number(currentTotalScore, friendList.totalScores));
});


app.post("/api/friends", function(request, response) {
    console.log(request.body);
    var newFriend = request.body;

    friendList.unshift(newFriend);

    response.json(newFriend);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});