var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeElasticIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeElasticIn.ease(0.0), -0.000488); // Note: not exactly zero.
  test.inDelta(ease.easeElasticIn.ease(0.1),  0.001953);
  test.inDelta(ease.easeElasticIn.ease(0.2), -0.001953);
  test.inDelta(ease.easeElasticIn.ease(0.3), -0.003906);
  test.inDelta(ease.easeElasticIn.ease(0.4),  0.015625);
  test.inDelta(ease.easeElasticIn.ease(0.5), -0.015625);
  test.inDelta(ease.easeElasticIn.ease(0.6), -0.031250);
  test.inDelta(ease.easeElasticIn.ease(0.7),  0.125000);
  test.inDelta(ease.easeElasticIn.ease(0.8), -0.125000);
  test.inDelta(ease.easeElasticIn.ease(0.9), -0.250000);
  test.inDelta(ease.easeElasticIn.ease(1.0),  1.000000);
  test.end();
});

tape("easeElasticIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeElasticIn.ease(".9"), ease.easeElasticIn.ease(0.9));
  test.strictEqual(ease.easeElasticIn.ease({valueOf: function() { return 0.9; }}), ease.easeElasticIn.ease(0.9));
  test.end();
});

tape("easeElasticIn.ease(t) is the same as elasticIn.amplitude(1).period(0.3).ease(t)", function(test) {
  test.equal(ease.easeElasticIn.ease(0.1), ease.easeElasticIn.amplitude(1).period(0.3).ease(0.1));
  test.equal(ease.easeElasticIn.ease(0.2), ease.easeElasticIn.amplitude(1).period(0.3).ease(0.2));
  test.equal(ease.easeElasticIn.ease(0.3), ease.easeElasticIn.amplitude(1).period(0.3).ease(0.3));
  test.end();
});

tape("easeElasticIn.amplitude(a).ease(t) is the same as elasticIn(t) if a <= 1", function(test) {
  test.equal(ease.easeElasticIn.amplitude(-1.0).ease(0.1), ease.easeElasticIn.ease(0.1));
  test.equal(ease.easeElasticIn.amplitude(+0.4).ease(0.2), ease.easeElasticIn.ease(0.2));
  test.equal(ease.easeElasticIn.amplitude(+0.8).ease(0.3), ease.easeElasticIn.ease(0.3));
  test.end();
});

tape("easeElasticIn.amplitude(a).period(p).ease(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticIn.amplitude("1.3").period("0.2").ease(".9"), ease.easeElasticIn.amplitude(1.3).period(0.2).ease(.9));
  test.strictEqual(ease.easeElasticIn.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }}).ease({valueOf: function() { return .9; }}), ease.easeElasticIn.amplitude(1.3).period(0.2).ease(.9));
  test.end();
});

tape("easeElasticIn.amplitude(1.3).ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.0),  0.000214); // Note: not exactly zero.
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.1),  0.001953);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.2), -0.004763);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.3),  0.001714);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.4),  0.015625);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.5), -0.038105);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.6),  0.013711);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.7),  0.125000);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.8), -0.304844);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(0.9),  0.109687);
  test.inDelta(ease.easeElasticIn.amplitude(1.3).ease(1.0),  1.000000);
  test.end();
});

tape("easeElasticIn.amplitude(1.5).period(1).ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.0),  0.000977); // Note: not exactly zero.
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.1),  0.000297);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.2), -0.002946);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.3), -0.010721);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.4), -0.022909);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.5), -0.031250);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.6), -0.009491);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.7),  0.094287);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.8),  0.343083);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(0.9),  0.733090);
  test.inDelta(ease.easeElasticIn.amplitude(1.5).period(1).ease(1.0),  1.000000);
  test.end();
});

tape("easeElasticOut.ease(t) returns the expected results", function(test) {
  var elasticOut = generic.out(ease.easeElasticIn);
  test.inDelta(ease.easeElasticOut.ease(0.0), elasticOut.ease(0.0));
  test.inDelta(ease.easeElasticOut.ease(0.1), elasticOut.ease(0.1));
  test.inDelta(ease.easeElasticOut.ease(0.2), elasticOut.ease(0.2));
  test.inDelta(ease.easeElasticOut.ease(0.3), elasticOut.ease(0.3));
  test.inDelta(ease.easeElasticOut.ease(0.4), elasticOut.ease(0.4));
  test.inDelta(ease.easeElasticOut.ease(0.5), elasticOut.ease(0.5));
  test.inDelta(ease.easeElasticOut.ease(0.6), elasticOut.ease(0.6));
  test.inDelta(ease.easeElasticOut.ease(0.7), elasticOut.ease(0.7));
  test.inDelta(ease.easeElasticOut.ease(0.8), elasticOut.ease(0.8));
  test.inDelta(ease.easeElasticOut.ease(0.9), elasticOut.ease(0.9));
  test.inDelta(ease.easeElasticOut.ease(1.0), elasticOut.ease(1.0));
  test.end();
});

tape("easeElasticOut.amplitude(a).period(p).ease(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticOut.amplitude("1.3").period("0.2").ease(".9"), ease.easeElasticOut.amplitude(1.3).period(0.2).ease(.9));
  test.strictEqual(ease.easeElasticOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }}).ease({valueOf: function() { return .9; }}), ease.easeElasticOut.amplitude(1.3).period(0.2).ease(.9));
  test.end();
});

tape("easeElasticInOut.ease(t) returns the expected results", function(test) {
  var elasticInOut = generic.inOut(ease.easeElasticIn);
  test.inDelta(ease.easeElasticInOut.ease(0.0), elasticInOut.ease(0.0));
  test.inDelta(ease.easeElasticInOut.ease(0.1), elasticInOut.ease(0.1));
  test.inDelta(ease.easeElasticInOut.ease(0.2), elasticInOut.ease(0.2));
  test.inDelta(ease.easeElasticInOut.ease(0.3), elasticInOut.ease(0.3));
  test.inDelta(ease.easeElasticInOut.ease(0.4), elasticInOut.ease(0.4));
  test.inDelta(ease.easeElasticInOut.ease(0.5), elasticInOut.ease(0.5));
  test.inDelta(ease.easeElasticInOut.ease(0.6), elasticInOut.ease(0.6));
  test.inDelta(ease.easeElasticInOut.ease(0.7), elasticInOut.ease(0.7));
  test.inDelta(ease.easeElasticInOut.ease(0.8), elasticInOut.ease(0.8));
  test.inDelta(ease.easeElasticInOut.ease(0.9), elasticInOut.ease(0.9));
  test.inDelta(ease.easeElasticInOut.ease(1.0), elasticInOut.ease(1.0));
  test.end();
});

tape("easeElasticInOut.amplitude(a).period(p).ease(t) coerces t, a and p to numbers", function(test) {
  test.strictEqual(ease.easeElasticInOut.amplitude("1.3").period("0.2").ease(".9"), ease.easeElasticInOut.amplitude(1.3).period(0.2).ease(.9));
  test.strictEqual(ease.easeElasticInOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }}).ease({valueOf: function() { return .9; }}), ease.easeElasticInOut.amplitude(1.3).period(0.2).ease(.9));
  test.end();
});
