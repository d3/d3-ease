var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("sin is an alias for sinIn", function(test) {
  test.equal(ease.sin, ease.sinIn);
  test.end();
});

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
  test.inDelta(ease.sinOut(0.0), 0.000000);
  test.inDelta(ease.sinOut(0.1), 0.156434);
  test.inDelta(ease.sinOut(0.2), 0.309017);
  test.inDelta(ease.sinOut(0.3), 0.453990);
  test.inDelta(ease.sinOut(0.4), 0.587785);
  test.inDelta(ease.sinOut(0.5), 0.707107);
  test.inDelta(ease.sinOut(0.6), 0.809017);
  test.inDelta(ease.sinOut(0.7), 0.891007);
  test.inDelta(ease.sinOut(0.8), 0.951057);
  test.inDelta(ease.sinOut(0.9), 0.987688);
  test.inDelta(ease.sinOut(1.0), 1.000000);
  test.end();
});

tape("sinOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.sinOut(".9"), ease.sinOut(0.9));
  test.strictEqual(ease.sinOut({valueOf: function() { return 0.9; }}), ease.sinOut(0.9));
  test.end();
});

tape("sinInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.sinInOut(0.0), 0.000000);
  test.inDelta(ease.sinInOut(0.1), 0.024472);
  test.inDelta(ease.sinInOut(0.2), 0.095492);
  test.inDelta(ease.sinInOut(0.3), 0.206107);
  test.inDelta(ease.sinInOut(0.4), 0.345492);
  test.inDelta(ease.sinInOut(0.5), 0.500000);
  test.inDelta(ease.sinInOut(0.6), 0.654508);
  test.inDelta(ease.sinInOut(0.7), 0.793893);
  test.inDelta(ease.sinInOut(0.8), 0.904508);
  test.inDelta(ease.sinInOut(0.9), 0.975528);
  test.inDelta(ease.sinInOut(1.0), 1.000000);
  test.end();
});

tape("sinInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.sinInOut(".9"), ease.sinInOut(0.9));
  test.strictEqual(ease.sinInOut({valueOf: function() { return 0.9; }}), ease.sinInOut(0.9));
  test.end();
});
