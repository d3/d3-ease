import number from "./number";

export function backIn(s) {
  return s = number(s, 1.70158), function(t) {
    return t * t * ((s + 1) * t - s);
  };
};

export function backOut(s) {
  return s = number(s, 1.70158), function(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  };
};

export function backInOut(s) {
  return s = number(s, 1.70158) * 1.525, function(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  };
};
