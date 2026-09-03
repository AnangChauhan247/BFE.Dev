Array.prototype.myMap = function (callback, thisArgs) {
  const len = this.length;
  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    if (i in this) {
      result[i] = callback.call(thisArgs, this[i], i, this);
    }
  }
  return result;
};

const obj = {
  multiplier: 10,
};
const result = [1, 2, 3].myMap(function (num) {
  return num * this.multiplier;
}, obj);
console.log(result);
