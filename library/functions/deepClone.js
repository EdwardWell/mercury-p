/**
 * deepClone
 * 深度克隆：考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题。
 * @param target 目标对象
 * @return 返回目标对象
 **/
 const isObject = (target) => (typeof target === "object" || typeof target === "function") && target !== null;
 
 export default function deepClone(target, map = new WeakMap()) {
     if (map.get(target)) {
         return target;
     }
     // 获取当前值的构造函数：获取它的类型
     let constructor = target.constructor;
     // 检测当前对象target是否与正则、日期格式对象匹配
     if (/^(RegExp|Date)$/i.test(constructor.name)) {
         // 创建一个新的特殊对象(正则类/日期类)的实例
         return new constructor(target);  
     }
     if (isObject(target)) {
         map.set(target, true);  // 为循环引用的对象做标记
         const cloneTarget = Array.isArray(target) ? [] : {};
         for (let prop in target) {
             if (target.hasOwnProperty(prop)) {
                 cloneTarget[prop] = deepClone(target[prop], map);
             }
         }
         return cloneTarget;
     } else {
         return target;
     }
 }