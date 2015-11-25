var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("exp is an alias for expIn", function(test) {
  test.equal(ease.exp, ease.expIn);
  test.end();
});

tape("expIn(t) returns the expected results", function(test) {
  test.inDelta(ease.expIn(0.0), 0.000976); // Note: not exactly zero.
  test.inDelta(ease.expIn(0.1), 0.001953);
  test.inDelta(ease.expIn(0.2), 0.003906);
  test.inDelta(ease.expIn(0.3), 0.007813);
  test.inDelta(ease.expIn(0.4), 0.015625);
  test.inDelta(ease.expIn(0.5), 0.031250);
  test.inDelta(ease.expIn(0.6), 0.062500);
  test.inDelta(ease.expIn(0.7), 0.125000);
  test.inDelta(ease.expIn(0.8), 0.250000);
  test.inDelta(ease.expIn(0.9), 0.500000);
  test.inDelta(ease.expIn(1.0), 1.000000);
  test.end();
});

tape("expIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.expIn(".9"), ease.expIn(0.9));
  test.strictEqual(ease.expIn({valueOf: function() { return 0.9; }}), ease.expIn(0.9));
  test.end();
});

tape("expOut(t) returns the expected results", function(test) {
  test.inDelta(ease.expOut(0.0), 0.000000);
  test.inDelta(ease.expOut(0.1), 0.500000);
  test.inDelta(ease.expOut(0.2), 0.750000);
  test.inDelta(ease.expOut(0.3), 0.875000);
  test.inDelta(ease.expOut(0.4), 0.937500);
  test.inDelta(ease.expOut(0.5), 0.968750);
  test.inDelta(ease.expOut(0.6), 0.984375);
  test.inDelta(ease.expOut(0.7), 0.992188);
  test.inDelta(ease.expOut(0.8), 0.996094);
  test.inDelta(ease.expOut(0.9), 0.998047);
  test.inDelta(ease.expOut(1.0), 0.999023); // Note: not exactly one.
  test.end();
});

tape("expOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.expOut(".9"), ease.expOut(0.9));
  test.strictEqual(ease.expOut({valueOf: function() { return 0.9; }}), ease.expOut(0.9));
  test.end();
});

tape("expInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.expInOut(0.0), 0.000488); // Note: not exactly zero.
  test.inDelta(ease.expInOut(0.1), 0.001953);
  test.inDelta(ease.expInOut(0.2), 0.007813);
  test.inDelta(ease.expInOut(0.3), 0.031250);
  test.inDelta(ease.expInOut(0.4), 0.125000);
  test.inDelta(ease.expInOut(0.5), 0.500000);
  test.inDelta(ease.expInOut(0.6), 0.875000);
  test.inDelta(ease.expInOut(0.7), 0.968750);
  test.inDelta(ease.expInOut(0.8), 0.992188);
  test.inDelta(ease.expInOut(0.9), 0.998047);
  test.inDelta(ease.expInOut(1.0), 0.999511); // Note: not exactly one.
  test.end();
});

tape("expInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.expInOut(".9"), ease.expInOut(0.9));
  test.strictEqual(ease.expInOut({valueOf: function() { return 0.9; }}), ease.expInOut(0.9));
  test.end();
});
