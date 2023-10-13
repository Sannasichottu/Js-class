// if - else

//syntax

// if(true) {
//     //code
// }else {
//     //code
// }

// let condition = false;
// if(condition) {
//     console.log("Condition: true")
// }else {
//     console.log("condition : false")
// }

// let weather = 'rainy'

// if (weather === 'cold') {
//     console.log("Weather is cold")
// }
// else {
//     console.log("weather is hot")
// }


// let isRainy = false;
// let isClody = true;

// if(isRainy || isClody) {
//     console.log("Don't forget to take umberlla")
// }
// else {
//     console.log("Sky is normal")
// }




//else-if

// 12am - 12pm -  gud mrg   - 0 - 12
//12pm -  5pm - gud aftr - 12 - 17
//5pm - 12am - gud ni8  - 17 -24

//new Date

// let hour = new Date();
// console.log(hour.getHours())



// let hour = new Date().getHours();
// if(hour >= 0 && hour <=11) {
//     console.log("say gud mrg")
// }
// else if (hour >=11 && hour <=15) 
// {
//     console.log("say gud aftr")
// }
// else if (hour >=15 && hour <= 18){
//     console.log("say gud eve")
// }
// else
//  {
//     console.log("say gud ni8")
// }

//swtich -case

//syntax

// switch (codition) {
//     case1 : 
//         //code
    
//     case2 :
//         //code
//     case3 :
//     //code
//     default :
// }

// a - super
//s - excellent
//m - excellent
//e - just pass
// - unkonwn



let grade = "m"

switch(grade) {
    case "a" : 
        console.log("super")
        break;
    case "m" :
    case "s" : 
        console.log("excellent")
        break;
    case "e" : 
        console.log("just pass")
        break;
    default : 
        console.log("unknown grade")
}























// operators

//arthmetic operators - > + - * /
//assignment =>    x = y ,   y =x

//comparison -> x= 5;
// y = 5 
// x == y

//logical oper ->x  && y(and)    x||y (or)   x!= y(not equal)