//Obj Manipulation

let obj={
  name:"Ibrahim",
  age: 20
}

//copy an obj
let obj1= new Object(obj);
console.log(obj1);

//merge two or more objs into 1
let obj2={
  age:21
}
let obj3=Object.assign(obj,obj2);
console.log(obj3)

//define properties of objs

const obj4 =  {};

Object.defineProperties(obj4, {
  weight: {
    value: 110,
    writable: true
  },
   property2 : {}
});
console.log(obj4.weight);

//to make sure that an objects properties can not be changed

Object.freeze(obj4)

obj4.weight=120

console.log(obj4.weight)

// return an array of objects properties in [key,value] format

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`)
}

// to turn key value pairs into objects

let keyValues = new Map([
  ['Name', 'Ibrahim'],
  ['Age', 21]
])

let obj5 = Object.fromEntries(keyValues)

console.log(obj5)

// to get an object describing property of another object

let dis = Object.getOwnPropertyDescriptor(obj, 'name')

console.log(dis.configurable)

console.log(dis.value)

//obj describing all properties of another obj

dis=Object.getOwnPropertyDescriptors(obj)

console.log(dis.name.writable)

console.log(dis.age.value)

// get name of properties in an array

console.log(Object.getOwnPropertyNames(obj5))

// another method to get names

console.log(Object.keys(obj))

// to get values of properties

console.log(Object.values(obj))

//check if two properties are same

console.log(Object.getPrototypeOf(obj) === obj1);

// determine if 2 values are same or not 

console.log(Object.is(25, 254))

// check if new properties can be added to an object

console.log(Object.isExtensible(obj))

// to prevent extension

Object.preventExtensions(obj)

// check if obj is frozen or not

console.log(Object.isFrozen(obj))

// check if object is sealed or not 

console.log(Object.isSealed(obj))

//to seal an object

Object.seal(obj)

// check if a property is in an obj

console.log(obj.hasOwnProperty('name'))

// to check if an object exists in another object's prototype chain

console.log(obj.isPrototypeOf(obj1))

// to check if a property of an object in enumerable(objects own property)

console.log(obj.propertyIsEnumerable('age'))



// ARRAY MANIPULATION 


let arr=["a","b","c","d"]

console.log(arr);

//to iterate array

arr.forEach(function(item,index){
  console.log("index "+index+" = "+item)
})

//to add an item at the end of an array

arr.push("e")

console.log("After pushing e, arr= "+arr)

//to remove an item from the end of an array

arr.pop()

console.log("After poping, arr= "+arr)

//to remove the left most item in an array

arr.shift()

console.log("After shifting, arr= "+arr)

//to add an item to the left most index of an array

arr.unshift("a")

console.log("After unshifting a, arr= "+arr)

// to find index of a specific item

console.log("index of b = "+arr.indexOf("b"))

// to remove items from an array with index

arr.splice(3,3)

console.log(arr)

// to copy an array

let arr2=arr.slice(0,3)

console.log("Coppied array = "+arr2)

// to make copy of an array but also making some changes to its contents

let arr3=arr.map(function(item,index){
  return(item=" A ")
})

console.log("The new array is = "+arr3)

//concat 

arr.concat(1)

console.log(arr)

//to concat an array with another array and return it

let arr4=arr.concat(arr2)

console.log(arr4)

//copies a item of array to another location

console.log(arr.copyWithin(0,1))

arr[0]="a"

//checks every index of array and returns true only if all the elements pass test

const notA = (currentValue) => currentValue != "a"

console.log(arr.every(notA))

// fill array with a given value

console.log(arr4.fill("aa", 0, 4))

//to filter out data you do not need into a new array

let result = arr4.filter(word => word.length >= 2)

console.log(result)

// join all elements of an array into a string

console.log(arr.join());

// to reduce an array into one number through any mathimatic mean
 //left to right

let array2 = [1, 2, 3, 4]

const reducer = (res, currentValue) => res + currentValue // currentValue = keyword

console.log(array2.reduce(reducer))

//reverse an array

console.log(array2.reverse())

//some function gives true if any one of the items of array meet test req

const even = (element) => element % 2 === 0

console.log(array2.some(even))

// represent array into string

console.log(array2.toString())

// sort an array

console.log(array2.sort())

// makes a new array which has values of every index of array

let a = array2.values()
for (let value of a) {
  console.log(value);
}
