import assert from "assert";
import * as d3 from "../src/index.js";
import * as generic from "./generic.js";

import _inDelta from "./inDelta.js";
const inDelta = _inDelta(assert);

it("easeElastic is an alias for easeElasticOut", () => {
  assert.strictEqual(d3.easeElastic, d3.easeElasticOut);
});

it("easeElasticIn(t) returns the expected results", () => {
  assert.strictEqual(Math.abs(d3.easeElasticIn(0.0)), 0.000000);
  inDelta(d3.easeElasticIn(0.1),  0.000978);
  inDelta(d3.easeElasticIn(0.2), -0.001466);
  inDelta(d3.easeElasticIn(0.3), -0.003421);
  inDelta(d3.easeElasticIn(0.4),  0.014663);
  inDelta(d3.easeElasticIn(0.5), -0.015152);
  inDelta(d3.easeElasticIn(0.6), -0.030792);
  inDelta(d3.easeElasticIn(0.7),  0.124145);
  inDelta(d3.easeElasticIn(0.8), -0.124633);
  inDelta(d3.easeElasticIn(0.9), -0.249756);
  assert.strictEqual(d3.easeElasticIn(1.0),  1.000000);
});

it("easeElasticIn(t) coerces t to a number", () => {
  assert.strictEqual(d3.easeElasticIn(".9"), d3.easeElasticIn(0.9));
  assert.strictEqual(d3.easeElasticIn({valueOf: function() { return 0.9; }}), d3.easeElasticIn(0.9));
});

it("easeElasticIn(t) is the same as elasticIn.amplitude(1).period(0.3)(t)", () => {
  assert.strictEqual(d3.easeElasticIn(0.1), d3.easeElasticIn.amplitude(1).period(0.3)(0.1));
  assert.strictEqual(d3.easeElasticIn(0.2), d3.easeElasticIn.amplitude(1).period(0.3)(0.2));
  assert.strictEqual(d3.easeElasticIn(0.3), d3.easeElasticIn.amplitude(1).period(0.3)(0.3));
});

it("easeElasticIn.amplitude(a)(t) is the same as elasticIn(t) if a <= 1", () => {
  assert.strictEqual(d3.easeElasticIn.amplitude(-1.0)(0.1), d3.easeElasticIn(0.1));
  assert.strictEqual(d3.easeElasticIn.amplitude(+0.4)(0.2), d3.easeElasticIn(0.2));
  assert.strictEqual(d3.easeElasticIn.amplitude(+0.8)(0.3), d3.easeElasticIn(0.3));
});

it("easeElasticIn.amplitude(a).period(p)(t) coerces t, a and p to numbers", () => {
  assert.strictEqual(d3.easeElasticIn.amplitude("1.3").period("0.2")(".9"), d3.easeElasticIn.amplitude(1.3).period(0.2)(.9));
  assert.strictEqual(d3.easeElasticIn.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), d3.easeElasticIn.amplitude(1.3).period(0.2)(.9));
});

it("easeElasticIn.amplitude(1.3)(t) returns the expected results", () => {
  assert.strictEqual(d3.easeElasticIn.amplitude(1.3)(0.0),  0.000000);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.1),  0.000978);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.2), -0.003576);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.3),  0.001501);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.4),  0.014663);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.5), -0.036951);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.6),  0.013510);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.7),  0.124145);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.8), -0.303950);
  inDelta(d3.easeElasticIn.amplitude(1.3)(0.9),  0.109580);
  assert.strictEqual(d3.easeElasticIn.amplitude(1.3)(1.0),  1.000000);
});

it("easeElasticIn.amplitude(1.5).period(1)(t) returns the expected results", () => {
  assert.strictEqual(d3.easeElasticIn.amplitude(1.5).period(1)(0.0),  0.000000);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.1),  0.000148);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.2), -0.002212);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.3), -0.009390);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.4), -0.021498);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.5), -0.030303);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.6), -0.009352);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.7),  0.093642);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.8),  0.342077);
  inDelta(d3.easeElasticIn.amplitude(1.5).period(1)(0.9),  0.732374);
  assert.strictEqual(d3.easeElasticIn.amplitude(1.5).period(1)(1.0),  1.000000);
});

it("easeElasticOut(t) returns the expected results", () => {
  var elasticOut = generic.out(d3.easeElasticIn);
  assert.strictEqual(d3.easeElasticOut(0.0), elasticOut(0.0));
  inDelta(d3.easeElasticOut(0.1), elasticOut(0.1));
  inDelta(d3.easeElasticOut(0.2), elasticOut(0.2));
  inDelta(d3.easeElasticOut(0.3), elasticOut(0.3));
  inDelta(d3.easeElasticOut(0.4), elasticOut(0.4));
  inDelta(d3.easeElasticOut(0.5), elasticOut(0.5));
  inDelta(d3.easeElasticOut(0.6), elasticOut(0.6));
  inDelta(d3.easeElasticOut(0.7), elasticOut(0.7));
  inDelta(d3.easeElasticOut(0.8), elasticOut(0.8));
  inDelta(d3.easeElasticOut(0.9), elasticOut(0.9));
  assert.strictEqual(d3.easeElasticOut(1.0), elasticOut(1.0));
});

it("easeElasticOut.amplitude(a).period(p)(t) coerces t, a and p to numbers", () => {
  assert.strictEqual(d3.easeElasticOut.amplitude("1.3").period("0.2")(".9"), d3.easeElasticOut.amplitude(1.3).period(0.2)(.9));
  assert.strictEqual(d3.easeElasticOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), d3.easeElasticOut.amplitude(1.3).period(0.2)(.9));
});

it("easeElasticInOut(t) returns the expected results", () => {
  var elasticInOut = generic.inOut(d3.easeElasticIn);
  assert.strictEqual(d3.easeElasticInOut(0.0), elasticInOut(0.0));
  inDelta(d3.easeElasticInOut(0.1), elasticInOut(0.1));
  inDelta(d3.easeElasticInOut(0.2), elasticInOut(0.2));
  inDelta(d3.easeElasticInOut(0.3), elasticInOut(0.3));
  inDelta(d3.easeElasticInOut(0.4), elasticInOut(0.4));
  inDelta(d3.easeElasticInOut(0.5), elasticInOut(0.5));
  inDelta(d3.easeElasticInOut(0.6), elasticInOut(0.6));
  inDelta(d3.easeElasticInOut(0.7), elasticInOut(0.7));
  inDelta(d3.easeElasticInOut(0.8), elasticInOut(0.8));
  inDelta(d3.easeElasticInOut(0.9), elasticInOut(0.9));
  assert.strictEqual(d3.easeElasticInOut(1.0), elasticInOut(1.0));
});

it("easeElasticInOut.amplitude(a).period(p)(t) coerces t, a and p to numbers", () => {
  assert.strictEqual(d3.easeElasticInOut.amplitude("1.3").period("0.2")(".9"), d3.easeElasticInOut.amplitude(1.3).period(0.2)(.9));
  assert.strictEqual(d3.easeElasticInOut.amplitude({valueOf: function() { return 1.3; }}).period({valueOf: function() { return 0.2; }})({valueOf: function() { return .9; }}), d3.easeElasticInOut.amplitude(1.3).period(0.2)(.9));
});
