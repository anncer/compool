const getObjWithProp = (list, checker) => {
  const key = Object.keys(checker)[0]
  const __val = checker[key]

  let res = null

  list.forEach((item) => {
    if (item[key] === __val) {
      res = item
    }
  })
  return res
}

const obj = [
  { name: 'tom', age: 16 },
  { name: 'lucy', age: 20 },
  { name: 'lili', age: 36 },
];

console.log(getObjWithProp(obj, { name: "tom" }))