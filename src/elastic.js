var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

export var elasticIn = (function elasticIn(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
  return {
    amplitude: function(a) { return elasticIn(a, p * tau); },
    period: function(p) { return elasticIn(a, p); },
    ease: function(t) {
      return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
    }
  };
})(amplitude, period);

export var elasticOut = (function elasticOut(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
  return {
    amplitude: function(a) { return elasticOut(a, p * tau); },
    period: function(p) { return elasticOut(a, p); },
    ease: function(t) {
      return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
    }
  };
})(amplitude, period);

export var elasticInOut = (function elasticInOut(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);
  return {
    amplitude: function(a) { return elasticInOut(a, p * tau); },
    period: function(p) { return elasticInOut(a, p); },
    ease: function(t) {
      return ((t = t * 2 - 1) < 0
          ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
          : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
    }
  };
})(amplitude, period);
