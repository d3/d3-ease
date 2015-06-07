import {linearIn, linearOut, linearInOut} from "./linear";
import {quadIn, quadOut, quadInOut} from "./quad";
import {cubicIn, cubicOut, cubicInOut} from "./cubic";
import {polyIn, polyOut, polyInOut} from "./poly";
import {sinIn, sinOut, sinInOut} from "./sin";
import {expIn, expOut, expInOut} from "./exp";
import {circleIn, circleOut, circleInOut} from "./circle";
import {bounceIn, bounceOut, bounceInOut} from "./bounce";
import {backIn, backOut, backInOut} from "./back";
import {elasticIn, elasticOut, elasticInOut} from "./elastic";

var standardEases = (new Map)
    .set("linear-in", linearIn)
    .set("linear-out", linearOut)
    .set("linear-in-out", linearInOut)
    .set("quad-in", quadIn)
    .set("quad-out", quadOut)
    .set("quad-in-out", quadInOut)
    .set("cubic-in", cubicIn)
    .set("cubic-out", cubicOut)
    .set("cubic-in-out", cubicInOut)
    .set("poly-in", cubicIn)
    .set("poly-out", cubicOut)
    .set("poly-in-out", cubicInOut)
    .set("sin-in", sinIn)
    .set("sin-out", sinOut)
    .set("sin-in-out", sinInOut)
    .set("exp-in", expIn)
    .set("exp-out", expOut)
    .set("exp-in-out", expInOut)
    .set("circle-in", circleIn)
    .set("circle-out", circleOut)
    .set("circle-in-out", circleInOut)
    .set("bounce-in", bounceIn)
    .set("bounce-out", bounceOut)
    .set("bounce-in-out", bounceInOut)
    .set("back-in", backIn())
    .set("back-out", backOut())
    .set("back-in-out", backInOut())
    .set("elastic-in", elasticIn())
    .set("elastic-out", elasticOut())
    .set("elastic-in-out", elasticInOut());

var customEases = (new Map)
    .set("poly-in", polyIn)
    .set("poly-out", polyOut)
    .set("poly-in-out", polyInOut)
    .set("back-in", backIn)
    .set("back-out", backOut)
    .set("back-in-out", backInOut)
    .set("elastic-in", elasticIn)
    .set("elastic-out", elasticOut)
    .set("elastic-in-out", elasticInOut);

export default function(type, a, b) {
  var i = (type += "").indexOf("-");
  if (i < 0) type += "-in";
  return arguments.length > 1 && customEases.has(type)
      ? customEases.get(type)(a, b)
      : standardEases.get(type) || linearIn;
};
