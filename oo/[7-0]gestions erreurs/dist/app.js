"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livreTechnique_1 = require("./models/livreTechnique");
// Créations livres
try {
    const livre1 = new livreTechnique_1.LivreTechnique("Le seigneur des anneaux", "Tolkien", 1999, 25, "SF", "Avancé");
    const livre2 = new livreTechnique_1.LivreTechnique("Administrations & sécurisations des réseaux", "Tintin", 1997, 550, "Informatique", "Avancé");
    livre2.Niveau = "pokemon";
    // Utilisation du polymorphisme pour manipuler les livres via l'interface ILivre
    const livres = [livre1, livre2];
    // Parcourir chaque livre et afficher ses détails
    console.log("--- ILivre ---");
    livres.forEach(livre => {
        livre.AfficherLivre();
        console.log(`Prix : ${livre.Prix}`); // ReadOnly
    });
    // Manipulation spécifique aux livres techniques
    // On caste les objets pour utiliser les propriétés et méthodes spécifiques à ILivretechnique
    const LivresTechniques = [livre1, livre2];
    // PArcourir chaque livre technique et afficher les détails spécifiques
    console.log("--- ILivreTechnique ---");
    LivresTechniques.forEach(livreTechnique => {
        console.log(`Domaine : ${livreTechnique.Domaine}`);
        console.log(`Niveau : ${livreTechnique.Niveau}`);
    });
}
catch (error) {
    console.log("--- ERREUR ----");
    console.error(error);
}
