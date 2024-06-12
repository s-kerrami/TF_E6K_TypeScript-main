"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biliotheque = void 0;
class Biliotheque {
    livres: any;
    constructor() {
        this.livres = new Map();
    }
    get Nom() { return this.Nom; }
    set Nom(nom) { this.Nom = nom; }
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
}
exports.Biliotheque = Biliotheque;