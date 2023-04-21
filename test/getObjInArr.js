function isProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
const getObjInArr = (arr, key, val) => {
  if (!arr || arr.length === 0) return false
  let rs = null
  arr.forEach((item) => {
    if (isProperty(item, key) && item[key] === val) {
      rs = item
    }
  })
  return rs
}

const arr = [
  { name: 'tom', age: 16 },
  { name: 'lucy', age: 20 },
  { name: 'lili', age: 36 },
];

console.log(getObjInArr(arr, 'name', 'tom'))