var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(1);

  visit('/').then(function(){
    var title = find('article > .h1');
    equal(title.text(), 'Ember.js - framework for creating  ambitious  web applications.');
  });
});
