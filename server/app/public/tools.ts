/**
 * 工具方法
 */

// 数组去重
export const unique = (arr: []) => [...new Set(arr)];

// 二维数组转一维数组
export const towArrayToOneArray = (
  arr: []) => [].concat(...arr.map((x: []) => Array.isArray(x) ? towArrayToOneArray(x) : x),
  );

// 字符串转换数组
export const setStringToArray = (str: string) => str.split(',');
