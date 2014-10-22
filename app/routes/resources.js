import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      intro: this.get('store').find('resource', {type: 'intro'}),
      lists: this.get('store').find('resource', {type: 'list'})
    });
  }
});