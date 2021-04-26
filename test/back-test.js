import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeBack is an alias for easeBackInOut", () => {
  assert.equal(d3.easeBack, d3.easeBackInOut);
});

it("easeBackIn(t) returns the expected results", () => {
  assert.equal(d3.easeBackIn(0.0),  0.000000);
  inDelta(d3.easeBackIn(0.1), -0.014314);
  inDelta(d3.easeBackIn(0.2), -0.046451);
  inDelta(d3.easeBackIn(0.3), -0.080200);
  inDelta(d3.easeBackIn(0.4), -0.099352);
  inDelta(d3.easeBackIn(0.5), -0.087698);
  inDelta(d3.easeBackIn(0.6), -0.029028);
  inDelta(d3.easeBackIn(0.7), +0.092868);
  inDelta(d3.easeBackIn(0.8), +0.294198);
  inDelta(d3.easeBackIn(0.9), +0.591172);
  assert.equal(d3.easeBackIn(1.0), +1.000000);
});

it("easeBackIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBackIn(".9"), d3.easeBackIn(0.9));
  assert.strictEqual(d3.easeBackIn({valueOf: function() { return 0.9; }}), d3.easeBackIn(0.9));
});

it("easeBackOut(t) returns the expected results", () => {
  var backOut = generic.out(d3.easeBackIn);
  assert.equal(d3.easeBackOut(0.0), backOut(0.0));
  inDelta(d3.easeBackOut(0.1), backOut(0.1));
  inDelta(d3.easeBackOut(0.2), backOut(0.2));
  inDelta(d3.easeBackOut(0.3), backOut(0.3));
  inDelta(d3.easeBackOut(0.4), backOut(0.4));
  inDelta(d3.easeBackOut(0.5), backOut(0.5));
  inDelta(d3.easeBackOut(0.6), backOut(0.6));
  inDelta(d3.easeBackOut(0.7), backOut(0.7));
  inDelta(d3.easeBackOut(0.8), backOut(0.8));
  inDelta(d3.easeBackOut(0.9), backOut(0.9));
  assert.equal(d3.easeBackOut(1.0), backOut(1.0));
});

it("easeBackOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBackOut(".9"), d3.easeBackOut(0.9));
  assert.strictEqual(d3.easeBackOut({valueOf: function() { return 0.9; }}), d3.easeBackOut(0.9));
});

it("easeBackInOut(t) returns the expected results", () => {
  var backInOut = generic.inOut(d3.easeBackIn);
  assert.equal(d3.easeBackInOut(0.0), backInOut(0.0));
  inDelta(d3.easeBackInOut(0.1), backInOut(0.1));
  inDelta(d3.easeBackInOut(0.2), backInOut(0.2));
  inDelta(d3.easeBackInOut(0.3), backInOut(0.3));
  inDelta(d3.easeBackInOut(0.4), backInOut(0.4));
  inDelta(d3.easeBackInOut(0.5), backInOut(0.5));
  inDelta(d3.easeBackInOut(0.6), backInOut(0.6));
  inDelta(d3.easeBackInOut(0.7), backInOut(0.7));
  inDelta(d3.easeBackInOut(0.8), backInOut(0.8));
  inDelta(d3.easeBackInOut(0.9), backInOut(0.9));
  assert.equal(d3.easeBackInOut(1.0), backInOut(1.0));
});

it("easeBackInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBackInOut(".9"), d3.easeBackInOut(0.9));
  assert.strictEqual(d3.easeBackInOut({valueOf: function() { return 0.9; }}), d3.easeBackInOut(0.9));
});
