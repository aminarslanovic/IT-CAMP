// let i = 0
// do{
//     console.log(i);
//     i++
// }
// while(i <= 10)

// while(i < 10){
//     console.log(i);
//     i++;
// }

////////////////////////////////////6.2

// let i=0

// do{
//     console.log(i);
//     i+=2
// }
// while(i<=10)

// do{
//     if (i % 2 === 0){
//         console.log(i);
//     }

//     i++;
// }
// while(i <= 10)

//////////////////////////////////////////6.3

// let n;

// do{
//     n = parseFloat(prompt("Unesite broj:"))
// }
// while(n*n >= 100)

/////////////////////////////////////////6.4

// let n = parseInt(prompt("Unesite broj:"))
// let stepen = 0
// let broj = 2

// do{
//     console.log(Math.pow(broj, stepen));
//     stepen++;
// }
// while(Math.pow(broj, stepen) <= n)

///////////////////////////////6.8

// let x = parseInt(prompt("Unesite donju granicu:"));
// let y = parseInt(prompt("Unesite gornju granicu:"));

// let broj = x;

// do {
//   if (x < 0 || y > 100) {
//     x = parseInt(prompt("Unesite donju granicu:"));
//     y = parseInt(prompt("Unesite gornju granicu:"));
//     broj = x;
//   } else {
//     if (broj % 4 === 0) {
//       console.log(broj);
//     }
//     broj++;
//   }
// } while (broj <= y);

//////////////////////////////////////6.9

// let i = 100, suma = 0;

// do{
//     if(i % 64 === 0){
//         suma += i
//     }
//     i++
// }
// while(i <=999)

// console.log(suma);

/////////////////////////////////////////////6.10

// let n = parseInt(prompt("Unesite broj izmedju 0 i 10:"))
// let broj;
// let brojac = 0;

// if(n <= 0 || n >10)
// do{
//     n = parseInt(prompt("Unesite broj izmedju 0 i 10:"))
// }
// while(n <= 0 || n >10)

// do{
//     broj = parseInt(prompt("Unesite broj:"))
//     let pom = broj
//     while(pom > 10){
//         pom = Math.floor(pom/10)
//     }
//     if(pom === n)
//         brojac++;
// }
// while(broj != 0)

// console.log(brojac);

///////////////////////////////////////////////////////7.2

// let n;

// do{
//     n = parseFloat(prompt("Unesite broj:"))
//     if(n < 0) break;
//     console.log(n*n);
// }
// while(true)

// let n = parseFloat(prompt("Unesite broj:"))

// for(; true; ){
//     if(n < 0) break;
//     console.log(n*n);
//     n = parseFloat(prompt("Unesite broj:"))
// }

////////////////////////////////////////////7.3, map, filter, split, slice, splice, concat, join,

// let n;
// let output = "";

// for (let i = 0; i < 100; i++) {
//   n = parseInt(prompt("Unesite broj"));
//   if (n === 0)
//     break;
//   output += `${n}, `;
// }

// console.log(output);

///////////////////////////////////////////7.7

// for(let i = 1; i <= 100; i++){
//     let j = 2
//     for(; j <= i; j++){
//         if(i % j === 0) break;
//     }
//     if(i === j){
//         console.log(i);
//     }
// }

////////////////////////////////////////////7.20

// let slovo = prompt ("Unesi slovo")
// switch (slovo){
//     case "a":
//         case "e":
//         case "i":
//             case "o":
//                 case "u":
//                     console.log("samoglasnik");
//                     break;
//                     default:
//                         console.log("suglasnik");
//                         break;
//     }

///////////////////////////////////////////7.24

// let godina = parseInt(prompt("Unesite godinu: "));
// let mesec = parseInt(prompt("Unesite redni broj meseca: "));

// switch (mesec) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         console.log("31");
//         break;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         console.log("30");
//         case 2:
//             (godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0
//             ? console.log(29)
//             : console.log(28);

//             break;
//             default:
//               console.log("nije dobro");
//               break;
//     }

///////////////////////////////////////////7.25

// let dan = parseInt(prompt("Unesi dan: "));
// let mesec = parseInt(prompt("Unesi mesec: "));
// let godinu = parseInt(prompt("Unesi godinu"));
// let d = parseInt(prompt("Unesi d"));

// let niz = [1,2,3,4,5,6,7,8]

// for(let i = 0; i < niz.length; i++){
//     console.log("NESTO NESTO" + niz[i]);
//     if(niz[i] == 5) continue;
//     console.log(niz[i]*2);
// }

////////////////////////////////////7.9

// for(let i = 1; i<= 10; i++){
//     if(i%2) continue;
//     console.log(i);
// }

///////////////////////////////////7.11

// for(let i = 1; i<=20; i++){
//     if(i % 3 === 0) continue;
//     console.log(i);
// }

//////////////////////////////////7.12

// let suma = 0;

// while(true){
//     let n = parseFloat(prompt("Unesite broj:"))
//     if(n < 0) continue;
//     if(n === 0) break;
//     suma += 1 / (n * n)
//     console.log(suma);
// }

// console.log(suma);

/////////////////////////////////// SWITCH CASE

// let n = parseInt(prompt("Unesite broj:"));

// if(n === 1)
// console.log("ponedeljak");
// else if(n === 1)
// console.log("ponedeljak");
// else if(n === 1)
// console.log("ponedeljak");
// if(n === 1)
// console.log("ponedeljak");

// if(n===6 )

// switch (n) {
//   case 1:
//     console.log ("ponedeljak");
//     break;
//   case 2:
//     console.log("utorak");
//     break;
//   case 3:
//     console.log("sreda");
//     break;
//   case 4:
//     console.log("cetvrtak");
//     break;
//   case 5:
//     console.log("petak");
//     break;
//   case 6:
//     console.log("subota");
//     break;
//   case 7:
//     console.log("nedelja");
//     break;
//   default:
//     console.log("Nije dobar broj");
//     break;
// }

///////////////////////////////////////////7.20

// let slovo = prompt("Unesite slovo: ")

// switch (slovo){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Samoglasnik");
//         break;
//     default:
//         console.log("Suglasnik");
//         break;
// }

///////////////////////////////////7.22

// let a = parseFloat(prompt("Unesite broj a:"));
// let b = parseFloat(prompt("Unesite broj b:"));
// let znak = prompt("Unesite znak:");

// switch (znak) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Nije dbr");
//     break;
// }

//////////////////////////////////////7.24

// let godina = parseInt(prompt("Unesite godinu: "));
// let mesec = parseInt(prompt("Unesite redni broj meseca: "));

// switch (mesec) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//   case 2:
    // (godina % 4 === 0 && godina % 100 !== 0) || godina % 400 === 0
    //   ? console.log(29)
    //   : console.log(28);
      
//     break;
//   default:
//     console.log("Nesto nije dobro");
//     break;
// }

//////////////////////////////////////////////

// for(let i=1; i<=10; i++){
//   console.log("NEKA PORUKA");
//   if(i === 5) continue;
//   console.log(i);
// }

//////////////////////////////////////////7.11

// for(let i=1; i<=20; i++){
//   if(i % 3 === 0) continue;
//   console.log(i);
// }

// let pom1 = 3;
// let pom2 = "3"

// console.log(pom1 === pom2);

/////////////////////////////////////////////

// let slovo = prompt("Unesite slovo:")

// switch (slovo) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("samoglasnik");
//     break;
//   default:
//     console.log("suglasnik");
//     break;
// }

///////////////////////////////////////7.24

// let godina = parseInt(prompt("Unesite godinu:"))
// let mesec = parseInt(prompt("Unesite mesec:"))

// switch (mesec){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30");
//     break;
//   case 2:
//     if((godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0)){
//       console.log("29");
//     }
//     else {
//       console.log("28");
//     }
//     break;
//   default:
//     console.log("mesec nije dobar");
//     break;
// }

///////////////////////////7.25


// let godina = parseInt(prompt("Unesite godinu:"))
// let mesec = parseInt(prompt("Unesite mesec:"))
// let dan = parseInt(prompt("Unesite dan:"))

// let d = 0;

// switch (mesec){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     // console.log("31");
//     d = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     // console.log("30");
//     d = 30;
//     break;
//   case 2:
//     if((godina % 4 === 0 && godina % 100 !== 0) || (godina % 400 === 0)){
//       // console.log("29");
//       d = 29
//     }
//     else {
//       // console.log("28");
//       d=28
//     }
//     break;
//   default:
//     console.log("mesec nije dobar");
//     break;
// }


// if(dan === d){
//   dan = 1;
//   mesec++;
// }
// else{
//   dan++;
// }
// if(mesec > 12){
//   mesec = 1;
//   dan = 1;
//   godina ++;
// }

// console.log(dan, mesec, godina);


////////////////////////////////

