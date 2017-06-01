function updateLayout(userData){
  var row = $("<div>").addClass("row");
  var user = $("<div>").addClass("three").addClass("columns").text(userData.name);
  var status = $("<strong>").addClass("one").addClass("columns").text(userData.status);
  var otherInfo = $("<em>").addClass("eight").addClass("columns").text(userData.bio);
  row.append(user);
  row.append(status);
  row.append(otherInfo);

  $("#users").append(row);
}

function getUpdates(users){
  $("#users").empty();
  _.each(users, function(user){
    userData = {name: "", status: "", bio: ""};
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + user, function(userStream){
      userData.name = userStream.display_name;
      userData.bio = userStream.bio;
      userData.status = "offline";
      updateLayout(userData);
    })
  })
}

$(function(){
  var users = ["freecodecamp", "ewokichka"];
  
  getUpdates(users);
  
  $("form").on("submit", function(e){
    e.preventDefault();
    var newUser = $("#user-add").val();
    users.push(newUser);
    getUpdates(users);    
    return false;
  })
})
