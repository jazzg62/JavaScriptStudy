type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n
    } else {
        return n()
    }
}

function funName(): string {
    return "Tom"
}

const myName: string = "Lucy"

console.log(getName(funName))
console.log(getName(myName))