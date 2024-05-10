// 1.Šta je JavaScript i koje je osnovno namena ovog jezika u web developmentu?
// JavaScript je skriptni ili programski jezik koji nam omogucava implementaciju slozene funkcije na veb stranicama, on se isto koristi pri izradi web stranice uz CSS i HTML
// 2.Kako deklarišete varijable u JavaScript-u i koje su osnovne vrste podataka koje podržava?
// Deklarisemo sa var, let, i const on podrzava boolean, null, undefined, number, bigint, string, symbol and object
// 3.Šta je razlika između "==" i "===" operatora u JavaScript-u?
// == se koristi za poredjenje dve promenljive ali ignorise tip podataka promenljive, === se koristi za poredjenje dve promenljive ali ovaj operator takodje proverava tip podataka i uporedjuje dve vrednosti, takodje proverava jednakost dva operanda ne uzimajuci u obzir njihov tip isto
// 4.Kako se koristi "if" i "else" naredba za kontrolu toka programa u JavaScript-u?
// if koristimo da navedemo blok koda koji treba da se izvrsi, ako je odredjeni uslov tacan, else koristimo da navedemo blok koda koji treba da se izvrsi, ako je isti uslov netacan. a else if koristimo da navedemo novi uslov za testiranje ako je prvi uslov netacan.
// 5.Objasnite koncept funkcija u JavaScript-u i napišite primer jednostavne funkcije.
// JavaScript funkcija je blok koda dizajniran da izvrsi odredjeni zadatak.
// function test() {
    // console.log("test");
// }
// test();

// 6.Kako koristite petlje (npr. "for" petlju) u JavaScript-u i dajte primer.
// koriste se za ponavljanje odredjenog bloka koda dok je odredjeni uslov ispunjen, jedna od najcesce koriscenih petlji je for petlja.
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
// 8.Kako se postiže asinhrono izvršavanje u JavaScript-u, i koje su prednosti upotrebe Promise objekta?
// asinhrono izvrsavanje se postize kroz razlicite mehanizme, jedan od najvaznijih je upotreba promise objekta, promise objekat predstavlja asinhronu operaciju koja moze biti ili u toku, zavrsena uspesno ili sa greskom, promise omogucava da se niz asinhronih operacija organizuje na vise citljiviji i efikasniji nacin.
// 9.Sta su WEB API i QUEUE kod Async JavaScript?
// WEB API je interfejs koji omogucava komunikaciju izmedju razlicitih softverskih sistema putem weba, WEB API pruza dodatne funkcije i omogucava asinhrono izvrsavanje u javascript 
// 10. Objasnite koncept objekata u JavaScript-u i dajte primer korišćenja objekta.
// oni su kompleksni podaci koji mogu sadrzavati razlicite vrste podataka i funkcijalnosti objekti se koriste za organizaciju i manipulaciju podacima na nacin koji je fleksibilan i cesto se koristi za modeliranje stvarnog sveta 
// let ljik = {
//   ime: "akug";
//   prezime: "toljiko";
//   godine: "?";
//   adresa: {
//     ulica: "zzzz";
//     grad: "pazar";
//     postanskiBroj: "36300";
//   }
//   lol: function() {
//     console.log("zzzz, " + this.ime + "!");
//   }
// };

// console.log(osoba.ime);
// console.log(osoba.adresa.grad);


// osoba.lol();
// 11. Nabroj nekoliko HTTP request metoda i objasni njihovo koriscenje.
// get, post , put , delete , patch , options,
// get se koristi za dobijanje podataka od server, post se koristi za slanje podataka serveru kako bi se kreirao novi resurs, put se koristi za azuriranje postojeceg resursa na serveru ili kreiranje resursa ako ne postoji, delete se koristi za brisanje resursa na serveru, patch se koristi za parcijalno azuriranje resursa na serveru, options se koristi za dobijanje informacija o mogucnosti resursa ili servera.

/////////////////////////////////////////////////////////


// 2. Zadatak: "Anagram Finder"

// Napišite funkciju koja proverava da li su dva zadana stringa anagrami. Anagrami su reči ili fraze koje imaju iste karaktere, ali možda u različitom redosledu. Na primer, "listen" i "silent" su anagrami.

// Funkcija treba da ima sledeći potpis:

// function areAnagrams(str1, str2) {
//     // implementacija funkcije
// }

// Testirajte funkciju sa različitim parovima stringova kako biste proverili njenu tačnost.

// Primer:

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world"));   // false
// console.log(areAnagrams("debit card", "bad credit")); // true

// Napomena: Ovaj zadatak zahteva obradu stringova, kao i rad sa nizovima kako biste pratili broj pojavljivanja svakog karaktera. Obratite pažnju na veličinu slova, ignorisati razmake i druge non-alphanumeric karaktere.

// function areAnagrams(str1, str2) {
//     let cleanAndSort = str => str.replace(/\s/g, "").toLowerCase().split('').sort().join('');
  
//     return cleanAndSort(str1) === cleanAndSort(str2);
//   }
  
//   console.log(areAnagrams("listen", "silent")); // true
//   console.log(areAnagrams("hello", "world"));   // false
//   console.log(areAnagrams("debit card", "bad credit")); // true

// 3. Fetchati i prikazati podatke sa minimalnim CSS i HTML-om sa API-ja (Link je dole), i te podatke staviti u local storage.

// Link od api-ja: https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => {
//     console.log(posts);
//     localStorage.setItem('posts', JSON.stringify(posts));
//   })
//   .catch(error => console.error('greska:', error));