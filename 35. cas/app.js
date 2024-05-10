


// for (let i = 0; i < brojClanova; i++) {
//     let broj = parseFloat(prompt("Unesi broj:"));
//     niz.push(broj);
// }

// let resParnih = 0;
// let resNeparnih = 0;

// niz.forEach((clan) => {
//     if (clan%2 === 0) {
//         resParnih += clan
//     }
//     else{
//         resNeparnih += clan
//     }
// })
// console.log(`Zbir parnih je: ${resParnih}, a neparnih je: ${resNeparnih}`);


////////////////10.11

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova:"));
// let niz = [];

// for (let i = 0; i < brojClanova; i++);{
    // let broj = parseFloat(prompt("Unesi broj:"));
    // niz.push(broj);
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova:"));
// let niz2 = [];

// for (let i = 0; i < brojClanova2; i++){
//     let broj = parseFloat(prompt("Unesi broj:"));
//     niz2.push(broj);
// }

// console.log(niz.concat(niz2));

// let n = 30;
// let nizA = []

// for(let i = 0; i <= n; i++){
//     nizA.push(i)
// }
// let nizB = []

// for(let i = 0; i <=n; i++){
//     nizB.push(i)
// }

// let nizC = []
// for(let i = 1; i<=n; i++){
//     pom = nizA[i] + nizB[i]
//     nizC.push(pom)
// }
// console.log(nizC)

/////////////////10.14

// let brojClanova = parseInt(prompt("Unesi broj:"));
// let niz = [];

// for (let i = 0; i < brojClanova; i++);{
//     let broj = parseFloat(prompt("Unesi broj:"))
//     niz.push(broj);
// }

// let brojClanova2 = parseInt(prompt("Unesi broj:"));
// let niz2 = [];

// for (let i = 0; i < brojClanova; i++);{
//     let broj = parseFloat(prompt("Unesi broj:"))
//     niz2.push(broj);
// }

// let niz3 = []
//     niz.forEach((el, i) => {
//         niz3.push(el + niz2[niz2.length - i - 1])
//     })
// console.log(niz3);


// 10.15. Саставити програм који учита елементе низа A A A A = ( 1 2 , ,..., n ) дужине n и низа
// B B B B = ( 1 2 , ,..., m ) дужине m, а затим формира и исписује низ С који се састоји од парних елемената
// низа А и низа В.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];
// brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// let niz3 = niz.concat(niz2).filter((clan) => {
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log(niz3);

// 10.16. Саставити програм који ће учитати два низа целих бројева А и В једнаких дужина n и на
// основу њих формирати низ С тако да i-ти елемент низа С буде једнак мањем од i-тих елемената низа
// А и В. Ако су i-ти елементи низа А и В једнаки онда i-ти елемент низа С треба да добије вредност
// нула. Исписати низ С.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let niz2 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz2.push(broj);
// }

// let niz3 = niz2.map((el, i) => {
//   if(el > niz[i]){
//     return niz[i]
//   }
//   else if(el === niz[i]){
//     return 0
//   }
//   else{
//     return el
//   }
// })

// console.log(niz3);
// 10.17. Саставити програм који за учитани низ целих бројева А дужине n формира и исписује два
// низа: низ В који садржи негативне елементе низа А и низ С који садржи позитивне елементе и нуле
// низа А.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];
// let niz2 = [], niz3 = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// for(let clan of niz){
//   clan >= 0 ? niz2.push(clan) : niz3.push(clan)
// }

// console.log(`Niz za pozitivne: ${niz2} i niz za negativne je: ${niz3}`);

// 10.18. Саставити програм који за унети низ реланих бројева А дужине n формира и исписује нови
// низ В кога чине елементи низа А који су већи од аритемтичке средине свих елемената низа А.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let suma = niz.reduce((a, b) => {
//   return a + b
// })

// let artSredina = suma / niz.length

// let niz2 = niz.filter((clan) => {
//   if(clan > artSredina){
//     return clan
//   }
// })

// console.log(niz2);


// 10.19. Саставити програм који за унети низ целих бројева А, дужине n, формира и исписује нови
// низ В чији се елементи формирају по следећем принципу: В0=А0, В1=А0+А1, В2=А0+А1+А2, ...,
// Bi=A0+A1+A2+...+Ai.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   niz.push(broj);
// }

// let pom = 0

// let niz2 = niz.map((clan) => {
//   pom += clan
//   return pom
// })

// console.log(niz2);



/////////////////10.22


// let n = parseInt(prompt("unesi broj clanova"));
// let niz =[];
// for (let i = 0; i < n; i++){
//     let broj = parseFloat(prompt("unesi broj"));
//     niz.push(broj);
// }

// function numberOfUnique(niz){
//     let set = new Set(niz)
//     console.log(set);

//     return set.size
// }

// let pom = niz.filter((value, index, self) => {
//     return self.indexOf(value) === index
// });

// console.log(pom);


// 10.23. Саставити програм за израчунавање статистике полагања испита која обухвата следеће
// функције: израчунавање укупне просечне оцене (сви који су полгали испит), израчунавање просечне
// оцене оних који су положили (оцена већа од 5),
// израчунавање броја који су положили испит,
// израчунавање броја који нису положили испит и израчунавање броја који имају оцену већу од
// просечне. У главном програму се уноси број студената и оцене студената у облику низа. Исписати
// добијене резултате

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

// function avgGrade(niz){
//   let suma = niz.reduce((a,b) => {
//     return a+b
//   })

//   return suma / niz.length
// }

// function avgGradeSuccess(niz){
//   return avgGrade(niz.filter(clan => {
//     if(clan > 5)
//     return clan
//   }))
// }

// function numOfSuccess(niz){
//   return niz.filter(clan => {
//     if(clan > 5)
//     return clan
//   }).length
// }

// function numOfFail(niz){
//   return niz.filter(clan => {
//     if(clan === 5)
//     return clan
//   }).length
// }

// function numOfAvgSuccess(niz){
//   let avg = avgGrade(niz)
//   return niz.filter((clan) => {
//     if(clan > avg){
//       return clan
//     }
//   }).length
// }

// console.log(avgGrade(main));
// console.log(avgGradeSuccess(main));
// console.log(numOfSuccess(main));
// console.log(numOfFail(main));
// console.log(numOfAvgSuccess(main));

// 10.24. Саставити функцију која генерише првих n чланова Фибоначијевог низа и функцију која
// исписује чланове низа, а затим те функције тестирати у главном програму.
// Фибоначијев низ: f1=1, f2=1, fi=fi-1+fi-2, i=3, 4, 5, ...

// let generateFibonaci = (n) => {
//   let niz = [1, 1];
//   for(let i = 2; i < n; i++){
//     niz.push(niz[i-1] + niz[i-2])
//   }
//   return niz
// }

// function ispisi(niz){
//   console.log(`Fibonacijev niz je: ${niz}`);
// }

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));

// let fibonaciNiz = generateFibonaci(brojClanova);

// ispisi(fibonaciNiz);

// 10.27. Саставити програм који за унети низ реалних бројева, дужине n, исписује елемент највеће
// вредности, као и његове позиције у низу.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

// jedno resenje:
// let max = 0;
// let pozicija = 0;
// for(let i = 0; i < main.length; i++){
//   if(main[i] > max){
//     max = main[i]
//     pozicija = i
//   }
// }

// drugo resenje:

// let max = Math.max(...main);

// let pozicija = main.indexOf(max)

// console.log(main);

// console.log(`Max element je: ${max}, a njegova pozicija je: ${pozicija}`);

// 10.28. Саставити програм који учита низ реалних бројева, дужине n, налази најмањи и највећи члан
// низа, xmin и xmax, и исписује све елементе низа који су мањи од xmax/2 и већи од xmin*2.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

// let max = Math.max(...main);
// let min = Math.min(...main);


// let nizOnajKojiTreba= main.filter((clan) => {
//   if(clan < max/2 && clan > min*2){
//     return clan
//   }
// })
// console.log(main);
// console.log(nizOnajKojiTreba);


// 10.29. Саставити програм који за унети низ целих бројева, дужине n, исписује елемент најмање
// вредности међу парним бројевима.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

//jedno resenje:
// main = main.filter((clan) => clan % 2 === 0)

// let min = Math.min(...main)

// console.log(min);

//drugo resenje:
// console.log(Math.min(...main.filter((clan) => clan % 2 === 0)));

// 10.30. Саставити програм који за унети низ целих бројева, дужине n, проналази и на екрану
// исписује елементе на парним позицијама и међу њима проналази онај који има максималну
// вредност. Минимална дужина низа је 2.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

// main.forEach((clan, i) => {
//   i % 2 === 0 && console.log(clan);
// })

// console.log(Math.max(...main.filter((clan, i) => i % 2 === 0)));


// 10.31. Саставити програм који исписује обавештење да ли учитани низ бројева одговара
// Фибоначијевом низу. Низ бројева који се уноси мора имати најмање три елемента.
// Фибоначијев низ: f1=1, f2=1, fi=fi-1+fi-2, i=3, 4, 5, ...


// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }

// let fibonacijevNiz = [1, 1];

// for (let i = 2; i < brojClanova; i++) {
//   fibonacijevNiz.push(fibonacijevNiz[i - 1] + fibonacijevNiz[i - 2]);
// }
// prvo resenje:
// let semafor = true

// main.forEach((clan, index) => {
//   if(clan !== fibonacijevNiz[index]){
//     semafor = false
//   }
// })

// semafor ? console.log("ovo jeste fibonacijev niz") : console.log("ovo nije fibonacijev niz");

//drugo resenje:

// if(fibonacijevNiz.join(',') === main.join(',')){
//   console.log("ovo jeste fibonacijev niz")
// }
// else{
//   console.log("ovo nije fibonacijev niz");
// }