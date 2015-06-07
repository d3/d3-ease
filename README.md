# d3-ease

Easing functions for smooth animation, largely based on [Robert Penner’s](http://robertpenner.com/easing/). *Easing* is a method of distorting time to control apparent motion in animated transitions, most commonly for  realistic [“slow-in, slow-out”](https://en.wikipedia.org/wiki/12_basic_principles_of_animation#Slow_In_and_Slow_Out). Easing is typically used in conjunction with interpolation and [transitions](https://github.com/d3/d3-transition).

Changes from from D3 3.x:

* The `"elastic"` and `"bounce"` easing types have been reversed for consistency with Penner: `"in"` is now `"out"`, `"out"` is now `"in"`, and `"out-in"` is now `"in-out"`.

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

<a name="linear" href="#linear">#</a> <b>ease</b>("linear")
<br><a href="#linear">#</a> <b>ease</b>("linear-in")
<br><a href="#linear">#</a> <b>ease</b>("linear-out")
<br><a href="#linear">#</a> <b>ease</b>("linear-in-out")

![linear-in](https://cloud.githubusercontent.com/assets/230541/8025988/294c1b8c-0d1c-11e5-983f-b44acc089603.png)
![linear-out](https://cloud.githubusercontent.com/assets/230541/8025989/294daa88-0d1c-11e5-8785-6f4aadd8d3d6.png)
![linear-in-out](https://cloud.githubusercontent.com/assets/230541/8025987/29493f02-0d1c-11e5-9364-1ace0a4ea4d5.png)

The identity function; returns *t*.

<a name="poly" href="#poly">#</a> <b>ease</b>("poly"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-in"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-out"[, <i>k</i>])
<br><a href="#poly">#</a> <b>ease</b>("poly-in-out"[, <i>k</i>])

![poly-in-out](https://cloud.githubusercontent.com/assets/230541/8025990/29565f98-0d1c-11e5-9678-60ce945fe128.png)
![poly-in](https://cloud.githubusercontent.com/assets/230541/8025992/29577496-0d1c-11e5-8f9e-04e4ddc3b297.png)
![poly-out](https://cloud.githubusercontent.com/assets/230541/8025991/295721b2-0d1c-11e5-9fe7-fa1bd91e8c9f.png)

Raises *t* to the specified power *k* (defaults to 3; maybe fractional).

<a name="quad" href="#quad">#</a> <b>ease</b>("quad")
<br><a href="#quad">#</a> <b>ease</b>("quad-in")
<br><a href="#quad">#</a> <b>ease</b>("quad-out")
<br><a href="#quad">#</a> <b>ease</b>("quad-in-out")

![quad-in](https://cloud.githubusercontent.com/assets/230541/8025993/295cbb36-0d1c-11e5-830f-2de51935333d.png)
![quad-in-out](https://cloud.githubusercontent.com/assets/230541/8025995/295ebbde-0d1c-11e5-9d53-28feb79aee77.png)
![quad-out](https://cloud.githubusercontent.com/assets/230541/8025994/295e007c-0d1c-11e5-9344-6d243e874e21.png)

Equivalent to [ease("poly", 2)](#poly).

<a name="cubic" href="#cubic">#</a> <b>ease</b>("cubic")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-in")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-out")
<br><a href="#cubic">#</a> <b>ease</b>("cubic-in-out")

![cubic-in](https://cloud.githubusercontent.com/assets/230541/8025978/292e3ed2-0d1c-11e5-9d9d-94db3fa13b08.png)
![cubic-out](https://cloud.githubusercontent.com/assets/230541/8025980/2930b824-0d1c-11e5-812d-85e1c2dd6dd7.png)
![cubic-in-out](https://cloud.githubusercontent.com/assets/230541/8025979/292f416a-0d1c-11e5-8fb1-ff317070c803.png)

Equivalent to [ease("poly", 3)](#poly).

<a name="sin" href="#sin">#</a> <b>ease</b>("sin")
<br><a href="#sin">#</a> <b>ease</b>("sin-in")
<br><a href="#sin">#</a> <b>ease</b>("sin-out")
<br><a href="#sin">#</a> <b>ease</b>("sin-in-out")

![sin-in](https://cloud.githubusercontent.com/assets/230541/8025996/2966f998-0d1c-11e5-874c-17f91b07df11.png)
![sin-out](https://cloud.githubusercontent.com/assets/230541/8025998/29691688-0d1c-11e5-9b87-66ddb711c9a0.png)
![sin-in-out](https://cloud.githubusercontent.com/assets/230541/8025997/2968ee38-0d1c-11e5-94bc-c4d0c4f279aa.png)

Applies the sine trigonometric function.

<a name="exp" href="#exp">#</a> <b>ease</b>("exp")
<br><a href="#exp">#</a> <b>ease</b>("exp-in")
<br><a href="#exp">#</a> <b>ease</b>("exp-out")
<br><a href="#exp">#</a> <b>ease</b>("exp-in-out")

![exp-in](https://cloud.githubusercontent.com/assets/230541/8025984/29436866-0d1c-11e5-894f-987c9c47c961.png)
![exp-out](https://cloud.githubusercontent.com/assets/230541/8025986/2943ab50-0d1c-11e5-868d-828dc71bdcf7.png)
![exp-in-out](https://cloud.githubusercontent.com/assets/230541/8025985/2943856c-0d1c-11e5-8330-67bf42c0137e.png)

Raises 2 to the power *t*.

<a name="circle" href="#circle">#</a> <b>ease</b>("circle")
<br><a href="#circle">#</a> <b>ease</b>("circle-in")
<br><a href="#circle">#</a> <b>ease</b>("circle-out")
<br><a href="#circle">#</a> <b>ease</b>("circle-in-out")

![circle-in](https://cloud.githubusercontent.com/assets/230541/8025975/2920be60-0d1c-11e5-86bc-6ab73e45c011.png)
![circle-out](https://cloud.githubusercontent.com/assets/230541/8025977/292d0062-0d1c-11e5-8d6f-ca00300cf492.png)
![circle-in-out](https://cloud.githubusercontent.com/assets/230541/8025974/291c9f38-0d1c-11e5-9ebe-77528c8c36b5.png)

Produces a quarter circle.

<a name="elastic" href="#elastic">#</a> <b>ease</b>("elastic"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-in"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-out"[, <i>a</i>[, <i>p</i>]])
<br><a href="#elastic">#</a> <b>ease</b>("elastic-in-out"[, <i>a</i>[, <i>p</i>]])

![elastic-in](https://cloud.githubusercontent.com/assets/230541/8025982/293910be-0d1c-11e5-90db-197ed8213c36.png)
![elastic-out](https://cloud.githubusercontent.com/assets/230541/8025983/293e2c66-0d1c-11e5-8391-996a72d75fd4.png)
![elastic-in-out](https://cloud.githubusercontent.com/assets/230541/8025981/29373c4e-0d1c-11e5-9d37-55397603a289.png)

Simulates an elastic band with parameters *a* and *p*</b> (defaults to 1 and .3, respectively).

<a name="back" href="#back">#</a> <b>ease</b>("back"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-in"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-out"[, <i>s</i>])
<br><a href="#back">#</a> <b>ease</b>("back-in-out"[, <i>s</i>])

![back-in](https://cloud.githubusercontent.com/assets/230541/8025970/290d893a-0d1c-11e5-8475-ee89127c53c8.png)
![back-out](https://cloud.githubusercontent.com/assets/230541/8025976/29268584-0d1c-11e5-9ace-dd320db6a7f8.png)
![back-in-out](https://cloud.githubusercontent.com/assets/230541/8025969/28fd470a-0d1c-11e5-89b4-c0779746f288.png)

Simulates backing into a parking space with parameter *s* (defaults to 1.70158).

<a name="bounce" href="#bounce">#</a> <b>ease</b>("bounce")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-in")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-out")
<br><a href="#bounce">#</a> <b>ease</b>("bounce-in-out")

![bounce-in](https://cloud.githubusercontent.com/assets/230541/8025973/291c1b94-0d1c-11e5-9a49-4cc7177366b9.png)
![bounce-out](https://cloud.githubusercontent.com/assets/230541/8025972/291bb46a-0d1c-11e5-9e06-df8f204fc105.png)
![bounce-in-out](https://cloud.githubusercontent.com/assets/230541/8025971/2919aa76-0d1c-11e5-8e66-6c8ecdb45110.png)

Simulates a bouncy ball.
