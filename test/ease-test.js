var tape = require("tape"),
    ease = require("../");

tape("ease(type) returns type", function(test) {
  test.equal(ease.ease(ease.linear), ease.linear);
  test.equal(ease.ease(ease.elastic), ease.elastic);
  test.equal(ease.ease(ease.backOut), ease.backOut);
  test.end();
});

tape("ease(type, a) binds the parameter a", function(test) {
  test.equal(ease.ease(ease.poly, 2)(0.5), Math.pow(0.5, 2));
  test.equal(ease.ease(ease.poly, 3)(0.5), Math.pow(0.5, 3));
  test.equal(ease.ease(ease.poly, 4)(0.5), Math.pow(0.5, 4));
  test.equal(ease.ease(ease.elastic, 2)(0.5), ease.elastic(0.5, 2));
  test.equal(ease.ease(ease.elastic, 3)(0.5), ease.elastic(0.5, 3));
  test.equal(ease.ease(ease.elastic, 4)(0.5), ease.elastic(0.5, 4));
  test.equal(ease.ease(ease.backOut, 2)(0.5), ease.backOut(0.5, 2));
  test.equal(ease.ease(ease.backOut, 3)(0.5), ease.backOut(0.5, 3));
  test.equal(ease.ease(ease.backOut, 4)(0.5), ease.backOut(0.5, 4));
  test.end();
});

tape("ease(type, a, b) binds the parameters a and b", function(test) {
  test.equal(ease.ease(ease.elastic, 2, 0.4)(0.5), ease.elastic(0.5, 2, 0.4));
  test.equal(ease.ease(ease.elastic, 3, 0.4)(0.5), ease.elastic(0.5, 3, 0.4));
  test.equal(ease.ease(ease.elastic, 4, 0.4)(0.5), ease.elastic(0.5, 4, 0.4));
  test.end();
});
