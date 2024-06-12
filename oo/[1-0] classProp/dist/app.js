"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livre_1 = require("./models/livre");
// creation d'un livre
const livre1 = new livre_1.livre();
livre1.Titre = "Le seigneur des anneaux";
// auteur livre en lecture et en ecriture
livre1.auteur = "JRR Tolkien";
console.log(livre1.auteur);
// livre1.anneePublication = 1954  // envoie une erreur de par les proprietés non initialisees
livre1.afficherLivre();
