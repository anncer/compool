function isProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
const getSouceKey = (obj, value) => {
  const values = Object.values(obj)
  if (values.includes(value)) {
    let resKey = null
    for (const key in obj) {
      if (isProperty(obj, key) && obj[key] === value) {
        resKey = key
        break
      }
    }
    return resKey
  } else {
    return null
  }
}

const obj = { name: 'tom', age: 16 };

console.log(getSouceKey(obj, 'tom'))
console.log(getSouceKey(obj, 16))
console.log(getSouceKey(obj, '16'))
