var tape = require("tape"),
    ease = require("../").ease;

require("./inDelta");

tape('ease("bounce") returns the expected results', function(test) {
  var e = ease("bounce");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.011875);
  test.inDelta(e(0.2), 0.060000);
  test.inDelta(e(0.3), 0.069375);
  test.inDelta(e(0.4), 0.227500);
  test.inDelta(e(0.5), 0.234375);
  test.inDelta(e(0.6), 0.090000);
  test.inDelta(e(0.7), 0.319375);
  test.inDelta(e(0.8), 0.697500);
  test.inDelta(e(0.9), 0.924375);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("bounce-in") is an alias for ease("bounce")', function(test) {
  test.equal(ease("bounce-in"), ease("bounce"));
  test.end();
});

tape('ease("bounce-out") returns the expected results', function(test) {
  var e = ease("bounce-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.075625);
  test.inDelta(e(0.2), 0.302500);
  test.inDelta(e(0.3), 0.680625);
  test.inDelta(e(0.4), 0.910000);
  test.inDelta(e(0.5), 0.765625);
  test.inDelta(e(0.6), 0.772500);
  test.inDelta(e(0.7), 0.930625);
  test.inDelta(e(0.8), 0.940000);
  test.inDelta(e(0.9), 0.988125);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("bounce-in-out") returns the expected results', function(test) {
  var e = ease("bounce-in-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.030000);
  test.inDelta(e(0.2), 0.113750);
  test.inDelta(e(0.3), 0.045000);
  test.inDelta(e(0.4), 0.348750);
  test.inDelta(e(0.5), 0.500000);
  test.inDelta(e(0.6), 0.651250);
  test.inDelta(e(0.7), 0.955000);
  test.inDelta(e(0.8), 0.886250);
  test.inDelta(e(0.9), 0.970000);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
