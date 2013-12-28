var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('index', {path: "/"});
  this.route('team');
  this.route('events');
  this.route('works');
  this.route('contacts');
  this.route('resources');
});

export default Router;
