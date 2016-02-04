var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeCubic is an alias for easeCubicInOut", function(test) {
  test.equal(ease.easeCubic, ease.easeCubicInOut);
  test.end();
});

tape("easeCubicIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeCubicIn.ease(0.0), 0.000);
  test.inDelta(ease.easeCubicIn.ease(0.1), 0.001);
  test.inDelta(ease.easeCubicIn.ease(0.2), 0.008);
  test.inDelta(ease.easeCubicIn.ease(0.3), 0.027);
  test.inDelta(ease.easeCubicIn.ease(0.4), 0.064);
  test.inDelta(ease.easeCubicIn.ease(0.5), 0.125);
  test.inDelta(ease.easeCubicIn.ease(0.6), 0.216);
  test.inDelta(ease.easeCubicIn.ease(0.7), 0.343);
  test.inDelta(ease.easeCubicIn.ease(0.8), 0.512);
  test.inDelta(ease.easeCubicIn.ease(0.9), 0.729);
  test.inDelta(ease.easeCubicIn.ease(1.0), 1.000);
  test.end();
});

tape("easeCubicIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicIn.ease(".9"), ease.easeCubicIn.ease(0.9));
  test.strictEqual(ease.easeCubicIn.ease({valueOf: function() { return 0.9; }}), ease.easeCubicIn.ease(0.9));
  test.end();
});

tape("easeCubicOut.ease(t) returns the expected results", function(test) {
  var cubicOut = generic.out(ease.easeCubicIn);
  test.inDelta(ease.easeCubicOut.ease(0.0), cubicOut.ease(0.0));
  test.inDelta(ease.easeCubicOut.ease(0.1), cubicOut.ease(0.1));
  test.inDelta(ease.easeCubicOut.ease(0.2), cubicOut.ease(0.2));
  test.inDelta(ease.easeCubicOut.ease(0.3), cubicOut.ease(0.3));
  test.inDelta(ease.easeCubicOut.ease(0.4), cubicOut.ease(0.4));
  test.inDelta(ease.easeCubicOut.ease(0.5), cubicOut.ease(0.5));
  test.inDelta(ease.easeCubicOut.ease(0.6), cubicOut.ease(0.6));
  test.inDelta(ease.easeCubicOut.ease(0.7), cubicOut.ease(0.7));
  test.inDelta(ease.easeCubicOut.ease(0.8), cubicOut.ease(0.8));
  test.inDelta(ease.easeCubicOut.ease(0.9), cubicOut.ease(0.9));
  test.inDelta(ease.easeCubicOut.ease(1.0), cubicOut.ease(1.0));
  test.end();
});

tape("easeCubicOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicOut.ease(".9"), ease.easeCubicOut.ease(0.9));
  test.strictEqual(ease.easeCubicOut.ease({valueOf: function() { return 0.9; }}), ease.easeCubicOut.ease(0.9));
  test.end();
});

tape("easeCubicInOut.ease(t) returns the expected results", function(test) {
  var cubicInOut = generic.inOut(ease.easeCubicIn);
  test.inDelta(ease.easeCubicInOut.ease(0.0), cubicInOut.ease(0.0));
  test.inDelta(ease.easeCubicInOut.ease(0.1), cubicInOut.ease(0.1));
  test.inDelta(ease.easeCubicInOut.ease(0.2), cubicInOut.ease(0.2));
  test.inDelta(ease.easeCubicInOut.ease(0.3), cubicInOut.ease(0.3));
  test.inDelta(ease.easeCubicInOut.ease(0.4), cubicInOut.ease(0.4));
  test.inDelta(ease.easeCubicInOut.ease(0.5), cubicInOut.ease(0.5));
  test.inDelta(ease.easeCubicInOut.ease(0.6), cubicInOut.ease(0.6));
  test.inDelta(ease.easeCubicInOut.ease(0.7), cubicInOut.ease(0.7));
  test.inDelta(ease.easeCubicInOut.ease(0.8), cubicInOut.ease(0.8));
  test.inDelta(ease.easeCubicInOut.ease(0.9), cubicInOut.ease(0.9));
  test.inDelta(ease.easeCubicInOut.ease(1.0), cubicInOut.ease(1.0));
  test.end();
});

tape("easeCubicInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCubicInOut.ease(".9"), ease.easeCubicInOut.ease(0.9));
  test.strictEqual(ease.easeCubicInOut.ease({valueOf: function() { return 0.9; }}), ease.easeCubicInOut.ease(0.9));
  test.end();
});
