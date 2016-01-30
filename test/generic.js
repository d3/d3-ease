exports.out = function(easeIn) {
  return {
    ease: function(t) {
      return 1 - easeIn.ease(1 - t);
    }
  };
};

exports.inOut = function(easeIn) {
  return {
    ease: function(t) {
      return (t < 0.5 ? easeIn.ease(t * 2) : (2 - easeIn.ease((1 - t) * 2))) / 2;
    }
  };
};
