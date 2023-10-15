///////////////////////6.2
/////////////(a)

// let i = 0
// do{
//     console.log(i);
//     i++
// }
// while(i <= 10)


// while(i < 10){
// console.log(i);
// i++;
// }

// let i=0

// do{
//     console.log(i);
//     i+=2
// }
// while(i<-10)

// do{
//     if (i % 2 === 0){
//         console.log(i);
//     }
//     i++
// }
// while(i <= 10)

/////////////////////////6.3

// let n;
// do{
//     console.log(n);
//     n = parseFloat(prompt("unesi broj"))
// }
// while(n * n >= 100)

///////////////////////6.4

// var n = parseInt(prompt("Unesi broj"))
// var p = 1;
// do{
//     console.log(p);
//     p *= 2;
// }
// while (p <= n)

/////////////////////6.8


// let x = parseInt(prompt("Unesi donju granicu:"))
// let y = parseInt(prompt("Unesi gornju granicu:"))
// let broj = x;

// do{
//     x = parseInt(prompt("Unesi donju granicu:"))
//     y = parseInt(prompt("Unesi gornju granicu:"))
// }
// while (x < 0 || y > 100)
// do{
//     if(broj % 4 === 0){
//         console.log(broj);
//     }
//     broj++;
// }
// while(broj <=y)

////////////////////6.9


let a = 100;
let b = 0;
let broj = 0;

do {
    if (a % 64 === 0) {
        b += a;
        broj++;
    }
    a++;
} while (a <= 999);

console.log("Suma = " + b);
console.log("Brojeva = " + broj);