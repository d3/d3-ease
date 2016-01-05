var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

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
  var quadOut = generic.out(ease.quadIn);
  test.inDelta(ease.quadOut(0.0), quadOut(0.0));
  test.inDelta(ease.quadOut(0.1), quadOut(0.1));
  test.inDelta(ease.quadOut(0.2), quadOut(0.2));
  test.inDelta(ease.quadOut(0.3), quadOut(0.3));
  test.inDelta(ease.quadOut(0.4), quadOut(0.4));
  test.inDelta(ease.quadOut(0.5), quadOut(0.5));
  test.inDelta(ease.quadOut(0.6), quadOut(0.6));
  test.inDelta(ease.quadOut(0.7), quadOut(0.7));
  test.inDelta(ease.quadOut(0.8), quadOut(0.8));
  test.inDelta(ease.quadOut(0.9), quadOut(0.9));
  test.inDelta(ease.quadOut(1.0), quadOut(1.0));
  test.end();
});

tape("quadOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.quadOut(".9"), ease.quadOut(0.9));
  test.strictEqual(ease.quadOut({valueOf: function() { return 0.9; }}), ease.quadOut(0.9));
  test.end();
});

tape("quadInOut(t) returns the expected results", function(test) {
  var quadInOut = generic.inOut(ease.quadIn);
  test.inDelta(ease.quadInOut(0.0), quadInOut(0.0));
  test.inDelta(ease.quadInOut(0.1), quadInOut(0.1));
  test.inDelta(ease.quadInOut(0.2), quadInOut(0.2));
  test.inDelta(ease.quadInOut(0.3), quadInOut(0.3));
  test.inDelta(ease.quadInOut(0.4), quadInOut(0.4));
  test.inDelta(ease.quadInOut(0.5), quadInOut(0.5));
  test.inDelta(ease.quadInOut(0.6), quadInOut(0.6));
  test.inDelta(ease.quadInOut(0.7), quadInOut(0.7));
  test.inDelta(ease.quadInOut(0.8), quadInOut(0.8));
  test.inDelta(ease.quadInOut(0.9), quadInOut(0.9));
  test.inDelta(ease.quadInOut(1.0), quadInOut(1.0));
  test.end();
});

tape("quadInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.quadInOut(".9"), ease.quadInOut(0.9));
  test.strictEqual(ease.quadInOut({valueOf: function() { return 0.9; }}), ease.quadInOut(0.9));
  test.end();
});
