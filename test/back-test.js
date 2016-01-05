var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

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
  var backOut = generic.out(ease.backIn);
  test.inDelta(ease.backOut(0.0), backOut(0.0));
  test.inDelta(ease.backOut(0.1), backOut(0.1));
  test.inDelta(ease.backOut(0.2), backOut(0.2));
  test.inDelta(ease.backOut(0.3), backOut(0.3));
  test.inDelta(ease.backOut(0.4), backOut(0.4));
  test.inDelta(ease.backOut(0.5), backOut(0.5));
  test.inDelta(ease.backOut(0.6), backOut(0.6));
  test.inDelta(ease.backOut(0.7), backOut(0.7));
  test.inDelta(ease.backOut(0.8), backOut(0.8));
  test.inDelta(ease.backOut(0.9), backOut(0.9));
  test.inDelta(ease.backOut(1.0), backOut(1.0));
  test.end();
});

tape("backOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.backOut(".9"), ease.backOut(0.9));
  test.strictEqual(ease.backOut({valueOf: function() { return 0.9; }}), ease.backOut(0.9));
  test.end();
});

tape("backInOut(t) returns the expected results", function(test) {
  var backInOut = generic.inOut(ease.backIn);
  test.inDelta(ease.backInOut(0.0), backInOut(0.0));
  test.inDelta(ease.backInOut(0.1), backInOut(0.1));
  test.inDelta(ease.backInOut(0.2), backInOut(0.2));
  test.inDelta(ease.backInOut(0.3), backInOut(0.3));
  test.inDelta(ease.backInOut(0.4), backInOut(0.4));
  test.inDelta(ease.backInOut(0.5), backInOut(0.5));
  test.inDelta(ease.backInOut(0.6), backInOut(0.6));
  test.inDelta(ease.backInOut(0.7), backInOut(0.7));
  test.inDelta(ease.backInOut(0.8), backInOut(0.8));
  test.inDelta(ease.backInOut(0.9), backInOut(0.9));
  test.inDelta(ease.backInOut(1.0), backInOut(1.0));
  test.end();
});

tape("backInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.backInOut(".9"), ease.backInOut(0.9));
  test.strictEqual(ease.backInOut({valueOf: function() { return 0.9; }}), ease.backInOut(0.9));
  test.end();
});
