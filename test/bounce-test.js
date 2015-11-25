var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("bounce is an alias for bounceIn", function(test) {
  test.equal(ease.bounce, ease.bounceIn);
  test.end();
});

tape("bounceIn(t) returns the expected results", function(test) {
  test.inDelta(ease.bounceIn(0.0), 0.000000);
  test.inDelta(ease.bounceIn(0.1), 0.011875);
  test.inDelta(ease.bounceIn(0.2), 0.060000);
  test.inDelta(ease.bounceIn(0.3), 0.069375);
  test.inDelta(ease.bounceIn(0.4), 0.227500);
  test.inDelta(ease.bounceIn(0.5), 0.234375);
  test.inDelta(ease.bounceIn(0.6), 0.090000);
  test.inDelta(ease.bounceIn(0.7), 0.319375);
  test.inDelta(ease.bounceIn(0.8), 0.697500);
  test.inDelta(ease.bounceIn(0.9), 0.924375);
  test.inDelta(ease.bounceIn(1.0), 1.000000);
  test.end();
});

tape("bounceIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceIn(".9"), ease.bounceIn(0.9));
  test.strictEqual(ease.bounceIn({valueOf: function() { return 0.9; }}), ease.bounceIn(0.9));
  test.end();
});

tape("bounceOut(t) returns the expected results", function(test) {
  test.inDelta(ease.bounceOut(0.0), 0.000000);
  test.inDelta(ease.bounceOut(0.1), 0.075625);
  test.inDelta(ease.bounceOut(0.2), 0.302500);
  test.inDelta(ease.bounceOut(0.3), 0.680625);
  test.inDelta(ease.bounceOut(0.4), 0.910000);
  test.inDelta(ease.bounceOut(0.5), 0.765625);
  test.inDelta(ease.bounceOut(0.6), 0.772500);
  test.inDelta(ease.bounceOut(0.7), 0.930625);
  test.inDelta(ease.bounceOut(0.8), 0.940000);
  test.inDelta(ease.bounceOut(0.9), 0.988125);
  test.inDelta(ease.bounceOut(1.0), 1.000000);
  test.end();
});

tape("bounceOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceOut(".9"), ease.bounceOut(0.9));
  test.strictEqual(ease.bounceOut({valueOf: function() { return 0.9; }}), ease.bounceOut(0.9));
  test.end();
});

tape("bounceInOut(t) returns the expected results", function(test) {
  test.inDelta(ease.bounceInOut(0.0), 0.000000);
  test.inDelta(ease.bounceInOut(0.1), 0.030000);
  test.inDelta(ease.bounceInOut(0.2), 0.113750);
  test.inDelta(ease.bounceInOut(0.3), 0.045000);
  test.inDelta(ease.bounceInOut(0.4), 0.348750);
  test.inDelta(ease.bounceInOut(0.5), 0.500000);
  test.inDelta(ease.bounceInOut(0.6), 0.651250);
  test.inDelta(ease.bounceInOut(0.7), 0.955000);
  test.inDelta(ease.bounceInOut(0.8), 0.886250);
  test.inDelta(ease.bounceInOut(0.9), 0.970000);
  test.inDelta(ease.bounceInOut(1.0), 1.000000);
  test.end();
});

tape("bounceInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.bounceInOut(".9"), ease.bounceInOut(0.9));
  test.strictEqual(ease.bounceInOut({valueOf: function() { return 0.9; }}), ease.bounceInOut(0.9));
  test.end();
});
