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

//////////////4.14.//////////////

// let a, b, c, broj;
// console.log("Armstrongovi brojevi:");
// for (let a = 1; a <= 9; a++) {
//     for (let b = 0; b <= 9; b++) {
//         for (let c = 0; c <= 9; c++) {
//             let broj = 100 * a + 10 * b + c;
//             if (broj === Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) {
//                 console.log(broj);
//             }
//         }
//     }
// }

/////////////4.15.//////////////

// let a, b, c, broj;
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

//////////////4.16./////////////

// let a, b, c, broj, dvocif;
// console.log("Brojevi:");
// for (let a = 1; a <= 9; a++) {
//     for (let b = 0; b < 9; b++) {
//         for (let c = 0; c < 9; c++) {
//             let broj = 100 * a + 10 * b + c;
//             let dvocif = 10 * a + c;
//             if (broj % dvocif === 0) {
//                 console.log(broj);
//             }
//         }
//     }
// }

/////////////4.17./////////////

// let a, b, c, s=0, br, n=0;
// for (let a = 1; a <= 9; a++) {
//     for (let b = 0; b < 9; b++) {
//         for (let c = 0; c < 9; c++) {
//             let br = 100 * a + 10 * b + c;
//             if (a + b + c === 5) {
//                 n++;
//                 s += br;
//             }
//         }
//     }
// }

// console.log("Suma: " + s);
// console.log("Ukupno brojeva: " + n);

//////////////4.18.////////////

// let broj = parseInt(prompt("Unesi broj:"))
// console.log("Delioci su: ");
// for(let i = 1; i <= broj; i++){
//     if(broj % i === 0){
//         console.log(i);
//     }
// }

/////////////4.19.////////////

// let broj = parseInt(prompt("Unesi broj n"))

// let suma = 0

// for(let i = 1; i < broj; i++){
//     if(broj % i === 0)
//         suma += i;{
//     }   
// }
// if(suma === broj){
//     console.log("Broj je savrsen:");
// }
// else{
//     console.log("bslkmgre");
// }

///////////////4.20.////////////

// let n = parseInt(prompt("Unesi broj"))
// let suma = 0;
// let jedinica = 0;

// for(let i = 1; i <= n; i++){
//     let ocena = parseInt(prompt("Unesite ocenu ucenika", i))
//     suma += ocena;

//     if(ocena === 1){
//         jedinica++;
//     }
// }
// console.log(`Prosecna ocena je ${suma / n}`);
// console.log(`Broj jedinica je ${jedinica}`);

////////////////4.21./////////////

