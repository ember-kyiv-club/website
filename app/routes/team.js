import IndexRoute from "appkit/routes/index";

export default IndexRoute.extend({
  model: function(){
    return this._super();
  },

  setupController: function(controller, model){

  },

  renderTemplate: function(){
    this.render("index", {controller: 'team'});
    Ember.run.later(function(){
      var pos = $('#p2').offset();
      $('body').animate({ scrollTop: pos.top + 400 });
    }, 1000);
  }

});