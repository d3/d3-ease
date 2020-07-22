var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeElastic is an alias for easeElasticOut", function(test) {
  test.equal(ease.easeElastic, ease.easeElasticOut);
  test.end();
});

tape("easeElasticIn(t) returns the expected results", function(test) {
  test.equal(ease.easeElasticIn(0.0), 0.000000);
  test.inDelta(ease.easeElasticIn(0.1),  0.000978);
  test.inDelta(ease.easeElasticIn(0.2), -0.001466);
  test.inDelta(ease.easeElasticIn(0.3), -0.003421);
  test.inDelta(ease.easeElasticIn(0.4),  0.014663);
  test.inDelta(ease.easeElasticIn(0.5), -0.015152);
  test.inDelta(ease.easeElasticIn(0.6), -0.030792);
  test.inDelta(ease.easeElasticIn(0.7),  0.124145);
  test.inDelta(ease.easeElasticIn(0.8), -0.124633);
  test.inDelta(ease.easeElasticIn(0.9), -0.249756);
  test.equal(ease.easeElasticIn(1.0),  1.000000);
  test.end();
});

tape("easeElasticIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeElasticIn(".9"), ease.easeElasticIn(0.9));
  test.strictEqual(ease.easeElasticIn({valueOf: function() { return 0.9; }}), ease.easeElasticIn(0.9));
  test.end();
});

tape("easeElasticIn(t) is the same as elasticIn.amplitude(1).period(0.3)(t)", function(test) {
  test.equal(ease.easeElasticIn(0.1), ease.easeElasticIn.amplitude(1).period(0.3)(0.1));
  test.equal(ease.easeElasticIn(0.2), ease.easeElasticIn.amplitude(1).period(0.3)(0.2));
  test.equal(ease.easeElasticIn(0.3), ease.easeElasticIn.amplitude(1).period(0.3)(0.3));
  test.end();
});

tape("easeElasticIn.amplitude(a)(t) is the same as elasticIn(t) if a <= 1", function(test) {
  test.equal(ease.easeElasticIn.amplitude(-1.0)(0.1), ease.easeElasticIn(0.1));
  test.equal(ease.easeElasticIn.amplitude(+0.4)(0.2), ease.easeElasticIn(0.2));
  test.equal(ease.easeElasticIn.amplitude(+0.8)(0.3), ease.easeElasticIn(0.3));
  test.end();
});

tape("easeElasticIn.amplitude(a).period(p)(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticIn.amplitude("1.3").period("0.2")(".9"), ease.easeElasticIn.amplitude(1.3).period(0.2)(.9));
  test.strictEqual(ease.easeElasticIn.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), ease.easeElasticIn.amplitude(1.3).period(0.2)(.9));
  test.end();
});

tape("easeElasticIn.amplitude(1.3)(t) returns the expected results", function(test) {
  test.equal(ease.easeElasticIn.amplitude(1.3)(0.0),  0.000000);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.1),  0.000978);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.2), -0.003576);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.3),  0.001501);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.4),  0.014663);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.5), -0.036951);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.6),  0.013510);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.7),  0.124145);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.8), -0.303950);
  test.inDelta(ease.easeElasticIn.amplitude(1.3)(0.9),  0.109580);
  test.equal(ease.easeElasticIn.amplitude(1.3)(1.0),  1.000000);
  test.end();
});

tape("easeElasticIn.amplitude(1.5).period(1)(t) returns the expected results", function(test) {
  test.equal(ease.easeElasticIn.amplitude(1.5).period(1)(0.0),  0.000000);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.1),  0.000148);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.2), -0.002212);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.3), -0.009390);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.4), -0.021498);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.5), -0.030303);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.6), -0.009352);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.7),  0.093642);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.8),  0.342077);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1)(0.9),  0.732374);
  test.equal(ease.easeElasticIn.amplitude(1.5).period(1)(1.0),  1.000000);
  test.end();
});

tape("easeElasticOut(t) returns the expected results", function(test) {
  var elasticOut = generic.out(ease.easeElasticIn);
  test.equal(ease.easeElasticOut(0.0), elasticOut(0.0));
  test.inDelta(ease.easeElasticOut(0.1), elasticOut(0.1));
  test.inDelta(ease.easeElasticOut(0.2), elasticOut(0.2));
  test.inDelta(ease.easeElasticOut(0.3), elasticOut(0.3));
  test.inDelta(ease.easeElasticOut(0.4), elasticOut(0.4));
  test.inDelta(ease.easeElasticOut(0.5), elasticOut(0.5));
  test.inDelta(ease.easeElasticOut(0.6), elasticOut(0.6));
  test.inDelta(ease.easeElasticOut(0.7), elasticOut(0.7));
  test.inDelta(ease.easeElasticOut(0.8), elasticOut(0.8));
  test.inDelta(ease.easeElasticOut(0.9), elasticOut(0.9));
  test.equal(ease.easeElasticOut(1.0), elasticOut(1.0));
  test.end();
});

tape("easeElasticOut.amplitude(a).period(p)(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticOut.amplitude("1.3").period("0.2")(".9"), ease.easeElasticOut.amplitude(1.3).period(0.2)(.9));
  test.strictEqual(ease.easeElasticOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), ease.easeElasticOut.amplitude(1.3).period(0.2)(.9));
  test.end();
});

tape("easeElasticInOut(t) returns the expected results", function(test) {
  var elasticInOut = generic.inOut(ease.easeElasticIn);
  test.equal(ease.easeElasticInOut(0.0), elasticInOut(0.0));
  test.inDelta(ease.easeElasticInOut(0.1), elasticInOut(0.1));
  test.inDelta(ease.easeElasticInOut(0.2), elasticInOut(0.2));
  test.inDelta(ease.easeElasticInOut(0.3), elasticInOut(0.3));
  test.inDelta(ease.easeElasticInOut(0.4), elasticInOut(0.4));
  test.inDelta(ease.easeElasticInOut(0.5), elasticInOut(0.5));
  test.inDelta(ease.easeElasticInOut(0.6), elasticInOut(0.6));
  test.inDelta(ease.easeElasticInOut(0.7), elasticInOut(0.7));
  test.inDelta(ease.easeElasticInOut(0.8), elasticInOut(0.8));
  test.inDelta(ease.easeElasticInOut(0.9), elasticInOut(0.9));
  test.equal(ease.easeElasticInOut(1.0), elasticInOut(1.0));
  test.end();
});

tape("easeElasticInOut.amplitude(a).period(p)(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticInOut.amplitude("1.3").period("0.2")(".9"), ease.easeElasticInOut.amplitude(1.3).period(0.2)(.9));
  test.strictEqual(ease.easeElasticInOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), ease.easeElasticInOut.amplitude(1.3).period(0.2)(.9));
  test.end();
});
