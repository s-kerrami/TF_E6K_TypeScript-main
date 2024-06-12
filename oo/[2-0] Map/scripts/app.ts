"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotheque_1 = require("./models/bibliotheque");
const livre_1 = require("./models/livre");
// Création d'un livre
const livre1 = new livre_1.Livre();
livre1.Titre = "Le seigneur des anneaux";
livre1.AnneePublication = 1954;
livre1.auteur = "Tolkien";
const livre2 = new livre_1.Livre();
livre2.Titre = "Harry Potter";
livre2.AnneePublication = 1997;
livre2.auteur = "JK rowling";
const livre3 = new livre_1.Livre();
livre3.Titre = "Martine à la plage";
livre3.AnneePublication = 2017;
livre3.auteur = "Gilbert delahaye";
const bibliotheque = new bibliotheque_1.Biliotheque();
bibliotheque.Nom = "bibliotheque centrale";
bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livre2);
bibliotheque.AjouterLivre(livre3);
// Affichage des livres
bibliotheque.AfficherLivres();
// Obtention et affichage d'un livre
const nomLivreRecherche = "Harryyy Potter";
const livreRecupere = bibliotheque.ObtenirLivre(nomLivreRecherche);
if (livreRecupere) {
    livreRecupere.AfficherLivre();
}
else {
    console.log(`le livre "${nomLivreRecherche}" n'existe pas ...`);
}
// Suppression d'un livre
bibliotheque.SupprimerLivre("Martine à la plage");
console.log("Après suppresion : ");
// Affichage des livres
bibliotheque.AfficherLivres();