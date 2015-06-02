import number from "./number";

export function polyIn(e) {
  return e = number(e, 3), function(t) {
    return Math.pow(t, e);
  };
};

export function polyOut(e) {
  return e = number(e, 3), function(t) {
    return 1 - Math.pow(1 - t, e);
  };
};

export function polyInOut(e) {
  return e = number(e, 3), function(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  };
};
