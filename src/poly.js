export function polyIn(t, e) {
  if (e == null) e = 3;
  return Math.pow(t, e);
};

export function polyOut(t, e) {
  if (e == null) e = 3;
  return 1 - Math.pow(1 - t, e);
};

export function polyInOut(t, e) {
  if (e == null) e = 3;
  return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
};
