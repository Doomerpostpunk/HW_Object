const original= {
    name: "Ivan",
    age:23
}
const copy=original;
console.log(original)
console.log(copy)
const copy2=Object.assign(original);
console.log(original)
console.log(copy2)
const copy3=JSON.parse(JSON.stringify(original))
console.log(original)
console.log(copy3)
const obj1={
    name:"Ivan",
    age:25
}
const obj2={
    name:"Ivan",
    age:25
}
const obj3={
    name:"Ivan",
    age:25
}
console.log(obj1===obj2)
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
console.log(Object.is(obj1,obj2));
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
Object.freeze(obj1);
obj1.age=23;
console.log(obj1)
Object.seal(obj2)
obj2.telephone=37523456;
console.log(obj2)
Object.preventExtensions(obj3)
obj3.home="egtk"
console.log(obj3)
console.log(Object.isFrozen(obj1))
console.log(Object.isSealed(obj2))
console.log(Object.isExtensible(obj3))