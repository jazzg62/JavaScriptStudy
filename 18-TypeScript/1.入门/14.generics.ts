function createArray(length: number, value: any): Array<any> {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

let array = createArray(3, "x");
console.log(array)

//使用generics
function createArrayUseGenerics<T>(length: number, value: T): Array<T> {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

let array2 = createArrayUseGenerics<number>(3, 6)
console.log(array2)

//多个类型参数
//定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

let tuple: [string, number] = ["xxx", 666]
console.log(tuple)
let result = swap<string, number>(tuple);
console.log(result)

//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

interface Lengthwise {
    length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}

loggingIdentity({length: 5})

//泛型接口
//之前学习过，可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}
console.log(mySearch("apple", "e"))
//当然也可以使用含有泛型的接口来定义函数的形状：






