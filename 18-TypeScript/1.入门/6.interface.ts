// interface Person {
//     name: string
//     age: number
//     height?: number //可选属性
//     show: object
// }
//
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     show: function () {
//         console.log(`my name is ${this.name}, ${this.age}-year-old`)
//     }
// }


// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
//
// let tom: Person = {
//     name: 'Tom',
//     age:25,
//     gender: 'male',
// };



interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.name = 'Lucy';
// tom.id = 9527;
