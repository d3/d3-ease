var tape = require("tape"),
    ease = require("../");

require("./inDelta");

tape("linearIn(t) returns the expected results", function(test) {
  test.inDelta(ease.linearIn(0.0), 0.0);
  test.inDelta(ease.linearIn(0.1), 0.1);
  test.inDelta(ease.linearIn(0.2), 0.2);
  test.inDelta(ease.linearIn(0.3), 0.3);
  test.inDelta(ease.linearIn(0.4), 0.4);
  test.inDelta(ease.linearIn(0.5), 0.5);
  test.inDelta(ease.linearIn(0.6), 0.6);
  test.inDelta(ease.linearIn(0.7), 0.7);
  test.inDelta(ease.linearIn(0.8), 0.8);
  test.inDelta(ease.linearIn(0.9), 0.9);
  test.inDelta(ease.linearIn(1.0), 1.0);
  test.end();
});

tape("linearIn(t) coerces t to a number", function(test) {
  test.strictEqual(ease.linearIn(".9"), ease.linearIn(0.9));
  test.strictEqual(ease.linearIn({valueOf: function() { return 0.9; }}), ease.linearIn(0.9));
  test.end();
});

tape("linearOut is an alias for linearIn", function(test) {
  test.equal(ease.linearOut, ease.linearIn);
  test.end();
});

tape("linearInOut is an alias for linearInOutIn", function(test) {
  test.equal(ease.linearInOut, ease.linearIn);
  test.end();
});
