var tape = require("tape"),
    ease = require("../");

tape("bind(type) returns type", function(test) {
  test.equal(ease.bind(ease.linear), ease.linear);
  test.equal(ease.bind(ease.elastic), ease.elastic);
  test.equal(ease.bind(ease.backOut), ease.backOut);
  test.end();
});

tape("bind(type, a) binds the parameter a", function(test) {
  test.equal(ease.bind(ease.poly, 2)(0.5), Math.pow(0.5, 2));
  test.equal(ease.bind(ease.poly, 3)(0.5), Math.pow(0.5, 3));
  test.equal(ease.bind(ease.poly, 4)(0.5), Math.pow(0.5, 4));
  test.equal(ease.bind(ease.elastic, 2)(0.5), ease.elastic(0.5, 2));
  test.equal(ease.bind(ease.elastic, 3)(0.5), ease.elastic(0.5, 3));
  test.equal(ease.bind(ease.elastic, 4)(0.5), ease.elastic(0.5, 4));
  test.equal(ease.bind(ease.backOut, 2)(0.5), ease.backOut(0.5, 2));
  test.equal(ease.bind(ease.backOut, 3)(0.5), ease.backOut(0.5, 3));
  test.equal(ease.bind(ease.backOut, 4)(0.5), ease.backOut(0.5, 4));
  test.end();
});

tape("bind(type, a, b) binds the parameters a and b", function(test) {
  test.equal(ease.bind(ease.elastic, 2, 0.4)(0.5), ease.elastic(0.5, 2, 0.4));
  test.equal(ease.bind(ease.elastic, 3, 0.4)(0.5), ease.elastic(0.5, 3, 0.4));
  test.equal(ease.bind(ease.elastic, 4, 0.4)(0.5), ease.elastic(0.5, 4, 0.4));
  test.end();
});
