# d3-ease

Easing functions for smooth animation, largely based on [Robert Penner’s](http://robertpenner.com/easing/). *Easing* is a method of distorting time to control apparent motion in animated transitions, most commonly for  realistic [“slow-in, slow-out”](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). Easing is typically used in conjunction with interpolation and [transitions](https://github.com/d3/d3-transition).

## Installing

If you use NPM, `npm install d3-ease`. Otherwise, download the [latest release](https://github.com/d3/d3-ease/releases/latest).

## API Reference

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

<a name="linear" href="#linear">#</a> <b>ease</b>("linear")
<br><a href="#linear">#</a> <b>ease</b>("linear-in")
<br><a href="#linear">#</a> <b>ease</b>("linear-out")
<br><a href="#linear">#</a> <b>ease</b>("linear-in-out")

The identity function; returns *t*.

[![linear-in](https://cloud.githubusercontent.com/assets/230541/8026043/ea835e1e-0d1c-11e5-80f2-dc0d1f82500a.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linear-in)
[![linear-out](https://cloud.githubusercontent.com/assets/230541/8026044/ea8eb3e0-0d1c-11e5-8535-c067797be248.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linear-out)
[![linear-in-out](https://cloud.githubusercontent.com/assets/230541/8026040/ea807690-0d1c-11e5-8e27-92f7a893d8db.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linear-in-out)

<a name="poly" href="#poly">#</a> <b>ease</b>("poly"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-in"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-out"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-in-out"[, <i>k</i>])

Raises *t* to the specified power *k* (defaults to 3; which is equivalent to [cubic](#cubic)). Note the power *k* need not be an integer, or positive.

[![poly-in](https://cloud.githubusercontent.com/assets/230541/8026046/ea926706-0d1c-11e5-915f-dad2ab2bea7c.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-in)
[![poly-out](https://cloud.githubusercontent.com/assets/230541/8026047/ea94a390-0d1c-11e5-88bd-6d51052d084a.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-out)
[![poly-in-out](https://cloud.githubusercontent.com/assets/230541/8026045/ea8ebe58-0d1c-11e5-9399-c03f2467bc3b.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#poly-in-out)

<a name="quad" href="#quad">#</a> <b>ease</b>("quad")
<br><a href="#quad">#</a> <b>ease</b>("quad-in")
<br><a href="#quad">#</a> <b>ease</b>("quad-out")
<br><a href="#quad">#</a> <b>ease</b>("quad-in-out")

Equivalent to [ease("poly", 2)](#poly).

[![quad-in](https://cloud.githubusercontent.com/assets/230541/8026049/ea967288-0d1c-11e5-906b-10b575160854.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-in)
[![quad-out](https://cloud.githubusercontent.com/assets/230541/8026051/eaa14f64-0d1c-11e5-8242-64a93513b7c7.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-out)
[![quad-in-out](https://cloud.githubusercontent.com/assets/230541/8026048/ea96521c-0d1c-11e5-9bae-fec6b91de07e.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quad-in-out)

<a name="cubic" href="#cubic">#</a> <b>ease</b>("cubic")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-in")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-out")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-in-out")

Equivalent to [ease("poly", 3)](#poly).

[![cubic-in](https://cloud.githubusercontent.com/assets/230541/8026036/ea6dc23e-0d1c-11e5-83e3-6a09c6134554.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-in)
[![cubic-out](https://cloud.githubusercontent.com/assets/230541/8026035/ea6d26da-0d1c-11e5-8d46-04d163704bb0.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-out)
[![cubic-in-out](https://cloud.githubusercontent.com/assets/230541/8026032/ea6a027a-0d1c-11e5-99bc-c7366bbebf7b.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubic-in-out)

<a name="sin" href="#sin">#</a> <b>ease</b>("sin")
<br><a href="#sin">#</a> <b>ease</b>("sin-in")
<br><a href="#sin">#</a> <b>ease</b>("sin-out")
<br><a href="#sin">#</a> <b>ease</b>("sin-in-out")

Applies the sine trigonometric function.

[![sin-in](https://cloud.githubusercontent.com/assets/230541/8026052/eaa218a4-0d1c-11e5-8243-4829d87bfdf6.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sin-in)
[![sin-out](https://cloud.githubusercontent.com/assets/230541/8026053/eaa79f18-0d1c-11e5-846d-6bf846207cad.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sin-out)
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
