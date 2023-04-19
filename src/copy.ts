import {isArray} from './array'
import {isProperty} from './object'

// 对象深拷贝

// const argsTag = '[object Arguments]',
//     arrayTag = '[object Array]',
//     boolTag = '[object Boolean]',
//     dateTag = '[object Date]',
//     errorTag = '[object Error]',
//     funcTag = '[object Function]',
//     genTag = '[object GeneratorFunction]',
//     mapTag = '[object Map]',
//     numberTag = '[object Number]',
//     objectTag = '[object Object]',
//     regexpTag = '[object RegExp]',
//     setTag = '[object Set]',
//     stringTag = '[object String]',
//     symbolTag = '[object Symbol]',
//     weakMapTag = '[object WeakMap]';

export const deepClone = (obj: any) => {

  // if ("array") {

  // } if ("object") {
    
  // }
  const objClone: any = isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (isProperty(obj, key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
};
