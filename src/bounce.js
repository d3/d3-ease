var amplitude = 0.5,
    bounces = 3;

export var bounceIn = (function custom(a, b) {
  var amp = a + 0.5,
      bnc = 12 - 8/(2**b);

  function bounceIn(t) {
    var r = Math.floor(4 - Math.log2(12 - bnc * (1 - t)));
    // would the following allow cpu caching of c1 and c2?
    var c1 = 3 * (2**r - 1)/2**r,
        c2 = (4**r - 1)/4**r;
    return 1 - (((bnc * (1 - t) / 4) - c1)**2 + c2)**amp;
  }

  bounceIn.amplitude = function(a) { return custom(a, b); };
  bounceIn.bounces = function(b) { return custom(a, b); };

  return bounceIn;
})(amplitude, bounces);

export var bounceOut = (function custom(a, b) {
  var amp = a + 0.5,
      bnc = 12 - 8/(2**b);

  function bounceOut(t) {
    var r = Math.floor(4 - Math.log2(12 - bnc * t));
    // would the following allow cpu caching of c1 and c2?
    var c1 = 3 * (2**r - 1)/2**r,
        c2 = (4**r - 1)/4**r;
    return (((bnc * t / 4) - c1)**2 + c2)**amp;
  }

  bounceOut.amplitude = function(a) { return custom(a, b); };
  bounceOut.bounces = function(b) { return custom(a, b); };

  return bounceOut;
})(amplitude, bounces);

export var bounceInOut = (function custom(a, b) {
  var amp = a + 0.5,
      bnc = 12 - 8/(2**b);

  function bounceInOut(t) {
    if(t <= 0.5) {
      var rIn =  Math.floor(4 - Math.log2(12 - bnc * (1 - (2 * t))));
      return 0.5 - ((((bnc * (1 - (2 * t)) / 4) - (3 * (2**rIn - 1)/2**rIn))**2 + ((4**rIn - 1)/4**rIn))**amp) / 2;
    }
    var rOut = Math.floor(4 - Math.log2(12 - bnc * (t - 0.5) * 2));
    return 0.5 + ((((bnc * (t - 0.5) * 2 / 4) - (3 * (2**rOut - 1)/2**rOut))**2 + ((4**rOut - 1)/4**rOut))**amp) / 2;
  }

  bounceInOut.amplitude = function(a) { return custom(a, b); };
  bounceInOut.bounces = function(b) { return custom(a, b); };

  return bounceInOut;
})(amplitude, bounces);
