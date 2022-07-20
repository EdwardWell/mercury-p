/**
 * 判断对象是否为空对象
 * @param [object]obj 目标对象
 * @return [boolean] 是否为空对象
 **/
export default function emptyObject(obj) {
    for (var key in obj) {
        return !1
    }
    return !0
}