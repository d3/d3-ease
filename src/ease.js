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

var standardEases = {
  "linear-in": linearIn,
  "linear-out": linearOut,
  "linear-in-out": linearInOut,
  "quad-in": quadIn,
  "quad-out": quadOut,
  "quad-in-out": quadInOut,
  "cubic-in": cubicIn,
  "cubic-out": cubicOut,
  "cubic-in-out": cubicInOut,
  "poly-in": cubicIn,
  "poly-out": cubicOut,
  "poly-in-out": cubicInOut,
  "sin-in": sinIn,
  "sin-out": sinOut,
  "sin-in-out": sinInOut,
  "exp-in": expIn,
  "exp-out": expOut,
  "exp-in-out": expInOut,
  "circle-in": circleIn,
  "circle-out": circleOut,
  "circle-in-out": circleInOut,
  "bounce-in": bounceIn,
  "bounce-out": bounceOut,
  "bounce-in-out": bounceInOut,
  "back-in": backIn(),
  "back-out": backOut(),
  "back-in-out": backInOut(),
  "elastic-in": elasticIn(),
  "elastic-out": elasticOut(),
  "elastic-in-out": elasticInOut()
};

var customEases = {
  "poly-in": polyIn,
  "poly-out": polyOut,
  "poly-in-out": polyInOut,
  "back-in": backIn,
  "back-out": backOut,
  "back-in-out": backInOut,
  "elastic-in": elasticIn,
  "elastic-out": elasticOut,
  "elastic-in-out": elasticInOut
};

export default function(type, a, b) {
  var i = (type += "").indexOf("-");
  if (i < 0) type += "-in";
  return arguments.length > 1 && customEases.hasOwnProperty(type) ? customEases[type](a, b)
      : standardEases.hasOwnProperty(type) ? standardEases[type]
      : linearIn;
};
