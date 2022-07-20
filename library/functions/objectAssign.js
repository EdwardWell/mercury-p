/**
 * 实现object.Assign
 * 将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
 * @param target 目标对象
 * @param source 源对象
 * @return 返回目标对象
 **/

export default function objectAssign(target, ...params) {
	if (target === null || target === undefined) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	let to = Object(target);
	let paramsLen = params.length;
	for (let index = 0; index < paramsLen; index++) {
		let nextSource = params[index];
		let _hasOwnProperty = Object.prototype.hasOwnProperty;
		let _toString = Object.prototype.toString;
		if (nextSource !== null && nextSource !== undefined) {
			for (let nextKey in nextSource) {
				if (_hasOwnProperty.call(nextSource, nextKey)) {
					let nextVal = nextSource[nextKey];
					let toVal = to[nextKey];
					if(toVal && typeof toVal === "object" && typeof nextVal === "object"){
						deepAssign(to[nextKey],nextVal)
					}else{
						to[nextKey] = nextVal;
					}
				}
			}
		}
	}
	return to;
}