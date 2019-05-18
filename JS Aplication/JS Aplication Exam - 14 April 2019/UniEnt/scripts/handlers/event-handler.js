handlers.getAdd = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/songs/add.hbs');
    });
};

handlers.postAdd = function (ctx) {
    const name = ctx.params.name;
    const dateTime = ctx.params.dateTime;
    const description = ctx.params.description;
    const imageURL = ctx.params.imageURL;
    const organizer = sessionStorage.getItem('username');;
    const peopleInterestedIn = 0;

    if(name.length < 6){
        notify.showError('Event name must be at least 6 symbols long!');
    }
    else if (description.length < 10) {
        notify.showError('Description must be at least 10 symbols long!');
    }else if (imageURL.startsWith('http') === false) {
        notify.showError('Image url must start with http:// or https://!');
    }else {
        eventService.create(name, dateTime, description, imageURL, organizer, peopleInterestedIn);
        notify.showInfo('Event created successfully.');
        ctx.redirect('#/home');
    }

};

handlers.getDetails = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const userId = sessionStorage.getItem('userId');
    const id = ctx.params.id;

    eventService.getById(id)
        .then(function (res) {

            let isCurrentUserBool = (userId === res[0]._acl.creator);
            res[0].isCurrentUser = isCurrentUserBool;

            let contexts = {
                event: res[0]
            };

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/songs/details.hbs', contexts);
            });
        });
};

handlers.getDelete = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const id = ctx.params.id;
    eventService.deleteById(id)
        .then(function (res) {
            notify.showInfo('Event closed successfully.');
            ctx.redirect('#/home');
        });
};

handlers.getEdit = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const id = ctx.params.id;
    eventService.getById(id)
        .then(function (res) {

            let contexts = {
                event: res[0]
            };

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/songs/edit.hbs', contexts);
            });
        });
};

handlers.postEdit = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    const id = ctx.params.id;

    const description = ctx.params.description;
    const dateTime = ctx.params.dateTime;
    const name = ctx.params.name;
    const imageURL = ctx.params.imageURL

    if(name.length < 6){
        notify.showError('Event name must be at least 6 symbols long!');
    }
    else if (description.length < 10) {
        notify.showError('Description must be at least 10 symbols long!');
    }else if (imageURL.startsWith('http') === false) {
        notify.showError('Image url must start with http:// or https://!');
    }else {
        eventService.postEdit(id, name, dateTime, description, imageURL)
            .then(function (res) {
                notify.showInfo('Event edited successfully.');
                ctx.redirect(`#/details?id=${id}`);
            });
    }
};

handlers.getMyProfile = function (ctx) {
    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    eventService.getAllMy()
        .then(function (res) {

            let contexts = {
                events: res,
                numberOfEvents: res.length,
                hasEvents: res.length === 0
            };

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/users/profile.hbs', contexts);
            });
        });
};

handlers.getJoin = function (ctx) {
    const id = ctx.params.id;
    const from = ctx.params.from;


    eventService.joinEvent(id)
        .then(function(){
            ctx.redirect(`#/details?id=${id}`);
            notify.showInfo('You have join successfully.');
        });
};