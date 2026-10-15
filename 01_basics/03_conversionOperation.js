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

//******************operations****************

let a=4
let negval=-a
console.log(negval);//-4

//console.log(2+2) //4
//console.log("2"+"2") //22
//console.log(2+"2") //22
//console.log("2"+2) //22
//console.log("1"+2+2) //122
//console.log(1+2+"2") //32


//console.log(2-"2") //0
//console.log("2"-"2") //0
//console.log(2-"") //2
//console.log("" - 2) //-2

//console.log(true+true) //2
//console.log(false+true) //1
//console.log(false+false) //0
//console.log(true+) //error
//console.log(+true) //1
//console.log(+"") //0

let str1="Hello"
let str2="World"
let str3=str1+str2
console.log(str3);//HelloWorld

let  num1,num2,num3
num1=num2=num3=2+2
console.log(num1,num2,num3);//4 4 4

let gameCounter=100
gameCounter++ ;//101
//gameCounter-- ;//99
//gameCounter+=10 ;//110
//++gameCounter ;//101
console.log(gameCounter);//101


