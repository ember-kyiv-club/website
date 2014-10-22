import DS from 'ember-data';

var Resource = DS.Model.extend({
  url:         DS.attr('string'),
  title:       DS.attr('string'),
  date:        DS.attr('string'),
  description: DS.attr('string'),
  type:        DS.attr('string')
});

Resource.reopenClass ({
FIXTURES: [
  {
    id:          1,
    url:         "http://emberjs.com/guides/",
    title:       "Официальная документация проекта Ember.js",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          2,
    url:         "http://net.tutsplus.com/tutorials/javascript-ajax/resources-to-get-you-up-to-speed-in-ember-js/",
    title:       "Cписок ресурсов от tutsplus.com для начинающих изучать Ember.js",
    type:        'list',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          3,
    url:         "https://www.evernote.com/shard/s290/sh/f4b7a12a-10d9-4ba5-90ef-e7bb3e29e537/f821f62ca13fd3cb60bfe9e334724d3b",
    title:       "Cписок ресурсов по Ember.js в виде Evernote заметки",
    type:        'list',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          4,
    url:         "http://ember101.com/videos/001-intro-and-binding-data-to-templates/",
    title:       "Скринкасты ember101.com",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          5,
    url:         "http://emberwatch.com/",
    title:       "Лента видео по Ember.js",
    type:        'list',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          6,
    url:         "http://emberweekly.com/",
    title:       "Дайджест-рассылка новостей по Ember.js",
    type:        'list',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          7,
    url:         "http://net.tutsplus.com/tutorials/javascript-ajax/getting-into-ember-js/",
    title:       "Краткое введение в Ember.js от tutplus.com (часть №1)",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          8,
    url:         "http://net.tutsplus.com/tutorials/javascript-ajax/getting-into-ember-js-part-2/",
    title:       "Краткое введение в Ember.js от tutplus.com (часть №2)",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что делать?'
  },
  {
    id:          9,
    url:         "http://coding.smashingmagazine.com/2013/11/07/an-in-depth-introduction-to-ember-js/",
    title:       "Введение в Ember.js от Smashing Magazine",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что дcелать?'
  },
  {
    id:          10,
    url:         "http://www.developerdrive.com/2013/10/getting-started-with-ember-js/",
    title:       "Введение в Ember.js на Developer Drive",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что дcелать?'
  },
  {
    id:          11,
    url:         "http://www.youtube.com/watch?v=1QHrlFlaXdI",
    title:       "Видео урок создания простого блога на Ember от Tom Dale",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что дcелать?'
  },
  {
    id:          12,
    url:         "http://emberenos.com/",
    title:       "Еженедельные интервью из мира Ember",
    type:        'intro',
    date:        '29-12-13',
    description: 'Куда бежать и что дcелать?'
  }
]
});

export default Resource;
