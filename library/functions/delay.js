/**
 * 延迟后返回Promise
 * @param time 延迟时间 单位毫秒
 * @return promise对象
 **/
export default function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, time)
    })
}
