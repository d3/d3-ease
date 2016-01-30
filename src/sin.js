var pi = Math.PI,
    halfPi = pi / 2;

export var sinIn = {
  ease: function(t) {
    return 1 - Math.cos(t * halfPi);
  }
};

export var sinOut = {
  ease: function(t) {
    return Math.sin(t * halfPi);
  }
};

export var sinInOut = {
  ease: function(t) {
    return (1 - Math.cos(pi * t)) / 2;
  }
};
