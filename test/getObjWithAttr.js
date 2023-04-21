function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
const getAttr = (value, arr, key, child) => {
  let res = null;
  arr.forEach((it) => {
    if (it[key] === value) res = it;
    if (getTag(it[child]) === "[object Array]") {
      const val = getAttr(value, it[child], key, child);
      if (val) res = val;
    }
  });
  return res;
};

// 通过key 找到树形对象中的对应对象，
// value为匹配的key的值，target是获取对象的对象，attr是key的名称，child 是对象在目标对象中的tree字段
export const getObjWithAttr = (value, target, key, child) => {
  let arr = [];
  const type = getTag(target);
  if (type === "[object Object]") {
    if (value === target[key]) {
      return target;
    }
    arr = target[child];
  } else if (type === "[object Array]") {
    arr = target;
  }
  return getAttr(value, arr, key, child);
};

const arr = [
  {
    name: "组织管理",
    component: "organization",
    id: "organization",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "用户管理",
        path: "/personal",
        component: "personal",
        id: "personal",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "平台注册",
        path: "/registry",
        component: "registry",
        id: "registry",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "机构管理",
        path: "/org",
        component: "org",
        id: "org",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "人员信息",
        path: "/personnelInformation",
        component: "personnelInformation",
        id: "personnelInformation",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      }
    ]
  },
  {
    name: "业务管理",
    component: "inmAnagEment",
    id: "inmAnagEment",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "题库管理",
        path: "/Itebankent",
        component: "Itebankent",
        id: "Itebankent",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "测评结果",
        path: "/Evaluatiouery",
        component: "Evaluatiouery",
        id: "Evaluatiouery",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "工单管理",
        path: "/workOrder",
        component: "workOrder",
        id: "workOrder",
        icon: "",
        hidden: false,
        isActive: true
      },
      {
        name: "脚本设置",
        path: "/settings",
        component: "settings",
        id: "settings",
        icon: "",
        hidden: false,
        isActive: true
      }
    ]
  },
  {
    name: "综合管理",
    component: "comprehensive",
    id: "comprehensive",
    icon: "",
    hidden: false,
    isActive: true,
    children: [
      {
        name: "权限管理",
        path: "/manager",
        component: "manager",
        id: "manager",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "角色管理",
        path: "/role",
        component: "role",
        id: "role",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      },
      {
        name: "字典管理",
        path: "/dict",
        component: "dict",
        id: "dict",
        icon: "",
        hidden: false,
        isActive: true,
        children: []
      }
    ]
  }
]

console.log(getObjWithAttr('题库管理', arr, 'name', 'children'))