var slice = Array.prototype.slice;

function bind1(type, a) {
  return function(t) {
    return type(t, a);
  };
}

function bind2(type, a, b) {
  return function(t) {
    return type(t, a, b);
  };
}

function bindN(type, args) {
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
    case 2: return bind1(type, a);
    case 3: return bind2(type, a, b);
    default: return bindN(type, arguments);
  }
};
