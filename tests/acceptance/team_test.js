var App;

module('Acceptances - Команда', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('команда renders', function(){
  expect(1);

  visit('/team').then(function(){
    var title = find('div .h1');
    equal(title.text(), 'Команда');
  });
});
