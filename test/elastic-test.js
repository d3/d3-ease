var tape = require("tape"),
    ease = require("../");

require("./in-delta");

tape('ease("elastic") returns the expected results', function(test) {
  var e = ease("elastic");
  test.inDelta(e(0.0), -0.000488); // Note: not exactly zero.
  test.inDelta(e(0.1),  0.001953);
  test.inDelta(e(0.2), -0.001953);
  test.inDelta(e(0.3), -0.003906);
  test.inDelta(e(0.4),  0.015625);
  test.inDelta(e(0.5), -0.015625);
  test.inDelta(e(0.6), -0.031250);
  test.inDelta(e(0.7),  0.125000);
  test.inDelta(e(0.8), -0.125000);
  test.inDelta(e(0.9), -0.250000);
  test.inDelta(e(1.0),  1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("elastic-in") is an alias for ease("elastic")', function(test) {
  test.equal(ease("elastic-in"), ease("elastic"));
  test.end();
});

tape('ease("elastic-out") returns the expected results', function(test) {
  var e = ease("elastic-out");
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 1.250000);
  test.inDelta(e(0.2), 1.125000);
  test.inDelta(e(0.3), 0.875000);
  test.inDelta(e(0.4), 1.031250);
  test.inDelta(e(0.5), 1.015625);
  test.inDelta(e(0.6), 0.984375);
  test.inDelta(e(0.7), 1.003906);
  test.inDelta(e(0.8), 1.001953);
  test.inDelta(e(0.9), 0.998047);
  test.inDelta(e(1.0), 1.000488); // Note: not exactly one.
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("elastic-in-out") returns the expected results', function(test) {
  var e = ease("elastic-in-out");
  test.inDelta(e(0.0),  0.000084); // Note: not exactly zero.
  test.inDelta(e(0.1),  0.000339);
  test.inDelta(e(0.2), -0.003906);
  test.inDelta(e(0.3),  0.023939);
  test.inDelta(e(0.4), -0.117462);
  test.inDelta(e(0.5),  0.500000);
  test.inDelta(e(0.6),  1.117462);
  test.inDelta(e(0.7),  0.976061);
  test.inDelta(e(0.8),  1.003906);
  test.inDelta(e(0.9),  0.999661);
  test.inDelta(e(1.0),  0.999915); // Note: not exactly one.
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("elastic", a) is the same as ease("elastic") if a <= 1', function(test) {
  test.equal(ease("elastic", -1)(0.1), ease("elastic")(0.1));
  test.equal(ease("elastic", .4)(0.2), ease("elastic")(0.2));
  test.equal(ease("elastic", .8)(0.3), ease("elastic")(0.3));
  test.end();
});

tape('ease("elastic", 1.3) returns the expected results', function(test) {
  var e = ease("elastic", 1.3);
  test.inDelta(e(0.0),  0.000214); // Note: not exactly zero.
  test.inDelta(e(0.1),  0.001953);
  test.inDelta(e(0.2), -0.004763);
  test.inDelta(e(0.3),  0.001714);
  test.inDelta(e(0.4),  0.015625);
  test.inDelta(e(0.5), -0.038105);
  test.inDelta(e(0.6),  0.013711);
  test.inDelta(e(0.7),  0.125000);
  test.inDelta(e(0.8), -0.304844);
  test.inDelta(e(0.9),  0.109687);
  test.inDelta(e(1.0),  1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("elastic", 1.5, 1) returns the expected results', function(test) {
  var e = ease("elastic", 1.5, 1);
  test.inDelta(e(0.0),  0.000977); // Note: not exactly zero.
  test.inDelta(e(0.1),  0.000297);
  test.inDelta(e(0.2), -0.002946);
  test.inDelta(e(0.3), -0.010721);
  test.inDelta(e(0.4), -0.022909);
  test.inDelta(e(0.5), -0.031250);
  test.inDelta(e(0.6), -0.009491);
  test.inDelta(e(0.7),  0.094287);
  test.inDelta(e(0.8),  0.343083);
  test.inDelta(e(0.9),  0.733090);
  test.inDelta(e(1.0),  1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
