var cal = require('../app/calculator');
var assert = require('chai').assert;

describe('cal_add_test', () => {
  function add(x, y) {
    let expected = 5;
    it(`${x} + ${y} is ${expected}`, () => {
      assert.equal(cal.add(x, y), expected);
    });
  }

  add(2, 3);
  add(3, 3);
});

describe('cal_sub_test', () => {
  function sub(x, y) {
    let expected = 1;
    it(`${x} - ${y} is ${expected}`, () => {
      assert.equal(cal.sub(x, y), expected);
    });
  }

  sub(6, 5);
  sub(7, 5);
});

describe('cal_mul_test', () => {
  function mul(x, y) {
    let expected = 10;
    it(`${x} * ${y} is ${expected}`, () => {
      assert.equal(cal.mul(x, y), expected);
    });
  }

  mul(2, 5);
  mul(7, 3);
});

describe('cal_div_test', () => {
  function sub(x, y) {
    let expected = 5;
    it(`${x} / ${y} is ${expected}`, () => {
      assert.equal(cal.div(x, y), expected);
    });
  }

  sub(10, 2);
  sub(100, 5);
});
