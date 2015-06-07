# d3-ease

Easing functions for smooth animation, largely based on [Robert Penner’s](http://robertpenner.com/easing/). *Easing* is a method of distorting time to control apparent motion in animated transitions, most commonly for  realistic [“slow-in, slow-out”](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). Easing is typically used in conjunction with interpolation and [transitions](https://github.com/d3/d3-transition).

Changes from from D3 3.x:

* The `"elastic"` and `"bounce"` easing modes have been inverted for consistency with Penner: `"in"` is now `"out"`, `"out"` is now `"in"`, and `"out-in"` is now `"in-out"`.

* The `"out-in"` easing mode has been removed. It didn’t make sense (except for `"elastic"` and `"bounce"`, which was a bug).

* The interpretation of optional parameters to the `"elastic"` and `"back"` easing functions has been fixed.

* Easing functions no longer clamp the output to 0 and 1 when *t* is less than or equal to 0 or greater than or equal to 1, respectively. (Note: transitions are still guaranteed to end at *t* = 1 if not interrupted, regardless of easing.)

* Easing functions have been optimized.

<a name="ease" href="#ease">#</a> <b>ease</b>(<i>type</i>[, <i>arguments…</i>])

Returns an easing function of the specified *type*. Some easing types may also take optional *arguments*, as described below.

The returned easing function takes a normalized time *t*, typically in the range [0,1], and returns an eased time *tʹ*, also typically in the range [0,1]. Note that some easing types, such as `"elastic"` may return eased values substantially outside the range [0,1]. The following easing types are supported:

* `"linear"` - the identity function; returns *t*.
* `"poly"` - raises *t* to the specified power *k* (defaults to 3; maybe fractional).
* `"quad"` - equivalent to `"poly"` with *k* = 2.
* `"cubic"` - equivalent to `"poly"` with *k* = 3.
* `"sin"` - applies the sine trigonometric function.
* `"exp"` - raises 2 to the power *t*.
* `"circle"` - produces a quarter circle.
* `"elastic"` - simulates an elastic band with parameters *a* and *p* (defaults to 1 and .3, respectively).
* `"back"` - simulates backing into a parking space with parameter *s* (defaults to 1.70158).
* `"bounce"` - simulates a bouncy ball.

Each built-in *type* may be extended with one of three modes. For example, `"cubic-in-out"` has the type `"cubic"` and mode `"in-out"`. If a mode is not specified, it defaults to `"in"`.

* `"in"` - the identity function.
* `"out"` - reverses the easing direction to [1,0].
* `"in-out"` - copies and mirrors the easing function from [0,.5] and [.5,1].

<a name="_ease" href="#_ease">#</a> <i>ease</i>(<i>t</i>)

Given a normalized time *t*, typically in the range [0,1], returns the eased time *tʹ*, also typically in the range [0,1]. Note that some easing types, such as `"elastic"` may return eased values substantially outside the range [0,1].

[![in](https://cloud.githubusercontent.com/assets/230541/7928155/2e21c40c-08a0-11e5-9e6d-cdc5dead16ea.png)](http://bl.ocks.org/mbostock/3fad0a71418216b74444)

[![out](https://cloud.githubusercontent.com/assets/230541/7928156/2e21be30-08a0-11e5-8d4c-d003f6a0ad7f.png)](http://bl.ocks.org/mbostock/5cf917540c86082abf36)

[![in-out](https://cloud.githubusercontent.com/assets/230541/7928157/2e223e1e-08a0-11e5-858c-cd1325729ab6.png)](http://bl.ocks.org/mbostock/9e7296f5c3f02c8b77f7)
