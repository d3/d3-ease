var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape('ease("poly") is an alias for ease("cubic")', function(test) {
  test.equal(ease("poly"), ease("cubic"));
  test.end();
});

tape('ease("poly-in") is an alias for ease("cubic")', function(test) {
  test.equal(ease("poly-in"), ease("cubic"));
  test.end();
});

tape('ease("poly-out") is an alias for ease("cubic-out")', function(test) {
  test.equal(ease("poly-out"), ease("cubic-out"));
  test.end();
});

tape('ease("poly-in-out") is an alias for ease("cubic-in-out")', function(test) {
  test.equal(ease("poly-in-out"), ease("cubic-in-out"));
  test.end();
});

tape('ease("poly", 2.5) returns the expected results', function(test) {
  var e = ease("poly", 2.5);
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.003162);
  test.inDelta(e(0.2), 0.017889);
  test.inDelta(e(0.3), 0.049295);
  test.inDelta(e(0.4), 0.101193);
  test.inDelta(e(0.5), 0.176777);
  test.inDelta(e(0.6), 0.278855);
  test.inDelta(e(0.7), 0.409963);
  test.inDelta(e(0.8), 0.572433);
  test.inDelta(e(0.9), 0.768433);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("poly-in", 2.5) returns the expected results', function(test) {
  var e = ease("poly-in", 2.5);
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.003162);
  test.inDelta(e(0.2), 0.017889);
  test.inDelta(e(0.3), 0.049295);
  test.inDelta(e(0.4), 0.101193);
  test.inDelta(e(0.5), 0.176777);
  test.inDelta(e(0.6), 0.278855);
  test.inDelta(e(0.7), 0.409963);
  test.inDelta(e(0.8), 0.572433);
  test.inDelta(e(0.9), 0.768433);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("poly-out", 2.5) returns the expected results', function(test) {
  var e = ease("poly-out", 2.5);
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.231567);
  test.inDelta(e(0.2), 0.427567);
  test.inDelta(e(0.3), 0.590037);
  test.inDelta(e(0.4), 0.721145);
  test.inDelta(e(0.5), 0.823223);
  test.inDelta(e(0.6), 0.898807);
  test.inDelta(e(0.7), 0.950705);
  test.inDelta(e(0.8), 0.982111);
  test.inDelta(e(0.9), 0.996838);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});

tape('ease("poly-in-out", 2.5) returns the expected results', function(test) {
  var e = ease("poly-in-out", 2.5);
  test.inDelta(e(0.0), 0.000000);
  test.inDelta(e(0.1), 0.008944);
  test.inDelta(e(0.2), 0.050596);
  test.inDelta(e(0.3), 0.139427);
  test.inDelta(e(0.4), 0.286217);
  test.inDelta(e(0.5), 0.500000);
  test.inDelta(e(0.6), 0.713783);
  test.inDelta(e(0.7), 0.860573);
  test.inDelta(e(0.8), 0.949404);
  test.inDelta(e(0.9), 0.991056);
  test.inDelta(e(1.0), 1.000000);
  test.equal(e(".9"), e(0.9), "numeric coercion");
  test.end();
});
