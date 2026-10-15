let score=33
console.log(typeof score);//number

let num="33"
console.log(typeof num);//string

let valueInNumber=Number(num)
console.log(typeof valueInNumber);//number

let val="33abc"
let valueInNumber1=Number(val)
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1);//NaN(not a number)

//"33"=33
//"33abc"=NaN
//true=1, False=0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true
//1=true, 0=false
//""=false, "rojalin"=true

let someNumber=33
let stringNumber=String(someNumber)
console.log( stringNumber);//33
console.log(typeof stringNumber);//string
