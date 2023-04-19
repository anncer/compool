// 检测是不是整数
export const isNumber = (val: number): boolean => {
  const str = val.toString();
  const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
  const regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数

  return regPos.test(str) || regNeg.test(str);
};

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

