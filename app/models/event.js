var Event = DS.Model.extend({
  title:       DS.attr('string'),
  date:        DS.attr('string'),
  description: DS.attr('string'),
  image:       DS.attr('string'),
  schedules:   DS.hasMany('schedule', {async: true}),
  lat:         DS.attr('number'),
  lon:         DS.attr('number'),


  address: function(){
    if (this.get('lat') && this.get('lon'))
      return "https://maps.google.com/?ie=UTF8&amp;ll=%@,%@&z=12&output=embed".fmt(this.get('lat'), this.get('lon'))
  }.property('lat', 'lon')
});

Event.FIXTURES = [
  {
    id:          1,
    title:       "Ember.js - инструмент быстрого прототипирования",
    date:        "12 - 13 февраля 2014 года",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:       "assets/images/static/event.jpg",
    schedules:   [1,2,3],
    lat:         45.375905,
    lon:         36.033998
  }
];

export default Event;
