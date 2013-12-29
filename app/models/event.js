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
    date:        "15 февраля 2014 года",
    description: "Первая киевская встреча разработчиков использующих Ember.js. Обсуждение open source проектов с использованием Ember.js," +
                 "призентация Ember-Admin. Рассмотрение Ember.js в качестве платформы для быстрого протитипирования web решений.",
    image:       "assets/images/static/event.jpg"
//    schedules:   [1,2,3],
//    lat:         45.375905,
//    lon:         36.033998
  }
];

export default Event;
