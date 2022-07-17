// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// function getLength(something: string | number): number {
//     return something.length;
// }

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

function getString(something: string | number): string {
    return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

let myFavoriteNumber: string | number;
//myFavoriteNumber is string
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
//myFavoriteNumber is number
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.