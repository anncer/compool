
// 判断方法合集

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// 检测对象是否是函数
export const isFunction = (fn: any) => {
  return typeof fn === "function";
};

// 判断参数是不是null
export const isNull = (ele: any) => {
  return ele === null;
};

// 判断参数是不是空，0 为不空
export const isNone = (some: any): boolean => {
  return some === 0 ? true : Boolean(some);
};


// 判断一个对象是不是素对象
export const isPlainObject = (obj: any) => {
  if (typeof obj !== "object" || obj.nodeType || isWindow(obj)) {
    return false;
  }
  try {
    if (obj.constructor && obj.constructor.prototype === Object.prototype) {
      return true;
    }
  } catch (e) {
    return false;
  }
};


// 判读是否非window对象
export const isWindow = (obj: any) => {
  return obj !== null && obj === obj.window;
};


// 检测对象是不是空对象
export const isHasKey = (obj: object) => {
  return Object.keys(obj).length > 0;
};


// 检测某个对象时候含有某个key
export function isProperty<T extends object>(obj: T, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


// 检测某个对象是否为空，每个key都是空值
export const isEmptyObject = (obj: any) => {
  let _v = true;
  for (const key in obj) {
    if (obj[key]) {
      if (typeof obj[key] === "object" && obj[key] instanceof Array) {
        obj[key].length > 0 ? (_v = false) : (_v = true);
      } else if (typeof obj[key] === "object") {
        isEmptyObject(obj[key]);
      } else if (
        obj[key] != null &&
        obj[key] !== undefined &&
        obj[key] !== "null" &&
        obj[key] !== "undefined"
      ) {
        _v = false;
      }
    }
  }
  return _v;
};


