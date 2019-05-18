const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/add', handlers.getAdd);
        this.post('#/add', handlers.postAdd);

        this.get('#/details', handlers.getDetails);

        this.get('#/edit', handlers.getEdit);
        this.post('#/edit', handlers.postEdit);

        this.get('#/delete', handlers.getDelete);
        this.post('#/delete', handlers.postDelete);

        this.get('#/profile', handlers.getMyProfile);
        this.get('#/join', handlers.getJoin);

        this.get('index.html', handlers.getHome);
        this.get('#/home', handlers.getHome);

        this.get('#/register', handlers.getRegister);
        this.post('#/register', handlers.postRegister);

        this.get('#/login', handlers.getLogin);
        this.post('#/login', handlers.postLogin);

        this.get('#/logout', handlers.logout);
    });

    app.run();
});