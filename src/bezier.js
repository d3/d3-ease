// import {abs, epsilon} from "./math.js";

const epsilon = 1e-6, {abs} = Math;


function bezier(x1, y1, x2, y2) {
  function bezier(x1, x2) {
    const a = 1 - 3 * x2 + 3 * x1,
      b = 3 * x2 - 6 * x1,
      c = 3 * x1;
    return t => ((a * t + b) * t + c) * t;
  }
  function bezierDerivate(x1, x2) {
    const a = 3 - 9 * x2 + 9 * x1,
      b = 6 * x2 - 12 * x1,
      c = 3 * x1;
    return t => (a * t + b) * t + c;
  }
  function solve(f, fp, y) {
    let x = y;
    for (let i = 0; i < 100; i++) {
      const delta = (y - f(x)) / (fp(x) || epsilon),
        absd = abs(delta);
      x += absd < 0.1 ? delta : (0.1 * delta) / absd;
      if (absd < 1e-9) break;
    }
    return x < 0 ? 0 : x > 1 ? 1 : x;
  }
  return x1 === y1 && x2 === y2 // useless(?) shortcut when y===x
    ? x => x
    : x => bezier(y1, y2)(solve(bezier(x1, x2), bezierDerivate(x1, x2), x));
}

function custom(x1, y1, x2, y2, dir) {
  x1 = +x1;
  y1 = +y1;
  x2 = +x2;
  y2 = +y2;
  if (x1 < 0 || x1 > 1 || x2 < 0 || x2 > 1) throw new RangeError("Parameter out of range");

  const b = bezier(x1, y1, x2, y2),
    _out = t => 1 - b(1 - t),
    _inout = t => ((t *= 2) < 1 ? b(t) : 2 - b(2 - t)) / 2,
    f = dir === "out" ? _out : dir === "inout" ? _inout : b;
  f.points = (x1, y1, x2, y2) => custom(x1, y1, x2, y2, dir);
  return f;
}

export const bezierIn = custom(0, 0, 1, 1);
export const bezierOut = custom(0, 0, 1, 1, "out");
export const bezierInOut = custom(0, 0, 1, 1, "inout");
