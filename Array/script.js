//Array []
const myArray = []

myArray[0] = "tamil";
myArray[1]=7;
myArray[2] = true
myArray[3] = 5

//push - last add

myArray.push("Dindigul")
console.log(myArray)

//pop - remove the last vale
myArray.pop()
console.log(myArray)

//unshift - first add
myArray.unshift(false)
console.log(myArray)

//shift - first remove
myArray.shift()
console.log(myArray)

//splice - add & remove
myArray.splice(2,0, "san", 52)
console.log(myArray)

//remove 
myArray.splice(3,2)
console.log(myArray)