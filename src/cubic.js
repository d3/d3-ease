export var cubicIn = {
  ease: function(t) {
    return t * t * t;
  }
};

export var cubicOut = {
  ease: function(t) {
    return --t * t * t + 1;
  }
};

export var cubicInOut = {
  ease: function(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
};
