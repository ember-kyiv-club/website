var Schedule = DS.Model.extend({
  title:       DS.attr('string'),
  time:        DS.attr('string'),
  autor:       DS.attr('string')
});

Schedule.FIXTURES = [
  {
    id:          1,
    title:       "10.30 - 11.00 Регистрация",
    autor:        ""
  },
  {
    id:          2,
    title:       "11.10 - 12.00 Ember Kiev Club",
    autor:       "Alex Opak"
  },

  {
    id:          3,
    title:       "13.10 - 15.00 Ember.js - инструмент быстрого прототипирования",
    autor:       "Alex Opak"
  }
];

export default Schedule;