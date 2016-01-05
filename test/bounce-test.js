var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("bounceIn(t) returns the expected results", function(test) {
  test.inDelta(ease.bounceIn(0.0), 0.000000);
  test.inDelta(ease.bounceIn(0.1), 0.011875);
  test.inDelta(ease.bounceIn(0.2), 0.060000);
  test.inDelta(ease.bounceIn(0.3), 0.069375);
  test.inDelta(ease.bounceIn(0.4), 0.227500);
  test.inDelta(ease.bounceIn(0.5), 0.234375);
  test.inDelta(ease.bounceIn(0.6), 0.090000);
  test.inDelta(ease.bounceIn(0.7), 0.319375);
  test.inDelta(ease.bounceIn(0.8), 0.697500);
  test.inDelta(ease.bounceIn(0.9), 0.924375);
  test.inDelta(ease.bounceIn(1.0), 1.000000);
  test.end();
});

tape("bounceIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceIn(".9"), ease.bounceIn(0.9));
  test.strictEqual(ease.bounceIn({valueOf: function() { return 0.9; }}), ease.bounceIn(0.9));
  test.end();
});

tape("bounceOut(t) returns the expected results", function(test) {
  var bounceOut = generic.out(ease.bounceIn);
  test.inDelta(ease.bounceOut(0.0), bounceOut(0.0));
  test.inDelta(ease.bounceOut(0.1), bounceOut(0.1));
  test.inDelta(ease.bounceOut(0.2), bounceOut(0.2));
  test.inDelta(ease.bounceOut(0.3), bounceOut(0.3));
  test.inDelta(ease.bounceOut(0.4), bounceOut(0.4));
  test.inDelta(ease.bounceOut(0.5), bounceOut(0.5));
  test.inDelta(ease.bounceOut(0.6), bounceOut(0.6));
  test.inDelta(ease.bounceOut(0.7), bounceOut(0.7));
  test.inDelta(ease.bounceOut(0.8), bounceOut(0.8));
  test.inDelta(ease.bounceOut(0.9), bounceOut(0.9));
  test.inDelta(ease.bounceOut(1.0), bounceOut(1.0));
  test.end();
});

tape("bounceOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceOut(".9"), ease.bounceOut(0.9));
  test.strictEqual(ease.bounceOut({valueOf: function() { return 0.9; }}), ease.bounceOut(0.9));
  test.end();
});

tape("bounceInOut(t) returns the expected results", function(test) {
  var bounceInOut = generic.inOut(ease.bounceIn);
  test.inDelta(ease.bounceInOut(0.0), bounceInOut(0.0));
  test.inDelta(ease.bounceInOut(0.1), bounceInOut(0.1));
  test.inDelta(ease.bounceInOut(0.2), bounceInOut(0.2));
  test.inDelta(ease.bounceInOut(0.3), bounceInOut(0.3));
  test.inDelta(ease.bounceInOut(0.4), bounceInOut(0.4));
  test.inDelta(ease.bounceInOut(0.5), bounceInOut(0.5));
  test.inDelta(ease.bounceInOut(0.6), bounceInOut(0.6));
  test.inDelta(ease.bounceInOut(0.7), bounceInOut(0.7));
  test.inDelta(ease.bounceInOut(0.8), bounceInOut(0.8));
  test.inDelta(ease.bounceInOut(0.9), bounceInOut(0.9));
  test.inDelta(ease.bounceInOut(1.0), bounceInOut(1.0));
  test.end();
});

tape("bounceInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceInOut(".9"), ease.bounceInOut(0.9));
  test.strictEqual(ease.bounceInOut({valueOf: function() { return 0.9; }}), ease.bounceInOut(0.9));
  test.end();
});
