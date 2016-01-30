var overshoot = 1.70158;

export var backIn = (function backIn(s) {
  return s = +s, {
    overshoot: backIn,
    ease: function(t) {
      return t * t * ((s + 1) * t - s);
    }
  };
})(overshoot);

export var backOut = (function backOut(s) {
  return s = +s, {
    overshoot: backOut,
    ease: function(t) {
      return --t * t * ((s + 1) * t + s) + 1;
    }
  };
})(overshoot);

export var backInOut = (function backInOut(s) {
  return s = +s, {
    overshoot: backInOut,
    ease: function(t) {
      return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
  };
})(overshoot);
