var exponent = 3;

export var polyIn = (function polyIn(e) {
  return e = +e, {
    exponent: polyIn,
    ease: function(t) {
      return Math.pow(t, e);
    }
  };
})(exponent);

export var polyOut = (function polyOut(e) {
  return e = +e, {
    exponent: polyOut,
    ease: function(t) {
      return 1 - Math.pow(1 - t, e);
    }
  };
})(exponent);

export var polyInOut = (function polyInOut(e) {
  return e = +e, {
    exponent: polyInOut,
    ease: function(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
  };
})(exponent);
