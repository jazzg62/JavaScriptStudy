console.log("hello type-script!")
//基础类型
let age: number = 18
//age = "bear" // 数值类型age不能赋值为其他类型
age = 18.5
console.log(age) // 18.5
console.log(typeof age) // number
let jsonStr = JSON.stringify({name: "Lucy"});
console.log(jsonStr)
console.log(typeof jsonStr) // string