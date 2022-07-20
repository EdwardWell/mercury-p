/**
 * 多层属性设置获取值，
 * @param target 目标对象
 * @param deepKey 多层属性 如a.b[1].f
 * @param val 
 * @return 多层属性值
 **/
export default function deepValue(target, deepKey, val) {
    var lastKey;
    if (!deepKey || deepKey === "''") return "";
    deepKey = deepKey.replace(/\[(.+?)\]/g, '.$1').split('.');
    lastKey = deepKey.splice(-1, 1)[0];
    try {
        deepKey.forEach(item => {
            target = target[item]
        })
    } catch (e) {
        console.log(e)
        return "";
    }
    if (val !== undefined) target[lastKey] = val;
    return target ? target[lastKey] : "";
}
