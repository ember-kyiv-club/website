import Contacts from 'appkit/routes/contacts';

var route;
module("Unit - ContactsRoute", {
  setup: function(){
    var container = isolatedContainer([
      'route:contacts'
    ]);

    route = container.lookup('route:contacts');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Contacts);
});
