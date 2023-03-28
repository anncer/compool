import {isArrayLike, isString } from './is'
import { stringSize } from './string'

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

export default size