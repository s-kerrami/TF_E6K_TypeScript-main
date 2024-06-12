"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livre = void 0;
class livre {
    // Prop's
    // Ecriture seule:
    set Titre(titre) { this.titre = titre; } // setter
    // lecteur seule: 
    get AnneePublication() { return this.anneePublication; } // getter  // seulement la lecture 
    // Methodes:
    afficherLivre() {
        console.log(`Titre : ${this.titre} - Auteur : ${this.auteur} - Annee de publication : ${this.anneePublication}`);
    }
}
exports.livre = livre;
