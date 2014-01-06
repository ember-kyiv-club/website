var Event = DS.Model.extend({
  title:            DS.attr('string'),
  date:             DS.attr('string'),
  shortDescription: DS.attr('string'),
  description:      DS.attr('string'),
  image:            DS.attr('string'),
  schedules:        DS.hasMany('schedule', {async: true}),
  lat:              DS.attr('number'),
  lon:              DS.attr('number'),


  address: function(){
    if (this.get('lat') && this.get('lon'))
      return "https://maps.google.com/?ie=UTF8&amp;ll=%@,%@&z=12&output=embed".fmt(this.get('lat'), this.get('lon'));
  }.property('lat', 'lon'),

  tweet_text: function(){
    var full_title = this.get('title');
    var formatted_title = full_title.length <= 54 ? full_title : full_title.substring(0, 51) + "...";
    return "Присоединяйтесь ко мне на \"" + formatted_title +"\"";
  }.property()
});

Event.FIXTURES = [
  {
    id:               1,
    title:            "Ember.js - инструмент быстрого прототипирования",
    date:             "15 февраля 2014 года",
    shortDescription: "Первая киевская встреча клуба. Ember.js и open-source. Ember-Admin. Ember.js как платформа для быстрого прототипирования.",
    description:      "<h2>Первая киевская встреча разработчиков использующих Ember.js.</h2>" +
                      "Мы собираемся что бы познакомиться, представить клуб и обменяться опытом. " +
                      "Полный список докладов все ещё находится на обсуждении, но предварительная повестка такая: ",
    image:            "assets/images/static/event.jpg",
    schedules:   [1,2,3]
//    lat:         45.375905,
//    lon:         36.033998
  }
];

export default Event;
