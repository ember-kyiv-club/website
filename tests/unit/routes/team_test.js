import Team from 'appkit/routes/team';

var route;
module("Unit - TeamRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:team'
    ]);

    route = container.lookup('route:team');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Team);
});
