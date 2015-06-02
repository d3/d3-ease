import number from "./number";

var k = 1 / (2 * Math.PI);

export function elasticIn(a, p) {
  a = Math.max(1, number(a, 1)), p = number(p, .3) * k;
  var s = p * Math.asin(1 / a);
  return function(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  };
};

export function elasticOut(a, p) {
  a = Math.max(1, number(a, 1)), p = number(p, .3) * k;
  var s = p * Math.asin(1 / a);
  return function(t) {
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) / p) + 1;
  };
};

export function elasticInOut(a, p) {
  a = Math.max(1, number(a, 1)), p = number(p, .3) * 1.5 * k; // Note: treatment differs from Penner!
  var s = p * Math.asin(1 / a);
  return function(t) {
    return a * ((t = t * 2 - 1) < 0
        ? Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : Math.pow(2, -10 * t) * Math.sin((t - s) / p) + 2) / 2;
  };
};
