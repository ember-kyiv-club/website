import DS from 'ember-data';

var Schedule = DS.Model.extend({
  title:       DS.attr('string'),
  time:        DS.attr('string'),
  autor:       DS.attr('string')
});

Schedule.reopenClass ({
  FIXTURES: [
    {
        id: 1,
        title: "12.15 - 12.30 Регистрация",
        autor: ""
    },
    {
        id: 2,
        title: "12.30 - 12.45 Вступительное слово о Клубе",
        autor: "Yevhenii Kurtov"
    },

    {
        id: 3,
        title: "12.45 - 13.15 Ember.js - инструмент быстрого прототипирования",
        autor: "Alex Opak"
    },

    {
        id: 4,
        title: "13.15 - 13.45 Ember-admin, Ember.js и open-source",
        autor: "Alex Opak"
    },
    {
      id: 5,
      title: "13.45 - 15.00 Круглый стол: знакомство, обсуждения, обмен опытом. По-желанию можно попрограммировать и покушать пиццу",
      autor: "Alex Opak"
    },

    {
      id: 6,
      title: "Обзор архитектуры Ember.js приложения - роли, задачи и расположение элементов(frontend MVC)",
      // autor: "Eugene Kurtov"
    },
    {
      id: 7,
      title: "Объектная модель",
      // autor: "Eugene Kurtov"
    },
    {
      id: 8,
      title: "View/Template и взаимодействие с DOM (действия, события, callbacks)",
      // autor: "Eugene Kurtov"
    },
    {
      id: 9,
      title: "Маршрутизация",
      // autor: "Eugene Kurtov"
    },
    {
      id: 10,
      title: "Ember Data (в т.ч. ассоциации и этапы коммуникации) ",
      // autor: "Eugene Kurtov"
    },
    {
      id: 11,
      title: "Сервисы",
      // autor: "Eugene Kurtov"
    }

  ]
});

export default Schedule;
