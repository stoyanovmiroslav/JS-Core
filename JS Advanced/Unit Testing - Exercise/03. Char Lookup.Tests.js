const assert = require('chai').assert;
const lookupChar = require('./03. Char Lookup');

describe('Char Lookup', function () {
    it('should return undefined if first parameter is different than string', function () {
        assert.isUndefined(lookupChar(false, 0));
        assert.isUndefined(lookupChar({}, 0));
        assert.isUndefined(lookupChar([], 0));
        assert.isUndefined(lookupChar(null, 0));
        assert.isUndefined(lookupChar(function () {}), 0);
    });

    it('should return undefined if second parameter is different than int', function () {
        assert.isUndefined(lookupChar('text', false));
        assert.isUndefined(lookupChar('text', {}));
        assert.isUndefined(lookupChar('text', []));
        assert.isUndefined(lookupChar('text', null));
        assert.isUndefined(lookupChar('text', function () {}));
        assert.isUndefined(lookupChar('text', 2.2));
    });

    it('should return message if index is out of range', function () {
        assert.equal(lookupChar('text', -1), "Incorrect index");
        assert.equal(lookupChar('text', 4), "Incorrect index");
        assert.equal(lookupChar('', 0), "Incorrect index");
    });

    it('should return correct char', function () {
        assert.equal(lookupChar('text', 0), 't');
        assert.equal(lookupChar('text', 3), 't');
        assert.equal(lookupChar('text', 2), 'x');
    });
});