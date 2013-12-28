var App;

module('Acceptances - Contacts', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('contacts renders', function(){
  expect(1);

  visit('/contacts').then(function(){
    var title = find('div .h1');
    equal(title.text(), 'Контакты');
  });
});
