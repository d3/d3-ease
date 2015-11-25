# d3-ease

*Easing* is a method of distorting time to control apparent motion in animated transitions. It is most commonly used for [slow-in, slow-out](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). By easing time, [animated transitions](https://github.com/d3/d3-transition) are smoother and exhibit more plausible motion.

An easing function takes a single argument: the time *t*, typically in the normalized range [0,1]. The easing function returns the “eased” time *tʹ*, typically in the same range [0,1]. (Though note that some easing methods, such as [elastic](#elastic), may return eased values somewhat outside the range [0,1].) See the [easing explorer](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4) for a visual demonstration.

These easing functions are largely based on work by [Robert Penner](http://robertpenner.com/easing/).

## Installing

If you use NPM, `npm install d3-ease`. Otherwise, download the [latest release](https://github.com/d3/d3-ease/releases/latest).

## API Reference

<a name="ease" href="#ease">#</a> <b>ease</b>(<i>type</i>[, <i>parameters…</i>])

A convenience function for binding zero or more *parameters* to the specified easing function *type*. For example:

```js
var e = ease(polyIn, 3);
e(0.2); // 0.008000000000000002
```

<a name="linear" href="#linear">#</a> <b>linear</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearIn</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearOut</b>(<i>t</i>)
<br><a href="#linear">#</a> <b>linearInOut</b>(<i>t</i>)

Linear easing; the identity function. Returns *t*.

[![linearin](https://cloud.githubusercontent.com/assets/230541/11385023/b862a592-92c9-11e5-986e-c531426ac525.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#linearIn)

<a name="poly" href="#poly">#</a> <b>poly</b>(<i>t</i>[, <i>e</i>])
<br><a name="polyIn" href="#polyIn">#</a> <b>polyIn</b>(<i>t</i>[, <i>e</i>])

Polynomial easing; raises *t* to the specified power *e*. If *e* is not specified, it defaults to 3, equivalent to [cubicIn](#cubicIn).

[![cubicin](https://cloud.githubusercontent.com/assets/230541/11385019/b85665de-92c9-11e5-883e-84f769bfb34d.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyIn)

<a name="polyOut" href="#polyOut">#</a> <b>polyOut</b>(<i>t</i>[, <i>e</i>])

Reverse polynomial easing; equivalent to 1 - [polyIn](#polyIn)(1 - *t*, *e*). If *e* is not specified, it defaults to 3, equivalent to [cubicOut](#cubicOut).

[![cubicout](https://cloud.githubusercontent.com/assets/230541/11385018/b84e363e-92c9-11e5-8402-084bba9a48fd.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyOut)

<a name="polyInOut" href="#polyInOut">#</a> <b>polyInOut</b>(<i>t</i>[, <i>e</i>])

Symmetric polynomial easing; scales [polyIn](#polyIn) for *t* in [0, 0.5] and [polyOut](#polyOut) for *t* in [0.5, 1]. If *e* is not specified, it defaults to 3, equivalent to [cubicInOut](#cubicInOut).

[![cubicinout](https://cloud.githubusercontent.com/assets/230541/11385017/b84d8054-92c9-11e5-9c72-7c0071a7e821.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#polyInOut)

<a name="quad" href="#quad">#</a> <b>quad</b>(<i>t</i>)
<br><a name="quadIn" href="#quadIn">#</a> <b>quadIn</b>(<i>t</i>)

Quadratic easing; equivalent to [polyIn](#polyIn)(*t*, 2).

[![quadin](https://cloud.githubusercontent.com/assets/230541/11385022/b85cefe4-92c9-11e5-84bf-42fc3e094b11.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadIn)

<a name="quadOut" href="#quadOut">#</a> <b>quadOut</b>(<i>t</i>)

Reverse quadratic easing; equivalent to 1 - [quadIn](#quadIn)(1 - *t*). Also equivalent to [polyOut](#polyOut)(*t*, 2).

[![quadout](https://cloud.githubusercontent.com/assets/230541/11385021/b85ab2ce-92c9-11e5-9293-a0a54476c4fa.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadOut)

<a name="quadInOut" href="#quadInOut">#</a> <b>quadInOut</b>(<i>t</i>)

Symmetric quadratic easing; scales [quadIn](#quadIn) for *t* in [0, 0.5] and [quadOut](#quadOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#polyInOut)(*t*, 2).

[![quadinout](https://cloud.githubusercontent.com/assets/230541/11385020/b85950fa-92c9-11e5-9c83-7caf28a56487.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#quadInOut)

<a name="cubic" href="#cubic">#</a> <b>cubic</b>(t)
<br><a name="cubicIn" href="#cubicIn">#</a> <b>cubicIn</b>(<i>t</i>)

Cubic easing; equivalent to [polyIn](#polyIn)(*t*, 3).

[![cubicin](https://cloud.githubusercontent.com/assets/230541/11385019/b85665de-92c9-11e5-883e-84f769bfb34d.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicIn)

<a name="cubicOut" href="#cubicOut">#</a> <b>cubicOut</b>(<i>t</i>)

Reverse cubic easing; equivalent to 1 - [cubicIn](#cubicIn)(1 - *t*). Also equivalent to [polyOut](#polyOut)(*t*, 3).

[![cubicout](https://cloud.githubusercontent.com/assets/230541/11385018/b84e363e-92c9-11e5-8402-084bba9a48fd.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicOut)

<a name="cubicInOut" href="#cubicInOut">#</a> <b>cubicInOut</b>(<i>t</i>)

Symmetric cubic easing; scales [cubicIn](#cubicIn) for *t* in [0, 0.5] and [cubicOut](#cubicOut) for *t* in [0.5, 1]. Also equivalent to [polyInOut](#polyInOut)(*t*, 3).

[![cubicinout](https://cloud.githubusercontent.com/assets/230541/11385017/b84d8054-92c9-11e5-9c72-7c0071a7e821.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#cubicInOut)

<a name="sin" href="#sin">#</a> <b>sin</b>(<i>t</i>)
<br><a name="sinIn" href="#sinIn">#</a> <b>sinIn</b>(<i>t</i>)

Sinusoidal easing; returns sin(*t*).

[![sinin](https://cloud.githubusercontent.com/assets/230541/11385015/b846cf98-92c9-11e5-864d-a85357a5e8c4.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinIn)

<a name="sinOut" href="#sinOut">#</a> <b>sinOut</b>(<i>t</i>)

Reverse sinusoidal easing; equivalent to 1 - [sinIn](#sinIn)(1 - *t*).

[![sinout](https://cloud.githubusercontent.com/assets/230541/11385016/b848e60c-92c9-11e5-865e-9fc918a54e19.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinOut)

<a name="sinInOut" href="#sinInOut">#</a> <b>sinInOut</b>(<i>t</i>)

Symmetric sinusoidal easing; scales [sinIn](#sinIn) for *t* in [0, 0.5] and [sinOut](#sinOut) for *t* in [0.5, 1].

[![sininout](https://cloud.githubusercontent.com/assets/230541/11385014/b8468510-92c9-11e5-9be2-006b5eefa234.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#sinInOut)

<a name="exp" href="#exp">#</a> <b>exp</b>(<i>t</i>)
<br><a name="expIn" href="#expIn">#</a> <b>expIn</b>(<i>t</i>)

Exponential easing; raises 2 to the power *t*.

[![expin](https://cloud.githubusercontent.com/assets/230541/11385013/b8413038-92c9-11e5-9f91-0478e280f68b.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expIn)

<a name="expOut" href="#expOut">#</a> <b>expOut</b>(<i>t</i>)

Reverse exponential easing; equivalent to 1 - [expIn](#expIn)(1 - *t*).

[![expout](https://cloud.githubusercontent.com/assets/230541/11385012/b83ba3b6-92c9-11e5-9117-007ef1c067d5.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expOut)

<a name="expInOut" href="#expInOut">#</a> <b>expInOut</b>(<i>t</i>)

Symmetric exponential easing; scales [expIn](#expIn) for *t* in [0, 0.5] and [expOut](#expOut) for *t* in [0.5, 1].

[![expinout](https://cloud.githubusercontent.com/assets/230541/11385011/b8387146-92c9-11e5-8208-2cf8a9eb29da.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#expInOut)

<a name="circle" href="#circle">#</a> <b>circle</b>(<i>t</i>)
<br><a name="circleIn" href="#circleIn">#</a> <b>circleIn</b>(<i>t</i>)

Circular easing.

[![circlein](https://cloud.githubusercontent.com/assets/230541/11385009/b8320496-92c9-11e5-8292-fe703e467f89.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleIn)

<a name="circleOut" href="#circleOut">#</a> <b>circleOut</b>(<i>t</i>)

Reverse circular easing; equivalent to 1 - [circleIn](#circleIn)(1 - *t*).

[![circleout](https://cloud.githubusercontent.com/assets/230541/11385008/b831d6a6-92c9-11e5-9331-c8d64011103f.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleOut)

<a name="circleInOut" href="#circleInOut">#</a> <b>circleInOut</b>(<i>t</i>)

Symmetric circular easing; scales [circleIn](#circleIn) for *t* in [0, 0.5] and [circleOut](#circleOut) for *t* in [0.5, 1].

[![circleinout](https://cloud.githubusercontent.com/assets/230541/11385010/b832d510-92c9-11e5-9170-32e8eb96a2ed.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#circleInOut)

<a name="elastic" href="#elastic">#</a> <b>elastic</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])
<br><a name="elasticIn" href="#elasticIn">#</a> <b>elasticIn</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Elastic easing, like a rubber band. The parameters *a* and *p* determine the tension of the band; if not specified, they default to 1 and 0.3, respectively.

[![elasticin](https://cloud.githubusercontent.com/assets/230541/11385002/b81c5416-92c9-11e5-804e-0cdc7bc4fce7.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticIn)

<a name="elasticOut" href="#elasticOut">#</a> <b>elasticOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Reverse elastic easing; equivalent to 1 - [elasticIn](#elasticIn)(1 - *t*).

[![elasticout](https://cloud.githubusercontent.com/assets/230541/11385000/b81564a8-92c9-11e5-90d0-2116b2499a0c.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticOut)

<a name="elasticInOut" href="#elasticInOut">#</a> <b>elasticInOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Symmetric elastic easing; scales [elasticIn](#elasticIn) for *t* in [0, 0.5] and [elasticOut](#elasticOut) for *t* in [0.5, 1].

[![elasticinout](https://cloud.githubusercontent.com/assets/230541/11384999/b802d324-92c9-11e5-8031-0e6aaf75f03a.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#elasticInOut)

<a name="back" href="#back">#</a> <b>back</b>(<i>t</i>[, <i>s</i>])
<br><a name="backIn" href="#backIn">#</a> <b>backIn</b>(<i>t</i>[, <i>s</i>])

[Anticipatory](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Anticipation) easing, like a dancer bending his knees before jumping off the floor. The amount of anticipation (“backing up”) is determined by the parameter *s*; it not specified, it defaults to 1.70158.

[![backin](https://cloud.githubusercontent.com/assets/230541/11385003/b81cb104-92c9-11e5-9f94-d20d28406a57.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backIn)

<a name="backOut" href="#backOut">#</a> <b>backOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Reverse anticipatory easing; equivalent to 1 - [backIn](#backIn)(1 - *t*).

[![backout](https://cloud.githubusercontent.com/assets/230541/11385004/b81dce22-92c9-11e5-8ab7-5ecec92aac14.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backOut)

<a name="backInOut" href="#backInOut">#</a> <b>backInOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Symmetric anticipatory easing; scales [backIn](#backIn) for *t* in [0, 0.5] and [backOut](#backOut) for *t* in [0.5, 1].

[![backinout](https://cloud.githubusercontent.com/assets/230541/11385001/b81acd62-92c9-11e5-8023-43c281e991d3.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#backInOut)

<a name="bounce" href="#bounce">#</a> <b>bounce</b>(<i>t</i>)
<br><a name="bounceIn" href="#bounceIn">#</a> <b>bounceIn</b>(<i>t</i>)

Bounce easing, like a rubber ball.

[![bouncein](https://cloud.githubusercontent.com/assets/230541/11385007/b82c6126-92c9-11e5-93f6-71ed872e43ae.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceIn)

<a name="bounceOut" href="#bounceOut">#</a> <b>bounceOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Reverse bounce easing; equivalent to 1 - [bounceIn](#bounceIn)(1 - *t*).

[![bounceout](https://cloud.githubusercontent.com/assets/230541/11385006/b827f9d8-92c9-11e5-8ab2-3c52e1923362.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceOut)

<a name="bounceInOut" href="#bounceInOut">#</a> <b>bounceInOut</b>(<i>t</i>[, <i>a</i>[, <i>p</i>]])

Symmetric bounce easing; scales [bounceIn](#bounceIn) for *t* in [0, 0.5] and [bounceOut](#bounceOut) for *t* in [0.5, 1].

[![bounceinout](https://cloud.githubusercontent.com/assets/230541/11385005/b81edca4-92c9-11e5-9511-0f50d6a83fd8.png)](http://bl.ocks.org/mbostock/248bac3b8e354a9103c4/#bounceInOut)

## Changes from from D3 3.x:

* Easing functions are now referenced symbolically (such as [cubicInOut](#cubicInOut)), rather than by string (`cubic-in-out`).

* The [elastic](#elastic) and [bounce](#bounce) easing types have been reversed for consistency with Penner: in is now out, out is now in, and out-in is now in-out. The out-in easing mode has been removed: it made no sense (except for elastic and bounce, which were reversed).

* The interpretation of optional parameters to the elastic and back easing functions has been corrected.

* Easing functions no longer clamp the output to 0 and 1 when *t* is less than or equal to 0 or greater than or equal to 1, respectively. (Note: [transitions](https://github.com/d3/d3-transition) are still guaranteed to end at *t* = 1 if not interrupted, regardless of easing.)
