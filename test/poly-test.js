import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easePoly is an alias for easePolyInOut", () => {
  assert.equal(d3.easePoly, d3.easePolyInOut);
});

it("easePolyIn(t) returns the expected results", () => {
  assert.equal(d3.easePolyIn(0.0), 0.000);
  inDelta(d3.easePolyIn(0.1), 0.001);
  inDelta(d3.easePolyIn(0.2), 0.008);
  inDelta(d3.easePolyIn(0.3), 0.027);
  inDelta(d3.easePolyIn(0.4), 0.064);
  inDelta(d3.easePolyIn(0.5), 0.125);
  inDelta(d3.easePolyIn(0.6), 0.216);
  inDelta(d3.easePolyIn(0.7), 0.343);
  inDelta(d3.easePolyIn(0.8), 0.512);
  inDelta(d3.easePolyIn(0.9), 0.729);
  assert.equal(d3.easePolyIn(1.0), 1.000);
});

it("easePolyIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easePolyIn(".9"), d3.easePolyIn(0.9));
  assert.strictEqual(d3.easePolyIn({valueOf: function() { return 0.9; }}), d3.easePolyIn(0.9));
});

it("easePolyIn(t) is the same as polyIn.exponent(3)(t)", () => {
  assert.equal(d3.easePolyIn(0.1), d3.easePolyIn.exponent(3)(0.1));
  assert.equal(d3.easePolyIn(0.2), d3.easePolyIn.exponent(3)(0.2));
  assert.equal(d3.easePolyIn(0.3), d3.easePolyIn.exponent(3)(0.3));
});

it("easePolyIn.exponent(e)(t) coerces t and e to numbers", () => {
  assert.equal(d3.easePolyIn.exponent("1.3")(".9"), d3.easePolyIn.exponent(1.3)(0.9));
  assert.equal(d3.easePolyIn.exponent({valueOf: function() { return 1.3; }})({valueOf: function() { return 0.9; }}), d3.easePolyIn.exponent(1.3)(0.9));
});

it("easePolyIn.exponent(2.5)(t) returns the expected results", () => {
  assert.equal(d3.easePolyIn.exponent(2.5)(0.0), 0.000000);
  inDelta(d3.easePolyIn.exponent(2.5)(0.1), 0.003162);
  inDelta(d3.easePolyIn.exponent(2.5)(0.2), 0.017889);
  inDelta(d3.easePolyIn.exponent(2.5)(0.3), 0.049295);
  inDelta(d3.easePolyIn.exponent(2.5)(0.4), 0.101193);
  inDelta(d3.easePolyIn.exponent(2.5)(0.5), 0.176777);
  inDelta(d3.easePolyIn.exponent(2.5)(0.6), 0.278855);
  inDelta(d3.easePolyIn.exponent(2.5)(0.7), 0.409963);
  inDelta(d3.easePolyIn.exponent(2.5)(0.8), 0.572433);
  inDelta(d3.easePolyIn.exponent(2.5)(0.9), 0.768433);
  assert.equal(d3.easePolyIn.exponent(2.5)(1.0), 1.000000);
});

it("easePolyOut.exponent(e)(t) coerces t and e to numbers", () => {
  assert.equal(d3.easePolyOut.exponent("1.3")(".9"), d3.easePolyOut.exponent(1.3)(0.9));
  assert.equal(d3.easePolyOut.exponent({valueOf: function() { return 1.3; }})({valueOf: function() { return 0.9; }}), d3.easePolyOut.exponent(1.3)(0.9));
});

it("easePolyOut(t) is the same as polyOut.exponent(3)(t)", () => {
  assert.equal(d3.easePolyOut(0.1), d3.easePolyOut.exponent(3)(0.1));
  assert.equal(d3.easePolyOut(0.2), d3.easePolyOut.exponent(3)(0.2));
  assert.equal(d3.easePolyOut(0.3), d3.easePolyOut.exponent(3)(0.3));
});

it("easePolyOut(t, null) is the same as polyOut.exponent(3)(t)", () => {
  assert.equal(d3.easePolyOut(0.1, null), d3.easePolyOut.exponent(3)(0.1));
  assert.equal(d3.easePolyOut(0.2, null), d3.easePolyOut.exponent(3)(0.2));
  assert.equal(d3.easePolyOut(0.3, null), d3.easePolyOut.exponent(3)(0.3));
});

it("easePolyOut(t, undefined) is the same as polyOut.exponent(3)(t)", () => {
  assert.equal(d3.easePolyOut(0.1, undefined), d3.easePolyOut.exponent(3)(0.1));
  assert.equal(d3.easePolyOut(0.2, undefined), d3.easePolyOut.exponent(3)(0.2));
  assert.equal(d3.easePolyOut(0.3, undefined), d3.easePolyOut.exponent(3)(0.3));
});

it("easePolyOut.exponent(2.5)(t) returns the expected results", () => {
  var polyOut = generic.out(d3.easePolyIn.exponent(2.5));
  assert.equal(d3.easePolyOut.exponent(2.5)(0.0), polyOut(0.0));
  inDelta(d3.easePolyOut.exponent(2.5)(0.1), polyOut(0.1));
  inDelta(d3.easePolyOut.exponent(2.5)(0.2), polyOut(0.2));
  inDelta(d3.easePolyOut.exponent(2.5)(0.3), polyOut(0.3));
  inDelta(d3.easePolyOut.exponent(2.5)(0.4), polyOut(0.4));
  inDelta(d3.easePolyOut.exponent(2.5)(0.5), polyOut(0.5));
  inDelta(d3.easePolyOut.exponent(2.5)(0.6), polyOut(0.6));
  inDelta(d3.easePolyOut.exponent(2.5)(0.7), polyOut(0.7));
  inDelta(d3.easePolyOut.exponent(2.5)(0.8), polyOut(0.8));
  inDelta(d3.easePolyOut.exponent(2.5)(0.9), polyOut(0.9));
  assert.equal(d3.easePolyOut.exponent(2.5)(1.0), polyOut(1.0));
});

it("easePolyInOut.exponent(e)(t) coerces t and e to numbers", () => {
  assert.equal(d3.easePolyInOut.exponent("1.3")(".9"), d3.easePolyInOut.exponent(1.3)(0.9));
  assert.equal(d3.easePolyInOut.exponent({valueOf: function() { return 1.3; }})({valueOf: function() { return 0.9; }}), d3.easePolyInOut.exponent(1.3)(0.9));
});

it("easePolyInOut(t) is the same as polyInOut.exponent(3)(t)", () => {
  assert.equal(d3.easePolyInOut(0.1), d3.easePolyInOut.exponent(3)(0.1));
  assert.equal(d3.easePolyInOut(0.2), d3.easePolyInOut.exponent(3)(0.2));
  assert.equal(d3.easePolyInOut(0.3), d3.easePolyInOut.exponent(3)(0.3));
});

it("easePolyInOut.exponent(2.5)(t) returns the expected results", () => {
  var polyInOut = generic.inOut(d3.easePolyIn.exponent(2.5));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.0), polyInOut(0.0));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.1), polyInOut(0.1));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.2), polyInOut(0.2));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.3), polyInOut(0.3));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.4), polyInOut(0.4));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.5), polyInOut(0.5));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.6), polyInOut(0.6));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.7), polyInOut(0.7));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.8), polyInOut(0.8));
  inDelta(d3.easePolyInOut.exponent(2.5)(0.9), polyInOut(0.9));
  inDelta(d3.easePolyInOut.exponent(2.5)(1.0), polyInOut(1.0));
});
