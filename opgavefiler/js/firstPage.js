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

/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// find form elementer
const myForm = document.getElementById("formular");
const submitButton = document.getElementById("indsend-knap");
const personList = document.getElementById("person-liste");
