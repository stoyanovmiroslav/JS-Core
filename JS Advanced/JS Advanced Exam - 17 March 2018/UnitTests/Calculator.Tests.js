const assert = require('chai').assert;
const Calculator = require('./Calculator');

describe("Calculator tests", function() {
    let calculator;
    beforeEach(function(){
        calculator = new Calculator();
    });

    it("constructor should create expenses", function() {
        assert.equal(typeof calculator.expenses, typeof []);
    });

    it("Should add successful all type data", function() {
        calculator.add(2);
        calculator.add(3);
        calculator.add(4);
        calculator.add([]);
        calculator.add({});
        calculator.add(true);

        assert.equal(calculator.expenses.length, 6);
        assert.equal(calculator.expenses[0], 2);
        assert.equal(calculator.expenses[2], 4);
        assert.equal(calculator.expenses[5], true);
    });

    it("Should return error", function() {
        assert.throws(() => calculator.divideNums(), "There are no numbers in the array!" );
    });

    it("Should return cannot divide by zero", function() {
        calculator.add(2);
        calculator.add(0);

        assert.equal(calculator.divideNums(), "Cannot divide by zero" );
    });

    it("Should return correct number", function() {
        calculator.add(2);

        assert.equal(calculator.divideNums(), 2);
    });

    it("Should return correct number after add different types", function() {
        calculator.add([]);
        calculator.add(2);
        calculator.add(2);
        calculator.add([]);
        calculator.add(true);

        assert.equal(calculator.divideNums(), 1);
    });

    it("Should return correct number after add different types", function() {
        calculator.add([]);
        calculator.add(6);
        calculator.add(2);
        calculator.add([]);
        calculator.add(true);
        calculator.add(3);

        assert.equal(calculator.divideNums(), 1);
    });

    it("Should return empty array", function() {
        assert.equal(calculator.toString(), 'empty array');
    });

    it("Should print all expenses", function() {
        calculator.add(6);
        calculator.add(2);
        calculator.add(3);

        assert.equal(calculator.toString(), '6 -> 2 -> 3');
    });

    it("Should return empty", function() {
        assert.equal(calculator.orderBy(), 'empty');
    });

    it("Should order correct", function() {
        calculator.add(6);
        calculator.add(2);
        calculator.add(3);

        assert.equal(calculator.orderBy(), '2, 3, 6');
    });
});
