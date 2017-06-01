// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function updateLayout(userData){
  var row = $("<div>").addClass("row");
  var user = $("<div>").addClass("two").addClass("columns").text(userData.name);
  var status = $("<div>").addClass("two").addClass("columns").text("offline");
  var otherInfo = $("<div>").addClass("eight").addClass("columns").text(userData.bio);
  row.append(user);
  row.append(status);
  row.append(otherInfo);

  $("#users").empty().append(row);
}

function getUpdates(users){
  _.each(users, function(user){
    userData = {name: "", status: "", bio: ""};
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + user, function(userStream){
     
      userData.name = userStream.display_name;
      userData.bio = userStream.bio;
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
