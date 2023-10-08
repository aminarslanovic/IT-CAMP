/////////primer razlozene for

// let i = 0;

// for( ; i < 5; ){
//     i++;
// }

// let j = 0;

// while(j < 5){
//     j++
// }

////////////////////5.7 a)

// let fp = 1, fpp = 1;

// let n = parseInt(prompt("Unesite broj elemenata:"))

// let rowOutput = '1 1 ';

// let i = 3, suma = 2;

// while(i <= n){
//     let pom = fp + fpp
//     rowOutput += `${pom} `
//     fp = fpp;
//     fpp = pom;
//     suma += pom
//     i++
// }
// console.log(rowOutput, suma);

//////////////////5.8

// let n = parseInt(prompt("Unesite element:"))
// let a = parseInt(prompt("Unesite stepen elemnta:"))

// // console.log(Math.pow(n, a));
// let i = 0, proizvod = 1;

// while(i<a){
//     proizvod *= n
//     i++
// }

// console.log(proizvod);

//////////////////5.9

// let suma = 0, iterator = 0;

// let stop = parseFloat(prompt("Unesite broj:"))

// while(stop !== 0){
//     suma+= stop
//     stop = parseFloat(prompt("Unesite novi broj:"))
//     iterator++
// }

// console.log(suma / iterator);

////////////////5.10


// let suma = 0, iterator = 0;

// let stop = parseFloat(prompt("Unesite broj:"))

// while(stop !== 0){
//     if(stop >= 2 && stop <= 6){
//         suma+= stop
//         iterator++
//     }

//     stop = parseFloat(prompt("Unesite novi broj:"))
// }

// console.log(suma / iterator);


///////////////5.12

// let n = parseInt(prompt("Unesite n:"))
// let m = parseInt(prompt("Unesite m:"))

// if(m > n){
//     [m, n] = [n, m]
//     // let pom = m;
//     // m = n;
//     // n = pom
// }

// let i = m, suma = 0;

// while(i <= n){
//     if(i % 2 === 1){
//         suma += Math.sqrt(i)
//     }
//     i++
// }

// console.log(suma);

///////////////5.18


// let n = parseInt(prompt("Unesi broj:"))

// let suma = 0;

// let pom=n;

// while(pom >= 1){
//     suma += pom % 10
//     pom = Math.floor(pom/10)
// }

// if(n % suma === 0){
//     console.log("deljivo");
// }
// else{
//     console.log("nedeljivo");
// }

///////////////5.19


// let n = parseInt(prompt("Unesi broj:"))

// let obrnuto = 0;

// while(n > 0){
//     obrnuto = obrnuto+10 + n%10
//     n = Math.floor(n/10) 
// }

// console.log(obrnuto);

///////////////5.20

// let n = parseInt(prompt("Unesi broj:"))

// for (let k = 2; k <= n; k++) {
//     while (n % k === 0) {
//       console.log(k);
//       n /= k;
//       }
//     }


///////////////5.21

// let n = parseInt(prompt("Unesi broj:"))

// for (let a = 1; a <= 20; a++) {
//     for (let b = 1; b <= 20; b++) {
//       let zbir = a * a + b * b;
//       let c = 1;
//       while (c * c <= zbir) {
//         if (c * c === zbir) {
//           console.log(`a=${a} b=${b} c=${c}`);
//         }
//         c++;
//       }
//     }
//   }

