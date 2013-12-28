var User =  DS.Model.extend({
  nick_name:     DS.attr('string'),
  github:        DS.attr('string'),
  total_commits: DS.attr('number')
});

User.FIXTURES = [
  {
    id:            1,
    nick_name:     "Alex Opak",
    github:        "https://github.com/OpakAlex",
    total_commits: 2000
  }
];

export default User;