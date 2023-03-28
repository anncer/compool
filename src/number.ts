// 小数点补两位
export const returnFloat = (_value: number): string => {
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
export const checkNum = (num: number) => {
  if (isNaN(num)) return "--";
  if (num > 0) {
    return "+" + addPercentage(num);
  }
  if (num < 0) {
    return "-" + addPercentage(num.toString().replace(/-/g, ""));
  }
  return addPercentage(num);
};