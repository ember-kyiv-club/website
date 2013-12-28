export default Ember.Route.extend({

  actions: {
    submit: function(){
      var controller = this.get('controller');
      if (!Ember.isEmpty(controller.get('model.email')) && !Ember.isEmpty(controller.get('model.message'))){
        //Todo send message to server
        controller.set('model.isSent', true);
      }
    }
  },

  model: function() {
    return Ember.Object.create({name: "", email: "", message: "", isSent: false});
  }
});
