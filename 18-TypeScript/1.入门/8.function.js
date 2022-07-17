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
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [0];
push(a, 1, 2, 3);
