var App;

module('Acceptances - Projects', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('projects renders', function(){
  expect(1);

  visit('/projects').then(function(){
    var title = find('div .h1');
    equal(title.text(), 'Проекты');
  });
});
