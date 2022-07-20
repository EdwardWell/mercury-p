 /**
  * 数组扁平化
  * 将 [1, [2, [3]]] 这种多层的数组拍平成一层 [1, 2, 3]
  * @param arr 数组
  * @return arr 新数组
  **/
 export default function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
