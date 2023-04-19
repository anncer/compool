// 获取当前时间的前几天或后几天
export const getDateAfter = (count: number) => {
  const dd = new Date();

  dd.setDate(dd.getDate() + count);
  const y = dd.getFullYear();
  const m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();

  return y + "-" + m + "-" + d;
};


/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime2Text(time: number | string | Date) {
  if (!time) {
    return ''
  }
  const d = new Date(time).getTime();
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 30) {
    return Math.ceil(diff / 3600 / 24) +"天前";
  } else if (diff < 3600 * 24 * 30 * 12) {
    return Math.ceil(diff / 3600/ 24/ 30) + "月前";
  } else {
    return Math.ceil(diff / 3600/ 24/ 360) + "年前";
  }
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function formatTime(time: string | number | object, cFormat: string) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date: any;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      date = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      date = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return timeStr;
}
