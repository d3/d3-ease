var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeExpIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeExpIn.ease(0.0), 0.000976); // Note: not exactly zero.
  test.inDelta(ease.easeExpIn.ease(0.1), 0.001953);
  test.inDelta(ease.easeExpIn.ease(0.2), 0.003906);
  test.inDelta(ease.easeExpIn.ease(0.3), 0.007813);
  test.inDelta(ease.easeExpIn.ease(0.4), 0.015625);
  test.inDelta(ease.easeExpIn.ease(0.5), 0.031250);
  test.inDelta(ease.easeExpIn.ease(0.6), 0.062500);
  test.inDelta(ease.easeExpIn.ease(0.7), 0.125000);
  test.inDelta(ease.easeExpIn.ease(0.8), 0.250000);
  test.inDelta(ease.easeExpIn.ease(0.9), 0.500000);
  test.inDelta(ease.easeExpIn.ease(1.0), 1.000000);
  test.end();
});

tape("easeExpIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpIn.ease(".9"), ease.easeExpIn.ease(0.9));
  test.strictEqual(ease.easeExpIn.ease({valueOf: function() { return 0.9; }}), ease.easeExpIn.ease(0.9));
  test.end();
});

tape("easeExpOut.ease(t) returns the expected results", function(test) {
  var expOut = generic.out(ease.easeExpIn);
  test.inDelta(ease.easeExpOut.ease(0.0), expOut.ease(0.0));
  test.inDelta(ease.easeExpOut.ease(0.1), expOut.ease(0.1));
  test.inDelta(ease.easeExpOut.ease(0.2), expOut.ease(0.2));
  test.inDelta(ease.easeExpOut.ease(0.3), expOut.ease(0.3));
  test.inDelta(ease.easeExpOut.ease(0.4), expOut.ease(0.4));
  test.inDelta(ease.easeExpOut.ease(0.5), expOut.ease(0.5));
  test.inDelta(ease.easeExpOut.ease(0.6), expOut.ease(0.6));
  test.inDelta(ease.easeExpOut.ease(0.7), expOut.ease(0.7));
  test.inDelta(ease.easeExpOut.ease(0.8), expOut.ease(0.8));
  test.inDelta(ease.easeExpOut.ease(0.9), expOut.ease(0.9));
  test.inDelta(ease.easeExpOut.ease(1.0), expOut.ease(1.0));
  test.end();
});

tape("easeExpOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpOut.ease(".9"), ease.easeExpOut.ease(0.9));
  test.strictEqual(ease.easeExpOut.ease({valueOf: function() { return 0.9; }}), ease.easeExpOut.ease(0.9));
  test.end();
});

tape("easeExpInOut.ease(t) returns the expected results", function(test) {
  var expInOut = generic.inOut(ease.easeExpIn);
  test.inDelta(ease.easeExpInOut.ease(0.0), expInOut.ease(0.0));
  test.inDelta(ease.easeExpInOut.ease(0.1), expInOut.ease(0.1));
  test.inDelta(ease.easeExpInOut.ease(0.2), expInOut.ease(0.2));
  test.inDelta(ease.easeExpInOut.ease(0.3), expInOut.ease(0.3));
  test.inDelta(ease.easeExpInOut.ease(0.4), expInOut.ease(0.4));
  test.inDelta(ease.easeExpInOut.ease(0.5), expInOut.ease(0.5));
  test.inDelta(ease.easeExpInOut.ease(0.6), expInOut.ease(0.6));
  test.inDelta(ease.easeExpInOut.ease(0.7), expInOut.ease(0.7));
  test.inDelta(ease.easeExpInOut.ease(0.8), expInOut.ease(0.8));
  test.inDelta(ease.easeExpInOut.ease(0.9), expInOut.ease(0.9));
  test.inDelta(ease.easeExpInOut.ease(1.0), expInOut.ease(1.0));
  test.end();
});

tape("easeExpInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeExpInOut.ease(".9"), ease.easeExpInOut.ease(0.9));
  test.strictEqual(ease.easeExpInOut.ease({valueOf: function() { return 0.9; }}), ease.easeExpInOut.ease(0.9));
  test.end();
});
