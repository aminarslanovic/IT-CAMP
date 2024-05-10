//10.23/
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


//10.24/

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

///////////////////fetch

// async function akikavasaki(){
// const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4aa3288058msh46793a4cd40d7eep1dd748jsn61f3ab26269a',
// 		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// akikavasaki()
