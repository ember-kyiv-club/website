import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['section-wrapper'],
  tagName: "section",

  changeHeight: function(){
    var windowHeight = window.innerHeight;
    if(this.$().height() <= windowHeight){
      this.$().height(windowHeight);
    }
  }.on('didInsertElement')
});
