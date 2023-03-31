export * from './array'
export * from './class'
export * from './copy'
export * from './count'
export * from './date'
export * from './dom'
export * from './eq'
export * from './fn'
export * from './hasUnicode'
export * from './is'
export * from './number'
export * from './string'
export * from './tools'
export * from './transform'
export * from './unicodeSize'
export * from './validate'

import * as __array from './array'
import * as __class from './class'
import * as __copy from './copy'
import * as __count from './count'
import * as __date from './date'
import * as __dom from './dom'
import * as __eq from './eq'
import * as __fn from './fn'
import * as __hasUnicode from './hasUnicode'
import * as __is from './is'
import * as __number from './number'
import * as __string from './string'
import * as __tools from './tools'
import * as __transform from './transform'
import * as __unicodeSize from './unicodeSize'
import * as __validate from './validate'

export default {
  version: '0.1.0',
  ...__array,
  ...__class,
  ...__copy,
  ...__count,
  ...__date,
  ...__dom,
  ...__eq,
  ...__fn,
  ...__hasUnicode,
  ...__is,
  ...__number,
  ...__string,
  ...__tools,
  ...__transform,
  ...__unicodeSize,
  ...__validate,
}