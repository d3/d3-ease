var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape('ease("quad") returns the expected results', function(test) {
  var e = ease("quad");
  test.inDelta(e(0.0), 0.00);
  test.inDelta(e(0.1), 0.01);
  test.inDelta(e(0.2), 0.04);
  test.inDelta(e(0.3), 0.09);
  test.inDelta(e(0.4), 0.16);
  test.inDelta(e(0.5), 0.25);
  test.inDelta(e(0.6), 0.36);
  test.inDelta(e(0.7), 0.49);
  test.inDelta(e(0.8), 0.64);
  test.inDelta(e(0.9), 0.81);
  test.inDelta(e(1.0), 1.00);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("quad-in") is an alias for ease("quad")', function(test) {
  test.equal(ease("quad-in"), ease("quad"));
  test.end();
});

tape('ease("quad-out") returns the expected results', function(test) {
  var e = ease("quad-out");
  test.inDelta(e(0.0), 0.00);
  test.inDelta(e(0.1), 0.19);
  test.inDelta(e(0.2), 0.36);
  test.inDelta(e(0.3), 0.51);
  test.inDelta(e(0.4), 0.64);
  test.inDelta(e(0.5), 0.75);
  test.inDelta(e(0.6), 0.84);
  test.inDelta(e(0.7), 0.91);
  test.inDelta(e(0.8), 0.96);
  test.inDelta(e(0.9), 0.99);
  test.inDelta(e(1.0), 1.00);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("quad-in-out") returns the expected results', function(test) {
  var e = ease("quad-in-out");
  test.inDelta(e(0.0), 0.00);
  test.inDelta(e(0.1), 0.02);
  test.inDelta(e(0.2), 0.08);
  test.inDelta(e(0.3), 0.18);
  test.inDelta(e(0.4), 0.32);
  test.inDelta(e(0.5), 0.50);
  test.inDelta(e(0.6), 0.68);
  test.inDelta(e(0.7), 0.82);
  test.inDelta(e(0.8), 0.92);
  test.inDelta(e(0.9), 0.98);
  test.inDelta(e(1.0), 1.00);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
