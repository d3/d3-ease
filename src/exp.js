export var expIn = {
  ease: function(t) {
    return Math.pow(2, 10 * t - 10);
  }
};

export var expOut = {
  ease: function(t) {
    return 1 - Math.pow(2, -10 * t);
  }
};

export var expInOut = {
  ease: function(t) {
    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
  }
};
