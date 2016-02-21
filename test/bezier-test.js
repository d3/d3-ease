var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easeCubicBezier(0.42, 0.0, 0.58, 1.0)(t) returns the expected results", function(test) {
  var easeCubicBezier = ease.easeCubicBezier(0.42, 0.0, 0.58, 1.0);
  test.inDelta(easeCubicBezier(0.0),  0.000000);
  test.inDelta(easeCubicBezier(0.1),  0.019722);
  test.inDelta(easeCubicBezier(0.2),  0.081660);
  test.inDelta(easeCubicBezier(0.3),  0.187396);
  test.inDelta(easeCubicBezier(0.4),  0.331884);
  test.inDelta(easeCubicBezier(0.5),  0.500000);
  test.inDelta(easeCubicBezier(0.6),  0.668116);
  test.inDelta(easeCubicBezier(0.7),  0.812604);
  test.inDelta(easeCubicBezier(0.8),  0.918340);
  test.inDelta(easeCubicBezier(0.9),  0.980278);
  test.inDelta(easeCubicBezier(1.0),  1.000000);
  test.end();
});

tape("easeCubicBezier(0.33, 0.95, 0.52, -0.18)(t) returns the expected results", function(test) {
  var easeCubicBezier = ease.easeCubicBezier(0.33, 0.95, 0.52, -0.18);
  test.inDelta(easeCubicBezier(0.0),  0.000000);
  test.inDelta(easeCubicBezier(0.1),  0.235872);
  test.inDelta(easeCubicBezier(0.2),  0.369957);
  test.inDelta(easeCubicBezier(0.3),  0.419391);
  test.inDelta(easeCubicBezier(0.4),  0.418897);
  test.inDelta(easeCubicBezier(0.5),  0.410078);
  test.inDelta(easeCubicBezier(0.6),  0.427126);
  test.inDelta(easeCubicBezier(0.7),  0.490156);
  test.inDelta(easeCubicBezier(0.8),  0.607032);
  test.inDelta(easeCubicBezier(0.9),  0.778085);
  test.inDelta(easeCubicBezier(1.0),  1.000000);
  test.end();
});

tape("easeCubicBezier(0.0, 0.0, 1.0, 1.0)(t) returns the expected results", function(test) {
  var easeCubicBezier = ease.easeCubicBezier(0.0, 0.0, 1.0, 1.0);
  test.inDelta(easeCubicBezier(0.0), 0.0);
  test.inDelta(easeCubicBezier(0.1), 0.1);
  test.inDelta(easeCubicBezier(0.2), 0.2);
  test.inDelta(easeCubicBezier(0.3), 0.3);
  test.inDelta(easeCubicBezier(0.4), 0.4);
  test.inDelta(easeCubicBezier(0.5), 0.5);
  test.inDelta(easeCubicBezier(0.6), 0.6);
  test.inDelta(easeCubicBezier(0.7), 0.7);
  test.inDelta(easeCubicBezier(0.8), 0.8);
  test.inDelta(easeCubicBezier(0.9), 0.9);
  test.inDelta(easeCubicBezier(1.0), 1.0);
  test.end();
});

tape("easeCubicBezier(bx, by, cx, cy)(t) clips bx and cx to [0.0, 1.0] interval", function(test) {
  var easeCubicBezier  = ease.easeCubicBezier(5.0, 0.0, -1.0, 1.0),
      expected         = ease.easeCubicBezier(1.0, 0.0,  0.0, 1.0);

  test.inDelta(easeCubicBezier(0.0), expected(0.0));
  test.inDelta(easeCubicBezier(0.1), expected(0.1));
  test.inDelta(easeCubicBezier(0.2), expected(0.2));
  test.inDelta(easeCubicBezier(0.3), expected(0.3));
  test.inDelta(easeCubicBezier(0.4), expected(0.4));
  test.inDelta(easeCubicBezier(0.5), expected(0.5));
  test.inDelta(easeCubicBezier(0.6), expected(0.6));
  test.inDelta(easeCubicBezier(0.7), expected(0.7));
  test.inDelta(easeCubicBezier(0.8), expected(0.8));
  test.inDelta(easeCubicBezier(0.9), expected(0.9));
  test.inDelta(easeCubicBezier(1.0), expected(1.0));
  test.end();
});
