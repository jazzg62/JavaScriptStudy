// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }
//
// function getName(animal: Cat | Fish) {
//     return animal.name;
// }

// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }
//
// function isFish(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.


// interface Cat {
//     name: string;
//
//     run(): void;
// }
//
// interface Fish {
//     name: string;
//     swim(): void;
// }
//
// function isFish(animal: Cat | Fish) {
//     return typeof (animal as Fish).swim === "function"
// }
//
// let myFish: Fish = {
//     name: "秋刀鱼",
//     swim() {
//         console.log(this.name + "会游泳")
//     }
// }
//
// let fish = isFish(myFish)
// console.log(fish)


// class ApiError extends Error {
//     code: number = 0;
// }
// class HttpError extends Error {
//     statusCode: number = 200;
// }
//
// function isApiError(error: Error) {
//     return typeof (error as ApiError).code === 'number';
// }
//
// console.log(isApiError(new ApiError()))
// console.log(isApiError(new HttpError()))


// window.foo = 1 //报错
// (window as any).foo = 1 //ok

// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }
//
// interface Cat {
//     name: string;
//     run(): void;
// }
//
// const tom = getCacheData('tom') as Cat;
// tom.run();


// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }
//
// let tom: Cat = {
//     name: 'Tom',
//     run: () => { console.log('run') }
// };
// let animal: Animal = tom;
//
// console.log(animal.name);
// (animal as Cat).run()



interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}