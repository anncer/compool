import { isString, stringSize } from './string'
import { isArrayLike } from './array'
import { getTag } from './type'

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