import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeCircle is an alias for easeCircleInOut", () => {
  assert.equal(d3.easeCircle, d3.easeCircleInOut);
});

it("easeCircleIn(t) returns the expected results", () => {
  assert.equal(d3.easeCircleIn(0.0), 0.000000);
  inDelta(d3.easeCircleIn(0.1), 0.005013);
  inDelta(d3.easeCircleIn(0.2), 0.020204);
  inDelta(d3.easeCircleIn(0.3), 0.046061);
  inDelta(d3.easeCircleIn(0.4), 0.083485);
  inDelta(d3.easeCircleIn(0.5), 0.133975);
  inDelta(d3.easeCircleIn(0.6), 0.200000);
  inDelta(d3.easeCircleIn(0.7), 0.285857);
  inDelta(d3.easeCircleIn(0.8), 0.400000);
  inDelta(d3.easeCircleIn(0.9), 0.564110);
  assert.equal(d3.easeCircleIn(1.0), 1.000000);
});

it("easeCircleIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCircleIn(".9"), d3.easeCircleIn(0.9));
  assert.strictEqual(d3.easeCircleIn({valueOf: function() { return 0.9; }}), d3.easeCircleIn(0.9));
});

it("easeCircleOut(t) returns the expected results", () => {
  var circleOut = generic.out(d3.easeCircleIn);
  assert.equal(d3.easeCircleOut(0.0), circleOut(0.0));
  inDelta(d3.easeCircleOut(0.1), circleOut(0.1));
  inDelta(d3.easeCircleOut(0.2), circleOut(0.2));
  inDelta(d3.easeCircleOut(0.3), circleOut(0.3));
  inDelta(d3.easeCircleOut(0.4), circleOut(0.4));
  inDelta(d3.easeCircleOut(0.5), circleOut(0.5));
  inDelta(d3.easeCircleOut(0.6), circleOut(0.6));
  inDelta(d3.easeCircleOut(0.7), circleOut(0.7));
  inDelta(d3.easeCircleOut(0.8), circleOut(0.8));
  inDelta(d3.easeCircleOut(0.9), circleOut(0.9));
  assert.equal(d3.easeCircleOut(1.0), circleOut(1.0));
});

it("easeCircleOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCircleOut(".9"), d3.easeCircleOut(0.9));
  assert.strictEqual(d3.easeCircleOut({valueOf: function() { return 0.9; }}), d3.easeCircleOut(0.9));
});

it("easeCircleInOut(t) returns the expected results", () => {
  var circleInOut = generic.inOut(d3.easeCircleIn);
  assert.equal(d3.easeCircleInOut(0.0), circleInOut(0.0));
  inDelta(d3.easeCircleInOut(0.1), circleInOut(0.1));
  inDelta(d3.easeCircleInOut(0.2), circleInOut(0.2));
  inDelta(d3.easeCircleInOut(0.3), circleInOut(0.3));
  inDelta(d3.easeCircleInOut(0.4), circleInOut(0.4));
  inDelta(d3.easeCircleInOut(0.5), circleInOut(0.5));
  inDelta(d3.easeCircleInOut(0.6), circleInOut(0.6));
  inDelta(d3.easeCircleInOut(0.7), circleInOut(0.7));
  inDelta(d3.easeCircleInOut(0.8), circleInOut(0.8));
  inDelta(d3.easeCircleInOut(0.9), circleInOut(0.9));
  assert.equal(d3.easeCircleInOut(1.0), circleInOut(1.0));
});

it("easeCircleInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeCircleInOut(".9"), d3.easeCircleInOut(0.9));
  assert.strictEqual(d3.easeCircleInOut({valueOf: function() { return 0.9; }}), d3.easeCircleInOut(0.9));
});
