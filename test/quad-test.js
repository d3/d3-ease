var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeQuad is an alias for easeQuadInOut", function(test) {
  test.equal(ease.easeQuad, ease.easeQuadInOut);
  test.end();
});

tape("easeQuadIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeQuadIn.ease(0.0), 0.00);
  test.inDelta(ease.easeQuadIn.ease(0.1), 0.01);
  test.inDelta(ease.easeQuadIn.ease(0.2), 0.04);
  test.inDelta(ease.easeQuadIn.ease(0.3), 0.09);
  test.inDelta(ease.easeQuadIn.ease(0.4), 0.16);
  test.inDelta(ease.easeQuadIn.ease(0.5), 0.25);
  test.inDelta(ease.easeQuadIn.ease(0.6), 0.36);
  test.inDelta(ease.easeQuadIn.ease(0.7), 0.49);
  test.inDelta(ease.easeQuadIn.ease(0.8), 0.64);
  test.inDelta(ease.easeQuadIn.ease(0.9), 0.81);
  test.inDelta(ease.easeQuadIn.ease(1.0), 1.00);
  test.end();
});

tape("easeQuadIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadIn.ease(".9"), ease.easeQuadIn.ease(0.9));
  test.strictEqual(ease.easeQuadIn.ease({valueOf: function() { return 0.9; }}), ease.easeQuadIn.ease(0.9));
  test.end();
});

tape("easeQuadOut.ease(t) returns the expected results", function(test) {
  var quadOut = generic.out(ease.easeQuadIn);
  test.inDelta(ease.easeQuadOut.ease(0.0), quadOut.ease(0.0));
  test.inDelta(ease.easeQuadOut.ease(0.1), quadOut.ease(0.1));
  test.inDelta(ease.easeQuadOut.ease(0.2), quadOut.ease(0.2));
  test.inDelta(ease.easeQuadOut.ease(0.3), quadOut.ease(0.3));
  test.inDelta(ease.easeQuadOut.ease(0.4), quadOut.ease(0.4));
  test.inDelta(ease.easeQuadOut.ease(0.5), quadOut.ease(0.5));
  test.inDelta(ease.easeQuadOut.ease(0.6), quadOut.ease(0.6));
  test.inDelta(ease.easeQuadOut.ease(0.7), quadOut.ease(0.7));
  test.inDelta(ease.easeQuadOut.ease(0.8), quadOut.ease(0.8));
  test.inDelta(ease.easeQuadOut.ease(0.9), quadOut.ease(0.9));
  test.inDelta(ease.easeQuadOut.ease(1.0), quadOut.ease(1.0));
  test.end();
});

tape("easeQuadOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadOut.ease(".9"), ease.easeQuadOut.ease(0.9));
  test.strictEqual(ease.easeQuadOut.ease({valueOf: function() { return 0.9; }}), ease.easeQuadOut.ease(0.9));
  test.end();
});

tape("easeQuadInOut.ease(t) returns the expected results", function(test) {
  var quadInOut = generic.inOut(ease.easeQuadIn);
  test.inDelta(ease.easeQuadInOut.ease(0.0), quadInOut.ease(0.0));
  test.inDelta(ease.easeQuadInOut.ease(0.1), quadInOut.ease(0.1));
  test.inDelta(ease.easeQuadInOut.ease(0.2), quadInOut.ease(0.2));
  test.inDelta(ease.easeQuadInOut.ease(0.3), quadInOut.ease(0.3));
  test.inDelta(ease.easeQuadInOut.ease(0.4), quadInOut.ease(0.4));
  test.inDelta(ease.easeQuadInOut.ease(0.5), quadInOut.ease(0.5));
  test.inDelta(ease.easeQuadInOut.ease(0.6), quadInOut.ease(0.6));
  test.inDelta(ease.easeQuadInOut.ease(0.7), quadInOut.ease(0.7));
  test.inDelta(ease.easeQuadInOut.ease(0.8), quadInOut.ease(0.8));
  test.inDelta(ease.easeQuadInOut.ease(0.9), quadInOut.ease(0.9));
  test.inDelta(ease.easeQuadInOut.ease(1.0), quadInOut.ease(1.0));
  test.end();
});

tape("easeQuadInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeQuadInOut.ease(".9"), ease.easeQuadInOut.ease(0.9));
  test.strictEqual(ease.easeQuadInOut.ease({valueOf: function() { return 0.9; }}), ease.easeQuadInOut.ease(0.9));
  test.end();
});
