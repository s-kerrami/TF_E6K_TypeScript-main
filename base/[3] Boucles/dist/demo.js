"use strict";
// #region boulce for
console.log("------------------- Boucle for -------------------");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//  Exmple for : Afficher les nombres pair entre 1 et 10 
console.log("---- afficher les nombres pair entre 1 et 10 ----");
for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i); // afficher les nombres pairs
    }
}
// le for of me permet de parcourir les elements d'une collection
let fruits = ["pomme", "banane", "fraise"];
for (let fruit of fruits) {
    console.log(fruits);
}
let message = "Typescipt est super !!!";
for (let caractere of message) {
    console.log(caractere);
}
console.log("-------- recherche d'element dans un tableu ----------");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    if (number === 5) {
        console.log(`nombre trouve : ${number} `);
    }
    console.log(`recherche ${number}`);
}
// for in permet  de parcourir toute les proprietés d'un objet
let etudiant = {
    nom: "mohamed",
    age: 25,
    grade: "master"
};
for (let props in etudiant) {
    console.log(`${props} : ${etudiant[props]}`);
}
// #endregion
console.log("------------------- Boucle while -------------------");
let compteur = 1;
while (Math.random() > 0.2) {
    console.log(compteur);
    compteur++;
}
let number = 1;
do {
    console.log(number);
    number++;
} while (number < 10);
