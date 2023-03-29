// 判断方法合集

// 检测是否是数组 返回布尔值
export function isArray(arg: any[]): boolean {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

// 检测是否是长度大于0的数组
export function isRealArray<T>(arr?: T[]) {
  return arr instanceof Array && arr.length > 0;
}

export function isString(str: any) {
  return typeof str === "string" || str instanceof String
}

// 检测是不是整数
export const isNumber = (val: number): boolean => {
  const str = val.toString();
  const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
  const regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数

  return regPos.test(str) || regNeg.test(str);
};

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
export const isEmptyObj = (obj: object) => {
  return Object.keys(obj).length <= 0;
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