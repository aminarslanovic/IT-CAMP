//////////////2.26

// let xa = 1, ya = 1, xb = 4, yb = 1, xc = 2, yc = 5;

// let a = Math.sqrt(Math.pow(xb - xc, 2) + Math.pow(yb - yc, 2), 2)
// let b = Math.sqrt(Math.pow(xc - xa, 2) + Math.pow(yc - ya, 2), 2)
// let c = Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2), 2)


// let s = (a + b + c) / 2

// let p = Math.sqrt(s * (s - a) * (s - b) * (s - c))

// console.log(p);

////////////////////////2.27

// let broj = parseInt(prompt("unesite trocifreni broj"))

// let a = Math.floor(broj/100)
// let b = Math.floor(broj/10)%10
// let c = Math.floor(broj%10)

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a+b+c)

////////////////////2.28

// let n = parseInt(prompt("Unesite broj:"))

// let n500 = Math.floor(n / 500)
// let n100 = Math.floor((n % 500) / 100)
// let n1 =  n % 100

// console.log(n500, n100, n1);


//////////////////////2.29

// let radijani = parseFloat(prompt("Unesite broj:"))

// radijani = radijani * 180 / Math.PI

// let stepeni = Math.floor(radijani)

// radijani = radijani - stepeni

// let minuti = Math.floor(radijani* 60)

// console.log(radijani)

// console.log(stepeni, minuti, sekunda);

// let x = 5

// let y = 4

// console.log(x&y);
// console.log(x|y);
// console.log(x>>y);
// console.log(x<<y);

/////////////////////////////////////////3.13

// let a = parseFloat(prompt("Unesite a"))
// let b = parseFloat(prompt("Unesite b"))
// let c = parseFloat(prompt("Unesite c"))
// let p = 0;
// let s = 0;

// if(a+b>c || b+c>a || c+a>b){
//     s = (a+b+c)/2
//     p = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// }
// console.log(p || "ne moze da se napravi trougao");

/////////////////////////////////////4.5

// let n = parseFloat(prompt("Unesite zeljeni broj elemenata:"))
// let suma = 0;

// for(let i=0; i<n;i++){
//     let broj = parseFloat(prompt(`Unesite ${i+1} element:`))
//     suma += broj
// }

// console.log(`Suma je: ${suma} a srednja vrednost je: ${suma/n}`);

//////////////////////////////////4.6

