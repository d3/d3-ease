# d3-ease

Easing functions for smooth animation, largely based on [Robert Penner’s](http://robertpenner.com/easing/). *Easing* is a method of distorting time to control apparent motion in animated transitions, most commonly for  realistic [“slow-in, slow-out”](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). Easing is typically used in conjunction with interpolation and [transitions](https://github.com/d3/d3-transition).

## Installing

If you use NPM, `npm install d3-ease`. Otherwise, download the [latest release](https://github.com/d3/d3-ease/releases/latest).

## API Reference

<a name="ease" href="#ease">#</a> <b>ease</b>(<i>type</i>[, <i>parameters…</i>])

A convenience function for binding zero or more *parameters* to the specified easing function *type*. For example:

```js
var e = ease(polyIn, 3);
e(0.2); // 0.008000000000000002
```

The returned function takes a single argument: the normalized time *t*, typically in the range [0,1]. It returns an eased time *tʹ*, also typically in the range [0,1]. Note that some easing methods, such as [elastic](#elastic), may return eased values outside the range [0,1].

<a name="linear" href="#linear">#</a> <b>linear</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearIn</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearOut</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearInOut</b>(<i>t</i>)

Linear easing; the identity function. Returns *t*.

[![linear-in](https://cloud.githubusercontent.com/assets/230541/8026043/ea835e1e-0d1c-11e5-80f2-dc0d1f82500a.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linear-in)

<a name="poly" href="#poly">#</a> <b>poly</b>(<i>t</i>[, <i>e</i>])
<br><a name="polyIn" href="#polyIn">#</a> <b>polyIn</b>(<i>t</i>[, <i>e</i>])

Polynomial easing; raises *t* to the specified power *e*. If *e* is not specified, it defaults to 3, which is equivalent to [cubicIn](#cubicIn).

[![poly-in](https://cloud.githubusercontent.com/assets/230541/8026046/ea926706-0d1c-11e5-915f-dad2ab2bea7c.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-in)

<a name="polyOut" href="#polyOut">#</a> <b>polyOut</b>(<i>t</i>[, <i>e</i>])

Reverse [polyIn](#polyIn); equivalent to 1 - polyIn(1 - *t*, *e*). If *e* is not specified, it defaults to 3, which is equivalent to [cubicOut](#cubicOut).

[![poly-out](https://cloud.githubusercontent.com/assets/230541/8026047/ea94a390-0d1c-11e5-88bd-6d51052d084a.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-out)

<a name="polyInOut" href="#polyInOut">#</a> <b>polyInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric [polyIn](#polyIn); Scales [polyIn](#polyIn) for *t* in [0, 0.5] and [polyOut](#polyOut) for *t* in [0.5, 1]. If *e* is not specified, it defaults to 3, which is equivalent to [cubicInOut](#cubicInOut).

[![poly-in-out](https://cloud.githubusercontent.com/assets/230541/8026045/ea8ebe58-0d1c-11e5-9399-c03f2467bc3b.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-in-out)

<a name="quad" href="#quad">#</a> <b>quad</b>(<i>t</i>)
<br><a name="quadIn" href="#quadIn">#</a> <b>quadIn</b>(<i>t</i>)

Quadratic easing; equivalent to [polyIn](#polyIn)(*t*, 2).

[![quad-in](https://cloud.githubusercontent.com/assets/230541/8026049/ea967288-0d1c-11e5-906b-10b575160854.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-in)

<a name="quadOut" href="#quadOut">#</a> <b>quadOut</b>(<i>t</i>)

Reverse [quadIn](#quadIn); equivalent to 1 - quadIn(1 - *t*). Also equivalent to polyOut(*t*, 2).

[![quad-out](https://cloud.githubusercontent.com/assets/230541/8026051/eaa14f64-0d1c-11e5-8242-64a93513b7c7.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-out)

<a name="quadInOut" href="#quadInOut">#</a> <b>quadInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric [quadIn](#quadIn); Scales [quadIn](#quadIn) for *t* in [0, 0.5] and [quadOut](#quadOut) for *t* in [0.5, 1]. Also equivalent to polyInOut(*t*, 2).

[![quad-in-out](https://cloud.githubusercontent.com/assets/230541/8026048/ea96521c-0d1c-11e5-9bae-fec6b91de07e.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-in-out)

<a name="cubic" href="#cubic">#</a> <b>cubic</b>(t)
<br><a name="cubicIn" href="#cubicIn">#</a> <b>cubicIn</b>(<i>t</i>)

Cubic easing; equivalent to [polyIn](#polyIn)(*t*, 3).

[![cubic-in](https://cloud.githubusercontent.com/assets/230541/8026036/ea6dc23e-0d1c-11e5-83e3-6a09c6134554.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-in)

<a name="cubicOut" href="#cubicOut">#</a> <b>cubicOut</b>(<i>t</i>)

Reverse [cubicIn](#cubicIn); equivalent to 1 - cubicIn(1 - *t*). Also equivalent to polyOut(*t*, 3).

[![cubic-out](https://cloud.githubusercontent.com/assets/230541/8026035/ea6d26da-0d1c-11e5-8d46-04d163704bb0.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-out)

<a name="cubicInOut" href="#cubicInOut">#</a> <b>cubicInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric [cubicIn](#cubicIn); Scales [cubicIn](#cubicIn) for *t* in [0, 0.5] and [cubicOut](#cubicOut) for *t* in [0.5, 1]. Also equivalent to polyInOut(*t*, 3).

[![cubic-in-out](https://cloud.githubusercontent.com/assets/230541/8026032/ea6a027a-0d1c-11e5-99bc-c7366bbebf7b.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-in-out)

<a name="sin" href="#sin">#</a> <b>sin</b>(<i>t</i>)
<br><a name="sinIn" href="#sinIn">#</a> <b>sinIn</b>(<i>t</i>)

Sinusoidal easing; returns sin(*t*).

[![sin-in](https://cloud.githubusercontent.com/assets/230541/8026052/eaa218a4-0d1c-11e5-8243-4829d87bfdf6.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sin-in)

<a name="sinOut" href="#sinOut">#</a> <b>sinOut</b>(<i>t</i>)

Reverse [sinIn](#sinIn); equivalent to 1 - sinIn(1 - *t*).

[![sin-out](https://cloud.githubusercontent.com/assets/230541/8026053/eaa79f18-0d1c-11e5-846d-6bf846207cad.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sin-out)

<a name="sinInOut" href="#sinInOut">#</a> <b>sinInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric [sinIn](#sinIn); Scales [sinIn](#sinIn) for *t* in [0, 0.5] and [sinOut](#sinOut) for *t* in [0.5, 1].

[![sin-in-out](https://cloud.githubusercontent.com/assets/230541/8026050/ea9f6f3c-0d1c-11e5-8176-363214626a2f.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sin-in-out)

<a name="exp" href="#exp">#</a> <b>ease</b>("exp")
<br><a href="#exp">#</a> <b>ease</b>("exp-in")
<br><a href="#exp">#</a> <b>ease</b>("exp-out")
<br><a href="#exp">#</a> <b>ease</b>("exp-in-out")

Raises 2 to the power *t*.

[![exp-in](https://cloud.githubusercontent.com/assets/230541/8026041/ea80aef8-0d1c-11e5-9427-4748a2b23268.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#exp-in)
[![exp-out](https://cloud.githubusercontent.com/assets/230541/8026039/ea7e241c-0d1c-11e5-8f8d-4015e9872a8f.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#exp-out)
[![exp-in-out](https://cloud.githubusercontent.com/assets/230541/8026042/ea810236-0d1c-11e5-812c-c81cf25f44c6.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#exp-in-out)

<a name="circle" href="#circle">#</a> <b>ease</b>("circle")
<br><a href="#circle">#</a> <b>ease</b>("circle-in")
<br><a href="#circle">#</a> <b>ease</b>("circle-out")
<br><a href="#circle">#</a> <b>ease</b>("circle-in-out")

Produces a quarter circle.

[![circle-in](https://cloud.githubusercontent.com/assets/230541/8026031/ea5ff320-0d1c-11e5-8671-6046a0084b63.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circle-in)
[![circle-out](https://cloud.githubusercontent.com/assets/230541/8026033/ea6cb0ba-0d1c-11e5-982e-b67daebe7cb1.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circle-out)
[![circle-in-out](https://cloud.githubusercontent.com/assets/230541/8026030/ea5b424e-0d1c-11e5-9ea4-cc63017251e6.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circle-in-out)

<a name="elastic" href="#elastic">#</a> <b>ease</b>("elastic"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-in"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-out"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-in-out"[, <i>a</i>[, <i>p</i>]])

Simulates an elastic band with parameters *a* and *p*</b> (defaults to 1 and .3, respectively).

[![elastic-in](https://cloud.githubusercontent.com/assets/230541/8026037/ea71d90a-0d1c-11e5-84fb-d03873f70ced.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elastic-in)
[![elastic-out](https://cloud.githubusercontent.com/assets/230541/8026038/ea7c651e-0d1c-11e5-9cdc-208ad6d78a26.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elastic-out)
[![elastic-in-out](https://cloud.githubusercontent.com/assets/230541/8026034/ea6d045c-0d1c-11e5-844b-3846dc138fda.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elastic-in-out)

<a name="back" href="#back">#</a> <b>ease</b>("back"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-in"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-out"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-in-out"[, <i>s</i>])

Simulates a car backing into a parking space (???) with parameter *s* (defaults to 1.70158).

[![back-in](https://cloud.githubusercontent.com/assets/230541/8026025/ea4f94a8-0d1c-11e5-9073-1300e05f7315.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#back-in)
[![back-out](https://cloud.githubusercontent.com/assets/230541/8026028/ea597ec8-0d1c-11e5-82c7-2bd1b8c993b6.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#back-out)
[![back-in-out](https://cloud.githubusercontent.com/assets/230541/8026024/ea3bb050-0d1c-11e5-8a79-e61004a395f2.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#back-in-out)

<a name="bounce" href="#bounce">#</a> <b>ease</b>("bounce")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-in")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-out")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-in-out")

Simulates a bouncy ball.

[![bounce-in](https://cloud.githubusercontent.com/assets/230541/8026029/ea5a8782-0d1c-11e5-8862-8fc1594bf74f.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounce-in)
[![bounce-out](https://cloud.githubusercontent.com/assets/230541/8026027/ea597c98-0d1c-11e5-8849-80418fb818c9.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounce-out)
[![bounce-in-out](https://cloud.githubusercontent.com/assets/230541/8026026/ea59356c-0d1c-11e5-97f1-2b5de30d282d.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounce-in-out)

## Changes from from D3 3.x:

* The `"elastic"` and `"bounce"` easing types have been reversed for consistency with Penner: `"in"` is now `"out"`, `"out"` is now `"in"`, and `"out-in"` is now `"in-out"`.

* The `"out-in"` easing mode has been removed. It didn’t make sense (except for `"elastic"` and `"bounce"`, which was a bug).

* The interpretation of optional parameters to the `"elastic"` and `"back"` easing functions has been fixed.

* Easing functions no longer clamp the output to 0 and 1 when *t* is less than or equal to 0 or greater than or equal to 1, respectively. (Note: transitions are still guaranteed to end at *t* = 1 if not interrupted, regardless of easing.)
