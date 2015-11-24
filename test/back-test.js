var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("back is an alias for backIn", function(test) {
  test.equal(ease.back, ease.backIn);
  test.end();
});

tape("backIn(t) returns the expected results", function(test) {
  test.inDelta(ease.backIn(0.0),  0.000000);
  test.inDelta(ease.backIn(0.1), -0.014314);
  test.inDelta(ease.backIn(0.2), -0.046451);
  test.inDelta(ease.backIn(0.3), -0.080200);
  test.inDelta(ease.backIn(0.4), -0.099352);
  test.inDelta(ease.backIn(0.5), -0.087698);
  test.inDelta(ease.backIn(0.6), -0.029028);
  test.inDelta(ease.backIn(0.7), +0.092868);
  test.inDelta(ease.backIn(0.8), +0.294198);
  test.inDelta(ease.backIn(0.9), +0.591172);
  test.inDelta(ease.backIn(1.0), +1.000000);
  test.end();
});

tape("backIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.backIn(".9"), ease.backIn(0.9));
  test.strictEqual(ease.backIn({valueOf: function() { return 0.9; }}), ease.backIn(0.9));
  test.end();
});

tape("backOut(t) returns the expected results", function(test) {
  test.inDelta(ease.backOut(0.0), 0.000000);
  test.inDelta(ease.backOut(0.1), 0.408828);
  test.inDelta(ease.backOut(0.2), 0.705802);
  test.inDelta(ease.backOut(0.3), 0.907132);
  test.inDelta(ease.backOut(0.4), 1.029028);
  test.inDelta(ease.backOut(0.5), 1.087697);
  test.inDelta(ease.backOut(0.6), 1.099352);
  test.inDelta(ease.backOut(0.7), 1.080200);
  test.inDelta(ease.backOut(0.8), 1.046451);
  test.inDelta(ease.backOut(0.9), 1.014314);
  test.inDelta(ease.backOut(1.0), 1.000000);
  test.end();
});

tape("backOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.backOut(".9"), ease.backOut(0.9));
  test.strictEqual(ease.backOut({valueOf: function() { return 0.9; }}), ease.backOut(0.9));
  test.end();
});

tape("backInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.backInOut(0.0),  0.000000);
  test.inDelta(ease.backInOut(0.1), -0.037519);
  test.inDelta(ease.backInOut(0.2), -0.092556);
  test.inDelta(ease.backInOut(0.3), -0.078833);
  test.inDelta(ease.backInOut(0.4),  0.089926);
  test.inDelta(ease.backInOut(0.5),  0.500000);
  test.inDelta(ease.backInOut(0.6),  0.910074);
  test.inDelta(ease.backInOut(0.7),  1.078833);
  test.inDelta(ease.backInOut(0.8),  1.092556);
  test.inDelta(ease.backInOut(0.9),  1.037519);
  test.inDelta(ease.backInOut(1.0),  1.000000);
  test.end();
});

tape("backInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.backInOut(".9"), ease.backInOut(0.9));
  test.strictEqual(ease.backInOut({valueOf: function() { return 0.9; }}), ease.backInOut(0.9));
  test.end();
});
