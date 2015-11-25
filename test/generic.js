exports.out = function(ease) {
  return function(t) {
    return 1 - ease(1 - t);
  };
};

exports.inOut = function(ease) {
  return function(t) {
    return (t < 0.5 ? ease(t * 2) : (2 - ease((1 - t) * 2))) / 2;
  };
};
