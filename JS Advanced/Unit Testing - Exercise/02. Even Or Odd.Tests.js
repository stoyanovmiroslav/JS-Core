const assert = require('chai').assert;
const isOddOrEven = require('./02. Even Or Odd');

describe('isOddOrEven', function () {
    it('should return even if string length is even', function () {
        assert.equal(isOddOrEven('even'), 'even')
    });

    it('should return odd if string length is odd', function () {
        assert.equal(isOddOrEven('odd'), 'odd')
    });

    it('should return undefine if parameter is not a string', function () {
        assert.equal(isOddOrEven(1), undefined)
        assert.equal(isOddOrEven({}), undefined)
        assert.equal(isOddOrEven([]), undefined)
        assert.equal(isOddOrEven(function () {}), undefined)
        assert.equal(isOddOrEven(false), undefined)
    });
});