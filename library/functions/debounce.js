 /**
  * 函数防抖动
  * 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时
  * @param func 函数
  * @param wait 时间间隔
  * @param immediate 即刻执行
  * @return result/debounce 新数组
  * 例子：
  * var setUseAction = debounce(getUserAction, 10000, true)
	// 使用防抖
	node.onmousemove = setUseAction
	// 取消防抖
	setUseAction.cancel()
  **/
 export default function debounce(func, wait, immediate) {
    var timeout, result;
    
    var debounced = function () {
        var context = this;
        var args = arguments;
        
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}