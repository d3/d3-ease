var tape = require("tape"),
    ease = require("../").ease;

tape("ease(type) coerces type to a string", function(test) {
  test.equal(ease({toString: function() { return "cubic-in-out"; }}), ease("cubic-in-out"));
  test.end();
});

tape('ease(unknown) is equivalent to ease("linear")', function(test) {
  test.equal(ease("unknown"), ease("linear"));
  test.end();
});
