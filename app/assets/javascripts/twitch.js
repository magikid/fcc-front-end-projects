window.App = Ember.Application.create({
  rootElement: '#ember',
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true
});

App.Router.map(function() {
});

App.IndexController = App.IndexController.extend({
  firstName: "Chris"
});
