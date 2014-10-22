import DS from 'ember-data';

var Project =  DS.Model.extend({
  icon:        DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),
  link:        DS.attr('string')
});

Project.reopenClass ({
FIXTURES: [
  {
    id:          1,
    name:        "Ember-Admin",
    description: "Administrative framework based on ember.js",
    link:        "http://github.com/ember-admin/ember-admin.js"
  },
  {
    id:          2,
    name:        "ember-couchdb-kit",
    description: "An Ember.js adapter for Apache CouchDB",
    link:        "https://github.com/roundscope/ember-couchdb-kit"
  },
  {
    id:          3,
    name:        "ember-data-elasticsearch-kit",
    description: "An ember-data kit for both pushing and querying objects to Elasticsearch cluster",
    link:        "https://github.com/roundscope/ember-data-elasticsearch-kit"
  }
]
});

export default Project;