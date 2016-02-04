var tape = require("tape"),
    ease = require("../"),
    generic = require("./generic");

require("./inDelta");

tape("easePoly is an alias for easePolyInOut", function(test) {
  test.equal(ease.easePoly, ease.easePolyInOut);
  test.end();
});

tape("easePolyIn.ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easePolyIn.ease(0.0), 0.000);
  test.inDelta(ease.easePolyIn.ease(0.1), 0.001);
  test.inDelta(ease.easePolyIn.ease(0.2), 0.008);
  test.inDelta(ease.easePolyIn.ease(0.3), 0.027);
  test.inDelta(ease.easePolyIn.ease(0.4), 0.064);
  test.inDelta(ease.easePolyIn.ease(0.5), 0.125);
  test.inDelta(ease.easePolyIn.ease(0.6), 0.216);
  test.inDelta(ease.easePolyIn.ease(0.7), 0.343);
  test.inDelta(ease.easePolyIn.ease(0.8), 0.512);
  test.inDelta(ease.easePolyIn.ease(0.9), 0.729);
  test.inDelta(ease.easePolyIn.ease(1.0), 1.000);
  test.end();
});

tape("easePolyIn.ease(t) coerces t to a number", function(test) {
  test.strictEqual(ease.easePolyIn.ease(".9"), ease.easePolyIn.ease(0.9));
  test.strictEqual(ease.easePolyIn.ease({valueOf: function() { return 0.9; }}), ease.easePolyIn.ease(0.9));
  test.end();
});

tape("easePolyIn.ease(t) is the same as polyIn.exponent(3).ease(t)", function(test) {
  test.equal(ease.easePolyIn.ease(0.1), ease.easePolyIn.exponent(3).ease(0.1));
  test.equal(ease.easePolyIn.ease(0.2), ease.easePolyIn.exponent(3).ease(0.2));
  test.equal(ease.easePolyIn.ease(0.3), ease.easePolyIn.exponent(3).ease(0.3));
  test.end();
});

tape("easePolyIn.exponent(e).ease(t) coerces t and e to numbers", function(test) {
  test.equal(ease.easePolyIn.exponent("1.3").ease(".9"), ease.easePolyIn.exponent(1.3).ease(0.9));
  test.equal(ease.easePolyIn.exponent({valueOf: function() { return 1.3; }}).ease({valueOf: function() { return 0.9; }}), ease.easePolyIn.exponent(1.3).ease(0.9));
  test.end();
});

tape("easePolyIn.exponent(2.5).ease(t) returns the expected results", function(test) {
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.0), 0.000000);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.1), 0.003162);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.2), 0.017889);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.3), 0.049295);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.4), 0.101193);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.5), 0.176777);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.6), 0.278855);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.7), 0.409963);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.8), 0.572433);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(0.9), 0.768433);
  test.inDelta(ease.easePolyIn.exponent(2.5).ease(1.0), 1.000000);
  test.end();
});

tape("easePolyOut.exponent(e).ease(t) coerces t and e to numbers", function(test) {
  test.equal(ease.easePolyOut.exponent("1.3").ease(".9"), ease.easePolyOut.exponent(1.3).ease(0.9));
  test.equal(ease.easePolyOut.exponent({valueOf: function() { return 1.3; }}).ease({valueOf: function() { return 0.9; }}), ease.easePolyOut.exponent(1.3).ease(0.9));
  test.end();
});

tape("easePolyOut.ease(t) is the same as polyOut.exponent(3).ease(t)", function(test) {
  test.equal(ease.easePolyOut.ease(0.1), ease.easePolyOut.exponent(3).ease(0.1));
  test.equal(ease.easePolyOut.ease(0.2), ease.easePolyOut.exponent(3).ease(0.2));
  test.equal(ease.easePolyOut.ease(0.3), ease.easePolyOut.exponent(3).ease(0.3));
  test.end();
});

tape("easePolyOut.ease(t, null) is the same as polyOut.exponent(3).ease(t)", function(test) {
  test.equal(ease.easePolyOut.ease(0.1, null), ease.easePolyOut.exponent(3).ease(0.1));
  test.equal(ease.easePolyOut.ease(0.2, null), ease.easePolyOut.exponent(3).ease(0.2));
  test.equal(ease.easePolyOut.ease(0.3, null), ease.easePolyOut.exponent(3).ease(0.3));
  test.end();
});

tape("easePolyOut.ease(t, undefined) is the same as polyOut.exponent(3).ease(t)", function(test) {
  test.equal(ease.easePolyOut.ease(0.1, undefined), ease.easePolyOut.exponent(3).ease(0.1));
  test.equal(ease.easePolyOut.ease(0.2, undefined), ease.easePolyOut.exponent(3).ease(0.2));
  test.equal(ease.easePolyOut.ease(0.3, undefined), ease.easePolyOut.exponent(3).ease(0.3));
  test.end();
});

tape("easePolyOut.exponent(2.5).ease(t) returns the expected results", function(test) {
  var polyOut = generic.out(ease.easePolyIn.exponent(2.5));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.0), polyOut.ease(0.0));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.1), polyOut.ease(0.1));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.2), polyOut.ease(0.2));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.3), polyOut.ease(0.3));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.4), polyOut.ease(0.4));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.5), polyOut.ease(0.5));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.6), polyOut.ease(0.6));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.7), polyOut.ease(0.7));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.8), polyOut.ease(0.8));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(0.9), polyOut.ease(0.9));
  test.inDelta(ease.easePolyOut.exponent(2.5).ease(1.0), polyOut.ease(1.0));
  test.end();
});

tape("easePolyInOut.exponent(e).ease(t) coerces t and e to numbers", function(test) {
  test.equal(ease.easePolyInOut.exponent("1.3").ease(".9"), ease.easePolyInOut.exponent(1.3).ease(0.9));
  test.equal(ease.easePolyInOut.exponent({valueOf: function() { return 1.3; }}).ease({valueOf: function() { return 0.9; }}), ease.easePolyInOut.exponent(1.3).ease(0.9));
  test.end();
});

tape("easePolyInOut.ease(t) is the same as polyInOut.exponent(3).ease(t)", function(test) {
  test.equal(ease.easePolyInOut.ease(0.1), ease.easePolyInOut.exponent(3).ease(0.1));
  test.equal(ease.easePolyInOut.ease(0.2), ease.easePolyInOut.exponent(3).ease(0.2));
  test.equal(ease.easePolyInOut.ease(0.3), ease.easePolyInOut.exponent(3).ease(0.3));
  test.end();
});

tape("easePolyInOut.exponent(2.5).ease(t) returns the expected results", function(test) {
  var polyInOut = generic.inOut(ease.easePolyIn.exponent(2.5));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.0), polyInOut.ease(0.0));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.1), polyInOut.ease(0.1));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.2), polyInOut.ease(0.2));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.3), polyInOut.ease(0.3));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.4), polyInOut.ease(0.4));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.5), polyInOut.ease(0.5));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.6), polyInOut.ease(0.6));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.7), polyInOut.ease(0.7));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.8), polyInOut.ease(0.8));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(0.9), polyInOut.ease(0.9));
  test.inDelta(ease.easePolyInOut.exponent(2.5).ease(1.0), polyInOut.ease(1.0));
  test.end();
});
