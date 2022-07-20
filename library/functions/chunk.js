/**
 * [数组分块] [1,2,3,4,5] =>参数2=> [[1,2],[3,4],[5]] 
 * @param  {nubmer} size 每个块大小
 * @return {array}  分块后的数组    
 */
function _chunk(size) {
    if (isNaN(size) || size < 1) return this
    let cloneArr = this.slice(0);
    let newArr = []
    while (cloneArr.length) {
        newArr.push(cloneArr.splice(0, size))
    }
    return newArr
}

if(Date.prototype.chunk) console.log("Date.prototype中已经有chunk方法了，请查看文档使用另一种形式")
else Date.prototype.chunk = _chunk;

export default function chunk(arr,size){
	return arr.chunk(size);
};