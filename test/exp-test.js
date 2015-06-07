var tape = require("tape"),
    ease = require("../").ease;

require("./inDelta");

tape('ease("exp") returns the expected results', function(test) {
  var e = ease("exp");
  test.inDelta(e(0.0), 0.000976); // Note: not exactly zero.
  test.inDelta(e(0.1), 0.001953);
  test.inDelta(e(0.2), 0.003906);
  test.inDelta(e(0.3), 0.007813);
  test.inDelta(e(0.4), 0.015625);
  test.inDelta(e(0.5), 0.031250);
  test.inDelta(e(0.6), 0.062500);
  test.inDelta(e(0.7), 0.125000);
  test.inDelta(e(0.8), 0.250000);
  test.inDelta(e(0.9), 0.500000);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("exp-in") is an alias for ease("exp")', function(test) {
  test.equal(ease("exp-in"), ease("exp"));
  test.end();
});

tape('ease("exp-out") returns the expected results', function(test) {
  var e = ease("exp-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.500000);
  test.inDelta(e(0.2), 0.750000);
  test.inDelta(e(0.3), 0.875000);
  test.inDelta(e(0.4), 0.937500);
  test.inDelta(e(0.5), 0.968750);
  test.inDelta(e(0.6), 0.984375);
  test.inDelta(e(0.7), 0.992188);
  test.inDelta(e(0.8), 0.996094);
  test.inDelta(e(0.9), 0.998047);
  test.inDelta(e(1.0), 0.999023); // Note: not exactly one.
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("exp-in-out") returns the expected results', function(test) {
  var e = ease("exp-in-out");
  test.inDelta(e(0.0), 0.000488); // Note: not exactly zero.
  test.inDelta(e(0.1), 0.001953);
  test.inDelta(e(0.2), 0.007813);
  test.inDelta(e(0.3), 0.031250);
  test.inDelta(e(0.4), 0.125000);
  test.inDelta(e(0.5), 0.500000);
  test.inDelta(e(0.6), 0.875000);
  test.inDelta(e(0.7), 0.968750);
  test.inDelta(e(0.8), 0.992188);
  test.inDelta(e(0.9), 0.998047);
  test.inDelta(e(1.0), 0.999511); // Note: not exactly one.
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
