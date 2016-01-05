var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("sinIn(t) returns the expected results", function(test) {
  test.inDelta(ease.sinIn(0.0), 0.000000);
  test.inDelta(ease.sinIn(0.1), 0.012312);
  test.inDelta(ease.sinIn(0.2), 0.048943);
  test.inDelta(ease.sinIn(0.3), 0.108993);
  test.inDelta(ease.sinIn(0.4), 0.190983);
  test.inDelta(ease.sinIn(0.5), 0.292893);
  test.inDelta(ease.sinIn(0.6), 0.412215);
  test.inDelta(ease.sinIn(0.7), 0.546010);
  test.inDelta(ease.sinIn(0.8), 0.690983);
  test.inDelta(ease.sinIn(0.9), 0.843566);
  test.inDelta(ease.sinIn(1.0), 1.000000);
  test.end();
});

tape("sinIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.sinIn(".9"), ease.sinIn(0.9));
  test.strictEqual(ease.sinIn({valueOf: function() { return 0.9; }}), ease.sinIn(0.9));
  test.end();
});

tape("sinOut(t) returns the expected results", function(test) {
  var sinOut = generic.out(ease.sinIn);
  test.inDelta(ease.sinOut(0.0), sinOut(0.0));
  test.inDelta(ease.sinOut(0.1), sinOut(0.1));
  test.inDelta(ease.sinOut(0.2), sinOut(0.2));
  test.inDelta(ease.sinOut(0.3), sinOut(0.3));
  test.inDelta(ease.sinOut(0.4), sinOut(0.4));
  test.inDelta(ease.sinOut(0.5), sinOut(0.5));
  test.inDelta(ease.sinOut(0.6), sinOut(0.6));
  test.inDelta(ease.sinOut(0.7), sinOut(0.7));
  test.inDelta(ease.sinOut(0.8), sinOut(0.8));
  test.inDelta(ease.sinOut(0.9), sinOut(0.9));
  test.inDelta(ease.sinOut(1.0), sinOut(1.0));
  test.end();
});

tape("sinOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.sinOut(".9"), ease.sinOut(0.9));
  test.strictEqual(ease.sinOut({valueOf: function() { return 0.9; }}), ease.sinOut(0.9));
  test.end();
});

tape("sinInOut(t) returns the expected results", function(test) {
  var sinInOut = generic.inOut(ease.sinIn);
  test.inDelta(ease.sinInOut(0.0), sinInOut(0.0));
  test.inDelta(ease.sinInOut(0.1), sinInOut(0.1));
  test.inDelta(ease.sinInOut(0.2), sinInOut(0.2));
  test.inDelta(ease.sinInOut(0.3), sinInOut(0.3));
  test.inDelta(ease.sinInOut(0.4), sinInOut(0.4));
  test.inDelta(ease.sinInOut(0.5), sinInOut(0.5));
  test.inDelta(ease.sinInOut(0.6), sinInOut(0.6));
  test.inDelta(ease.sinInOut(0.7), sinInOut(0.7));
  test.inDelta(ease.sinInOut(0.8), sinInOut(0.8));
  test.inDelta(ease.sinInOut(0.9), sinInOut(0.9));
  test.inDelta(ease.sinInOut(1.0), sinInOut(1.0));
  test.end();
});

tape("sinInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.sinInOut(".9"), ease.sinInOut(0.9));
  test.strictEqual(ease.sinInOut({valueOf: function() { return 0.9; }}), ease.sinInOut(0.9));
  test.end();
});
