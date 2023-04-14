import {isArrayLike, isString } from './is'
import { stringSize } from './string'

// 获取类型的方法
export const getType = (target: any) => {
  return toString.call(target);
};

export const typeOf = (obj: any) => {
  const class2type: any = {};
  const typeList =
    "Boolean Number String Function Array Date RegExp Object Error Symbol";
  typeList.split(" ").forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  if (obj == null) {
    return String(obj);
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[getType(obj)] || "object"
    : typeof obj;
};

export function getTag(value:any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}


// 返回任意对象的长度
export function size(unk:any) {
  const mapTag = '[object Map]'
  const setTag = '[object Set]'
  if (unk == null) {
    return 0
  }
  if (isArrayLike(unk)) {
    return isString(unk) ? stringSize(unk) : unk.length
  }
  const tag = getTag(unk)
  if (tag == mapTag || tag == setTag) {
    return unk.size
  }
  return Object.keys(unk).length
}

