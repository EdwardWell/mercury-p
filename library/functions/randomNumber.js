/**
 * 在范围内生成随机整数
 * @param min [number] 范围最小值
 * @param max [number] 范围最大值
 * @param count [number] 随机数数量
 * @param allowsDuplicates [boolean] 是否允许重复  默认不允许重复
 * @return [number | Array] 随机数
**/
export default function randomNumber(min, max, count, allowsDuplicates) {
   let num = max - min + 1;
   if (!count) return Math.floor((num) * Math.random()) + min;
   let result = [];
   if (allowsDuplicates) {
	   while (count--) {
		   result.push(randomNumber(min, max));
	   }
	   return result;
   }
   let arr = new Array(num).fill(0).map((item, index) => index + min)
   while (count--) {
	   num--;
	   let index = randomNumber(0, num);
	   result.push(arr.splice(index, 1)[0]);
   }
   return result
}
