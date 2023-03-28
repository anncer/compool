
// 金额分隔符
export const analysiss = (opt: number | string) => {
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

// 金额分隔符
export const analysis = (opt: number | string) => {
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
