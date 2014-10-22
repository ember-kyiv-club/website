import DS from 'ember-data';

var User =  DS.Model.extend({
    nick_name:     DS.attr('string'),
    github:        DS.attr('string'),
    total_commits: DS.attr('number'),
    photo:        DS.attr('string'),
    email:         DS.attr('string'),

    avatar: function(){
        if (this.get('photo')){
            return this.get('photo');
        }
        return 'http://www.gravatar.com/avatar/' + md5(this.get('email'));
    }.property('email', 'photo')
});

User.reopenClass({
    FIXTURES: [
    {
        id:            1,
        nick_name:     "Alex Opak",
        github:        "https://github.com/OpakAlex",
        total_commits: 2000,
        email:         "opak.alexandr@gmail.com"
    },
    {
        id:            2,
        nick_name:     "Evgeniy Kurtov",
        github:        "https://github.com/dirty-hippie",
        total_commits: 111,
        email:         "me@lessless.pp.ua"
    },
    {
        id:            3,
        nick_name:     "Oleksandr Lapshyn",
        github:        "https://github.com/sudodoki",
        total_commits: 334,
        email:         "smd.deluzion@gmail.com"
    },
    {
        id:            4,
        nick_name:     "Aminov Vali",
        github:        "https://github.com/bortevik",
        total_commits: 507,
        email:         "bortevik@gmail.com"
    }
]
});

export default User;