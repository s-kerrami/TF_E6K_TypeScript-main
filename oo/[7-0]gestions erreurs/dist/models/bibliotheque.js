"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biliotheque = void 0;
const livreTechnique_1 = require("./livreTechnique");
class Biliotheque {
    constructor() {
        this.livres = new Map();
    }
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    // Ajouter un livre
    AjouterLivre(livre) {
        if (!this.livres.has(livre.Titre)) {
            this.livres.set(livre.Titre, livre);
        }
    }
    // Supprimer un livre
    SupprimerLivre(titre) {
        if (this.livres.has(titre)) {
            this.livres.delete(titre);
        }
    }
    // Obtenir un livre
    ObtenirLivre(titre) {
        return this.livres.get(titre);
    }
    // afficher livres
    AfficherLivres() {
        this.livres.forEach(livre => {
            livre.AfficherLivre();
        });
    }
    // Achat d'un livre
    AcheterLivre(montant, livreAchete) {
        const livre = this.ObtenirLivre(livreAchete.Titre);
        if (livre) {
            let prixLivre = livre.Prix * livreTechnique_1.LivreTechnique.tva;
            if (montant < prixLivre) {
                console.log(`le montant n'est pas suffisant : (${prixLivre} €) `);
            }
            else {
                this.SupprimerLivre(livre.Titre);
                console.log(`Félicitation pour votre achat : (${livre.Titre})`);
                return livre;
            }
        }
        else {
            console.log(`Aucun livre portant le titre ${livreAchete.Titre} n'a été trouvé 😥`);
        }
    }
}
exports.Biliotheque = Biliotheque;
