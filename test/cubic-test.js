var tape = require("tape"),
    ease = require("../");

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
  test.inDelta(ease.cubicOut(0.0), 0.000);
  test.inDelta(ease.cubicOut(0.1), 0.271);
  test.inDelta(ease.cubicOut(0.2), 0.488);
  test.inDelta(ease.cubicOut(0.3), 0.657);
  test.inDelta(ease.cubicOut(0.4), 0.784);
  test.inDelta(ease.cubicOut(0.5), 0.875);
  test.inDelta(ease.cubicOut(0.6), 0.936);
  test.inDelta(ease.cubicOut(0.7), 0.973);
  test.inDelta(ease.cubicOut(0.8), 0.992);
  test.inDelta(ease.cubicOut(0.9), 0.999);
  test.inDelta(ease.cubicOut(1.0), 1.000);
  test.end();
});

tape("cubicOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.cubicOut(".9"), ease.cubicOut(0.9));
  test.strictEqual(ease.cubicOut({valueOf: function() { return 0.9; }}), ease.cubicOut(0.9));
  test.end();
});

tape("cubicInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.cubicInOut(0.0), 0.000);
  test.inDelta(ease.cubicInOut(0.1), 0.004);
  test.inDelta(ease.cubicInOut(0.2), 0.032);
  test.inDelta(ease.cubicInOut(0.3), 0.108);
  test.inDelta(ease.cubicInOut(0.4), 0.256);
  test.inDelta(ease.cubicInOut(0.5), 0.500);
  test.inDelta(ease.cubicInOut(0.6), 0.744);
  test.inDelta(ease.cubicInOut(0.7), 0.892);
  test.inDelta(ease.cubicInOut(0.8), 0.968);
  test.inDelta(ease.cubicInOut(0.9), 0.996);
  test.inDelta(ease.cubicInOut(1.0), 1.000);
  test.end();
});

tape("cubicInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.cubicInOut(".9"), ease.cubicInOut(0.9));
  test.strictEqual(ease.cubicInOut({valueOf: function() { return 0.9; }}), ease.cubicInOut(0.9));
  test.end();
});
