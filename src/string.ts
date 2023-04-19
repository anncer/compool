import hasUnicode from './hasUnicode'
import unicodeSize from './unicodeSize'

export function isString(str: any) {
  return typeof str === "string" || str instanceof String
}

export function stringSize(string:string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string)
}

function asciiSize({ length }:any) {
  return length
}

// reverse String
export const reverseStr = (str: string): string => {
  return str.split("").reverse().join("");
};

// 获取某个字符串在指定字符串中出现的位置(多个)
export const multipleIndexOf = (subStr: string, str: string) => {
  const positions: number[] = [];

  let pos = str.indexOf(subStr);

  while (pos > -1) {
    positions.push(pos);
    pos = str.indexOf(subStr, pos + 1);
  }
  return positions;
};