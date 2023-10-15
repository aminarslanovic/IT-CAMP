////////////////////////////4.12
// let n = parseFloat(prompt("Unesi broj:"));
// let max = 0;

// for (let i=0; i<n; i++){
//     let broj = parseFloat(prompt(`Unesite ${i} element:`))
//     if(max<broj){
//         max = broj;
//     }
// }

// console.log(max);

////////////////////////4.13

// let s = 0;

// for (let i=1; i<=100; i++){
//     console.log("Brojevi deljivi sa 6:");
//     if(i%6 === 0){
//         s=s+i;
// console.log(i);
//     }
// }

// console.log("suma" +s);

////////////////////////4.14

// let a, b, c;
// for (let a = 1; a <= 9; a++) {
//     for (let b = 3; b <= 9; b++) {
//         for (let c = 4; c <= 9; c++) {
//             if (b === a + 2 && c === b + 1) {
//                 console.log(`${a}${b}${c}`);
//             }
//         }
//     }
// }

///////////////////////4.16

//  let a, b, c, broj;
// for (let a = 1; a <= 9; a++) {
//     for (let b = 0; b <= 9; b++) {
//         for (let c = 0; c <= 9; c++) {
//             let broj = 100 * a + 10 * b + c;
//             if (broj === ((10 * a + b) * (10 * a + b) - c * c)) {
//                 console.log(broj);
//             }
//         }
//     }
// }