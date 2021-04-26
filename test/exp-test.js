import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeExp is an alias for easeExpInOut", () => {
  assert.strictEqual(d3.easeExp, d3.easeExpInOut);
});

it("easeExpIn(t) returns the expected results", () => {
  assert.strictEqual(d3.easeExpIn(0.0), 0.000000);
  inDelta(d3.easeExpIn(0.1), 0.000978);
  inDelta(d3.easeExpIn(0.2), 0.002933);
  inDelta(d3.easeExpIn(0.3), 0.006843);
  inDelta(d3.easeExpIn(0.4), 0.014663);
  inDelta(d3.easeExpIn(0.5), 0.030303);
  inDelta(d3.easeExpIn(0.6), 0.061584);
  inDelta(d3.easeExpIn(0.7), 0.124145);
  inDelta(d3.easeExpIn(0.8), 0.249267);
  inDelta(d3.easeExpIn(0.9), 0.499511);
  assert.strictEqual(d3.easeExpIn(1.0), 1.000000);
});

it("easeExpIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeExpIn(".9"), d3.easeExpIn(0.9));
  assert.strictEqual(d3.easeExpIn({valueOf: function() { return 0.9; }}), d3.easeExpIn(0.9));
});

it("easeExpOut(t) returns the expected results", () => {
  var expOut = generic.out(d3.easeExpIn);
  inDelta(d3.easeExpOut(0.0), expOut(0.0));
  inDelta(d3.easeExpOut(0.1), expOut(0.1));
  inDelta(d3.easeExpOut(0.2), expOut(0.2));
  inDelta(d3.easeExpOut(0.3), expOut(0.3));
  inDelta(d3.easeExpOut(0.4), expOut(0.4));
  inDelta(d3.easeExpOut(0.5), expOut(0.5));
  inDelta(d3.easeExpOut(0.6), expOut(0.6));
  inDelta(d3.easeExpOut(0.7), expOut(0.7));
  inDelta(d3.easeExpOut(0.8), expOut(0.8));
  inDelta(d3.easeExpOut(0.9), expOut(0.9));
  inDelta(d3.easeExpOut(1.0), expOut(1.0));
});

it("easeExpOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeExpOut(".9"), d3.easeExpOut(0.9));
  assert.strictEqual(d3.easeExpOut({valueOf: function() { return 0.9; }}), d3.easeExpOut(0.9));
});

it("easeExpInOut(t) returns the expected results", () => {
  var expInOut = generic.inOut(d3.easeExpIn);
  assert.strictEqual(d3.easeExpInOut(0.0), expInOut(0.0));
  inDelta(d3.easeExpInOut(0.1), expInOut(0.1));
  inDelta(d3.easeExpInOut(0.2), expInOut(0.2));
  inDelta(d3.easeExpInOut(0.3), expInOut(0.3));
  inDelta(d3.easeExpInOut(0.4), expInOut(0.4));
  inDelta(d3.easeExpInOut(0.5), expInOut(0.5));
  inDelta(d3.easeExpInOut(0.6), expInOut(0.6));
  inDelta(d3.easeExpInOut(0.7), expInOut(0.7));
  inDelta(d3.easeExpInOut(0.8), expInOut(0.8));
  inDelta(d3.easeExpInOut(0.9), expInOut(0.9));
  assert.strictEqual(d3.easeExpInOut(1.0), expInOut(1.0));
});

it("easeExpInOut(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeExpInOut(".9"), d3.easeExpInOut(0.9));
  assert.strictEqual(d3.easeExpInOut({valueOf: function() { return 0.9; }}), d3.easeExpInOut(0.9));
});
