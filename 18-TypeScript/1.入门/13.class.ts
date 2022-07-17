class Person {
    name: string
    age: number
    readonly msg = '人类'

    show(obj: any = this) {
        console.log(`${obj.name}今年${obj.age}岁`)
    }

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const p = new Person("Lucy", 18)
// p.msg = "da"//no
console.log(p.name)
console.log(p.age)
console.log(p.msg)
p.show()

//继承
class SuperMan extends Person {
    fly: () => void

    constructor(name: string, age: number, fly: () => void) {
        super(name, age);
        this.fly = fly
    }
}


let sm: SuperMan = new SuperMan("Nio", 30, () => {
    console.log("超人会飞")
})
sm.fly()

//实现
interface Flyable {
    fly: () => void
}

class Bird implements Flyable {
    public fly(): void {
        console.log("fly~~")
    }
}

class Chick extends Bird {

}

new Bird().fly()

//类兼容
class A {
    x: number = 0
    y: number = 0
}

class B {
    x: number = 0
}

let a: A
let b: B
// a = b
// b = a

//函数兼容
interface Obj1 {
    x: string
}

interface Obj2 {
    y: string
}

type F1 = (arr: any[]) => Obj1
type F2 = (arr: any[], index: number) => void
let f1: F1
let f2: F2
// f2 = f1

//交叉类型
type Obj1And2 = Obj1 & Obj2

let myObj: Obj1And2 = {
    x: "aaa", y: "bbb"
}
console.log(myObj.y);






