import Ember from 'ember';
import startApp from '../helpers/start-app';

var App, server;

module('Acceptance: Admin', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

asyncTest('contacts renders', function() {
  expect(1);

  visit('/contacts');
  Ember.run.later(this, function() {
    start();
    equal(find('div .h1').text(), 'Контакты');
  }, 300);

});

asyncTest('events renders', function() {
  expect(1);

  visit('/events');
  Ember.run.later(this, function() {
    start();
    equal(find('div .h1').text(), 'События');
  }, 300);

});

asyncTest('index renders', function() {
  expect(1);

  visit('/');
  Ember.run.later(this, function() {
    start();
    equal(find('article > .h1').text(), 'Ember.js - framework for creating  ambitious  web applications.');
  }, 300);

});

asyncTest('project renders', function() {
  expect(1);

  visit('/projects');
  Ember.run.later(this, function() {
    start();
    equal(find('div .h1').text(), 'Проекты');
  }, 300);

});

asyncTest('team renders', function() {
  expect(1);

  visit('/team');
  Ember.run.later(this, function() {
    start();
    equal(find('div .h1').text(), 'Команда');
  }, 300);
});