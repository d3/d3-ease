var tape = require("tape"),
    ease = require("../");

tape("easeBind(type) returns type", function(test) {
  test.equal(ease.bind(ease.easeLinearIn), ease.easeLinearIn);
  test.equal(ease.bind(ease.easeElasticIn), ease.easeElasticIn);
  test.equal(ease.bind(ease.easeBackOut), ease.easeBackOut);
  test.end();
});

tape("easeBind(type, a) binds the parameter a", function(test) {
  test.equal(ease.bind(ease.easePolyIn, 2)(0.5), Math.pow(0.5, 2));
  test.equal(ease.bind(ease.easePolyIn, 3)(0.5), Math.pow(0.5, 3));
  test.equal(ease.bind(ease.easePolyIn, 4)(0.5), Math.pow(0.5, 4));
  test.equal(ease.bind(ease.easeElasticIn, 2)(0.5), ease.easeElasticIn(0.5, 2));
  test.equal(ease.bind(ease.easeElasticIn, 3)(0.5), ease.easeElasticIn(0.5, 3));
  test.equal(ease.bind(ease.easeElasticIn, 4)(0.5), ease.easeElasticIn(0.5, 4));
  test.equal(ease.bind(ease.easeBackOut, 2)(0.5), ease.easeBackOut(0.5, 2));
  test.equal(ease.bind(ease.easeBackOut, 3)(0.5), ease.easeBackOut(0.5, 3));
  test.equal(ease.bind(ease.easeBackOut, 4)(0.5), ease.easeBackOut(0.5, 4));
  test.end();
});

tape("easeBind(type, a, b) binds the parameters a and b", function(test) {
  test.equal(ease.bind(ease.easeElasticIn, 2, 0.4)(0.5), ease.easeElasticIn(0.5, 2, 0.4));
  test.equal(ease.bind(ease.easeElasticIn, 3, 0.4)(0.5), ease.easeElasticIn(0.5, 3, 0.4));
  test.equal(ease.bind(ease.easeElasticIn, 4, 0.4)(0.5), ease.easeElasticIn(0.5, 4, 0.4));
  test.end();
});
