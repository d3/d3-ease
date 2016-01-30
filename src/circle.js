export var circleIn = {
  ease: function(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
};

export var circleOut = {
  ease: function(t) {
    return Math.sqrt(1 - --t * t);
  }
};

export var circleInOut = {
  ease: function(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }
};
