import { isRealArray } from './array'
import { isObject } from './object'
import { joinPoint } from './tools'
import { cleanArray } from './array'

// export function getQueryObject(url: string) {
//   const path = url == null ? window.location.href : url;
//   const search = path.substring(path.lastIndexOf("?") + 1);
//   const obj: any = {};
//   const reg = /([^?&=]+)=([^?&=]*)/g;
//   search.replace(reg, (rs, $1, $2) => {
//     const name = decodeURIComponent($1);
//     let val = decodeURIComponent($2);
//     val = String(val);
//     obj[name] = val;
//     return rs;
//   });
//   return obj;
// }

// export function paramJson(json: any): string {
//   if (!json) return "";
//   return cleanArray(
//     Object.keys(json).map((key) => {
//       if (json[key] === undefined) return "";
//       return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
//     })
//   ).join("&");
// }

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
  return getQueryStringInput(name, window.location.href);
};
// 根据地址获取参数
export const getQueryStringInput = (name: string, str: string) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = str.substr(str.indexOf("?") + 1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
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

// jointUrl  qsSpread("/api", {a: {aa: 111} ,b:2})  => '/api?aa=111&b=2'
// 循环对象，并吧有值的键值对写在地址的后边
export const qsSpread = (baseUrl:any, obj:any) => {
  if (obj) {
    const arr:any = [];
    deepSetObj(obj, arr);
    return isRealArray(arr) ? baseUrl + "?" + joinPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};

// jointUrl2  qsKeep("/api", {a: {aa: 111} ,b:2}) =>  '/api?a.aa=111&b=2'
// 循环对象，并吧有值的键值对写在地址的后边
export const qsKeep = (baseUrl: string, obj: any) => {
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
    return isRealArray(arr) ? baseUrl + "?" + joinPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};

// jointUrl3  qsOrigin("/api", {a: {aa: 111} ,b:2}) => '/api?a={aa:111}&b=2'
// 循环对象，并吧有值的键值对写在地址的后边
export const qsOrigin = (baseUrl: string, obj: any) => {
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
    return isRealArray(arr) ? baseUrl + "?" + joinPoint(arr, "&") : baseUrl;
  } else {
    return baseUrl;
  }
};


// 添加千位字符
export const addPercentage = (n: number | string): string => {
  const num = n.toString();
  let center = "";
  if (num === undefined) return num;
  center = num.toString().replace(/\$|,/g, "");
  const sign = num.indexOf("-") > 0 ? "-" : "";

  let cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : "";

  cents = cents.length > 1 ? cents : "";
  center = num.indexOf(".") > 0 ? num.substring(0, num.indexOf(".")) : num;
  for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    center =
      num.substring(0, num.length - (4 * i + 3)) +
      "," +
      num.substring(num.length - (4 * i + 3));
  }
  return sign + center + cents;
};


// 添加千位字符并添加正负号
export const formatCurrencySign = (num: number) => {
  if (isNaN(num)) return "--";
  if (num > 0) {
    return "+" + addPercentage(num);
  }
  if (num < 0) {
    return "-" + addPercentage(num.toString().replace(/-/g, ""));
  }
  return addPercentage(num);
};


// 金额分隔符  analysiss
export const formatCurrencyEnd = (opt: number | string) => {
  if (opt) {
      const str = opt + '';    //把数字变成string类型
      if (str.indexOf('.') !== -1) {  //判断是否附带小数
          const intSum = str
              .substring(0, str.indexOf('.'))
              .replace(/\B(?=(?:\d{3})+$)/g, ','); //取到整数部分
          const dot = str.substring(str.length, str.indexOf('.')); //取到小数部分搜索
          const ret = intSum + dot;
          return ret;
      } else {
          const ret = str.replace(/\B(?=(?:\d{3})+$)/g, ',');
          return ret + '.00';
      }
  } else {
      return '0.00';
  }
}

// 金额分隔符 analysis
export const formatCurrencyPiece = (opt: number | string) => {
  if (opt) {
      const str = opt + '';    //把数字变成string类型
      if (str.indexOf('.') !== -1) {  //判断是否附带小数
          const intSum = str
              .substring(0, str.indexOf('.'))
              .replace(/\B(?=(?:\d{3})+$)/g, ','); //取到整数部分
          const dot = str.substring(str.length, str.indexOf('.')); //取到小数部分搜索
          const ret = intSum + dot;
          return ret;
      } else {
          const ret = str.replace(/\B(?=(?:\d{3})+$)/g, ',');
          return ret ;
      }
  } else {
      return '0';
  }
}
