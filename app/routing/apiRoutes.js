var listOfFriends = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


app.post("/api/new", function(request, response) {
    var newFriend = request.body;

    console.log(newFriend);

    friends.push(newFriend);

    response.json(newFriend);
});