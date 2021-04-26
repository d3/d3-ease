import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeBounce is an alias for easeBounceOut", () => {
  assert.strictEqual(d3.easeBounce, d3.easeBounceOut);
});

it("easeBounceIn(t) returns the expected results", () => {
  assert.strictEqual(d3.easeBounceIn(0.0), 0.000000);
  inDelta(d3.easeBounceIn(0.1), 0.011875);
  inDelta(d3.easeBounceIn(0.2), 0.060000);
  inDelta(d3.easeBounceIn(0.3), 0.069375);
  inDelta(d3.easeBounceIn(0.4), 0.227500);
  inDelta(d3.easeBounceIn(0.5), 0.234375);
  inDelta(d3.easeBounceIn(0.6), 0.090000);
  inDelta(d3.easeBounceIn(0.7), 0.319375);
  inDelta(d3.easeBounceIn(0.8), 0.697500);
  inDelta(d3.easeBounceIn(0.9), 0.924375);
  assert.strictEqual(d3.easeBounceIn(1.0), 1.000000);
});

it("easeBounceIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBounceIn(".9"), d3.easeBounceIn(0.9));
  assert.strictEqual(d3.easeBounceIn({valueOf: function() { return 0.9; }}), d3.easeBounceIn(0.9));
});

it("easeBounceOut(t) returns the expected results", () => {
  var bounceOut = generic.out(d3.easeBounceIn);
  assert.strictEqual(d3.easeBounceOut(0.0), bounceOut(0.0));
  inDelta(d3.easeBounceOut(0.1), bounceOut(0.1));
  inDelta(d3.easeBounceOut(0.2), bounceOut(0.2));
  inDelta(d3.easeBounceOut(0.3), bounceOut(0.3));
  inDelta(d3.easeBounceOut(0.4), bounceOut(0.4));
  inDelta(d3.easeBounceOut(0.5), bounceOut(0.5));
  inDelta(d3.easeBounceOut(0.6), bounceOut(0.6));
  inDelta(d3.easeBounceOut(0.7), bounceOut(0.7));
  inDelta(d3.easeBounceOut(0.8), bounceOut(0.8));
  inDelta(d3.easeBounceOut(0.9), bounceOut(0.9));
  assert.strictEqual(d3.easeBounceOut(1.0), bounceOut(1.0));
});

it("easeBounceOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBounceOut(".9"), d3.easeBounceOut(0.9));
  assert.strictEqual(d3.easeBounceOut({valueOf: function() { return 0.9; }}), d3.easeBounceOut(0.9));
});

it("easeBounceInOut(t) returns the expected results", () => {
  var bounceInOut = generic.inOut(d3.easeBounceIn);
  assert.strictEqual(d3.easeBounceInOut(0.0), bounceInOut(0.0));
  inDelta(d3.easeBounceInOut(0.1), bounceInOut(0.1));
  inDelta(d3.easeBounceInOut(0.2), bounceInOut(0.2));
  inDelta(d3.easeBounceInOut(0.3), bounceInOut(0.3));
  inDelta(d3.easeBounceInOut(0.4), bounceInOut(0.4));
  inDelta(d3.easeBounceInOut(0.5), bounceInOut(0.5));
  inDelta(d3.easeBounceInOut(0.6), bounceInOut(0.6));
  inDelta(d3.easeBounceInOut(0.7), bounceInOut(0.7));
  inDelta(d3.easeBounceInOut(0.8), bounceInOut(0.8));
  inDelta(d3.easeBounceInOut(0.9), bounceInOut(0.9));
  assert.strictEqual(d3.easeBounceInOut(1.0), bounceInOut(1.0));
});

it("easeBounceInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeBounceInOut(".9"), d3.easeBounceInOut(0.9));
  assert.strictEqual(d3.easeBounceInOut({valueOf: function() { return 0.9; }}), d3.easeBounceInOut(0.9));
});
