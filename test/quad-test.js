import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeQuad is an alias for easeQuadInOut", () => {
  assert.strictEqual(d3.easeQuad, d3.easeQuadInOut);
});

it("easeQuadIn(t) returns the expected results", () => {
  assert.strictEqual(d3.easeQuadIn(0.0), 0.00);
  inDelta(d3.easeQuadIn(0.1), 0.01);
  inDelta(d3.easeQuadIn(0.2), 0.04);
  inDelta(d3.easeQuadIn(0.3), 0.09);
  inDelta(d3.easeQuadIn(0.4), 0.16);
  inDelta(d3.easeQuadIn(0.5), 0.25);
  inDelta(d3.easeQuadIn(0.6), 0.36);
  inDelta(d3.easeQuadIn(0.7), 0.49);
  inDelta(d3.easeQuadIn(0.8), 0.64);
  inDelta(d3.easeQuadIn(0.9), 0.81);
  assert.strictEqual(d3.easeQuadIn(1.0), 1.00);
});

it("easeQuadIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeQuadIn(".9"), d3.easeQuadIn(0.9));
  assert.strictEqual(d3.easeQuadIn({valueOf: function() { return 0.9; }}), d3.easeQuadIn(0.9));
});

it("easeQuadOut(t) returns the expected results", () => {
  var quadOut = generic.out(d3.easeQuadIn);
  inDelta(d3.easeQuadOut(0.0), quadOut(0.0));
  inDelta(d3.easeQuadOut(0.1), quadOut(0.1));
  inDelta(d3.easeQuadOut(0.2), quadOut(0.2));
  inDelta(d3.easeQuadOut(0.3), quadOut(0.3));
  inDelta(d3.easeQuadOut(0.4), quadOut(0.4));
  inDelta(d3.easeQuadOut(0.5), quadOut(0.5));
  inDelta(d3.easeQuadOut(0.6), quadOut(0.6));
  inDelta(d3.easeQuadOut(0.7), quadOut(0.7));
  inDelta(d3.easeQuadOut(0.8), quadOut(0.8));
  inDelta(d3.easeQuadOut(0.9), quadOut(0.9));
  inDelta(d3.easeQuadOut(1.0), quadOut(1.0));
});

it("easeQuadOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeQuadOut(".9"), d3.easeQuadOut(0.9));
  assert.strictEqual(d3.easeQuadOut({valueOf: function() { return 0.9; }}), d3.easeQuadOut(0.9));
});

it("easeQuadInOut(t) returns the expected results", () => {
  var quadInOut = generic.inOut(d3.easeQuadIn);
  inDelta(d3.easeQuadInOut(0.0), quadInOut(0.0));
  inDelta(d3.easeQuadInOut(0.1), quadInOut(0.1));
  inDelta(d3.easeQuadInOut(0.2), quadInOut(0.2));
  inDelta(d3.easeQuadInOut(0.3), quadInOut(0.3));
  inDelta(d3.easeQuadInOut(0.4), quadInOut(0.4));
  inDelta(d3.easeQuadInOut(0.5), quadInOut(0.5));
  inDelta(d3.easeQuadInOut(0.6), quadInOut(0.6));
  inDelta(d3.easeQuadInOut(0.7), quadInOut(0.7));
  inDelta(d3.easeQuadInOut(0.8), quadInOut(0.8));
  inDelta(d3.easeQuadInOut(0.9), quadInOut(0.9));
  inDelta(d3.easeQuadInOut(1.0), quadInOut(1.0));
});

it("easeQuadInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeQuadInOut(".9"), d3.easeQuadInOut(0.9));
  assert.strictEqual(d3.easeQuadInOut({valueOf: function() { return 0.9; }}), d3.easeQuadInOut(0.9));
});
