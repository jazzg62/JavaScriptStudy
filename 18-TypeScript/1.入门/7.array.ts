// let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci2: number[] = [1, '1', 2, 3, 5];
// fibonacci.push(8)
// fibonacci.push('8')

// let fibonacci: Array<number> = [1, 1, 2, 3, 5];
// fibonacci.push(8)
// fibonacci.forEach(item=>console.log(item))

interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// function sum() {
//     let args: number[] = arguments;
// }

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.


function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}