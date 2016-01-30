var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeCircleIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeCircleIn.ease(0.0), 0.000000);
  test.inDelta(ease.easeCircleIn.ease(0.1), 0.005013);
  test.inDelta(ease.easeCircleIn.ease(0.2), 0.020204);
  test.inDelta(ease.easeCircleIn.ease(0.3), 0.046061);
  test.inDelta(ease.easeCircleIn.ease(0.4), 0.083485);
  test.inDelta(ease.easeCircleIn.ease(0.5), 0.133975);
  test.inDelta(ease.easeCircleIn.ease(0.6), 0.200000);
  test.inDelta(ease.easeCircleIn.ease(0.7), 0.285857);
  test.inDelta(ease.easeCircleIn.ease(0.8), 0.400000);
  test.inDelta(ease.easeCircleIn.ease(0.9), 0.564110);
  test.inDelta(ease.easeCircleIn.ease(1.0), 1.000000);
  test.end();
});

tape("easeCircleIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleIn.ease(".9"), ease.easeCircleIn.ease(0.9));
  test.strictEqual(ease.easeCircleIn.ease({valueOf: function() { return 0.9; }}), ease.easeCircleIn.ease(0.9));
  test.end();
});

tape("easeCircleOut.ease(t) returns the expected results", function(test) {
  var circleOut = generic.out(ease.easeCircleIn);
  test.inDelta(ease.easeCircleOut.ease(0.0), circleOut.ease(0.0));
  test.inDelta(ease.easeCircleOut.ease(0.1), circleOut.ease(0.1));
  test.inDelta(ease.easeCircleOut.ease(0.2), circleOut.ease(0.2));
  test.inDelta(ease.easeCircleOut.ease(0.3), circleOut.ease(0.3));
  test.inDelta(ease.easeCircleOut.ease(0.4), circleOut.ease(0.4));
  test.inDelta(ease.easeCircleOut.ease(0.5), circleOut.ease(0.5));
  test.inDelta(ease.easeCircleOut.ease(0.6), circleOut.ease(0.6));
  test.inDelta(ease.easeCircleOut.ease(0.7), circleOut.ease(0.7));
  test.inDelta(ease.easeCircleOut.ease(0.8), circleOut.ease(0.8));
  test.inDelta(ease.easeCircleOut.ease(0.9), circleOut.ease(0.9));
  test.inDelta(ease.easeCircleOut.ease(1.0), circleOut.ease(1.0));
  test.end();
});

tape("easeCircleOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleOut.ease(".9"), ease.easeCircleOut.ease(0.9));
  test.strictEqual(ease.easeCircleOut.ease({valueOf: function() { return 0.9; }}), ease.easeCircleOut.ease(0.9));
  test.end();
});

tape("easeCircleInOut.ease(t) returns the expected results", function(test) {
  var circleInOut = generic.inOut(ease.easeCircleIn);
  test.inDelta(ease.easeCircleInOut.ease(0.0), circleInOut.ease(0.0));
  test.inDelta(ease.easeCircleInOut.ease(0.1), circleInOut.ease(0.1));
  test.inDelta(ease.easeCircleInOut.ease(0.2), circleInOut.ease(0.2));
  test.inDelta(ease.easeCircleInOut.ease(0.3), circleInOut.ease(0.3));
  test.inDelta(ease.easeCircleInOut.ease(0.4), circleInOut.ease(0.4));
  test.inDelta(ease.easeCircleInOut.ease(0.5), circleInOut.ease(0.5));
  test.inDelta(ease.easeCircleInOut.ease(0.6), circleInOut.ease(0.6));
  test.inDelta(ease.easeCircleInOut.ease(0.7), circleInOut.ease(0.7));
  test.inDelta(ease.easeCircleInOut.ease(0.8), circleInOut.ease(0.8));
  test.inDelta(ease.easeCircleInOut.ease(0.9), circleInOut.ease(0.9));
  test.inDelta(ease.easeCircleInOut.ease(1.0), circleInOut.ease(1.0));
  test.end();
});

tape("easeCircleInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeCircleInOut.ease(".9"), ease.easeCircleInOut.ease(0.9));
  test.strictEqual(ease.easeCircleInOut.ease({valueOf: function() { return 0.9; }}), ease.easeCircleInOut.ease(0.9));
  test.end();
});
