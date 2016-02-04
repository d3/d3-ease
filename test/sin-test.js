var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeSin is an alias for easeSinInOut", function(test) {
  test.equal(ease.easeSin, ease.easeSinInOut);
  test.end();
});

tape("easeSinIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easeSinIn.ease(0.0), 0.000000);
  test.inDelta(ease.easeSinIn.ease(0.1), 0.012312);
  test.inDelta(ease.easeSinIn.ease(0.2), 0.048943);
  test.inDelta(ease.easeSinIn.ease(0.3), 0.108993);
  test.inDelta(ease.easeSinIn.ease(0.4), 0.190983);
  test.inDelta(ease.easeSinIn.ease(0.5), 0.292893);
  test.inDelta(ease.easeSinIn.ease(0.6), 0.412215);
  test.inDelta(ease.easeSinIn.ease(0.7), 0.546010);
  test.inDelta(ease.easeSinIn.ease(0.8), 0.690983);
  test.inDelta(ease.easeSinIn.ease(0.9), 0.843566);
  test.inDelta(ease.easeSinIn.ease(1.0), 1.000000);
  test.end();
});

tape("easeSinIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinIn.ease(".9"), ease.easeSinIn.ease(0.9));
  test.strictEqual(ease.easeSinIn.ease({valueOf: function() { return 0.9; }}), ease.easeSinIn.ease(0.9));
  test.end();
});

tape("easeSinOut.ease(t) returns the expected results", function(test) {
  var sinOut = generic.out(ease.easeSinIn);
  test.inDelta(ease.easeSinOut.ease(0.0), sinOut.ease(0.0));
  test.inDelta(ease.easeSinOut.ease(0.1), sinOut.ease(0.1));
  test.inDelta(ease.easeSinOut.ease(0.2), sinOut.ease(0.2));
  test.inDelta(ease.easeSinOut.ease(0.3), sinOut.ease(0.3));
  test.inDelta(ease.easeSinOut.ease(0.4), sinOut.ease(0.4));
  test.inDelta(ease.easeSinOut.ease(0.5), sinOut.ease(0.5));
  test.inDelta(ease.easeSinOut.ease(0.6), sinOut.ease(0.6));
  test.inDelta(ease.easeSinOut.ease(0.7), sinOut.ease(0.7));
  test.inDelta(ease.easeSinOut.ease(0.8), sinOut.ease(0.8));
  test.inDelta(ease.easeSinOut.ease(0.9), sinOut.ease(0.9));
  test.inDelta(ease.easeSinOut.ease(1.0), sinOut.ease(1.0));
  test.end();
});

tape("easeSinOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinOut.ease(".9"), ease.easeSinOut.ease(0.9));
  test.strictEqual(ease.easeSinOut.ease({valueOf: function() { return 0.9; }}), ease.easeSinOut.ease(0.9));
  test.end();
});

tape("easeSinInOut.ease(t) returns the expected results", function(test) {
  var sinInOut = generic.inOut(ease.easeSinIn);
  test.inDelta(ease.easeSinInOut.ease(0.0), sinInOut.ease(0.0));
  test.inDelta(ease.easeSinInOut.ease(0.1), sinInOut.ease(0.1));
  test.inDelta(ease.easeSinInOut.ease(0.2), sinInOut.ease(0.2));
  test.inDelta(ease.easeSinInOut.ease(0.3), sinInOut.ease(0.3));
  test.inDelta(ease.easeSinInOut.ease(0.4), sinInOut.ease(0.4));
  test.inDelta(ease.easeSinInOut.ease(0.5), sinInOut.ease(0.5));
  test.inDelta(ease.easeSinInOut.ease(0.6), sinInOut.ease(0.6));
  test.inDelta(ease.easeSinInOut.ease(0.7), sinInOut.ease(0.7));
  test.inDelta(ease.easeSinInOut.ease(0.8), sinInOut.ease(0.8));
  test.inDelta(ease.easeSinInOut.ease(0.9), sinInOut.ease(0.9));
  test.inDelta(ease.easeSinInOut.ease(1.0), sinInOut.ease(1.0));
  test.end();
});

tape("easeSinInOut.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easeSinInOut.ease(".9"), ease.easeSinInOut.ease(0.9));
  test.strictEqual(ease.easeSinInOut.ease({valueOf: function() { return 0.9; }}), ease.easeSinInOut.ease(0.9));
  test.end();
});
