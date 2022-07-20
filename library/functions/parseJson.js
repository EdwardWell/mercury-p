/**
 * 解析json字符串
 * @param  {String} jsonStr JSON字符串
 * @return {String|Object}  解析后的JSON对象
 */
export default function parseJson(jsonStr) {
    if (!jsonStr) return "";
    try {
        return JSON.parse(jsonStr)
    } catch (e) {
        console.log(e)
        return ""
    }
}