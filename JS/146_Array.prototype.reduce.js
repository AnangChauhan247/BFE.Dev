Array.prototype.myReduce = function (callback, init, thisArgs) {
  const len = this.length;
  let accu;
  let start;
  if (arguments.length >= 2) {
    accu = init;
    start = 0;
  } else {
    if (len === 0) {
      throw new TypeError("Reduce of empty array");
    }
    accu = this[0];
    start = 1;
  }
  for (let i = start; i < len; i++) {
    accu = callback.call(thisArgs, accu, this[i], i, this);
  }
  return accu;
};
const obj = {
  multiplier: 10,
};
const result = [1, 2, 3].myReduce(
  function (sum, n) {
    return sum + n * this.multiplier;
  },
  0,
  obj,
);
console.log(result);
