const assert = require('chai').assert;
const mathEnforcer = require('./04. Math Enforcer');

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should add five correctly', function () {
            assert.equal(mathEnforcer.addFive(3), 8);
            assert.equal(mathEnforcer.addFive(-3), 2);
            assert.equal(mathEnforcer.addFive(2.9), 7.9);
        });

        it('should return undefined', function () {
            assert.isUndefined(mathEnforcer.addFive(false));
            assert.isUndefined(mathEnforcer.addFive({}));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive(function () {}));
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        });
    });

    describe('subtractTen', function () {
        it('should subtract ten correctly', function () {
            assert.equal(mathEnforcer.subtractTen(15), 5);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(22.25), 12.25);
        });

        it('should return undefined', function () {
            assert.isUndefined(mathEnforcer.subtractTen(false));
            assert.isUndefined(mathEnforcer.subtractTen({}));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen(function () {}));
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
    });

    describe('sum', function () {
        it('should subtract ten correctly', function () {
            assert.equal(mathEnforcer.sum(15, 2), 17);
            assert.equal(mathEnforcer.sum(-5, -10), -15);
            assert.equal(mathEnforcer.sum(0, -10), -10);
            assert.equal(mathEnforcer.sum(0, 3), 3);
            assert.equal(mathEnforcer.sum(0.1, 0.1), 0.2);

        });

        it('should return undefined if first parameter is different than number', function () {
            assert.isUndefined(mathEnforcer.sum(false, 0));
            assert.isUndefined(mathEnforcer.sum({}, 0));
            assert.isUndefined(mathEnforcer.sum([], 0));
            assert.isUndefined(mathEnforcer.sum(function () {}, 0));
            assert.isUndefined(mathEnforcer.sum(null, 0));
            assert.isUndefined(mathEnforcer.sum(undefined, 0));
        });

        it('should return undefined if second parameter is different than number', function () {
            assert.isUndefined(mathEnforcer.sum(0, false));
            assert.isUndefined(mathEnforcer.sum(0, {}));
            assert.isUndefined(mathEnforcer.sum(0, {}));
            assert.isUndefined(mathEnforcer.sum(0, function () {}));
            assert.isUndefined(mathEnforcer.sum(0, null));
            assert.isUndefined(mathEnforcer.sum(0, undefined));
        });
    });
});