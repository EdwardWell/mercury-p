/**
 * easyCopy
 * 简单拷贝：只考虑普通对象属性，不考虑内置对象和函数。
 * @param obj 目标对象
 * @return 返回目标对象
 **/
 export default function easyCopy(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? easyCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}