/**
 * CREDITS: Implementation based on Firefox's nsSMILKeySpline.cpp
 */

var BINARY_SEARCH_PRECISION = 1e-7,
    BINARY_SEARCH_ITERATIONS = 10,
    NEWTON_ITERATIONS = 4,
    NEWTON_MIN_SLOPE = 0.02,
    SAMPLES_COUNT = 11,
    SAMPLES_LAST = SAMPLES_COUNT - 1,
    SAMPLES_STEP = 1.0 / (SAMPLES_COUNT - 1),
    FLOAT_ARRAYS_AVAILABLE = typeof Float32Array === "function";

// Calculate Px(t) or Py(t) given B and C points
function calcBezier(t, b, c) {
  return (((1.0 + (b *= 3.0) - (c *= 3.0)) * t + c - 2.0 * b) * t + b) * t;
}

// Calculate (dPx/dt)(t) or (dPy/dt)(t) given B and C points
function calcSlope(t, b, c) {
  return ((1.0 + (b *= 3.0) - (c *= 3.0)) * t * 3.0 + 2.0 * c - 4.0 * b) * t + b;
}

// Estimate t (from [t1, t2] interval) given x value and points B and C
function binarySearch(x, t1, t2, b, c) {
  var t, i = 0, foundX;

  do {
    t = (t1 + t2) / 2.0;
    if (x < (foundX = calcBezier(t, b, c))) {
      t2 = t;
    } else {
      t1 = t;
    }
  } while (++i < BINARY_SEARCH_ITERATIONS &&
           Math.abs(x - foundX) > BINARY_SEARCH_PRECISION);

  return t;
}

// Estimate t using Newton-Raphson method given points B and C
function newtonRaphsonIterate(x, guessForT, b, c) {
  var currentX,
      currentSlope;
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    currentX = calcBezier(guessForT, b, c) - x;
    currentSlope = calcSlope(guessForT, b, c);

    if (currentSlope === 0.0)
      return guessForT;

    guessForT -= currentX / currentSlope;
  }

  return guessForT;
}

// Estimates t given points B and C, and a set of precalculated values
function estimateT(x, b, c, sampleValues) {
  var currentSample = 0,
      dist,
      intervalStart,
      initialSlope,
      guessForT;

  while (currentSample !== SAMPLES_LAST && sampleValues[currentSample] <= x) {
    ++currentSample;
  }
  intervalStart = --currentSample * SAMPLES_STEP;

  // Interpolate to provide an initial guess for t
  dist = (x - sampleValues[currentSample]) /
         (sampleValues[currentSample + 1] - sampleValues[currentSample]);
  guessForT = intervalStart + dist * SAMPLES_STEP;
  initialSlope = calcSlope(guessForT, b, c);

  if (initialSlope >= NEWTON_MIN_SLOPE) {
    return newtonRaphsonIterate(x, guessForT, b, c);
  } else if (initialSlope === 0.0) {
    return guessForT;
  } else {
    return binarySearch(x, intervalStart, intervalStart + SAMPLES_STEP, b, c);
  }
}

// Assumes points A = (0, 0) and D = (1, 1)
export function cubicBezier(bx, by, cx, cy) {
  var sampleValues = (FLOAT_ARRAYS_AVAILABLE ?
                      new Float32Array(SAMPLES_COUNT) :
                      new Array(SAMPLES_COUNT));

  // Limit x to [0, 1] interval
  bx = Math.max(0.0, Math.min(1.0, +bx));
  cx = Math.max(0.0, Math.min(1.0, +cx));
  by = +by;
  cy = +cy;

  // Precompute sample x-values
  for (var i = 0; i < SAMPLES_COUNT; ++i) {
    sampleValues[i] = calcBezier(i * SAMPLES_STEP, bx, cx);
  }

  function bezier(x) {
    var t = estimateT(x, bx, cx, sampleValues);
    return calcBezier(t, by, cy);
  }

  return bezier;
}
