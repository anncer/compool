
// 获取类型的方法

export const getType = (target: any) => {
  return toString.call(target);
};

export const typeOf = (obj: any) => {
  const class2type: any = {};
  const typeList =
    "Boolean Number String Function Array Date RegExp Object Error Symbol";
  typeList.split(" ").forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  if (obj == null) {
    return String(obj);
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[getType(obj)] || "object"
    : typeof obj;
};
