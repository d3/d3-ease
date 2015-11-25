var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("cubic is an alias for cubicIn", function(test) {
  test.equal(ease.cubic, ease.cubicIn);
  test.end();
});

tape("cubicIn(t) returns the expected results", function(test) {
  test.inDelta(ease.cubicIn(0.0), 0.000);
  test.inDelta(ease.cubicIn(0.1), 0.001);
  test.inDelta(ease.cubicIn(0.2), 0.008);
  test.inDelta(ease.cubicIn(0.3), 0.027);
  test.inDelta(ease.cubicIn(0.4), 0.064);
  test.inDelta(ease.cubicIn(0.5), 0.125);
  test.inDelta(ease.cubicIn(0.6), 0.216);
  test.inDelta(ease.cubicIn(0.7), 0.343);
  test.inDelta(ease.cubicIn(0.8), 0.512);
  test.inDelta(ease.cubicIn(0.9), 0.729);
  test.inDelta(ease.cubicIn(1.0), 1.000);
  test.end();
});

tape("cubicIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.cubicIn(".9"), ease.cubicIn(0.9));
  test.strictEqual(ease.cubicIn({valueOf: function() { return 0.9; }}), ease.cubicIn(0.9));
  test.end();
});

tape("cubicOut(t) returns the expected results", function(test) {
  var cubicOut = generic.out(ease.cubic);
  test.inDelta(ease.cubicOut(0.0), cubicOut(0.0));
  test.inDelta(ease.cubicOut(0.1), cubicOut(0.1));
  test.inDelta(ease.cubicOut(0.2), cubicOut(0.2));
  test.inDelta(ease.cubicOut(0.3), cubicOut(0.3));
  test.inDelta(ease.cubicOut(0.4), cubicOut(0.4));
  test.inDelta(ease.cubicOut(0.5), cubicOut(0.5));
  test.inDelta(ease.cubicOut(0.6), cubicOut(0.6));
  test.inDelta(ease.cubicOut(0.7), cubicOut(0.7));
  test.inDelta(ease.cubicOut(0.8), cubicOut(0.8));
  test.inDelta(ease.cubicOut(0.9), cubicOut(0.9));
  test.inDelta(ease.cubicOut(1.0), cubicOut(1.0));
  test.end();
});

tape("cubicOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.cubicOut(".9"), ease.cubicOut(0.9));
  test.strictEqual(ease.cubicOut({valueOf: function() { return 0.9; }}), ease.cubicOut(0.9));
  test.end();
});

tape("cubicInOut(t) returns the expected results", function(test) {
  var cubicInOut = generic.inOut(ease.cubic);
  test.inDelta(ease.cubicInOut(0.0), cubicInOut(0.0));
  test.inDelta(ease.cubicInOut(0.1), cubicInOut(0.1));
  test.inDelta(ease.cubicInOut(0.2), cubicInOut(0.2));
  test.inDelta(ease.cubicInOut(0.3), cubicInOut(0.3));
  test.inDelta(ease.cubicInOut(0.4), cubicInOut(0.4));
  test.inDelta(ease.cubicInOut(0.5), cubicInOut(0.5));
  test.inDelta(ease.cubicInOut(0.6), cubicInOut(0.6));
  test.inDelta(ease.cubicInOut(0.7), cubicInOut(0.7));
  test.inDelta(ease.cubicInOut(0.8), cubicInOut(0.8));
  test.inDelta(ease.cubicInOut(0.9), cubicInOut(0.9));
  test.inDelta(ease.cubicInOut(1.0), cubicInOut(1.0));
  test.end();
});

tape("cubicInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.cubicInOut(".9"), ease.cubicInOut(0.9));
  test.strictEqual(ease.cubicInOut({valueOf: function() { return 0.9; }}), ease.cubicInOut(0.9));
  test.end();
});
