function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $ed83c5b837cbf49e$exports = {};

/*@__PURE__*/ $parcel$export($ed83c5b837cbf49e$exports, "library_function", () => $ed83c5b837cbf49e$export$cae6fff0c631454f);
function $b208948437c85312$export$f5e092cdfed98805(fn) {
    console.log("Nice, the error is wrapped! By the way, imagine there are kilobytes of functions like me");
    return function() {
        try {
            return fn.apply(this, arguments);
        } catch (e) {
            console.log("Caught error", e, "reporting…");
        }
    };
}


const $ed83c5b837cbf49e$export$cae6fff0c631454f = (0, /*@__PURE__*/ $b208948437c85312$export$f5e092cdfed98805)(()=>{
    console.log("I just did very complex stuff. Imagine there are very many functions like me!");
});




export {$ed83c5b837cbf49e$export$cae6fff0c631454f as library_function};
