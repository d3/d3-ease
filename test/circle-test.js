var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape('ease("circle") returns the expected results', function(test) {
  var e = ease("circle");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.005013);
  test.inDelta(e(0.2), 0.020204);
  test.inDelta(e(0.3), 0.046061);
  test.inDelta(e(0.4), 0.083485);
  test.inDelta(e(0.5), 0.133975);
  test.inDelta(e(0.6), 0.200000);
  test.inDelta(e(0.7), 0.285857);
  test.inDelta(e(0.8), 0.400000);
  test.inDelta(e(0.9), 0.564110);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("circle-in") is an alias for ease("circle")', function(test) {
  test.equal(ease("circle-in"), ease("circle"));
  test.end();
});

tape('ease("circle-out") returns the expected results', function(test) {
  var e = ease("circle-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.435890);
  test.inDelta(e(0.2), 0.600000);
  test.inDelta(e(0.3), 0.714143);
  test.inDelta(e(0.4), 0.800000);
  test.inDelta(e(0.5), 0.866025);
  test.inDelta(e(0.6), 0.916515);
  test.inDelta(e(0.7), 0.953939);
  test.inDelta(e(0.8), 0.979796);
  test.inDelta(e(0.9), 0.994987);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("circle-in-out") returns the expected results', function(test) {
  var e = ease("circle-in-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.010102);
  test.inDelta(e(0.2), 0.041742);
  test.inDelta(e(0.3), 0.100000);
  test.inDelta(e(0.4), 0.200000);
  test.inDelta(e(0.5), 0.500000);
  test.inDelta(e(0.6), 0.800000);
  test.inDelta(e(0.7), 0.900000);
  test.inDelta(e(0.8), 0.958258);
  test.inDelta(e(0.9), 0.989898);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
