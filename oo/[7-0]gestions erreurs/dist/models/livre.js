"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livre = void 0;
const prixInvalideError_1 = require("../errors/prixInvalideError");
const anneePublicationInvalide_1 = require("../errors/anneePublicationInvalide");
class Livre {
    constructor(titre, auteur, anneePublication = new Date().getFullYear(), prix) {
        // Vérification du prix, il ne doit pas être négatif
        if (prix < 0) {
            throw new prixInvalideError_1.PrixInvalideError();
        }
        const anneeActuelle = new Date().getFullYear();
        // Vérification de l'année de publication, elle doit être réaliste
        if (anneePublication < 1800) {
            throw new anneePublicationInvalide_1.AnneePublicationInvalide("L'année de publication ne peut être inférieur a 1800...");
        }
        else if (anneePublication > anneeActuelle) {
            throw new anneePublicationInvalide_1.AnneePublicationInvalide("L'année de publication ne peut être ultérieur a l'année en cours...");
        }
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.prix = prix;
    }
    // Prop's
    get Titre() { return this.titre; }
    set Titre(titre) { this.titre = titre; }
    get Auteur() { return this.auteur; }
    set Auteur(auteur) { this.auteur = auteur; }
    set AnneePublication(anneePublication) { this.anneePublication = anneePublication; }
    get AnneePublication() { return this.anneePublication; }
    set Prix(prix) { this.prix = prix; }
    get Prix() { return this.prix; }
}
exports.Livre = Livre;
