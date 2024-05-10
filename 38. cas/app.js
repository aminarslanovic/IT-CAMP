// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("#h2");
// // console.log(h1,innerText);

// h2.innerHTML = "<b>Hi</b>";

// window.alert("Hi");

// window.confirm("Are you sure?");

// window.prompt("What is your name?");

// h2.addEventListener("click", function () {
//     h1.innerText = "toljiko";
// })

// let forma = document.querySelector("form")

// forma.addEventListener("submit", function (event) {
// event.preventDefault();
// let input = document.querySelector("input");
// let p = document.createElement(p);
// p.innerText = input.value;
// document.body.appendChild(p);
// input.value = "";
// });

// let forma = document.querySelector("form");

// forma.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let input = document.querySelector('input');
//     let img = document.querySelector('img')
//     img.src = input.value
//     img.addEventListener('click', function () {
//         img.remove()
//     })
//     document.body.appendChild(img);
//     input.value = "";
// })

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("Promise resolved");
//     }, 3000);
// });

// promise.then(
//     function (value) {
//         console.log(value);
//     },
//     function (reason) {
//         console.log(reason);
//     }
// );

// let pom = {
//     employees: [
//       { firstName: "John", lastName: "Doe" },
//       { firstName: "Anna", lastName: "Smith" },
//       { firstName: "Peter", lastName: "Jones" },
//     ],
//   };

//   let text =
//     '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//   let obj = JSON.parse(text);

//////////////////////////

// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 3000);

//   console.log("two");

//   setTimeout(() => {
//     console.log("three");
//   }, 1000);
// }

// one();

// setInterval(() => {
//   console.log("nesto");
// }, 1000);

//////////////////////////

// let promise = new Promise(function (resolve, reject) {
//   // a mock async action using setTimeout
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 3000);
// });

// promise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (reason) {
//     console.log(reason);
//   }
// );

// https://catfact.ninja/fact

// //Get i Delete
// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
// }

// //Post i Put

// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
//   "body"= {
//     "fact": "A cat's tail contains nearly 10 percent of all the bones in its body.",
//     "length": 67
//   }
// }

// let data = {};

// fetch("https://catfact.ninja/fact")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res);
//     data = res;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let div = document.createElement("div");
// div.innerHTML = data.fact;

// document.body.appendChild(div);

// function showCatFacts(data) {
//     let div = document.createElement("div");
//     div.innerHTML = data.fact;
  
//     document.body.appendChild(div);
//   }
  
//   async function getCatFacts() {
//     try {
//       let data = await fetch("https://catfact.ninja/fact");
//       let res = await data.json();
//       console.log(res);
//       showCatFacts(res);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   getCatFacts();


// function showActivity(data) {
//     let div = document.createElement("div");
//     div.innerHTML = data.fact;
  
//     document.body.appendChild(div);
//   }
  
//   async function getActivity() {
//     try {
//       let data = await fetch("https://catfact.ninja/fact");
//       let res = await data.json();
//       console.log(res);
//       showActivity(res);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   getActivity();
