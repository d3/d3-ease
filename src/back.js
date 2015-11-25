export function backIn(t, s) {
  s = s == null ? 1.70158 : +s;
  return t * t * ((s + 1) * t - s);
};

export function backOut(t, s) {
  s = s == null ? 1.70158 : +s;
  return --t * t * ((s + 1) * t + s) + 1;
};

export function backInOut(t, s) {
  s = s == null ? 1.70158 : +s;
  return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
};
