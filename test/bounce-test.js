var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeBounceIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeBounceIn.ease(0.0), 0.000000);
  test.inDelta(ease.easeBounceIn.ease(0.1), 0.011875);
  test.inDelta(ease.easeBounceIn.ease(0.2), 0.060000);
  test.inDelta(ease.easeBounceIn.ease(0.3), 0.069375);
  test.inDelta(ease.easeBounceIn.ease(0.4), 0.227500);
  test.inDelta(ease.easeBounceIn.ease(0.5), 0.234375);
  test.inDelta(ease.easeBounceIn.ease(0.6), 0.090000);
  test.inDelta(ease.easeBounceIn.ease(0.7), 0.319375);
  test.inDelta(ease.easeBounceIn.ease(0.8), 0.697500);
  test.inDelta(ease.easeBounceIn.ease(0.9), 0.924375);
  test.inDelta(ease.easeBounceIn.ease(1.0), 1.000000);
  test.end();
});

tape("easeBounceIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceIn.ease(".9"), ease.easeBounceIn.ease(0.9));
  test.strictEqual(ease.easeBounceIn.ease({valueOf: function() { return 0.9; }}), ease.easeBounceIn.ease(0.9));
  test.end();
});

tape("easeBounceOut.ease(t) returns the expected results", function(test) {
  var bounceOut = generic.out(ease.easeBounceIn);
  test.inDelta(ease.easeBounceOut.ease(0.0), bounceOut.ease(0.0));
  test.inDelta(ease.easeBounceOut.ease(0.1), bounceOut.ease(0.1));
  test.inDelta(ease.easeBounceOut.ease(0.2), bounceOut.ease(0.2));
  test.inDelta(ease.easeBounceOut.ease(0.3), bounceOut.ease(0.3));
  test.inDelta(ease.easeBounceOut.ease(0.4), bounceOut.ease(0.4));
  test.inDelta(ease.easeBounceOut.ease(0.5), bounceOut.ease(0.5));
  test.inDelta(ease.easeBounceOut.ease(0.6), bounceOut.ease(0.6));
  test.inDelta(ease.easeBounceOut.ease(0.7), bounceOut.ease(0.7));
  test.inDelta(ease.easeBounceOut.ease(0.8), bounceOut.ease(0.8));
  test.inDelta(ease.easeBounceOut.ease(0.9), bounceOut.ease(0.9));
  test.inDelta(ease.easeBounceOut.ease(1.0), bounceOut.ease(1.0));
  test.end();
});

tape("easeBounceOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceOut.ease(".9"), ease.easeBounceOut.ease(0.9));
  test.strictEqual(ease.easeBounceOut.ease({valueOf: function() { return 0.9; }}), ease.easeBounceOut.ease(0.9));
  test.end();
});

tape("easeBounceInOut.ease(t) returns the expected results", function(test) {
  var bounceInOut = generic.inOut(ease.easeBounceIn);
  test.inDelta(ease.easeBounceInOut.ease(0.0), bounceInOut.ease(0.0));
  test.inDelta(ease.easeBounceInOut.ease(0.1), bounceInOut.ease(0.1));
  test.inDelta(ease.easeBounceInOut.ease(0.2), bounceInOut.ease(0.2));
  test.inDelta(ease.easeBounceInOut.ease(0.3), bounceInOut.ease(0.3));
  test.inDelta(ease.easeBounceInOut.ease(0.4), bounceInOut.ease(0.4));
  test.inDelta(ease.easeBounceInOut.ease(0.5), bounceInOut.ease(0.5));
  test.inDelta(ease.easeBounceInOut.ease(0.6), bounceInOut.ease(0.6));
  test.inDelta(ease.easeBounceInOut.ease(0.7), bounceInOut.ease(0.7));
  test.inDelta(ease.easeBounceInOut.ease(0.8), bounceInOut.ease(0.8));
  test.inDelta(ease.easeBounceInOut.ease(0.9), bounceInOut.ease(0.9));
  test.inDelta(ease.easeBounceInOut.ease(1.0), bounceInOut.ease(1.0));
  test.end();
});

tape("easeBounceInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBounceInOut.ease(".9"), ease.easeBounceInOut.ease(0.9));
  test.strictEqual(ease.easeBounceInOut.ease({valueOf: function() { return 0.9; }}), ease.easeBounceInOut.ease(0.9));
  test.end();
});
