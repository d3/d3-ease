# d3-ease

*Easing* is a method of distorting time to control apparent motion in animation. It is most commonly used for [slow-in, slow-out](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). By easing time, [animated transitions](https://github.com/d3/d3-transition) are smoother and exhibit more plausible motion.

The easing types in this module implement the [ease method](#ease_ease), which takes a normalized time *t* and returns the corresponding “eased” time *tʹ*. Both the normalized time and the eased time are typically in the same range [0,1], where 0 represents the start of the animation and 1 represents the end. Some easing types, such as [easeElastic](#easeElastic), may return eased times somewhat outside this range. A good easing type should return 0 if *t* = 0 and 1 if *t* = 1. See the [easing explorer](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4) for a visual demonstration.

These easing types are largely based on work by [Robert Penner](http://robertpenner.com/easing/).

## Installing

If you use NPM, `npm install d3-ease`. Otherwise, download the [latest release](https://github.com/d3/d3-ease/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a custom build using [Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3js.org](https://d3js.org):

```html
<script src="https://d3js.org/d3-ease.v0.6.min.js"></script>
```

In a vanilla environment, a `d3_ease` global is exported. [Try d3-ease in your browser.](https://tonicdev.com/npm/d3-ease)

## API Reference

<a name="ease_ease" href="#ease_ease">#</a> *ease*.<b>ease</b>(<i>t</i>)

Given the specified time *t*, typically in the normalized range [0,1], returns the “eased” time *tʹ*, also typically in [0,1]. A good implementation returns 0 if *t* = 0 and 1 if *t* = 1. See the [easing explorer](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4) for a visual demonstration.

<a name="easeLinearIn" href="#easeLinearIn">#</a> d3.<b>easeLinearIn</b>
<br><a name="easeLinearOut" href="#easeLinearOut">#</a> d3.<b>easeLinearOut</b>
<br><a name="easeLinearInOut" href="#easeLinearInOut">#</a> d3.<b>easeLinearInOut</b>

Linear easing; the identity function. Returns *t*.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/linearIn.png" alt="linearIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linearIn)

<a name="easePolyIn" href="#easePolyIn">#</a> d3.<b>easePolyIn</b>

Polynomial easing; raises *t* to the specified [exponent](#poly_exponent). If the exponent is not specified, it defaults to 3, equivalent to [easeCubicIn](#easeCubicIn).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyIn.png" alt="polyIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyIn)

<a name="easePolyOut" href="#easePolyOut">#</a> d3.<b>easePolyOut</b>

Reverse polynomial easing; equivalent to 1 - [polyIn](#easePolyIn).ease(1 - *t*). If the [exponent](#poly_exponent) is not specified, it defaults to 3, equivalent to [cubicOut](#easeCubicOut).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyOut.png" alt="polyOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyOut)

<a name="easePolyInOut" href="#easePolyInOut">#</a> d3.<b>easePolyInOut</b>

Symmetric polynomial easing; scales [polyIn](#easePolyIn) for *t* in [0, 0.5] and [polyOut](#easePolyOut) for *t* in [0.5, 1]. If the [exponent](#poly_exponent) is not specified, it defaults to 3, equivalent to [cubicInOut](#easeCubicInOut).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/polyInOut.png" alt="polyInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyInOut)

<a name="poly_exponent" href="#poly_exponent">#</a> <i>poly</i>.<b>exponent</b>(<i>e</i>)

Returns a new polynomial easing with the specified exponent *e*. For example, to create equivalents of [linearIn](#easeLinearIn), [quadIn](#easeQuadIn), and [cubicIn](#easeCubicIn):

```js
var linearIn = d3.easePolyIn.exponent(1),
    quadIn = d3.easePolyIn.exponent(2),
    cubicIn = d3.easePolyIn.exponent(3);
```

<a name="easeQuadIn" href="#easeQuadIn">#</a> d3.<b>easeQuadIn</b>

Quadratic easing; equivalent to [polyIn](#easePolyIn).[exponent](#poly_exponent)(2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadIn.png" alt="quadIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadIn)

<a name="easeQuadOut" href="#easeQuadOut">#</a> d3.<b>easeQuadOut</b>

Reverse quadratic easing; equivalent to 1 - [quadIn](#easeQuadIn).ease(1 - *t*). Also equivalent to [polyOut](#easePolyOut).[exponent](#poly_exponent)(2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadOut.png" alt="quadOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadOut)

<a name="easeQuadInOut" href="#easeQuadInOut">#</a> d3.<b>easeQuadInOut</b>

Symmetric quadratic easing; scales [quadIn](#easeQuadIn) for *t* in [0, 0.5] and [quadOut](#easeQuadOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#easePolyInOut).[exponent](#poly_exponent)(2).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/quadInOut.png" alt="quadInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadInOut)

<a name="easeCubicIn" href="#easeCubicIn">#</a> d3.<b>easeCubicIn</b>

Cubic easing; equivalent to [polyIn](#easePolyIn).[exponent](#poly_exponent)(3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicIn.png" alt="cubicIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicIn)

<a name="easeCubicOut" href="#easeCubicOut">#</a> d3.<b>easeCubicOut</b>

Reverse cubic easing; equivalent to 1 - [cubicIn](#easeCubicIn).ease(1 - *t*). Also equivalent to [polyOut](#easePolyOut).[exponent](#poly_exponent)(3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicOut.png" alt="cubicOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicOut)

<a name="easeCubicInOut" href="#easeCubicInOut">#</a> d3.<b>easeCubicInOut</b>

Symmetric cubic easing; scales [cubicIn](#easeCubicIn) for *t* in [0, 0.5] and [cubicOut](#easeCubicOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#easePolyInOut).[exponent](#poly_exponent)(3).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/cubicInOut.png" alt="cubicInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicInOut)

<a name="easeSinIn" href="#easeSinIn">#</a> d3.<b>easeSinIn</b>

Sinusoidal easing; returns sin(*t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinIn.png" alt="sinIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinIn)

<a name="easeSinOut" href="#easeSinOut">#</a> d3.<b>easeSinOut</b>

Reverse sinusoidal easing; equivalent to 1 - [sinIn](#easeSinIn).ease(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinOut.png" alt="sinOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinOut)

<a name="easeSinInOut" href="#easeSinInOut">#</a> d3.<b>easeSinInOut</b>

Symmetric sinusoidal easing; scales [sinIn](#easeSinIn) for *t* in [0, 0.5] and [sinOut](#easeSinOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/sinInOut.png" alt="sinInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinInOut)

<a name="easeExpIn" href="#easeExpIn">#</a> d3.<b>easeExpIn</b>

Exponential easing; raises 2 to the exponent 10 \* (*t* - 1).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expIn.png" alt="expIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expIn)

<a name="easeExpOut" href="#easeExpOut">#</a> d3.<b>easeExpOut</b>

Reverse exponential easing; equivalent to 1 - [expIn](#easeExpIn).ease(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expOut.png" alt="expOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expOut)

<a name="easeExpInOut" href="#easeExpInOut">#</a> d3.<b>easeExpInOut</b>

Symmetric exponential easing; scales [expIn](#easeExpIn) for *t* in [0, 0.5] and [expOut](#easeExpOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/expInOut.png" alt="expInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expInOut)

<a name="easeCircleIn" href="#easeCircleIn">#</a> d3.<b>easeCircleIn</b>

Circular easing.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleIn.png" alt="circleIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleIn)

<a name="easeCircleOut" href="#easeCircleOut">#</a> d3.<b>easeCircleOut</b>

Reverse circular easing; equivalent to 1 - [circleIn](#easeCircleIn).ease(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleOut.png" alt="circleOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleOut)

<a name="easeCircleInOut" href="#easeCircleInOut">#</a> d3.<b>easeCircleInOut</b>

Symmetric circular easing; scales [circleIn](#easeCircleIn) for *t* in [0, 0.5] and [circleOut](#easeCircleOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/circleInOut.png" alt="circleInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleInOut)

<a name="easeElasticIn" href="#easeElasticIn">#</a> d3.<b>easeElasticIn</b>

Elastic easing, like a rubber band. The [amplitude](#elastic_amplitude) and [period](#elastic_period) of the oscillation are configurable; if not specified, they default to 1 and 0.3, respectively.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticIn.png" alt="elasticIn" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticIn)

<a name="easeElasticOut" href="#easeElasticOut">#</a> d3.<b>easeElasticOut</b>

Reverse elastic easing; equivalent to 1 - [elasticIn](#easeElasticIn).ease(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticOut.png" alt="elasticOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticOut)

<a name="easeElasticInOut" href="#easeElasticInOut">#</a> d3.<b>easeElasticInOut</b>

Symmetric elastic easing; scales [elasticIn](#easeElasticIn) for *t* in [0, 0.5] and [elasticOut](#easeElasticOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/elasticInOut.png" alt="elasticInOut" width="100%" height="360">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticInOut)

<a name="elastic_amplitude" href="#elastic_amplitude">#</a> <i>elastic</i>.<b>amplitude</b>(<i>a</i>)

Returns a new elastic easing with the specified amplitude *a*.

<a name="elastic_period" href="#elastic_period">#</a> <i>elastic</i>.<b>period</b>(<i>p</i>)

Returns a new elastic easing with the specified period *p*.

<a name="easeBackIn" href="#easeBackIn">#</a> d3.<b>easeBackIn</b>

[Anticipatory](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Anticipation) easing, like a dancer bending his knees before jumping off the floor. The degree of [overshoot](#back_overshoot) is configurable; it not specified, it defaults to 1.70158.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backIn.png" alt="backIn" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backIn)

<a name="easeBackOut" href="#easeBackOut">#</a> d3.<b>easeBackOut</b>

Reverse anticipatory easing; equivalent to 1 - [backIn](#easeBackIn).ease(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backOut.png" alt="backOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backOut)

<a name="easeBackInOut" href="#easeBackInOut">#</a> d3.<b>easeBackInOut</b>

Symmetric anticipatory easing; scales [backIn](#easeBackIn) for *t* in [0, 0.5] and [backOut](#easeBackOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/backInOut.png" alt="backInOut" width="100%" height="300">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backInOut)

<a name="back_amplitude" href="#back_amplitude">#</a> <i>back</i>.<b>overshoot</b>(<i>s</i>)

Returns a new back easing with the specified overshoot *s*.

<a name="easeBounceIn" href="#easeBounceIn">#</a> d3.<b>easeBounceIn</b>

Bounce easing, like a rubber ball.

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceIn.png" alt="bounceIn" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceIn)

<a name="easeBounceOut" href="#easeBounceOut">#</a> d3.<b>easeBounceOut</b>

Reverse bounce easing; equivalent to 1 - [easeBounceIn](#easeBounceIn)(1 - *t*).

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceOut.png" alt="bounceOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceOut)

<a name="easeBounceInOut" href="#easeBounceInOut">#</a> d3.<b>easeBounceInOut</b>

Symmetric bounce easing; scales [easeBounceIn](#easeBounceIn) for *t* in [0, 0.5] and [easeBounceOut](#easeBounceOut) for *t* in [0.5, 1].

[<img src="https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceInOut.png" alt="bounceInOut" width="100%" height="240">](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceInOut)
