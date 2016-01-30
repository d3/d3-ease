export var quadIn = {
  ease: function(t) {
    return t * t;
  }
};

export var quadOut = {
  ease: function(t) {
    return t * (2 - t);
  }
};

export var quadInOut = {
  ease: function(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }
};
