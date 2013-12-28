var Work =  DS.Model.extend({
  icon:        DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),
  link:        DS.attr('string')
});

Work.FIXTURES = [
  {
    id:  1,
    name: "Ember-Admin",
    description: "Administrative framework based on ember.js",
    link:  "http://github.com/ember-admin/ember-admin.js"
  }
];

export default Work;