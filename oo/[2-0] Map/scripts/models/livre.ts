"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
class Livre {
    titre: any;
    anneePublication: any;
    auteur: any;
    // Prop's
    get Titre() { return this.titre; }
    set Titre(titre) { this.titre = titre; }
    set AnneePublication(anneePublication) { this.anneePublication = anneePublication; } // Set
    get AnneePublication() { return this.anneePublication; }
    // Méthodes
    AfficherLivre() {
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
    }
}
exports.Livre = Livre;