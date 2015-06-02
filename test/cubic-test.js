var tape = require("tape"),
    ease = require("../");

require("./in-delta");

tape('ease("cubic") returns the expected results', function(test) {
  var e = ease("cubic");
  test.inDelta(e(0.0), 0.000);
  test.inDelta(e(0.1), 0.001);
  test.inDelta(e(0.2), 0.008);
  test.inDelta(e(0.3), 0.027);
  test.inDelta(e(0.4), 0.064);
  test.inDelta(e(0.5), 0.125);
  test.inDelta(e(0.6), 0.216);
  test.inDelta(e(0.7), 0.343);
  test.inDelta(e(0.8), 0.512);
  test.inDelta(e(0.9), 0.729);
  test.inDelta(e(1.0), 1.000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("cubic-in") is an alias for ease("cubic")', function(test) {
  test.equal(ease("cubic-in"), ease("cubic"));
  test.end();
});

tape('ease("cubic-out") returns the expected results', function(test) {
  var e = ease("cubic-out");
  test.inDelta(e(0.0), 0.000);
  test.inDelta(e(0.1), 0.271);
  test.inDelta(e(0.2), 0.488);
  test.inDelta(e(0.3), 0.657);
  test.inDelta(e(0.4), 0.784);
  test.inDelta(e(0.5), 0.875);
  test.inDelta(e(0.6), 0.936);
  test.inDelta(e(0.7), 0.973);
  test.inDelta(e(0.8), 0.992);
  test.inDelta(e(0.9), 0.999);
  test.inDelta(e(1.0), 1.000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("cubic-in-out") returns the expected results', function(test) {
  var e = ease("cubic-in-out");
  test.inDelta(e(0.0), 0.000);
  test.inDelta(e(0.1), 0.004);
  test.inDelta(e(0.2), 0.032);
  test.inDelta(e(0.3), 0.108);
  test.inDelta(e(0.4), 0.256);
  test.inDelta(e(0.5), 0.500);
  test.inDelta(e(0.6), 0.744);
  test.inDelta(e(0.7), 0.892);
  test.inDelta(e(0.8), 0.968);
  test.inDelta(e(0.9), 0.996);
  test.inDelta(e(1.0), 1.000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
