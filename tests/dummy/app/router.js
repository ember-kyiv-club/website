import Ember from 'ember';
import config from '../config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	  this.route('index', {path: "/"});
  this.route('team');
  this.resource('events', function(){
    this.route('show', {path: "/:event_id/show"});
  });
  this.route('events');
  this.route('projects');
  this.route('contacts');
  this.route('resources');
  this.route('sponsors');
});

export default Router;
