var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("quad is an alias for quadIn", function(test) {
  test.equal(ease.quad, ease.quadIn);
  test.end();
});

tape("quadIn(t) returns the expected results", function(test) {
  test.inDelta(ease.quadIn(0.0), 0.00);
  test.inDelta(ease.quadIn(0.1), 0.01);
  test.inDelta(ease.quadIn(0.2), 0.04);
  test.inDelta(ease.quadIn(0.3), 0.09);
  test.inDelta(ease.quadIn(0.4), 0.16);
  test.inDelta(ease.quadIn(0.5), 0.25);
  test.inDelta(ease.quadIn(0.6), 0.36);
  test.inDelta(ease.quadIn(0.7), 0.49);
  test.inDelta(ease.quadIn(0.8), 0.64);
  test.inDelta(ease.quadIn(0.9), 0.81);
  test.inDelta(ease.quadIn(1.0), 1.00);
  test.end();
});

tape("quadIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.quadIn(".9"), ease.quadIn(0.9));
  test.strictEqual(ease.quadIn({valueOf: function() { return 0.9; }}), ease.quadIn(0.9));
  test.end();
});

tape("quadOut(t) returns the expected results", function(test) {
  test.inDelta(ease.quadOut(0.0), 0.00);
  test.inDelta(ease.quadOut(0.1), 0.19);
  test.inDelta(ease.quadOut(0.2), 0.36);
  test.inDelta(ease.quadOut(0.3), 0.51);
  test.inDelta(ease.quadOut(0.4), 0.64);
  test.inDelta(ease.quadOut(0.5), 0.75);
  test.inDelta(ease.quadOut(0.6), 0.84);
  test.inDelta(ease.quadOut(0.7), 0.91);
  test.inDelta(ease.quadOut(0.8), 0.96);
  test.inDelta(ease.quadOut(0.9), 0.99);
  test.inDelta(ease.quadOut(1.0), 1.00);
  test.end();
});

tape("quadOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.quadOut(".9"), ease.quadOut(0.9));
  test.strictEqual(ease.quadOut({valueOf: function() { return 0.9; }}), ease.quadOut(0.9));
  test.end();
});

tape("quadInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.quadInOut(0.0), 0.00);
  test.inDelta(ease.quadInOut(0.1), 0.02);
  test.inDelta(ease.quadInOut(0.2), 0.08);
  test.inDelta(ease.quadInOut(0.3), 0.18);
  test.inDelta(ease.quadInOut(0.4), 0.32);
  test.inDelta(ease.quadInOut(0.5), 0.50);
  test.inDelta(ease.quadInOut(0.6), 0.68);
  test.inDelta(ease.quadInOut(0.7), 0.82);
  test.inDelta(ease.quadInOut(0.8), 0.92);
  test.inDelta(ease.quadInOut(0.9), 0.98);
  test.inDelta(ease.quadInOut(1.0), 1.00);
  test.end();
});

tape("quadInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.quadInOut(".9"), ease.quadInOut(0.9));
  test.strictEqual(ease.quadInOut({valueOf: function() { return 0.9; }}), ease.quadInOut(0.9));
  test.end();
});
