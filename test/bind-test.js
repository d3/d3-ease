var tape = require("tape"),
    ease = require("../");

tape("easeBind(type) returns type", function(test) {
  test.equal(ease.easeBind(ease.easeLinearIn), ease.easeLinearIn);
  test.equal(ease.easeBind(ease.easeElasticIn), ease.easeElasticIn);
  test.equal(ease.easeBind(ease.easeBackOut), ease.easeBackOut);
  test.end();
});

tape("easeBind(type, a) binds the parameter a", function(test) {
  test.equal(ease.easeBind(ease.easePolyIn, 2)(0.5), Math.pow(0.5, 2));
  test.equal(ease.easeBind(ease.easePolyIn, 3)(0.5), Math.pow(0.5, 3));
  test.equal(ease.easeBind(ease.easePolyIn, 4)(0.5), Math.pow(0.5, 4));
  test.equal(ease.easeBind(ease.easeElasticIn, 2)(0.5), ease.easeElasticIn(0.5, 2));
  test.equal(ease.easeBind(ease.easeElasticIn, 3)(0.5), ease.easeElasticIn(0.5, 3));
  test.equal(ease.easeBind(ease.easeElasticIn, 4)(0.5), ease.easeElasticIn(0.5, 4));
  test.equal(ease.easeBind(ease.easeBackOut, 2)(0.5), ease.easeBackOut(0.5, 2));
  test.equal(ease.easeBind(ease.easeBackOut, 3)(0.5), ease.easeBackOut(0.5, 3));
  test.equal(ease.easeBind(ease.easeBackOut, 4)(0.5), ease.easeBackOut(0.5, 4));
  test.end();
});

tape("easeBind(type, a, b) binds the parameters a and b", function(test) {
  test.equal(ease.easeBind(ease.easeElasticIn, 2, 0.4)(0.5), ease.easeElasticIn(0.5, 2, 0.4));
  test.equal(ease.easeBind(ease.easeElasticIn, 3, 0.4)(0.5), ease.easeElasticIn(0.5, 3, 0.4));
  test.equal(ease.easeBind(ease.easeElasticIn, 4, 0.4)(0.5), ease.easeElasticIn(0.5, 4, 0.4));
  test.end();
});
