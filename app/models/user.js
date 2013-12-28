var User =  DS.Model.extend({
  nick_name:     DS.attr('string'),
  github:        DS.attr('string'),
  total_commits: DS.attr('number'),
  avatar:        DS.attr('string')
});

User.FIXTURES = [
  {
    id:            1,
    nick_name:     "Alex Opak",
    github:        "https://github.com/OpakAlex",
    total_commits: 2000,
    avatar:        "assets/images/static/av.jpg"
  },
  {
    id:            2,
    nick_name:     "Evgeniy Kurtov",
    github:        "https://github.com/dirty-hippie",
    total_commits: 111,
    avatar: "assets/images/static/av.jpg"
  }
];

export default User;