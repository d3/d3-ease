var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape('ease("sin") returns the expected results', function(test) {
  var e = ease("sin");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.012312);
  test.inDelta(e(0.2), 0.048943);
  test.inDelta(e(0.3), 0.108993);
  test.inDelta(e(0.4), 0.190983);
  test.inDelta(e(0.5), 0.292893);
  test.inDelta(e(0.6), 0.412215);
  test.inDelta(e(0.7), 0.546010);
  test.inDelta(e(0.8), 0.690983);
  test.inDelta(e(0.9), 0.843566);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("sin-in") is an alias for ease("sin")', function(test) {
  test.equal(ease("sin-in"), ease("sin"));
  test.end();
});

tape('ease("sin-out") returns the expected results', function(test) {
  var e = ease("sin-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.156434);
  test.inDelta(e(0.2), 0.309017);
  test.inDelta(e(0.3), 0.453990);
  test.inDelta(e(0.4), 0.587785);
  test.inDelta(e(0.5), 0.707107);
  test.inDelta(e(0.6), 0.809017);
  test.inDelta(e(0.7), 0.891007);
  test.inDelta(e(0.8), 0.951057);
  test.inDelta(e(0.9), 0.987688);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("sin-in-out") returns the expected results', function(test) {
  var e = ease("sin-in-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.024472);
  test.inDelta(e(0.2), 0.095492);
  test.inDelta(e(0.3), 0.206107);
  test.inDelta(e(0.4), 0.345492);
  test.inDelta(e(0.5), 0.500000);
  test.inDelta(e(0.6), 0.654508);
  test.inDelta(e(0.7), 0.793893);
  test.inDelta(e(0.8), 0.904508);
  test.inDelta(e(0.9), 0.975528);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
