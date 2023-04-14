
// coin 是符号， arr 是数组， type 是加载前面还是后面 true 为前，false为后
// 把数组转化为以点隔开的字符串   默认是后面点
export const joinPoint = (arr: any[], coin = ",", type = false) => {
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

