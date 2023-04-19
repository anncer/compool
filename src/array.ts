// 关于数组的方法

export function uniqueArr(arr: any[]) {
  return Array.from(new Set(arr));
}

// 检测是否是数组 返回布尔值
export function isArray(arg: any[]): boolean {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

// 检测是否是长度大于0的数组
export function isRealArray<T>(arr?: T[]) {
  return arr instanceof Array && arr.length > 0;
}

// // 检测是否是数组 不是则返回-1 是则返回长度
// export const arrLen = (arr: any[]) => {
//   return isArray(arr) ? arr.length : -1;
// };

// 检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。
export function isArrayLike(value:any) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

const MAX_SAFE_INTEGER = 9007199254740991
// 检查 value 是否为有效的类数组长度。
export function isLength(value:any) {
  return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

export function cleanArray(actual: any[]) {
  const newArray:any[] = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}