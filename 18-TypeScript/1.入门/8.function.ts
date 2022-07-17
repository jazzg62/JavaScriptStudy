// function add(x: number, y: number): number {
//     return x + y
// }
// let result = add(10,20);
// console.log(result)


// let mySum = function (x: number, y: number): number {
//     return x + y;
// };
// console.log(mySum(20,30))


// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };
//
// console.log(mySum(50,40))


// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1;
// }
// let b = mySearch("apple","pp")
// console.log(b)


// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// console.log(tomcat)
// let tom = buildName('Tom');
// console.log(tom)


// function buildName(firstName: string, lastName: string = 'Cat') {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Nya');
// console.log(tomcat)
// let tom = buildName('Tom');
// console.log(tom)


// function push(array: any[], ...items: any[]) {
//     items.forEach(function (item) {
//         array.push(item);
//     })
// }
//
// let a: any[] = [];
// push(a, 1, 2, 3);
// console.log(a)


// function push(array: any[], ...items: any[]) {
//     items.forEach(function (item) {
//         array.push(item);
//     });
// }
//
// let a: any[] = [];
// push(a, 1, 2, 3);

//反转字符串或数值
function reverse(x: number | string): number | string | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""))
    } else if (typeof x === "string") {
        return x.split("").reverse().join("")
    }
}

let str = "hello"
let num = "123456"
console.log(reverse(str))
console.log(reverse(num))

// 重载
function reverse2(x: number): number
function reverse2(x: string): string
function reverse2(x: string | number): string | number | void {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""))
    } else if (typeof x === "string") {
        return x.split("").reverse().join("")
    }
}

console.log(reverse2("123"))
console.log(reverse2(8848))