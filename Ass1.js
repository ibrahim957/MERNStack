//Obj Manipulation

let obj={
  name:"Ibrahim"
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