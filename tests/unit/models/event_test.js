var App;
var store;

module('unit tests: Event Model', {
  setup: function(){
    App = startApp();
    store = App.__container__.lookup('store:main');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('generate tweet text with short title', function(){
  expect(1);
  var record;

  Ember.run(function(){
    record = store.createRecord('event', {title: 'this text is only forty two symbols length'});
  });

  equal(record.get('tweet_text'), "Присоединяйтесь ко мне на \"this text is only forty two symbols length\"");
});
test('generate tweet text with long title', function(){
  expect(1);
  var record;

  Ember.run(function(){
    record = store.createRecord('event', {title: 'this text is really very, very long and exceeds tweet limit'});
  });

  equal(record.get('tweet_text'), "Присоединяйтесь ко мне на \"this text is really very, very long and exceeds twe...\"");
});
