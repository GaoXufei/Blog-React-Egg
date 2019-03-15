// 将对象转换为querystring
export const ObjectToQuery = (obj: {}) => {
  if (Object.keys(obj).length === 0) { return '' };
  let result: string = '';
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    result += `&${key}=${obj[key]}`;
  })
  return result.substr(1, result.length);
}