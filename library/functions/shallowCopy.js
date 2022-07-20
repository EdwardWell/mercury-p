/**
 * shallowCopy
 * 浅拷贝：只考虑对象类型。
 * @param obj 目标对象
 * @return 返回目标对象
 **/
 export default function shallowCopy(obj) {
    if (typeof obj !== 'object') return
    
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}