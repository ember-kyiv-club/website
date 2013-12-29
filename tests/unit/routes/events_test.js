import Events from 'appkit/routes/events';

var route;
module("Unit - EventsRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:events'
    ]);

    route = container.lookup('route:events');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Events);
});
