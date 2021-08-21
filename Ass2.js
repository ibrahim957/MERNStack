// Arr Destructuring

//simple let

let a, b

[a, b] = [10, 20]

console.log(a,b)

// same method but with array

let arr = [1, 2, 3, 4, 5]

let [c, d] = arr

console.log(c,d)


//rest operator

let rest

[a, b, ...rest] = arr

console.log(rest)

// we can add default value

let [e=2, f=9] = [1]
console.log(e,f)

// swap variables

console.log(a,b)

[a, b] = [b, a]

console.log(a,b)

// assign values from an array returned from a function

function fun() {
  
  return [1, 2 , 3]
  
}

let g,h

[g,h] = fun()

console.log(g,h)


// you can also ignore some values such as

[g, ,h] =fun()

console.log(g)

//

// i did not understand how this works "Unpacking values from a regular expression match"
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"

// OBJ Destructuring

// basic assignment
let obj = {
    name : "Ibrahim",
    age : 21
}

let {name,age} = obj;

console.log(name,age)

//Assignment without declaration

let l, i;

({l, i} = {l: 1, i: 2})

console.log(l,i)

//Assigning to new variable names

let obj2 = {p: "Ibrahim", q: 21}

let {p: n, q: ag} = obj2

console.log(n,ag)

// default values

let {j = 10, k = 5} = {j: 3}

console.log(j,k)

//assigning to new variables with default values

let {m: aa = 10, n: bb = 5} = {m: 3}

console.log(aa,bb)

//Unpacking fields from objects passed as a function parameter

let obj3= {
  age: 21,
  displayName: 'IAKS',
  fullName: {
    firstName: 'Ibrahim',
    lastName: 'Sherwani'
  }
}

function getAge({age}){
  return age
}

function getName({displayName,fullName : {firstName : first, lastName :last}}){
  return `${displayName} is ${first} ${last}`;
}

console.log(getAge(obj3),getName(obj3));

//Setting a function parameter's default value
//did not understand how this works
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});

//Nested object and array destructuring
//did not understand how this works
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

//For of iteration and destructuring

let data=[
  {
    name: 'Ibrahim',
    address: {
      street:'24',
      house:'21'
    },
    age: 21
  },
  {
    name: 'Ahmad',
    address: {
      street:'23',
      house:'432'
    },
    age: 12
  }
];
for (let {name: na, address: {street: st,house: hn}} of data) {
  console.log('Name: ' + na + ', Address: ' + st+' , '+hn)
}

//Invalid JavaScript identifier as a property name

let invalid = { 'inv-inv': 1 }
let { 'inv-inv': valid } = invalid
//if we try console.log(inv.inv-inv) then we will get error
console.log(valid);

// Combined Array and Object Destructuring if u want some specific index.
let agess = [
  { id: 1, ages:20},
  { id: 2, ages:21},
  { id: 3, ages:22}
]

let [,, { ages }] = agess

console.log(ages)

