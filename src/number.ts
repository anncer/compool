// 小数点补两位
export const addFloat = (_value: number): string => {
  let value = String(Math.round(parseFloat(String(_value)) * 100) / 100);
  const xsd = value.toString().split(".");

  if (xsd.length === 1) {
    value = _value.toString() + ".00";
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = _value.toString() + "0";
    }
  }
  return value;
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
