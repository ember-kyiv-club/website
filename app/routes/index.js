export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      events: this.get('store').find('event'),
      users: this.get('store').find('user'),
      works: this.get('store').find('work')
    });
  }
});
