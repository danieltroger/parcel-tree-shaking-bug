export function catch_errors<T extends [], X>(fn: (...args: T) => X) {
  console.log(
    "Nice, the error is wrapped! By the way, imagine there are kilobytes of functions like me"
  );
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (e) {
      console.log("Caught error", e, "reporting…");
    }
  } as (...args: T) => undefined | X;
}
