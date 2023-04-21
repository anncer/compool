function isProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

const o1 = { name: 1, age: 2, h: [1, 2, 3] }
const o2 = { name: 3, address: 'usa', h: [1, 2, 3, 4] }
// console.log(objectMerge(o1, o2))

const objectRepet = (current, souce) => {
  for (const key in current) {
    if (isProperty(souce, key)) {
      current[key] = souce[key]
    }
  }
  return current
}

console.log(objectRepet(o1, o2))