

// function myName (parametar1, parametar2){
//     return
//     //code
// }

// console.log(2+6)
// console.log(5+8)


// function num(){
//     var num1, num2 
//     num1 = 1;
//     num2= 5;
//     console.log(num1+num2)
// }
// console.log(num())

// function sum (num1, num2) {
//     return num1 + num2
// }
// console.log(sum(5,10))
// console.log(sum(2,2))



// tamil@gmail.com
//sannasi@gmail.com

// console.log("tamil@gmail.com".slice(0,"tamil@gmail.com".indexOf("@")))




// console.log("sannasi@gmail.com".slice(0,"sannasi@gmail.com".indexOf("@")))



// let myName = "tamilinfo"
// console.log(myName.indexOf("t"))

// console.log(myName.slice(0,5))



// function getMail(email){
//     return (email.slice(0,email.indexOf("@")))
// }

// console.log(getMail("dindigul@gmail.com"))
// console.log(getMail("madurai@gmail.com"))
// console.log(getMail("chennai@gmail.com"))

function toPropperCase (name) {
    return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}
console.log(toPropperCase("tamilInfo"))

// console.log("tamil".toUpperCase())
// console.log("SANNASI".toLowerCase())


//tamilInfo

const toPropperCase  = (name) => {
    return (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}
console.log(toPropperCase(

console.log(toPropperCase("sanNASI"))