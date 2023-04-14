// 关于数组的方法
import { isArray } from "./is";

// 检测是否是数组 不是则返回-1 是则返回长度
export const arrLen = (arr: any[]) => {
  return isArray(arr) ? arr.length : -1;
};
