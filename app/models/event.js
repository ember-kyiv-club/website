var Event = DS.Model.extend({
  title:       DS.attr('string'),
  date:        DS.attr('string'),
  description: DS.attr('string'),
  image:       DS.attr('string'),
  schedules:   DS.hasMany('schedule', {async: true}),
  address:     DS.attr('string')
});

Event.FIXTURES = [
  {
    id:          1,
    title:       "Ember.js - инструмент быстрого прототипирования",
    date:        "12 - 13 февраля 2014 года",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:       "assets/images/static/event.jpg",
    schedules:   [1,2,3],
    address:     "http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridgezoom=13&size=600x300&maptype=roadmap&markers=color:red%7Ccolor:red%7Clabel:C%7C40.718217,-73.998284&sensor=false"
  }
];

export default Event;
