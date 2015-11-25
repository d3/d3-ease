var tau = 2 * Math.PI;

export function elasticIn(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) / tau;
  return a * Math.pow(2, 10 * --t) * Math.sin((p * Math.asin(1 / a) - t) / p);
};

export function elasticOut(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) / tau;
  return a * Math.pow(2, -10 * t) * Math.sin((t - p * Math.asin(1 / a)) / p) + 1;
};

export function elasticInOut(t, a, p) {
  a = a == null ? 1 : Math.max(1, a);
  p = (p == null ? 0.3 : p) * 1.5 / tau; // Note: treatment differs from Penner!
  var s = p * Math.asin(1 / a);
  return a * ((t = t * 2 - 1) < 0
      ? Math.pow(2, 10 * t) * Math.sin((s - t) / p)
      : Math.pow(2, -10 * t) * Math.sin((t - s) / p) + 2) / 2;
};
