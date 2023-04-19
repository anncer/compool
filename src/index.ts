export * from './array'
export * from './object'
export * from './copy'
export * from './count'
export * from './date'
export * from './dom'
export * from './eq'
export * from './hasUnicode'
export * from './number'
export * from './string'
export * from './tools'
export * from './transform'
export * from './unicodeSize'
export * from './validate'
export * from './type'

import * as __array from './array'
import * as __class from './object'
import * as __copy from './copy'
import * as __count from './count'
import * as __date from './date'
import * as __dom from './dom'
import * as __eq from './eq'
import * as __hasUnicode from './hasUnicode'
import * as __number from './number'
import * as __string from './string'
import * as __tools from './tools'
import * as __transform from './transform'
import * as __unicodeSize from './unicodeSize'
import * as __validate from './validate'
import * as __type from './type'

export default {
  version: '0.1.0',
  ...__array,
  ...__class,
  ...__copy,
  ...__count,
  ...__date,
  ...__dom,
  ...__eq,
  ...__hasUnicode,
  ...__number,
  ...__string,
  ...__tools,
  ...__transform,
  ...__unicodeSize,
  ...__validate,
  ...__type,
}