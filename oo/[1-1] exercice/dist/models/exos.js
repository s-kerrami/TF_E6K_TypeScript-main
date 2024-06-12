"use strict";
// Exercices 1
// Vous êtes chargé de développer une application bancaire simplifiée permettant de gérer les 
// comptes courants des clients. Vous devez créer deux classes principales :
// 1. Personne : représentant les clients de la banque.
// 2. Courant : représentant les comptes courants des clients.
// Objectifs :
// • Créer une classe Personne avec des propriétés privées nom, prenom, et dateNaiss.
// • Ajouter des getters et setters pour chaque propriété dans la classe Personne.
// • Créer une classe Courant avec des propriétés privées numero, solde, ligneDeCredit, et 
// titulaire (de type Personne).
// • Ajouter des getters et setters pour chaque propriété dans la classe Courant.
// • Ajouter des méthodes Retrait() et Depot() pour effectuer des opérations de retrait et 
// de dépôt sur le compte courant.
// Réaliser des tests dans votre programme pour vérifier que celui-ci fonctionne correctem
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = exports.Personne = void 0;
class Personne {
    // prop's pour la class Personne
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    get Prenom() { return this.prenom; }
    set Prenom(prenom) { this.prenom = prenom; }
    get DateNaiss() { return this.dateNaiss; }
    set DateNaiss(dateNaiss) { this.dateNaiss = dateNaiss; }
}
exports.Personne = Personne;
class Courant {
    // prop's pour la class Courant
    get Numero() { return this.numero; }
    set Numero(numero) { this.numero = numero; }
    get Solde() { return this.solde; }
    set Solde(solde) { this.solde = solde; }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) { this.ligneDeCredit = ligneDeCredit; }
    get Titulaire() { return this.titulaire; }
    set Titulaire(titulaire) { this.titulaire = titulaire; }
    // Methode
    Retrait(montant) {
        if (this.solde + this.ligneDeCredit >= montant) {
            this.solde -= montant;
        }
        else {
            console.log('Fonds insuffisants pour effectuer ce retrait.');
        }
    }
    Depot(montant) {
        this.solde += montant;
    }
}
exports.Courant = Courant;
