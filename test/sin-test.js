import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeSin is an alias for easeSinInOut", () => {
  assert.strictEqual(d3.easeSin, d3.easeSinInOut);
});

it("easeSinIn(t) returns the expected results", () => {
  assert.strictEqual(d3.easeSinIn(0.0), 0.000000);
  inDelta(d3.easeSinIn(0.1), 0.012312);
  inDelta(d3.easeSinIn(0.2), 0.048943);
  inDelta(d3.easeSinIn(0.3), 0.108993);
  inDelta(d3.easeSinIn(0.4), 0.190983);
  inDelta(d3.easeSinIn(0.5), 0.292893);
  inDelta(d3.easeSinIn(0.6), 0.412215);
  inDelta(d3.easeSinIn(0.7), 0.546010);
  inDelta(d3.easeSinIn(0.8), 0.690983);
  inDelta(d3.easeSinIn(0.9), 0.843566);
  assert.strictEqual(d3.easeSinIn(1.0), 1.000000);
});

it("easeSinIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeSinIn(".9"), d3.easeSinIn(0.9));
  assert.strictEqual(d3.easeSinIn({valueOf: function() { return 0.9; }}), d3.easeSinIn(0.9));
});

it("easeSinOut(t) returns the expected results", () => {
  var sinOut = generic.out(d3.easeSinIn);
  inDelta(d3.easeSinOut(0.0), sinOut(0.0));
  inDelta(d3.easeSinOut(0.1), sinOut(0.1));
  inDelta(d3.easeSinOut(0.2), sinOut(0.2));
  inDelta(d3.easeSinOut(0.3), sinOut(0.3));
  inDelta(d3.easeSinOut(0.4), sinOut(0.4));
  inDelta(d3.easeSinOut(0.5), sinOut(0.5));
  inDelta(d3.easeSinOut(0.6), sinOut(0.6));
  inDelta(d3.easeSinOut(0.7), sinOut(0.7));
  inDelta(d3.easeSinOut(0.8), sinOut(0.8));
  inDelta(d3.easeSinOut(0.9), sinOut(0.9));
  inDelta(d3.easeSinOut(1.0), sinOut(1.0));
});

it("easeSinOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeSinOut(".9"), d3.easeSinOut(0.9));
  assert.strictEqual(d3.easeSinOut({valueOf: function() { return 0.9; }}), d3.easeSinOut(0.9));
});

it("easeSinInOut(t) returns the expected results", () => {
  var sinInOut = generic.inOut(d3.easeSinIn);
  inDelta(d3.easeSinInOut(0.0), sinInOut(0.0));
  inDelta(d3.easeSinInOut(0.1), sinInOut(0.1));
  inDelta(d3.easeSinInOut(0.2), sinInOut(0.2));
  inDelta(d3.easeSinInOut(0.3), sinInOut(0.3));
  inDelta(d3.easeSinInOut(0.4), sinInOut(0.4));
  inDelta(d3.easeSinInOut(0.5), sinInOut(0.5));
  inDelta(d3.easeSinInOut(0.6), sinInOut(0.6));
  inDelta(d3.easeSinInOut(0.7), sinInOut(0.7));
  inDelta(d3.easeSinInOut(0.8), sinInOut(0.8));
  inDelta(d3.easeSinInOut(0.9), sinInOut(0.9));
  inDelta(d3.easeSinInOut(1.0), sinInOut(1.0));
});

it("easeSinInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeSinInOut(".9"), d3.easeSinInOut(0.9));
  assert.strictEqual(d3.easeSinInOut({valueOf: function() { return 0.9; }}), d3.easeSinInOut(0.9));
});
