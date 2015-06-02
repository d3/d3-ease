# d3-ease

Easing functions for smooth animation. Largely based on [Robert Penner’s easing functions](http://robertpenner.com/easing/). This code is currently EXPERIMENTAL and represents the in-development D3 4.0 API. The 4.0 API is largely backwards-compatible, but differs from 3.x in several ways:

* The *elastic* and *bounce* easing functions have been inverted for consistency with Penner’s original design: “elastic-in” is now “elastic-out”, “elastic-out” is now “elastic-in”, “elastic-out-in” is now “elastic-in-out”, “bounce-in” is now “bounce-out”, “bounce-out” is now “bounce-in”, and “bounce-out-in” is now “bounce-in-out”.

* The interpretation of optional parameters to the “elastic-in”, “elastic-out”, “elastic-in-out” and “back-in-out” easing functions has been fixed.

* The “out-in” easing functions have been removed. Out-in easing didn’t make sense (except previously in the case of *elastic* and *bounce*, which was a bug).

* All easing functions have been optimized. As part of this change, easing functions no longer clamp the output to 0 and 1 when *t* is less than or equal to 0 or greater than or equal to 1, respectively. The behavior of easing functions when *t* is not in [0,1] depends on the function. (Note: transitions are still guaranteed to end at *t* = 1 if not interrupted, regardless of easing.)

### “in”

[![in](https://cloud.githubusercontent.com/assets/230541/7928155/2e21c40c-08a0-11e5-9e6d-cdc5dead16ea.png)](http://bl.ocks.org/mbostock/3fad0a71418216b74444)

### “out”

[![out](https://cloud.githubusercontent.com/assets/230541/7928156/2e21be30-08a0-11e5-8d4c-d003f6a0ad7f.png)](http://bl.ocks.org/mbostock/5cf917540c86082abf36)

### “in-out”

[![in-out](https://cloud.githubusercontent.com/assets/230541/7928157/2e223e1e-08a0-11e5-858c-cd1325729ab6.png)](http://bl.ocks.org/mbostock/9e7296f5c3f02c8b77f7)
