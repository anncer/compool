import { isRealArray, isObject } from "./is";


/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url: string) {
  const path = url == null ? window.location.href : url;
  const search = path.substring(path.lastIndexOf("?") + 1);
  const obj: any = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str: string) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xdc00 && code <= 0xdfff) i--;
  }
  return s;
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual: any[]) {
  const newArray:any[] = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function paramJson(json: any): string {
  if (!json) return "";
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return "";
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
  ).join("&");
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url: string) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val: string) {
  const div = document.createElement("div");
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr: any[]) {
  return Array.from(new Set(arr));
}

// 获取所有地址栏参数
export const getAllQuery = () => {
  return getAllQueryString(window.location.href);
};

// 根据地址获取所有地址栏参数
export const getAllQueryString = (src: string) => {
  const query: any = {};
  const str = src.substr(src.indexOf("?") + 1, src.length);
  const arr = str.split("&");
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i].indexOf("=");
    if (num > 0) {
      query[arr[i].substring(0, num)] = arr[i].substr(num + 1);
    }
  }
  return query;
};

// 获取地址栏单个已知参数
export const getQueryString = (name: string) => {
  return getQueryStringByUrl(name, window.location.href);
};
// 根据地址获取参数
export const getQueryStringByUrl = (name: string, str: string) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = str.substr(str.indexOf("?") + 1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

// coin 是符号， arr 是数组， type 是加载前面还是后面 true 为前，false为后
// 把数组转化为以点隔开的字符串   默认是后面点
export const toPoint = (arr: any[], coin = ",", type = false) => {
  let str = "";
  if (arr.length > 0) {
    arr.forEach((it, i) => {
      // 放在前面的时候第一个不放
      // 放在后面的时候最后一个不放
      if ((type && i === 0) || (!type && i === arr.length - 1)) {
        str += it;
      } else {
        str += type ? coin + it : it + coin;
      }
    });
  }
  return str;
};
const deepSetObj = (obj:any, arr:any) => {
  for (const it in obj) {
    if (isObject(obj[it])) {
      deepSetObj(obj[it], arr);
    } else {
      arr.push(it + "=" + obj[it]);
    }
  }
};

// 循环对象，并吧有值的键值对写在地址的后边
export const jointUrl = (baseUrl:any, obj:any) => {
  if (obj) {
    const arr:any = [];
    deepSetObj(obj, arr);
    return isRealArray(arr) ? baseUrl + "?" + toPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};

// 循环对象，并吧有值的键值对写在地址的后边
export const jointUrl2 = (baseUrl: string, obj: any) => {
  if (obj) {
    const arr:any[] = [];
    for (const it in obj) {
      if (isObject(obj[it])) {
        for (const key in obj[it]) {
          const element = obj[it][key];
          arr.push(it + "." + key + "=" + element);
        }
      } else {
        arr.push(it + "=" + obj[it]);
      }
    }
    return isRealArray(arr) ? baseUrl + "?" + toPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};
// 循环对象，并吧有值的键值对写在地址的后边
export const jointUrl3 = (baseUrl: string, obj: any) => {
  if (obj) {
    const arr:any[] = [];
    for (const it in obj) {
      if (isObject(obj[it])) {
        let str = ''
        for (const key in obj[it]) {
          const element = obj[it][key];
          str += key + ":" + element
        }
        arr.push(it + "={" + str + "}")
      } else {
        arr.push(it + "=" + obj[it]);
      }
    }
    return isRealArray(arr) ? baseUrl + "?" + toPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};