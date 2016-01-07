var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easePolyIn(t) returns the expected results", function(test) {
  test.inDelta(ease.easePolyIn(0.0), 0.000);
  test.inDelta(ease.easePolyIn(0.1), 0.001);
  test.inDelta(ease.easePolyIn(0.2), 0.008);
  test.inDelta(ease.easePolyIn(0.3), 0.027);
  test.inDelta(ease.easePolyIn(0.4), 0.064);
  test.inDelta(ease.easePolyIn(0.5), 0.125);
  test.inDelta(ease.easePolyIn(0.6), 0.216);
  test.inDelta(ease.easePolyIn(0.7), 0.343);
  test.inDelta(ease.easePolyIn(0.8), 0.512);
  test.inDelta(ease.easePolyIn(0.9), 0.729);
  test.inDelta(ease.easePolyIn(1.0), 1.000);
  test.end();
});

tape("easePolyIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easePolyIn(".9"), ease.easePolyIn(0.9));
  test.strictEqual(ease.easePolyIn({valueOf: function() { return 0.9; }}), ease.easePolyIn(0.9));
  test.end();
});

tape("easePolyIn(t) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.easePolyIn(0.1), ease.easePolyIn(0.1, 3.0));
  test.equal(ease.easePolyIn(0.2), ease.easePolyIn(0.2, 3.0));
  test.equal(ease.easePolyIn(0.3), ease.easePolyIn(0.3, 3.0));
  test.end();
});

tape("easePolyIn(t, null) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.easePolyIn(0.1, null), ease.easePolyIn(0.1, 3.0));
  test.equal(ease.easePolyIn(0.2, null), ease.easePolyIn(0.2, 3.0));
  test.equal(ease.easePolyIn(0.3, null), ease.easePolyIn(0.3, 3.0));
  test.end();
});

tape("easePolyIn(t, undefined) is the same as polyIn(t, 3.0)", function(test) {
  test.equal(ease.easePolyIn(0.1, undefined), ease.easePolyIn(0.1, 3.0));
  test.equal(ease.easePolyIn(0.2, undefined), ease.easePolyIn(0.2, 3.0));
  test.equal(ease.easePolyIn(0.3, undefined), ease.easePolyIn(0.3, 3.0));
  test.end();
});

tape("easePolyIn(t, e) coerces t and e to numbers", function(test) {
  test.equal(ease.easePolyIn(".9", "1.3"), ease.easePolyIn(0.9, 1.3));
  test.equal(ease.easePolyIn({valueOf: function() { return 0.9; }}, {valueOf: function() { return 1.3; }}), ease.easePolyIn(0.9, 1.3));
  test.end();
});

tape("easePolyIn(t, 2.5) returns the expected results", function(test) {
  test.inDelta(ease.easePolyIn(0.0, 2.5), 0.000000);
  test.inDelta(ease.easePolyIn(0.1, 2.5), 0.003162);
  test.inDelta(ease.easePolyIn(0.2, 2.5), 0.017889);
  test.inDelta(ease.easePolyIn(0.3, 2.5), 0.049295);
  test.inDelta(ease.easePolyIn(0.4, 2.5), 0.101193);
  test.inDelta(ease.easePolyIn(0.5, 2.5), 0.176777);
  test.inDelta(ease.easePolyIn(0.6, 2.5), 0.278855);
  test.inDelta(ease.easePolyIn(0.7, 2.5), 0.409963);
  test.inDelta(ease.easePolyIn(0.8, 2.5), 0.572433);
  test.inDelta(ease.easePolyIn(0.9, 2.5), 0.768433);
  test.inDelta(ease.easePolyIn(1.0, 2.5), 1.000000);
  test.end();
});

tape("easePolyOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easePolyOut(".9"), ease.easePolyOut(0.9));
  test.strictEqual(ease.easePolyOut({valueOf: function() { return 0.9; }}), ease.easePolyOut(0.9));
  test.end();
});

tape("easePolyOut(t) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyOut(0.1), ease.easePolyOut(0.1, 3.0));
  test.equal(ease.easePolyOut(0.2), ease.easePolyOut(0.2, 3.0));
  test.equal(ease.easePolyOut(0.3), ease.easePolyOut(0.3, 3.0));
  test.end();
});

tape("easePolyOut(t, null) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyOut(0.1, null), ease.easePolyOut(0.1, 3.0));
  test.equal(ease.easePolyOut(0.2, null), ease.easePolyOut(0.2, 3.0));
  test.equal(ease.easePolyOut(0.3, null), ease.easePolyOut(0.3, 3.0));
  test.end();
});

tape("easePolyOut(t, undefined) is the same as polyOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyOut(0.1, undefined), ease.easePolyOut(0.1, 3.0));
  test.equal(ease.easePolyOut(0.2, undefined), ease.easePolyOut(0.2, 3.0));
  test.equal(ease.easePolyOut(0.3, undefined), ease.easePolyOut(0.3, 3.0));
  test.end();
});

tape("easePolyOut(t, 2.5) returns the expected results", function(test) {
  var polyOut = generic.out(ease.easeBind(ease.easePolyIn, 2.5));
  test.inDelta(ease.easePolyOut(0.0, 2.5), polyOut(0.0));
  test.inDelta(ease.easePolyOut(0.1, 2.5), polyOut(0.1));
  test.inDelta(ease.easePolyOut(0.2, 2.5), polyOut(0.2));
  test.inDelta(ease.easePolyOut(0.3, 2.5), polyOut(0.3));
  test.inDelta(ease.easePolyOut(0.4, 2.5), polyOut(0.4));
  test.inDelta(ease.easePolyOut(0.5, 2.5), polyOut(0.5));
  test.inDelta(ease.easePolyOut(0.6, 2.5), polyOut(0.6));
  test.inDelta(ease.easePolyOut(0.7, 2.5), polyOut(0.7));
  test.inDelta(ease.easePolyOut(0.8, 2.5), polyOut(0.8));
  test.inDelta(ease.easePolyOut(0.9, 2.5), polyOut(0.9));
  test.inDelta(ease.easePolyOut(1.0, 2.5), polyOut(1.0));
  test.end();
});

tape("easePolyInOut(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easePolyInOut(".9"), ease.easePolyInOut(0.9));
  test.strictEqual(ease.easePolyInOut({valueOf: function() { return 0.9; }}), ease.easePolyInOut(0.9));
  test.end();
});

tape("easePolyInOut(t) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyInOut(0.1), ease.easePolyInOut(0.1, 3.0));
  test.equal(ease.easePolyInOut(0.2), ease.easePolyInOut(0.2, 3.0));
  test.equal(ease.easePolyInOut(0.3), ease.easePolyInOut(0.3, 3.0));
  test.end();
});

tape("easePolyInOut(t, null) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyInOut(0.1, null), ease.easePolyInOut(0.1, 3.0));
  test.equal(ease.easePolyInOut(0.2, null), ease.easePolyInOut(0.2, 3.0));
  test.equal(ease.easePolyInOut(0.3, null), ease.easePolyInOut(0.3, 3.0));
  test.end();
});

tape("easePolyInOut(t, undefined) is the same as polyInOut(t, 3.0)", function(test) {
  test.equal(ease.easePolyInOut(0.1, undefined), ease.easePolyInOut(0.1, 3.0));
  test.equal(ease.easePolyInOut(0.2, undefined), ease.easePolyInOut(0.2, 3.0));
  test.equal(ease.easePolyInOut(0.3, undefined), ease.easePolyInOut(0.3, 3.0));
  test.end();
});

tape("easePolyInOut(t, 2.5) returns the expected results", function(test) {
  var polyInOut = generic.inOut(ease.easeBind(ease.easePolyIn, 2.5));
  test.inDelta(ease.easePolyInOut(0.0, 2.5), polyInOut(0.0));
  test.inDelta(ease.easePolyInOut(0.1, 2.5), polyInOut(0.1));
  test.inDelta(ease.easePolyInOut(0.2, 2.5), polyInOut(0.2));
  test.inDelta(ease.easePolyInOut(0.3, 2.5), polyInOut(0.3));
  test.inDelta(ease.easePolyInOut(0.4, 2.5), polyInOut(0.4));
  test.inDelta(ease.easePolyInOut(0.5, 2.5), polyInOut(0.5));
  test.inDelta(ease.easePolyInOut(0.6, 2.5), polyInOut(0.6));
  test.inDelta(ease.easePolyInOut(0.7, 2.5), polyInOut(0.7));
  test.inDelta(ease.easePolyInOut(0.8, 2.5), polyInOut(0.8));
  test.inDelta(ease.easePolyInOut(0.9, 2.5), polyInOut(0.9));
  test.inDelta(ease.easePolyInOut(1.0, 2.5), polyInOut(1.0));
  test.end();
});
