var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeBackIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeBackIn.ease(0.0),  0.000000);
  test.inDelta(ease.easeBackIn.ease(0.1), -0.014314);
  test.inDelta(ease.easeBackIn.ease(0.2), -0.046451);
  test.inDelta(ease.easeBackIn.ease(0.3), -0.080200);
  test.inDelta(ease.easeBackIn.ease(0.4), -0.099352);
  test.inDelta(ease.easeBackIn.ease(0.5), -0.087698);
  test.inDelta(ease.easeBackIn.ease(0.6), -0.029028);
  test.inDelta(ease.easeBackIn.ease(0.7), +0.092868);
  test.inDelta(ease.easeBackIn.ease(0.8), +0.294198);
  test.inDelta(ease.easeBackIn.ease(0.9), +0.591172);
  test.inDelta(ease.easeBackIn.ease(1.0), +1.000000);
  test.end();
});

tape("easeBackIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackIn.ease(".9"), ease.easeBackIn.ease(0.9));
  test.strictEqual(ease.easeBackIn.ease({valueOf: function() { return 0.9; }}), ease.easeBackIn.ease(0.9));
  test.end();
});

tape("easeBackOut.ease(t) returns the expected results", function(test) {
  var backOut = generic.out(ease.easeBackIn);
  test.inDelta(ease.easeBackOut.ease(0.0), backOut.ease(0.0));
  test.inDelta(ease.easeBackOut.ease(0.1), backOut.ease(0.1));
  test.inDelta(ease.easeBackOut.ease(0.2), backOut.ease(0.2));
  test.inDelta(ease.easeBackOut.ease(0.3), backOut.ease(0.3));
  test.inDelta(ease.easeBackOut.ease(0.4), backOut.ease(0.4));
  test.inDelta(ease.easeBackOut.ease(0.5), backOut.ease(0.5));
  test.inDelta(ease.easeBackOut.ease(0.6), backOut.ease(0.6));
  test.inDelta(ease.easeBackOut.ease(0.7), backOut.ease(0.7));
  test.inDelta(ease.easeBackOut.ease(0.8), backOut.ease(0.8));
  test.inDelta(ease.easeBackOut.ease(0.9), backOut.ease(0.9));
  test.inDelta(ease.easeBackOut.ease(1.0), backOut.ease(1.0));
  test.end();
});

tape("easeBackOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackOut.ease(".9"), ease.easeBackOut.ease(0.9));
  test.strictEqual(ease.easeBackOut.ease({valueOf: function() { return 0.9; }}), ease.easeBackOut.ease(0.9));
  test.end();
});

tape("easeBackInOut.ease(t) returns the expected results", function(test) {
  var backInOut = generic.inOut(ease.easeBackIn);
  test.inDelta(ease.easeBackInOut.ease(0.0), backInOut.ease(0.0));
  test.inDelta(ease.easeBackInOut.ease(0.1), backInOut.ease(0.1));
  test.inDelta(ease.easeBackInOut.ease(0.2), backInOut.ease(0.2));
  test.inDelta(ease.easeBackInOut.ease(0.3), backInOut.ease(0.3));
  test.inDelta(ease.easeBackInOut.ease(0.4), backInOut.ease(0.4));
  test.inDelta(ease.easeBackInOut.ease(0.5), backInOut.ease(0.5));
  test.inDelta(ease.easeBackInOut.ease(0.6), backInOut.ease(0.6));
  test.inDelta(ease.easeBackInOut.ease(0.7), backInOut.ease(0.7));
  test.inDelta(ease.easeBackInOut.ease(0.8), backInOut.ease(0.8));
  test.inDelta(ease.easeBackInOut.ease(0.9), backInOut.ease(0.9));
  test.inDelta(ease.easeBackInOut.ease(1.0), backInOut.ease(1.0));
  test.end();
});

tape("easeBackInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeBackInOut.ease(".9"), ease.easeBackInOut.ease(0.9));
  test.strictEqual(ease.easeBackInOut.ease({valueOf: function() { return 0.9; }}), ease.easeBackInOut.ease(0.9));
  test.end();
});
