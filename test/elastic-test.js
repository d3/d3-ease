var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("elastic is an alias for elasticIn", function(test) {
  test.equal(ease.elastic, ease.elasticIn);
  test.end();
});

tape("elasticIn(t) returns the expected results", function(test) {
  test.inDelta(ease.elasticIn(0.0), -0.000488); // Note: not exactly zero.
  test.inDelta(ease.elasticIn(0.1),  0.001953);
  test.inDelta(ease.elasticIn(0.2), -0.001953);
  test.inDelta(ease.elasticIn(0.3), -0.003906);
  test.inDelta(ease.elasticIn(0.4),  0.015625);
  test.inDelta(ease.elasticIn(0.5), -0.015625);
  test.inDelta(ease.elasticIn(0.6), -0.031250);
  test.inDelta(ease.elasticIn(0.7),  0.125000);
  test.inDelta(ease.elasticIn(0.8), -0.125000);
  test.inDelta(ease.elasticIn(0.9), -0.250000);
  test.inDelta(ease.elasticIn(1.0),  1.000000);
  test.end();
});

tape("elasticIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.elasticIn(".9"), ease.elasticIn(0.9));
  test.strictEqual(ease.elasticIn({valueOf: function() { return 0.9; }}), ease.elasticIn(0.9));
  test.end();
});

tape("elasticIn(t) is the same as elasticIn(t, 1.0, 0.3)", function(test) {
  test.equal(ease.elasticIn(0.1), ease.elasticIn(0.1, 1.0, 0.3));
  test.equal(ease.elasticIn(0.2), ease.elasticIn(0.2, 1.0, 0.3));
  test.equal(ease.elasticIn(0.3), ease.elasticIn(0.3, 1.0, 0.3));
  test.end();
});

tape("elasticIn(t, null, null) is the same as elasticIn(t, 1.0, 0.3)", function(test) {
  test.equal(ease.elasticIn(0.1, null, null), ease.elasticIn(0.1, 1.0, 0.3));
  test.equal(ease.elasticIn(0.2, null, null), ease.elasticIn(0.2, 1.0, 0.3));
  test.equal(ease.elasticIn(0.3, null, null), ease.elasticIn(0.3, 1.0, 0.3));
  test.end();
});

tape("elasticIn(t, undefined, undefined) is the same as elasticIn(t, 1.0, 0.3)", function(test) {
  test.equal(ease.elasticIn(0.1, undefined, undefined), ease.elasticIn(0.1, 1.0, 0.3));
  test.equal(ease.elasticIn(0.2, undefined, undefined), ease.elasticIn(0.2, 1.0, 0.3));
  test.equal(ease.elasticIn(0.3, undefined, undefined), ease.elasticIn(0.3, 1.0, 0.3));
  test.end();
});

tape("elasticIn(t, a) is the same as elasticIn(t) if a <= 1", function(test) {
  test.equal(ease.elasticIn(0.1, -1.0), ease.elasticIn(0.1));
  test.equal(ease.elasticIn(0.2,  0.4), ease.elasticIn(0.2));
  test.equal(ease.elasticIn(0.3,  0.8), ease.elasticIn(0.3));
  test.end();
});

tape("elasticIn(t, a) coerces t and a to numbers", function(test) {
  test.strictEqual(ease.elasticIn(".9", "1.3"), ease.elasticIn(0.9, 1.3));
  test.strictEqual(ease.elasticIn({valueOf: function() { return 0.9; }}, {valueOf: function() { return 1.3; }}), ease.elasticIn(0.9, 1.3));
  test.end();
});

tape("elasticIn(t, 1.3) returns the expected results", function(test) {
  test.inDelta(ease.elasticIn(0.0, 1.3),  0.000214); // Note: not exactly zero.
  test.inDelta(ease.elasticIn(0.1, 1.3),  0.001953);
  test.inDelta(ease.elasticIn(0.2, 1.3), -0.004763);
  test.inDelta(ease.elasticIn(0.3, 1.3),  0.001714);
  test.inDelta(ease.elasticIn(0.4, 1.3),  0.015625);
  test.inDelta(ease.elasticIn(0.5, 1.3), -0.038105);
  test.inDelta(ease.elasticIn(0.6, 1.3),  0.013711);
  test.inDelta(ease.elasticIn(0.7, 1.3),  0.125000);
  test.inDelta(ease.elasticIn(0.8, 1.3), -0.304844);
  test.inDelta(ease.elasticIn(0.9, 1.3),  0.109687);
  test.inDelta(ease.elasticIn(1.0, 1.3),  1.000000);
  test.end();
});

tape("elasticIn(t, a, b) coerces t, a and b to numbers", function(test) {
  test.strictEqual(ease.elasticIn(".9", "1.3", "1"), ease.elasticIn(0.9, 1.3, 1));
  test.strictEqual(ease.elasticIn({valueOf: function() { return 0.9; }}, {valueOf: function() { return 1.3; }}, {valueOf: function() { return 1; }}), ease.elasticIn(0.9, 1.3, 1));
  test.end();
});

tape("elasticIn(t, 1.5, 1) returns the expected results", function(test) {
  test.inDelta(ease.elasticIn(0.0, 1.5, 1),  0.000977); // Note: not exactly zero.
  test.inDelta(ease.elasticIn(0.1, 1.5, 1),  0.000297);
  test.inDelta(ease.elasticIn(0.2, 1.5, 1), -0.002946);
  test.inDelta(ease.elasticIn(0.3, 1.5, 1), -0.010721);
  test.inDelta(ease.elasticIn(0.4, 1.5, 1), -0.022909);
  test.inDelta(ease.elasticIn(0.5, 1.5, 1), -0.031250);
  test.inDelta(ease.elasticIn(0.6, 1.5, 1), -0.009491);
  test.inDelta(ease.elasticIn(0.7, 1.5, 1),  0.094287);
  test.inDelta(ease.elasticIn(0.8, 1.5, 1),  0.343083);
  test.inDelta(ease.elasticIn(0.9, 1.5, 1),  0.733090);
  test.inDelta(ease.elasticIn(1.0, 1.5, 1),  1.000000);
  test.end();
});

tape("elasticOut(t) returns the expected results", function(test) {
  test.inDelta(ease.elasticOut(0.0), 0.000000);
  test.inDelta(ease.elasticOut(0.1), 1.250000);
  test.inDelta(ease.elasticOut(0.2), 1.125000);
  test.inDelta(ease.elasticOut(0.3), 0.875000);
  test.inDelta(ease.elasticOut(0.4), 1.031250);
  test.inDelta(ease.elasticOut(0.5), 1.015625);
  test.inDelta(ease.elasticOut(0.6), 0.984375);
  test.inDelta(ease.elasticOut(0.7), 1.003906);
  test.inDelta(ease.elasticOut(0.8), 1.001953);
  test.inDelta(ease.elasticOut(0.9), 0.998047);
  test.inDelta(ease.elasticOut(1.0), 1.000488); // Note: not exactly one.
  test.end();
});

tape("elasticOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.elasticOut(".9"), ease.elasticOut(0.9));
  test.strictEqual(ease.elasticOut({valueOf: function() { return 0.9; }}), ease.elasticOut(0.9));
  test.end();
});

tape("elasticInOut returns the expected results", function(test) {
  test.inDelta(ease.elasticInOut(0.0),  0.000084); // Note: not exactly zero.
  test.inDelta(ease.elasticInOut(0.1),  0.000339);
  test.inDelta(ease.elasticInOut(0.2), -0.003906);
  test.inDelta(ease.elasticInOut(0.3),  0.023939);
  test.inDelta(ease.elasticInOut(0.4), -0.117462);
  test.inDelta(ease.elasticInOut(0.5),  0.500000);
  test.inDelta(ease.elasticInOut(0.6),  1.117462);
  test.inDelta(ease.elasticInOut(0.7),  0.976061);
  test.inDelta(ease.elasticInOut(0.8),  1.003906);
  test.inDelta(ease.elasticInOut(0.9),  0.999661);
  test.inDelta(ease.elasticInOut(1.0),  0.999915); // Note: not exactly one.
  test.end();
});

tape("elasticInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.elasticInOut(".9"), ease.elasticInOut(0.9));
  test.strictEqual(ease.elasticInOut({valueOf: function() { return 0.9; }}), ease.elasticInOut(0.9));
  test.end();
});
