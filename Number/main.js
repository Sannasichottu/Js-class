//Number - int

const myNumber = 37
console.log(myNumber)
console.log(typeof(myNumber))


const myFloat = 42.0
console.log(myFloat)


console.log(myNumber === myFloat)

const myNumber1 = "42"
console.log(myFloat == myNumber1)   // value
console.log(myFloat === myNumber1) // value + datatype


//string to number
const myBook = "45"
console.log(myBook+ 5);


//convert to num
console.log(Number(myBook)+5)   // 45+5

console.log(Number("10")+25)  //10+25

console.log(Number("abc")+5)  // NaN - Not a Number

console.log(Number(undefined)+5) // NaN - Not a Number

console.log(Number(true)+5) // 1

console.log(Number(false)+5) // 0


//Number's Method

//isInt
console.log(Number.isInteger(42))


console.log(Number.isInteger(42.5))


//parseFloat
const myVar = "12.07"
console.log(Number.parseFloat(myVar))


//parseInt
const myVar1 = "12.7"
console.log(Number.parseInt(myVar1))

//toFixed
const myCode = "32.123456"
console.log(Number.parseFloat(myCode).toFixed(3))   //chaining method



//number to string

const myDev = 32
console.log(myDev.toString())
console.log(typeof myDev.toString())


//isNaN()
//Number.isNaN()

console.log(Number.isNaN(42))  


console.log(Number.isNaN("abc")) //data type + value


console.log(isNaN("abc"))   //value

//Math - pi

console.log(Math.PI)

//trunc - short (hole - previous)
console.log(Math.trunc(3.8))


//round
console.log(Math.round(5.5))


//floor
console.log(Math.floor(4.9))


//ceil
console.log(Math.ceil(7.1))

//pow
console.log(Math.pow(10,2))

//min
console.log(Math.min(14,52,68,1.5,65,1,75.8))


//max
console.log(Math.max(14,52,68,1.5,65,1,75.8))


//random
console.log(Math.floor(Math.random()*10000))


//console.log("tamilinfotechnology")


//let myName = "sannasi"