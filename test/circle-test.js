var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("circleIn(t) returns the expected results", function(test) {
  test.inDelta(ease.circleIn(0.0), 0.000000);
  test.inDelta(ease.circleIn(0.1), 0.005013);
  test.inDelta(ease.circleIn(0.2), 0.020204);
  test.inDelta(ease.circleIn(0.3), 0.046061);
  test.inDelta(ease.circleIn(0.4), 0.083485);
  test.inDelta(ease.circleIn(0.5), 0.133975);
  test.inDelta(ease.circleIn(0.6), 0.200000);
  test.inDelta(ease.circleIn(0.7), 0.285857);
  test.inDelta(ease.circleIn(0.8), 0.400000);
  test.inDelta(ease.circleIn(0.9), 0.564110);
  test.inDelta(ease.circleIn(1.0), 1.000000);
  test.end();
});

tape("circleIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.circleIn(".9"), ease.circleIn(0.9));
  test.strictEqual(ease.circleIn({valueOf: function() { return 0.9; }}), ease.circleIn(0.9));
  test.end();
});

tape("circleOut(t) returns the expected results", function(test) {
  var circleOut = generic.out(ease.circleIn);
  test.inDelta(ease.circleOut(0.0), circleOut(0.0));
  test.inDelta(ease.circleOut(0.1), circleOut(0.1));
  test.inDelta(ease.circleOut(0.2), circleOut(0.2));
  test.inDelta(ease.circleOut(0.3), circleOut(0.3));
  test.inDelta(ease.circleOut(0.4), circleOut(0.4));
  test.inDelta(ease.circleOut(0.5), circleOut(0.5));
  test.inDelta(ease.circleOut(0.6), circleOut(0.6));
  test.inDelta(ease.circleOut(0.7), circleOut(0.7));
  test.inDelta(ease.circleOut(0.8), circleOut(0.8));
  test.inDelta(ease.circleOut(0.9), circleOut(0.9));
  test.inDelta(ease.circleOut(1.0), circleOut(1.0));
  test.end();
});

tape("circleOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.circleOut(".9"), ease.circleOut(0.9));
  test.strictEqual(ease.circleOut({valueOf: function() { return 0.9; }}), ease.circleOut(0.9));
  test.end();
});

tape("circleInOut(t) returns the expected results", function(test) {
  var circleInOut = generic.inOut(ease.circleIn);
  test.inDelta(ease.circleInOut(0.0), circleInOut(0.0));
  test.inDelta(ease.circleInOut(0.1), circleInOut(0.1));
  test.inDelta(ease.circleInOut(0.2), circleInOut(0.2));
  test.inDelta(ease.circleInOut(0.3), circleInOut(0.3));
  test.inDelta(ease.circleInOut(0.4), circleInOut(0.4));
  test.inDelta(ease.circleInOut(0.5), circleInOut(0.5));
  test.inDelta(ease.circleInOut(0.6), circleInOut(0.6));
  test.inDelta(ease.circleInOut(0.7), circleInOut(0.7));
  test.inDelta(ease.circleInOut(0.8), circleInOut(0.8));
  test.inDelta(ease.circleInOut(0.9), circleInOut(0.9));
  test.inDelta(ease.circleInOut(1.0), circleInOut(1.0));
  test.end();
});

tape("circleInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.circleInOut(".9"), ease.circleInOut(0.9));
  test.strictEqual(ease.circleInOut({valueOf: function() { return 0.9; }}), ease.circleInOut(0.9));
  test.end();
});
