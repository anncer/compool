import { isProperty } from './object'
import { getTag } from './type'
// coin 是符号， arr 是数组， type 是加载前面还是后面 true 为前，false为后
// 把数组转化为以点隔开的字符串   默认是后面点
export const joinPoint = (arr: any[], coin = ",", type = false) => {
  let str = "";
  if (arr.length > 0) {
    arr.forEach((it, i) => {
      // 放在前面的时候第一个不放
      // 放在后面的时候最后一个不放
      if ((type && i === 0) || (!type && i === arr.length - 1)) {
        str += it;
      } else {
        str += type ? coin + it : it + coin;
      }
    });
  }
  return str;
};

const getAttr = (value: any, arr: any, key: any, child: any) => {
  let res = null;
  arr.forEach((it: any) => {
    if (it[key] === value) res = it;
    if (getTag(it[child]) === "[object Array]") {
      const val = getAttr(value, it[child], key, child);
      if (val) res = val;
    }
  });
  return res;
};

// 通过key 找到树形对象中的对应对象，
// value为匹配的key的值，target是获取对象的对象，attr是key的名称，child 是对象在目标对象中的tree字段
export const getObjWithAttr = (value: any, target: any, key: any, child: any) => {
  let arr = [];
  const type = getTag(target);
  if (type === "[object Object]") {
    if (value === target[key]) {
      return target;
    }
    arr = target[child];
  } else if (type === "[object Array]") {
    arr = target;
  }
  return getAttr(value, arr, key, child);
};


// 获取对象内某个key的值 不存在key则返回 null
export const getProperty = (obj:any, key:any) => {
  return isProperty(obj, key) ? obj[key] : null
}

// 获取对象内值等于目标的键值对的 键
export const getSouceKey = (obj:any, value:any) => {
  const values = Object.values(obj)
  if (values.includes(value)) {
    let resKey:any = null
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

// 根据key和value获取数组内 key=value的对象
export const getObjWithProp = (list:any[], checker:any) => {
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


// 获取数组对象内某个kye的值是否等于传入的值，有则返回对象，没有则返回 null
export const getObjInArr = (arr:any, key:any, val:any) => {
  if (!arr || arr.length === 0) return false
  let rs = null
  arr.forEach((item:any) => {
    if (isProperty(item, key) && item[key] === val) {
      rs = item
    }
  })
  return rs
}
