var slice = Array.prototype.slice;

function curry1(type, a) {
  return function(t) {
    return type(t, a);
  };
}

function curry2(type, a, b) {
  return function(t) {
    return type(t, a, b);
  };
}

function curryN(type, args) {
  args = slice.call(args);
  args[0] = null;
  return function(t) {
    args[0] = t;
    return type.apply(null, args);
  };
}

export default function(type, a, b) {
  switch (arguments.length) {
    case 1: return type;
    case 2: return curry1(type, a);
    case 3: return curry2(type, a, b);
    default: return curryN(type, arguments);
  }
};
