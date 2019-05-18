handlers.getHome = function (ctx) {

    ctx.isLoggedIn = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let userId = sessionStorage.getItem('userId');

    if (userService.isAuth()){
        eventService.getAll().then(function (res) {
            let hasEvents = res.length > 0;
            let context = { events: res, hasEvents };

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/home.hbs', context);
            })
        })
    } else{
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/home.hbs');
        })
    }
};