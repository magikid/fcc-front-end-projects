window.App = Ember.Application.create({
  rootElement: '#ember',
  LOG_TRANSITIONS: true,
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    names = ["freecodecamp", "ewokichka"];
    output = [];
    names.forEach(function(name){
      output.push(App.getUser(name));
    });
    return Ember.RSVP.all(output);
  }
});

App.getUser = function(name){
  return $.ajax({
    dataType: "json",
    url: 'https://wind-bow.glitch.me/twitch-api/users/'.concat(name),
  }).then()
};


App.Router.map(function() {
  this.route('addUser');
});

