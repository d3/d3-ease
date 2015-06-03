var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape('ease("linear") returns the expected results', function(test) {
  var e = ease("linear");
  test.inDelta(e(0.0), 0.0);
  test.inDelta(e(0.1), 0.1);
  test.inDelta(e(0.2), 0.2);
  test.inDelta(e(0.3), 0.3);
  test.inDelta(e(0.4), 0.4);
  test.inDelta(e(0.5), 0.5);
  test.inDelta(e(0.6), 0.6);
  test.inDelta(e(0.7), 0.7);
  test.inDelta(e(0.8), 0.8);
  test.inDelta(e(0.9), 0.9);
  test.inDelta(e(1.0), 1.0);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("linear-in") is an alias for ease("linear")', function(test) {
  test.equal(ease("linear-in"), ease("linear"));
  test.end();
});

tape('ease("linear-out") is an alias for ease("linear")', function(test) {
  test.equal(ease("linear-out"), ease("linear"));
  test.end();
});

tape('ease("linear-in-out") is an alias for ease("linear")', function(test) {
  test.equal(ease("linear-in-out"), ease("linear"));
  test.end();
});
