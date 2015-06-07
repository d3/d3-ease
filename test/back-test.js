var tape = require("tape"),
    ease = require("../").ease;

require("./inDelta");

tape('ease("back") returns the expected results', function(test) {
  var e = ease("back");
  test.inDelta(e(0.0),  0.000000);
  test.inDelta(e(0.1), -0.014314);
  test.inDelta(e(0.2), -0.046451);
  test.inDelta(e(0.3), -0.080200);
  test.inDelta(e(0.4), -0.099352);
  test.inDelta(e(0.5), -0.087698);
  test.inDelta(e(0.6), -0.029028);
  test.inDelta(e(0.7), +0.092868);
  test.inDelta(e(0.8), +0.294198);
  test.inDelta(e(0.9), +0.591172);
  test.inDelta(e(1.0), +1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("back-in") is an alias for ease("back")', function(test) {
  test.equal(ease("back-in"), ease("back"));
  test.end();
});

tape('ease("back-out") returns the expected results', function(test) {
  var e = ease("back-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.408828);
  test.inDelta(e(0.2), 0.705802);
  test.inDelta(e(0.3), 0.907132);
  test.inDelta(e(0.4), 1.029028);
  test.inDelta(e(0.5), 1.087697);
  test.inDelta(e(0.6), 1.099352);
  test.inDelta(e(0.7), 1.080200);
  test.inDelta(e(0.8), 1.046451);
  test.inDelta(e(0.9), 1.014314);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("back-in-out") returns the expected results', function(test) {
  var e = ease("back-in-out");
  test.inDelta(e(0.0),  0.000000);
  test.inDelta(e(0.1), -0.037519);
  test.inDelta(e(0.2), -0.092556);
  test.inDelta(e(0.3), -0.078833);
  test.inDelta(e(0.4),  0.089926);
  test.inDelta(e(0.5),  0.500000);
  test.inDelta(e(0.6),  0.910074);
  test.inDelta(e(0.7),  1.078833);
  test.inDelta(e(0.8),  1.092556);
  test.inDelta(e(0.9),  1.037519);
  test.inDelta(e(1.0),  1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
