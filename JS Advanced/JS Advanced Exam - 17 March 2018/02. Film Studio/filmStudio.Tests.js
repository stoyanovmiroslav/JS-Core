const assert = require('chai').assert;
const FilmStudio = require('./filmStudio');

describe("Calculator tests", function() {
    it("test output", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        assert.equal(move1.filmName, 'The Avengers');
        assert.equal(move1.filmRoles[0].role, 'Iron-Man');
        assert.equal(move1.filmRoles[0].actor, false);

        assert.equal(move1.filmRoles[3].role, 'Arrow guy');
        assert.equal(move1.filmRoles[3].actor, false);
        assert.equal(move1.filmRoles.length, 4);


        console.log(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']));
        console.log(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']));

    });

    it("test output 2", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let move2 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);

        assert.equal(move2.filmName, 'The Avengers 2');
        assert.equal(move2.filmRoles[0].role, 'Iron-Man');
        assert.equal(move2.filmRoles[0].actor, false);

        assert.equal(move2.filmRoles[1].role, 'Hulk');
        assert.equal(move2.filmRoles[2].role, 'Arrow guy');
        assert.equal(move2.filmRoles[3].role, 'Ant-man');
        assert.equal(move2.filmRoles[3].actor, false);
        assert.equal(move2.filmRoles.length, 4);


        console.log(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']));

    });

    it("test output 3", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
        let move2 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);
        let move3 = filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']);

        assert.equal(move3.filmName, 'The New Avengers');
        assert.equal(move3.filmRoles[0].role, 'Iron-Man');
        assert.equal(move3.filmRoles[1].role, 'Thor');
        assert.equal(move3.filmRoles[4].role, 'Black Panther');

        assert.equal(move3.filmRoles[0].actor, false);
        assert.equal(move3.filmRoles[1].actor, false);
        assert.equal(move3.filmRoles[2].actor, false);
        assert.equal(move3.filmRoles[3].actor, false);
        assert.equal(move3.filmRoles[4].actor, false);
        assert.equal(move3.filmRoles.length, 5);
    });

    it("test output 4", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        assert.equal(filmStudio.name, 'SU-Studio');
        assert.equal(filmStudio.films.length, 0);
    });

    it("test output 5", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        assert.equal(filmStudio.casting('ivan', 'actor'), 'There are no films yet in SU-Studio.');
    });

    it("test output 6", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

        assert.equal(filmStudio.casting('ivan', 'nsadas'), `ivan, we cannot find a nsadas role...`);
    });

    it("test output 7", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

        assert.equal(filmStudio.casting('ivan', 'Thor'), 'You got the job! Mr. ivan you are next Thor in the The Avengers. Congratz!');
    });

    it("test output 8", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        assert.throws(() => filmStudio.makeMovie('The Avengers'), 'Invalid arguments count');
    });

    it("test output 9", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        assert.throws(() => filmStudio.makeMovie('The Avengers', 2), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie('The Avengers', false), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie('The Avengers', true), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie('The Avengers', 'string'), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie(2, []), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie(false, []), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie(true, []), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie([], []), 'Invalid arguments');
        assert.throws(() => filmStudio.makeMovie({}, []), 'Invalid arguments');
    });

    it("test output 10", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        assert.throws(() => filmStudio.lookForProducer('dasdas'), `dasdas do not exist yet, but we need the money...`);
    });

    it("test output 11", function() {
        let filmStudio = new FilmStudio('SU-Studio');

        let move1 = filmStudio.makeMovie('The Avengers', ['Iron-Man']);
        filmStudio.casting('ivan', 'Iron-Man')

       let message = 'Film name: The Avengers\n';
        message += 'Cast:\n';
        message +=  'ivan as Iron-Man\n';

        assert.equal(filmStudio.lookForProducer('The Avengers'), message);
    });
});