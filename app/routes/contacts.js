export default Ember.Route.extend({

  actions: {
    submit: function(){
      var controller = this.get('controller');
      if (!Ember.isEmpty(controller.get('model.email')) && !Ember.isEmpty(controller.get('model.message'))){
        controller.set('model.isSent', true);
        window.open("mailto:%@?subject=Ember Kyiv Club&body=%@".fmt("ember-kyiv-club@gmail.com",
          controller.get('model.message')));
      }
    }
  },

  model: function() {
    return Ember.Object.create({name: "", email: "", message: "", isSent: false});
  }
});
