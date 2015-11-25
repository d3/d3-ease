var tau = 2 * Math.PI;

export function elasticIn(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) / tau;
  return a * Math.pow(2, 10 * --t) * Math.sin((p * Math.asin(1 / a) - t) / p);
};

export function elasticOut(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) / tau;
  return 1 - a * Math.pow(2, -10 * t) * Math.sin((+t + p * Math.asin(1 / a)) / p);
};

export function elasticInOut(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) / tau;
  var s = p * Math.asin(1 / a);
  return ((t = t * 2 - 1) < 0
      ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
      : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
};
