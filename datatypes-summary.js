//primitive

//7 types of primitive data types in JavaScript :
//string,number,boolean,,null,undefined,symbol,bigint

const score=100
const scoreValue=100.3

const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false

const bigNumber=9007199254740991n


//reference(non-primitive)
//array,objects,functions

const heros=['shaktiman','naagraj','doga']
let myObj={
    name:"rojalin",
    age: 21,
}

const myFunc = function (){
    console.log("hello world");
}
console.log(typeof myFunc) //function
console.log(typeof scoreValue) //number
console.log(typeof myObj) //object