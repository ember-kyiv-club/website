import DS from 'ember-data';

var Event = DS.Model.extend({
    title:            DS.attr('string'),
    date:             DS.attr('string'),
    shortDescription: DS.attr('string'),
    description:      DS.attr('string'),
    image:            DS.attr('string'),
    address:            DS.attr('string'),
    addressDescription: DS.attr('string'),
    schedules:        DS.hasMany('schedule', {async: true}),
    lat:              DS.attr('number'),
    lon:              DS.attr('number'),


    coords: function(){
        if (this.get('lat') && this.get('lon'))
            return "https://maps.google.com/?ie=UTF8&amp;&q=%@&ll=%@,%@&z=16&output=embed&iwloc=A".fmt(this.get('address'),this.get('lat'), this.get('lon'));
        return;
    }.property('lat', 'lon'),

    tweet_text: function(){
        var full_title = this.get('title');
        var formatted_title = full_title.length <= 54 ? full_title : full_title.substring(0, 51) + "...";
        return "Присоединяйтесь ко мне на \"" + formatted_title +"\"";
    }.property()
});

Event.reopenClass ({
    FIXTURES: [
{
    id: 1,
    title: "Ember.js - инструмент быстрого прототипирования",
    date: "15 февраля 2014 года",
    shortDescription: "Первая киевская встреча клуба. Ember.js и open-source. Ember-Admin. Ember.js как платформа для быстрого прототипирования.",
    description: "<h2>Iteration #0</h2>" +
        "Первая киевская встреча разработчиков использующих Ember.js. Обсуждение open source проектов с использованием Ember.js, презентация Ember-Admin." +
        "Рассмотрение Ember.js в качестве платформы для быстрого протитипирования web решений.</br>",
    image: "assets/images/static/event.jpg",
    schedules: [1, 2, 3, 4, 5],
    lat: 50.425045,
    lon: 30.506747,
    address: "ул. Николая Гринченка, 2/1, Global Logic",
    addressDescription: "ул. Николая Гринченка, 2/1 - киевский офис Global Logic"
}
    ]
});

export default Event;
