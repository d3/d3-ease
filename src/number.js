export default function(x, defaultValue) {
  return x == null || isNaN(x) ? defaultValue : +x;
};
