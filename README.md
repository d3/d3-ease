# d3-ease

Easing functions for smooth animation, largely based on [Robert Penner’s](http://robertpenner.com/easing/). *Easing* is a method of distorting time to control apparent motion in animated transitions, most commonly for  realistic [“slow-in, slow-out”](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). Easing is typically used in conjunction with interpolation and [transitions](https://github.com/d3/d3-transition).

Changes from from D3 3.x:

* The `"elastic"` and `"bounce"` easing modes have been inverted for consistency with Penner: `"in"` is now `"out"`, `"out"` is now `"in"`, and `"out-in"` is now `"in-out"`.

* The `"out-in"` easing mode has been removed. It didn’t make sense (except for `"elastic"` and `"bounce"`, which was a bug).

* The interpretation of optional parameters to the `"elastic"` and `"back"` easing functions has been fixed.

* Easing functions no longer clamp the output to 0 and 1 when *t* is less than or equal to 0 or greater than or equal to 1, respectively. (Note: transitions are still guaranteed to end at *t* = 1 if not interrupted, regardless of easing.)

* Easing functions have been optimized.

<a name="ease" href="#ease">#</a> <b>ease</b>(<i>type</i>[, <i>arguments…</i>])

Returns an easing function of the specified *type*. Some easing types may also take optional *arguments*, as described below. Each built-in *type* may be extended with one of three modes. For example, `"cubic-in-out"` has the type `"cubic"` and mode `"in-out"`. If a mode is not specified, it defaults to `"in"`.

* `"in"` - the identity function.
* `"out"` - reverses the easing direction to [1,0].
* `"in-out"` - copies and mirrors the easing function from [0,.5] and [.5,1].

The returned function takes a normalized time *t*, typically in the range [0,1], and returns an eased time *tʹ*, also typically in the range [0,1]. Note that some types, such as `"elastic"` may return eased values substantially outside the range [0,1].

<a name="_ease" href="#_ease">#</a> <i>ease</i>(<i>t</i>)

Given a normalized time *t*, typically in the range [0,1], returns the eased time *tʹ*, also typically in the range [0,1]. Note that some easing types, such as `"elastic"` may return eased values substantially outside the range [0,1].

```js
var e = ease("cubic-in-out");
console.log(e(.2)); // 0.03200000000000001
```

Note: *ease* here (in italics) refers to an easing function returned by the [ease constructor](#ease), not the ease constructor itself.

<a name="linear" href="#linear">#</a> <b>ease</b>("linear-in")
<a href="#linear">#</a> <b>ease</b>("linear-out")
<a href="#linear">#</a> <b>ease</b>("linear-in-out")

The identity function; returns *t*.

<a name="poly" href="#poly">#</a> <b>ease</b>("poly-in"[, <i>k</i>])
<a href="#poly">#</a> <b>ease</b>("poly-out"[, <i>k</i>])
<a href="#poly">#</a> <b>ease</b>("poly-in-out"[, <i>k</i>])

Raises *t* to the specified power *k* (defaults to 3; maybe fractional).

<a name="quad" href="#quad">#</a> <b>ease</b>("quad-in")
<a href="#quad">#</a> <b>ease</b>("quad-out")
<a href="#quad">#</a> <b>ease</b>("quad-in-out")

Equivalent to [ease("poly", 2)](#poly).

<a name="cubic" href="#cubic">#</a> <b>ease</b>("cubic-in")
<a href="#cubic">#</a> <b>ease</b>("cubic-out")
<a href="#cubic">#</a> <b>ease</b>("cubic-in-out")

Equivalent to [ease("poly", 3)](#poly).

<a name="sin" href="#sin">#</a> <b>ease</b>("sin-in")
<a href="#sin">#</a> <b>ease</b>("sin-out")
<a href="#sin">#</a> <b>ease</b>("sin-in-out")

Applies the sine trigonometric function.

<a name="exp" href="#exp">#</a> <b>ease</b>("exp-in")
<a href="#exp">#</a> <b>ease</b>("exp-out")
<a href="#exp">#</a> <b>ease</b>("exp-in-out")

Raises 2 to the power *t*.

<a name="circle" href="#circle">#</a> <b>ease</b>("circle-in")
<a href="#circle">#</a> <b>ease</b>("circle-out")
<a href="#circle">#</a> <b>ease</b>("circle-in-out")

Produces a quarter circle.

<a name="elastic" href="#elastic">#</a> <b>ease</b>("elastic-in"[, <i>a</i>[, <i>p<
<a href="#elastic">#</a> <b>ease</b>("elastic-out"[, <i>a</i>[, <i>p<
<a href="#elastic">#</a> <b>ease</b>("elastic-in-out"[, <i>a</i>[, <i>p</i>]])

Simulates an elastic band with parameters *a* and *p*</b> (defaults to 1 and .3, respectively).

<a name="back" href="#back">#</a> <b>ease</b>("back-in"[, <i>s</i>])
<a href="#back">#</a> <b>ease</b>("back-out"[, <i>s</i>])
<a href="#back">#</a> <b>ease</b>("back-in-out"[, <i>s</i>])

Simulates backing into a parking space with parameter *s* (defaults to 1.70158).

<a name="bounce" href="#bounce">#</a> <b>ease</b>("bounce-in")
<a href="#bounce">#</a> <b>ease</b>("bounce-out")
<a href="#bounce">#</a> <b>ease</b>("bounce-in-out")

Simulates a bouncy ball.

[![in](https://cloud.githubusercontent.com/assets/230541/7928155/2e21c40c-08a0-11e5-9e6d-cdc5dead16ea.png)](http://bl.ocks.org/mbostock/3fad0a71418216b74444)

[![out](https://cloud.githubusercontent.com/assets/230541/7928156/2e21be30-08a0-11e5-8d4c-d003f6a0ad7f.png)](http://bl.ocks.org/mbostock/5cf917540c86082abf36)

[![in-out](https://cloud.githubusercontent.com/assets/230541/7928157/2e223e1e-08a0-11e5-858c-cd1325729ab6.png)](http://bl.ocks.org/mbostock/9e7296f5c3f02c8b77f7)
