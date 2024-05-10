// // // // // // // // // 10.30. Саставити програм који за унети низ целих бројева, дужине n, проналази и на екрану
// // // // // // // // // исписује елементе на парним позицијама и међу њима проналази онај који има максималну
// // // // // // // // // вредност. Минимална дужина низа је 2.

// // // // // // // // // let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// // // // // // // // // let main = [];

// // // // // // // // // for (let i = 0; i < brojClanova; i++) {
// // // // // // // // //   let broj = parseFloat(prompt("Unesite broj:"));
// // // // // // // // //   main.push(broj);
// // // // // // // // // }

// // // // // // // // // main.forEach((clan, i) => {
// // // // // // // // //   i % 2 === 0 && console.log(clan);
// // // // // // // // // })

// // // // // // // // // console.log(Math.max(...main.filter((clan, i) => i % 2 === 0)));


// // // // // // // // // 10.31. Саставити програм који исписује обавештење да ли учитани низ бројева одговара
// // // // // // // // // Фибоначијевом низу. Низ бројева који се уноси мора имати најмање три елемента.
// // // // // // // // // Фибоначијев низ: f1=1, f2=1, fi=fi-1+fi-2, i=3, 4, 5, ...


// // // // // // // let brojClanova = parseInt(prompt("Unesi broj"))
// // // // // // // let main = []

// // // // // // // for(let i = 0; i < brojClanova; i++){
// // // // // // //    let broj = parseFloat(prompt("Unesi broj"))
// // // // // // //    main.push(broj)
// // // // // // // }

// // // // // // // let fibonacijevNiz = [1,1]

// // // // // // // for(let i = 2; i < brojClanova; i++){
// // // // // // //   fibonacijevNiz.push(fibonacijevNiz[i-1] + fibonacijevNiz[i-2])

// // // // // // // }
// // // // // // // let semafor = true

// // // // // // // main.forEach((clan , index) => {
// // // // // // //   if(clan != fibonacijevNiz[index])
// // // // // // //   semafor = false
// // // // // // // })

// // // // // // // semafor ? console.log('ovo jeste fibonacijev niz') : console.log(`ovo nije`);

// // // // // // // // //drugo resenje:

// // // // // // // if(fibonacijevNiz.join(',') === main.join(',')){
// // // // // // //   console.log("ovo jeste fibonacijev niz")
// // // // // // // }
// // // // // // // else{
// // // // // // //   console.log("ovo nije fibonacijev niz");
// // // // // // // }


// // // // // // 10.32

// // // // // // // var brojac = parseInt(prompt("Unesi broj"))
// // // // // // // var niz = [];

// // // // // // // for(var i = 0; i < brojac; i++){
// // // // // // //    var broj = parseFloat(prompt("Unesi broj"))
// // // // // // //    niz.push(broj)

   
// // // // // // // }
// // // // // // // var otb =  parseFloat(prompt("Unesi broj koji hoces"))
   
 
// // 10.33


// // var brojac = parseInt(prompt("Unesi broj"))
// // var niz = [];

// // for(var i = 0; i < brojac; i++){
// //    var broj = parseFloat(prompt("Unesi broj"))
// //    niz.push(broj)}

// // let finder = parseInt(prompt("Izaberi broj"))

// // let filter = niz.filter(function(broj1){
// //     return broj1===finder

    

// // })
// // if(filter.length > 0){
// // let mesto = niz.indexOf(finder)
// // let trazenii = finder

// // console.log(`Trazeni broj:${trazenii} je na poziciji ${mesto + 1}`);
// // }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..


// // // // // // // var filter = niz.filter(function(broj1){
// // // // // // //   return broj1 === otb})



// // // // // // // var brojElemenata = brojac
// // // // // // // var brojponavljanja = filter.length







// // // // // // // console.log(`Broj elemenata je : ${brojElemenata}`);
// // // // // // // console.log(`niz : ${niz}`);
// // // // // // // console.log(`Trazeni broj : ${otb}`);
// // // // // // // console.log(`broj ponavljanja ${brojponavljanja}`);



// // // // // // 10.34>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// // // // // let brojElemenata = parseInt(prompt("Unesi broj elemenata"));
// // // // // let niz = [];

// // // // // for (let i = 0; i < brojElemenata; i++) {
// // // // //     let broj = parseFloat(prompt("Unesi broj"));
// // // // //     niz.push(broj);
// // // // // }

// // // // // let kopijaNiza = niz.slice()

// // // // // let obrnuti = [...niz].reverse();

// // // // // console.log(kopijaNiza);
// // // // // console.log(obrnuti);

// // // // 10.35 >>>>>>>>>>>>>>>>>>

// // // // function ciklicnoPomeranje(niz) {
// // // //  let pomeranje = niz.length;
// // // //  let prviElement = niz[0]

// // // //  for(let i = 0; i < pomeranje; i++){
// // // //     niz[i] = niz[i+1]

// // // //  }
// // // //  niz[pomeranje -1] = prviElement

// // // // }


// // // // let brojElemenata = parseInt(prompt("Unesi broj elemenata"));
// // // // let niz1 = [];

// // // // for (let i = 0; i < brojElemenata; i++) {
// // // //     let broj = parseFloat(prompt("Unesi broj"));
// // // //     niz1.push(broj);
// // // // }

// // // // console.log(niz1);

// // // //  ciklicnoPomeranje(niz1)

// // // // console.log(niz1);

// // // // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 10.36
// // // // function ciklicnoPomeranje(niz, x) {
// // // //  let pomeranje = niz.length;
// // // //  x = x % pomeranje;
 
// // // //  for(let i = 0; i < x; i++){
// // // //     let prviElement = niz.shift();
// // // //     niz.push(prviElement);
// // // //  }

// // // // }


// // // // let brojElemenata = parseInt(prompt("Unesi broj elemenata"));
// // // // let niz1 = [];

// // // // for (let i = 0; i < brojElemenata; i++) {
// // // //     let broj = parseFloat(prompt("Unesi broj"));
// // // //     niz1.push(broj);
// // // // }

// // // // console.log(`uneti niz ${niz1}`);

// // // // let koraci = parseInt(prompt('Unesite broj koraka'))
// // // // ciklicnoPomeranje(niz1, koraci)


// // // // console.log(`rotirani niz ulevo  ${koraci} koraka: ${niz1}`);


// // // // 10.37 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // // function ciklicnoPomeranje(niz ) {
// // //  if(niz.length % 2 === 0){
// // //    for(let i = 0; i < niz.length; i += 2){
// // //     let mesta = niz[i];
// // //     niz[i] = niz[i+1];
// // //     niz[i+1] = mesta
// // //    }
// // //  }
// // // }
// // // let brojElemenata = parseInt(prompt("Unesite broj elemenata"));
// // // let niz1 = [];

// // // for (let i = 0; i < brojElemenata; i++) {
// // //   let broj = parseFloat(prompt("Unesite broj"));
// // //   niz1.push(broj);
// // // }

// // // ciklicnoPomeranje(niz1)

// // // console.log(niz1);

// // 10.38 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// // let brojElemenata = parseInt(prompt("Unesite broj elemenata"));
// // let niz1 = [];

// // for (let i = 0; i < brojElemenata; i++) {
// //   let broj = parseFloat(prompt("Unesite broj"));
// //   niz1.push(broj);
  
// // }
// //  let obicni = [...new Set(niz1)]

// //  console.log(obicni);

//////////10.42

// let n = parseInt(prompt("unesi broj"));
// let niz = [];
// for (let i = 0; i < n; i++){
//     let broj = parseFloat(prompt("unesi cifru"));
//     niz.push(broj);
// }

// let broj = parseFloat(prompt("Unesite broj koji zelite da ubacite"));

// for (let i = 0; i < main.length; i++){
//     if(main(i) > broj){
//         main.splice(i, 0, broj)
//         break;
//     }
// }

// console.log(main);

///////////10.43

// let n = parseInt(prompt("unesi broj"));
// let niz = [];
// for (let i = 0; i < n; i++){
//     let broj = parseFloat(prompt("unesi cifru"));
//     niz.push(broj);
// }

//////////////10.44

let n = parseInt(prompt("unesi broj"));
let niz = [];
for (let i = 0; i < n; i++){
    let broj = parseFloat(prompt("unesi cifru"));
    niz.push(broj);
}
niz = niz.sort()
