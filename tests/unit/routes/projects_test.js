import Project from 'appkit/routes/projects';

var route;
module("Unit - ProjectsRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:projects'
    ]);

    route = container.lookup('route:projects');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Project);
});
