var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("circle is an alias for circleIn", function(test) {
  test.equal(ease.circle, ease.circleIn);
  test.end();
});

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
  test.inDelta(ease.circleOut(0.0), 0.000000);
  test.inDelta(ease.circleOut(0.1), 0.435890);
  test.inDelta(ease.circleOut(0.2), 0.600000);
  test.inDelta(ease.circleOut(0.3), 0.714143);
  test.inDelta(ease.circleOut(0.4), 0.800000);
  test.inDelta(ease.circleOut(0.5), 0.866025);
  test.inDelta(ease.circleOut(0.6), 0.916515);
  test.inDelta(ease.circleOut(0.7), 0.953939);
  test.inDelta(ease.circleOut(0.8), 0.979796);
  test.inDelta(ease.circleOut(0.9), 0.994987);
  test.inDelta(ease.circleOut(1.0), 1.000000);
  test.end();
});

tape("circleOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.circleOut(".9"), ease.circleOut(0.9));
  test.strictEqual(ease.circleOut({valueOf: function() { return 0.9; }}), ease.circleOut(0.9));
  test.end();
});

tape("circleInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.circleInOut(0.0), 0.000000);
  test.inDelta(ease.circleInOut(0.1), 0.010102);
  test.inDelta(ease.circleInOut(0.2), 0.041742);
  test.inDelta(ease.circleInOut(0.3), 0.100000);
  test.inDelta(ease.circleInOut(0.4), 0.200000);
  test.inDelta(ease.circleInOut(0.5), 0.500000);
  test.inDelta(ease.circleInOut(0.6), 0.800000);
  test.inDelta(ease.circleInOut(0.7), 0.900000);
  test.inDelta(ease.circleInOut(0.8), 0.958258);
  test.inDelta(ease.circleInOut(0.9), 0.989898);
  test.inDelta(ease.circleInOut(1.0), 1.000000);
  test.end();
});

tape("circleInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.circleInOut(".9"), ease.circleInOut(0.9));
  test.strictEqual(ease.circleInOut({valueOf: function() { return 0.9; }}), ease.circleInOut(0.9));
  test.end();
});
