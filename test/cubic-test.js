import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeCubic is an alias for easeCubicInOut", () => {
  assert.equal(d3.easeCubic, d3.easeCubicInOut);
});

it("easeCubicIn(t) returns the expected results", () => {
  assert.equal(d3.easeCubicIn(0.0), 0.000);
  inDelta(d3.easeCubicIn(0.1), 0.001);
  inDelta(d3.easeCubicIn(0.2), 0.008);
  inDelta(d3.easeCubicIn(0.3), 0.027);
  inDelta(d3.easeCubicIn(0.4), 0.064);
  inDelta(d3.easeCubicIn(0.5), 0.125);
  inDelta(d3.easeCubicIn(0.6), 0.216);
  inDelta(d3.easeCubicIn(0.7), 0.343);
  inDelta(d3.easeCubicIn(0.8), 0.512);
  inDelta(d3.easeCubicIn(0.9), 0.729);
  assert.equal(d3.easeCubicIn(1.0), 1.000);
});

it("easeCubicIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCubicIn(".9"), d3.easeCubicIn(0.9));
  assert.strictEqual(d3.easeCubicIn({valueOf: function() { return 0.9; }}), d3.easeCubicIn(0.9));
});

it("easeCubicOut(t) returns the expected results", () => {
  var cubicOut = generic.out(d3.easeCubicIn);
  assert.equal(d3.easeCubicOut(0.0), cubicOut(0.0));
  inDelta(d3.easeCubicOut(0.1), cubicOut(0.1));
  inDelta(d3.easeCubicOut(0.2), cubicOut(0.2));
  inDelta(d3.easeCubicOut(0.3), cubicOut(0.3));
  inDelta(d3.easeCubicOut(0.4), cubicOut(0.4));
  inDelta(d3.easeCubicOut(0.5), cubicOut(0.5));
  inDelta(d3.easeCubicOut(0.6), cubicOut(0.6));
  inDelta(d3.easeCubicOut(0.7), cubicOut(0.7));
  inDelta(d3.easeCubicOut(0.8), cubicOut(0.8));
  inDelta(d3.easeCubicOut(0.9), cubicOut(0.9));
  assert.equal(d3.easeCubicOut(1.0), cubicOut(1.0));
});

it("easeCubicOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCubicOut(".9"), d3.easeCubicOut(0.9));
  assert.strictEqual(d3.easeCubicOut({valueOf: function() { return 0.9; }}), d3.easeCubicOut(0.9));
});

it("easeCubicInOut(t) returns the expected results", () => {
  var cubicInOut = generic.inOut(d3.easeCubicIn);
  assert.equal(d3.easeCubicInOut(0.0), cubicInOut(0.0));
  inDelta(d3.easeCubicInOut(0.1), cubicInOut(0.1));
  inDelta(d3.easeCubicInOut(0.2), cubicInOut(0.2));
  inDelta(d3.easeCubicInOut(0.3), cubicInOut(0.3));
  inDelta(d3.easeCubicInOut(0.4), cubicInOut(0.4));
  inDelta(d3.easeCubicInOut(0.5), cubicInOut(0.5));
  inDelta(d3.easeCubicInOut(0.6), cubicInOut(0.6));
  inDelta(d3.easeCubicInOut(0.7), cubicInOut(0.7));
  inDelta(d3.easeCubicInOut(0.8), cubicInOut(0.8));
  inDelta(d3.easeCubicInOut(0.9), cubicInOut(0.9));
  assert.equal(d3.easeCubicInOut(1.0), cubicInOut(1.0));
});

it("easeCubicInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCubicInOut(".9"), d3.easeCubicInOut(0.9));
  assert.strictEqual(d3.easeCubicInOut({valueOf: function() { return 0.9; }}), d3.easeCubicInOut(0.9));
});
