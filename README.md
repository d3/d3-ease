# d3-ease

*Easing* is a method of distorting time to control apparent motion in animation. It is most commonly used for [slow-in, slow-out](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). By easing time, [animated transitions](https://github.com/d3/d3-transition) are smoother and exhibit more plausible motion.

An easing function takes a single argument: the time *t*, typically in the normalized range [0,1]. The easing function returns the “eased” time *tʹ*, typically in the same range [0,1]. (Though note that some easing methods, such as [elastic](#elastic), may return eased values somewhat outside the range [0,1].) A good easing function should return 0 if *t* = 0 and 1 if *t* = 1. See the [easing explorer](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4) for a visual demonstration.

These easing functions are largely based on work by [Robert Penner](http://robertpenner.com/easing/).

## Installing

If you use NPM, `npm install d3-ease`. Otherwise, download the [latest release](https://github.com/d3/d3-ease/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a custom build using [Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3js.org](https://d3js.org):

```html
<script src="https://d3js.org/d3-ease.v0.3.min.js"></script>
```

In a vanilla environment, a `d3_ease` global is exported. [Try d3-ease in your browser.](https://tonicdev.com/npm/d3-ease)

## API Reference

<a name="bind" href="#bind">#</a> d3_ease.<b>bind</b>(<i>type</i>[, <i>parameters…</i>])

A convenience function for binding zero or more *parameters* to the specified easing function *type*. If no *parameters* are specified, this function simply returns *type*. The returned function takes a single argument *t* and passes any optional *parameters* to the underlying function *type*. For example, the following statements are equivalent:

```js
d3_ease.bind(d3_ease.polyIn, 3)(0.5); // 0.125
d3_ease.polyIn(0.5, 3); // 0.125
d3_ease.bind(d3_ease.cubicIn)(0.5); // 0.125
d3_ease.cubicIn(0.5); // 0.125
```

<a name="linear" href="#linear">#</a> d3_ease.<b>linear</b>(<i>t</i>)
<br><a href="#linear">#</a> d3_ease.<b>linearIn</b>(<i>t</i>)
<br><a href="#linear">#</a> d3_ease.<b>linearOut</b>(<i>t</i>)
<br><a href="#linear">#</a> d3_ease.<b>linearInOut</b>(<i>t</i>)

Linear easing; the identity function. Returns *t*.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/linearIn.png" alt="linearIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linearIn)

<a name="poly" href="#poly">#</a> d3_ease.<b>poly</b>(<i>t</i>[, <i>e</i>])
<br><a name="polyIn" href="#polyIn">#</a> d3_ease.<b>polyIn</b>(<i>t</i>[, <i>e</i>])

Polynomial easing; raises *t* to the specified power *e*. If *e* is not specified, it defaults to 3, equivalent to [cubicIn](#cubicIn).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyIn.png" alt="polyIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyIn)

<a name="polyOut" href="#polyOut">#</a> d3_ease.<b>polyOut</b>(<i>t</i>[, <i>e</i>])

Reverse polynomial easing; equivalent to 1 - [polyIn](#polyIn)(1 - *t*, *e*). If *e* is not specified, it defaults to 3, equivalent to [cubicOut](#cubicOut).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyOut.png" alt="polyOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyOut)

<a name="polyInOut" href="#polyInOut">#</a> d3_ease.<b>polyInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric polynomial easing; scales [polyIn](#polyIn) for *t* in [0, 0.5] and [polyOut](#polyOut) for *t* in [0.5, 1]. If *e* is not specified, it defaults to 3, equivalent to [cubicInOut](#cubicInOut).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyInOut.png" alt="polyInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyInOut)

<a name="quad" href="#quad">#</a> d3_ease.<b>quad</b>(<i>t</i>)
<br><a name="quadIn" href="#quadIn">#</a> d3_ease.<b>quadIn</b>(<i>t</i>)

Quadratic easing; equivalent to [polyIn](#polyIn)(*t*, 2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadIn.png" alt="quadIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadIn)

<a name="quadOut" href="#quadOut">#</a> d3_ease.<b>quadOut</b>(<i>t</i>)

Reverse quadratic easing; equivalent to 1 - [quadIn](#quadIn)(1 - *t*). Also equivalent to [polyOut](#polyOut)(*t*, 2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadOut.png" alt="quadOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadOut)

<a name="quadInOut" href="#quadInOut">#</a> d3_ease.<b>quadInOut</b>(<i>t</i>)

Symmetric quadratic easing; scales [quadIn](#quadIn) for *t* in [0, 0.5] and [quadOut](#quadOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#polyInOut)(*t*, 2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadInOut.png" alt="quadInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadInOut)

<a name="cubic" href="#cubic">#</a> d3_ease.<b>cubic</b>(t)
<br><a name="cubicIn" href="#cubicIn">#</a> d3_ease.<b>cubicIn</b>(<i>t</i>)

Cubic easing; equivalent to [polyIn](#polyIn)(*t*, 3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicIn.png" alt="cubicIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicIn)

<a name="cubicOut" href="#cubicOut">#</a> d3_ease.<b>cubicOut</b>(<i>t</i>)

Reverse cubic easing; equivalent to 1 - [cubicIn](#cubicIn)(1 - *t*). Also equivalent to [polyOut](#polyOut)(*t*, 3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicOut.png" alt="cubicOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicOut)

<a name="cubicInOut" href="#cubicInOut">#</a> d3_ease.<b>cubicInOut</b>(<i>t</i>)

Symmetric cubic easing; scales [cubicIn](#cubicIn) for *t* in [0, 0.5] and [cubicOut](#cubicOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#polyInOut)(*t*, 3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicInOut.png" alt="cubicInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicInOut)

<a name="sin" href="#sin">#</a> d3_ease.<b>sin</b>(<i>t</i>)
<br><a name="sinIn" href="#sinIn">#</a> d3_ease.<b>sinIn</b>(<i>t</i>)

Sinusoidal easing; returns sin(*t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinIn.png" alt="sinIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinIn)

<a name="sinOut" href="#sinOut">#</a> d3_ease.<b>sinOut</b>(<i>t</i>)

Reverse sinusoidal easing; equivalent to 1 - [sinIn](#sinIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinOut.png" alt="sinOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinOut)

<a name="sinInOut" href="#sinInOut">#</a> d3_ease.<b>sinInOut</b>(<i>t</i>)

Symmetric sinusoidal easing; scales [sinIn](#sinIn) for *t* in [0, 0.5] and [sinOut](#sinOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinInOut.png" alt="sinInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinInOut)

<a name="exp" href="#exp">#</a> d3_ease.<b>exp</b>(<i>t</i>)
<br><a name="expIn" href="#expIn">#</a> d3_ease.<b>expIn</b>(<i>t</i>)

Exponential easing; raises 2 to the power 10 \* (*t* - 1).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expIn.png" alt="expIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expIn)

<a name="expOut" href="#expOut">#</a> d3_ease.<b>expOut</b>(<i>t</i>)

Reverse exponential easing; equivalent to 1 - [expIn](#expIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expOut.png" alt="expOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expOut)

<a name="expInOut" href="#expInOut">#</a> d3_ease.<b>expInOut</b>(<i>t</i>)

Symmetric exponential easing; scales [expIn](#expIn) for *t* in [0, 0.5] and [expOut](#expOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expInOut.png" alt="expInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expInOut)

<a name="circle" href="#circle">#</a> d3_ease.<b>circle</b>(<i>t</i>)
<br><a name="circleIn" href="#circleIn">#</a> d3_ease.<b>circleIn</b>(<i>t</i>)

Circular easing.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleIn.png" alt="circleIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleIn)

<a name="circleOut" href="#circleOut">#</a> d3_ease.<b>circleOut</b>(<i>t</i>)

Reverse circular easing; equivalent to 1 - [circleIn](#circleIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleOut.png" alt="circleOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleOut)

<a name="circleInOut" href="#circleInOut">#</a> d3_ease.<b>circleInOut</b>(<i>t</i>)

Symmetric circular easing; scales [circleIn](#circleIn) for *t* in [0, 0.5] and [circleOut](#circleOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleInOut.png" alt="circleInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleInOut)

<a name="elastic" href="#elastic">#</a> d3_ease.<b>elastic</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])
<br><a name="elasticIn" href="#elasticIn">#</a> d3_ease.<b>elasticIn</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Elastic easing, like a rubber band. The parameters *a* and *p* control the amplitude and period of the oscillation; if not specified, they default to 1 and 0.3, respectively.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticIn.png" alt="elasticIn" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticIn)

<a name="elasticOut" href="#elasticOut">#</a> d3_ease.<b>elasticOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Reverse elastic easing; equivalent to 1 - [elasticIn](#elasticIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticOut.png" alt="elasticOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticOut)

<a name="elasticInOut" href="#elasticInOut">#</a> d3_ease.<b>elasticInOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Symmetric elastic easing; scales [elasticIn](#elasticIn) for *t* in [0, 0.5] and [elasticOut](#elasticOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticInOut.png" alt="elasticInOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticInOut)

<a name="back" href="#back">#</a> d3_ease.<b>back</b>(<i>t</i>[, <i>s</i>])
<br><a name="backIn" href="#backIn">#</a> d3_ease.<b>backIn</b>(<i>t</i>[, <i>s</i>])

[Anticipatory](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Anticipation) easing, like a dancer bending his knees before jumping off the floor. The amount of anticipation (“backing up”) is determined by the parameter *s*; it not specified, it defaults to 1.70158.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backIn.png" alt="backIn" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backIn)

<a name="backOut" href="#backOut">#</a> d3_ease.<b>backOut</b>(<i>t</i>[, <i>s</i>])

Reverse anticipatory easing; equivalent to 1 - [backIn](#backIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backOut.png" alt="backOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backOut)

<a name="backInOut" href="#backInOut">#</a> d3_ease.<b>backInOut</b>(<i>t</i>[, <i>s</i>])

Symmetric anticipatory easing; scales [backIn](#backIn) for *t* in [0, 0.5] and [backOut](#backOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backInOut.png" alt="backInOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backInOut)

<a name="bounce" href="#bounce">#</a> d3_ease.<b>bounce</b>(<i>t</i>)
<br><a name="bounceIn" href="#bounceIn">#</a> d3_ease.<b>bounceIn</b>(<i>t</i>)

Bounce easing, like a rubber ball.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceIn.png" alt="bounceIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceIn)

<a name="bounceOut" href="#bounceOut">#</a> d3_ease.<b>bounceOut</b>(<i>t</i>)

Reverse bounce easing; equivalent to 1 - [bounceIn](#bounceIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceOut.png" alt="bounceOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceOut)

<a name="bounceInOut" href="#bounceInOut">#</a> d3_ease.<b>bounceInOut</b>(<i>t</i>)

Symmetric bounce easing; scales [bounceIn](#bounceIn) for *t* in [0, 0.5] and [bounceOut](#bounceOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceInOut.png" alt="bounceInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceInOut)
