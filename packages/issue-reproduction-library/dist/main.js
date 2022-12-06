function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ad84b81d0fc5bdf2$exports = {};

$parcel$export($ad84b81d0fc5bdf2$exports, "library_function", () => $ad84b81d0fc5bdf2$export$cae6fff0c631454f);
function $a5015e52d131031d$export$f5e092cdfed98805(fn) {
    console.log("Nice, the error is wrapped! By the way, imagine there are kilobytes of functions like me");
    return function() {
        try {
            return fn.apply(this, arguments);
        } catch (e) {
            console.log("Caught error", e, "reporting…");
        }
    };
}


const $ad84b81d0fc5bdf2$export$cae6fff0c631454f = /*@__PURE__*/ (0, $a5015e52d131031d$export$f5e092cdfed98805)(()=>{
    console.log("I just did very complex stuff. Imagine there are very many functions like me!");
});


$parcel$exportWildcard(module.exports, $ad84b81d0fc5bdf2$exports);


