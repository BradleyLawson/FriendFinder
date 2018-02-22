app.get("/api/friends", function(request, response){
    response.json(friendList);
});


app.post("/api/new", function(request, response) {
    var newFriend = request.body;

    console.log(newFriend);

    friends.push(newFriend);

    response.json(newFriend);
});