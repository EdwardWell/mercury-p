 /**
  * 数组去重
  * @param arr 数组
  * @return arr 新数组
  **/
 export default function unique(arr) {
    return [...new Set(arr)]
}
