var App;

module('Acceptances - Cобытия', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('events renders', function(){
  expect(1);

  visit('/events').then(function(){
    var title = find('div .h1');
    equal(title.text(), 'События');
  });
});
