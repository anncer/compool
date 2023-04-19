
export function getTag(value:any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

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
    ? class2type[getTag(obj)] || "object"
    : typeof obj;
};

