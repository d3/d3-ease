var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("polyIn(t) returns the expected results", function(test) {
  test.inDelta(ease.polyIn(0.0), 0.000);
  test.inDelta(ease.polyIn(0.1), 0.001);
  test.inDelta(ease.polyIn(0.2), 0.008);
  test.inDelta(ease.polyIn(0.3), 0.027);
  test.inDelta(ease.polyIn(0.4), 0.064);
  test.inDelta(ease.polyIn(0.5), 0.125);
  test.inDelta(ease.polyIn(0.6), 0.216);
  test.inDelta(ease.polyIn(0.7), 0.343);
  test.inDelta(ease.polyIn(0.8), 0.512);
  test.inDelta(ease.polyIn(0.9), 0.729);
  test.inDelta(ease.polyIn(1.0), 1.000);
  test.end();
});

tape("polyIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.polyIn(".9"), ease.polyIn(0.9));
  test.strictEqual(ease.polyIn({valueOf: function() { return 0.9; }}), ease.polyIn(0.9));
  test.end();
});

tape("polyIn(t) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.polyIn(0.1), ease.polyIn(0.1, 3.0));
  test.equal(ease.polyIn(0.2), ease.polyIn(0.2, 3.0));
  test.equal(ease.polyIn(0.3), ease.polyIn(0.3, 3.0));
  test.end();
});

tape("polyIn(t, null) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.polyIn(0.1, null), ease.polyIn(0.1, 3.0));
  test.equal(ease.polyIn(0.2, null), ease.polyIn(0.2, 3.0));
  test.equal(ease.polyIn(0.3, null), ease.polyIn(0.3, 3.0));
  test.end();
});

tape("polyIn(t, undefined) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.polyIn(0.1, undefined), ease.polyIn(0.1, 3.0));
  test.equal(ease.polyIn(0.2, undefined), ease.polyIn(0.2, 3.0));
  test.equal(ease.polyIn(0.3, undefined), ease.polyIn(0.3, 3.0));
  test.end();
});

tape("polyIn(t, e) coerces t and e to numbers", function(test) {
  test.equal(ease.polyIn(".9", "1.3"), ease.polyIn(0.9, 1.3));
  test.equal(ease.polyIn({valueOf: function() { return 0.9; }}, {valueOf: function() { return 1.3; }}), ease.polyIn(0.9, 1.3));
  test.end();
});

tape("polyIn(t, 2.5) returns the expected results", function(test) {
  test.inDelta(ease.polyIn(0.0, 2.5), 0.000000);
  test.inDelta(ease.polyIn(0.1, 2.5), 0.003162);
  test.inDelta(ease.polyIn(0.2, 2.5), 0.017889);
  test.inDelta(ease.polyIn(0.3, 2.5), 0.049295);
  test.inDelta(ease.polyIn(0.4, 2.5), 0.101193);
  test.inDelta(ease.polyIn(0.5, 2.5), 0.176777);
  test.inDelta(ease.polyIn(0.6, 2.5), 0.278855);
  test.inDelta(ease.polyIn(0.7, 2.5), 0.409963);
  test.inDelta(ease.polyIn(0.8, 2.5), 0.572433);
  test.inDelta(ease.polyIn(0.9, 2.5), 0.768433);
  test.inDelta(ease.polyIn(1.0, 2.5), 1.000000);
  test.end();
});

tape("polyOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.polyOut(".9"), ease.polyOut(0.9));
  test.strictEqual(ease.polyOut({valueOf: function() { return 0.9; }}), ease.polyOut(0.9));
  test.end();
});

tape("polyOut(t) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.polyOut(0.1), ease.polyOut(0.1, 3.0));
  test.equal(ease.polyOut(0.2), ease.polyOut(0.2, 3.0));
  test.equal(ease.polyOut(0.3), ease.polyOut(0.3, 3.0));
  test.end();
});

tape("polyOut(t, null) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.polyOut(0.1, null), ease.polyOut(0.1, 3.0));
  test.equal(ease.polyOut(0.2, null), ease.polyOut(0.2, 3.0));
  test.equal(ease.polyOut(0.3, null), ease.polyOut(0.3, 3.0));
  test.end();
});

tape("polyOut(t, undefined) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.polyOut(0.1, undefined), ease.polyOut(0.1, 3.0));
  test.equal(ease.polyOut(0.2, undefined), ease.polyOut(0.2, 3.0));
  test.equal(ease.polyOut(0.3, undefined), ease.polyOut(0.3, 3.0));
  test.end();
});

tape("polyOut(t, 2.5) returns the expected results", function(test) {
  var polyOut = generic.out(ease.bind(ease.polyIn, 2.5));
  test.inDelta(ease.polyOut(0.0, 2.5), polyOut(0.0));
  test.inDelta(ease.polyOut(0.1, 2.5), polyOut(0.1));
  test.inDelta(ease.polyOut(0.2, 2.5), polyOut(0.2));
  test.inDelta(ease.polyOut(0.3, 2.5), polyOut(0.3));
  test.inDelta(ease.polyOut(0.4, 2.5), polyOut(0.4));
  test.inDelta(ease.polyOut(0.5, 2.5), polyOut(0.5));
  test.inDelta(ease.polyOut(0.6, 2.5), polyOut(0.6));
  test.inDelta(ease.polyOut(0.7, 2.5), polyOut(0.7));
  test.inDelta(ease.polyOut(0.8, 2.5), polyOut(0.8));
  test.inDelta(ease.polyOut(0.9, 2.5), polyOut(0.9));
  test.inDelta(ease.polyOut(1.0, 2.5), polyOut(1.0));
  test.end();
});

tape("polyInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.polyInOut(".9"), ease.polyInOut(0.9));
  test.strictEqual(ease.polyInOut({valueOf: function() { return 0.9; }}), ease.polyInOut(0.9));
  test.end();
});

tape("polyInOut(t) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.polyInOut(0.1), ease.polyInOut(0.1, 3.0));
  test.equal(ease.polyInOut(0.2), ease.polyInOut(0.2, 3.0));
  test.equal(ease.polyInOut(0.3), ease.polyInOut(0.3, 3.0));
  test.end();
});

tape("polyInOut(t, null) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.polyInOut(0.1, null), ease.polyInOut(0.1, 3.0));
  test.equal(ease.polyInOut(0.2, null), ease.polyInOut(0.2, 3.0));
  test.equal(ease.polyInOut(0.3, null), ease.polyInOut(0.3, 3.0));
  test.end();
});

tape("polyInOut(t, undefined) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.polyInOut(0.1, undefined), ease.polyInOut(0.1, 3.0));
  test.equal(ease.polyInOut(0.2, undefined), ease.polyInOut(0.2, 3.0));
  test.equal(ease.polyInOut(0.3, undefined), ease.polyInOut(0.3, 3.0));
  test.end();
});

tape("polyInOut(t, 2.5) returns the expected results", function(test) {
  var polyInOut = generic.inOut(ease.bind(ease.polyIn, 2.5));
  test.inDelta(ease.polyInOut(0.0, 2.5), polyInOut(0.0));
  test.inDelta(ease.polyInOut(0.1, 2.5), polyInOut(0.1));
  test.inDelta(ease.polyInOut(0.2, 2.5), polyInOut(0.2));
  test.inDelta(ease.polyInOut(0.3, 2.5), polyInOut(0.3));
  test.inDelta(ease.polyInOut(0.4, 2.5), polyInOut(0.4));
  test.inDelta(ease.polyInOut(0.5, 2.5), polyInOut(0.5));
  test.inDelta(ease.polyInOut(0.6, 2.5), polyInOut(0.6));
  test.inDelta(ease.polyInOut(0.7, 2.5), polyInOut(0.7));
  test.inDelta(ease.polyInOut(0.8, 2.5), polyInOut(0.8));
  test.inDelta(ease.polyInOut(0.9, 2.5), polyInOut(0.9));
  test.inDelta(ease.polyInOut(1.0, 2.5), polyInOut(1.0));
  test.end();
});
