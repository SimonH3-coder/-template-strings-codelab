/* Opgave 1*/

// din kode her
const navn = "Peter";
const aarIvirksomhed = 5;
const besked = `Hej ${navn} du har arbejdet i vores virksomehed i ${aarIvirksomhed} år.`;
console.log(besked);
const message = document.getElementById("message");
message.innerHTML = besked;

/* Opgave 2*/

// din kode her

const productListElement = document.getElementById("produktListe");
const myData = [
  { navn: "T-shirt", beskrivelse: "En t-shirt lavet i bomuld", pris: 99 },
  { navn: "Jeans", beskrivelse: "Blå demin jeans med straight fit", pris: 299 },
  { navn: "Hættetrøje", beskrivelse: "En grå hættetrøje med lynlås", pris: 199 },
];

let templateString = "";

myData.forEach((product) => {
  let articleElement = document.createElement("article");
  let h2Element = document.createElement("h2");
  let descriptionElement = document.createElement("p");
  let priceElement = document.createElement("p");
  h2Element.textContent = product.navn;
  descriptionElement.innerText = product.beskrivelse;
  priceElement.innerText = product.pris;
  articleElement.appendChild(h2Element);
  articleElement.appendChild(descriptionElement);
  articleElement.appendChild(priceElement);
  productListElement.appendChild(articleElement);
});

/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// find form elementer
const myForm = document.getElementById("formular");
const submitButton = document.getElementById("indsend-knap");
const personList = document.getElementById("person-liste");

//   const fornavn = document.getElementById("fornavn").value.trim();
//   const alder = document.getElementById("alder").value,20);
