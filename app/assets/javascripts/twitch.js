window.App = Ember.Application.create({
  rootElement: '#ember',
});

App.User = DS.Model.extend({
  display_name: DS.attr(),
  name: DS.attr(),
  bio: DS.attr(),
  logo: DS.attr(),
})

App.UserSerializer = DS.RESTSerializer.extend({
  primaryKey: 'name',
});

App.UserAdapter = DS.RESTAdapter.extend({
  host: '/api/twitch',
  primaryKey: 'name',
  queryRecord: function(modelName, query) {
    return Ember.$.getJSON("/api/twitch/users/".concat(arguments[2]));
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    names = ["freecodecamp", "ewokichka"];
    output = [];
    for(var i=0; i<names.length; i++){
      output.push(this.get('store').queryRecord('user', names[i]));
    };
    return Ember.RSVP.all(output);
  }
});

App.Router.map(function() {
  this.route('addUser');
});

