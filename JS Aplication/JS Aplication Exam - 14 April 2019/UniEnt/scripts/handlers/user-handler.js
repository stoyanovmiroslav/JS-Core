handlers.getRegister = function (ctx) {
    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/users/register.hbs');
    })

};

handlers.postRegister = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    const passwordCheck = ctx.params.rePassword;

debugger;
    if(username.length < 3){
        notify.showError('Username must be at least 3 symbols long!');
    }else if (password.length < 0) {
        notify.showError('Password must be at least 6 symbols long!');
    } else if (password.length === 0) {
        notify.showError('Password must be non-empty!');
    } else if (password !== passwordCheck) {
        notify.showError('Both passwords must match!');
    } else {
        userService.register(username, password)
            .then((userData) => {
                userService.saveSession(userData);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/home');
            })
            .catch(notify.handleError)
    }
};

handlers.getLogin = function (ctx) {
    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/users/login.hbs');
    })
};

handlers.postLogin = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    if (username.length === 0) {
        notify.showError('Username is requried!');
    } else if (password.length === 0) {
        notify.showError('Password is requried!');
    } else {
        userService.login(username, password)
            .then((userData) => {
                userService.saveSession(userData);
                notify.showInfo('Login successful.');
                ctx.redirect('#/home');
            })
            .catch(notify.handleError);
    }
};

handlers.logout = function (ctx) {
    userService.logout()
        .then(() => {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/home');
        })
};