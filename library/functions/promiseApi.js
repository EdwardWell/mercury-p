/**
 *带有参数为{success,fail}参数的方法promise化
 *@param func [function]  方法
 *@param args func的参数
 *@return Promise对象
 **/

export default function promiseApi(func, args = {}) {
	if (typeof func !== 'function') return func
	return new Promise((resolve, reject) => {
		func(
			Object.assign(args, {
				success: resolve,
				fail: reject
			})
		)
	})
}
