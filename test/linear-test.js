import assert from "assert";
import * as d3 from "../src/index.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeLinear(t) returns the expected results", () => {
  assert.equal(d3.easeLinear(0.0), 0.0);
  inDelta(d3.easeLinear(0.1), 0.1);
  inDelta(d3.easeLinear(0.2), 0.2);
  inDelta(d3.easeLinear(0.3), 0.3);
  inDelta(d3.easeLinear(0.4), 0.4);
  inDelta(d3.easeLinear(0.5), 0.5);
  inDelta(d3.easeLinear(0.6), 0.6);
  inDelta(d3.easeLinear(0.7), 0.7);
  inDelta(d3.easeLinear(0.8), 0.8);
  inDelta(d3.easeLinear(0.9), 0.9);
  assert.equal(d3.easeLinear(1.0), 1.0);
});

it("easeLinear(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeLinear(".9"), d3.easeLinear(0.9));
  assert.strictEqual(d3.easeLinear({valueOf: function() { return 0.9; }}), d3.easeLinear(0.9));
});
