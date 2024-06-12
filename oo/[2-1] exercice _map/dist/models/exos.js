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
// Exercices 2
// Étendez l'application bancaire simplifiée pour inclure la gestion centralisée des comptes courants 
// via une banque. Vous devez ajouter une nouvelle classe pour représenter la banque, qui pourra 
// gérer les comptes des clients.
// Objectifs :
// 1. Banque : représentant la banque elle-même.
// o Créer une classe Banque avec les propriétés privées nom et comptes (une Map des 
// numéros de comptes (string) comme clé et des objets Courant comme valeur).
// o Ajouter des méthodes pour gérer les comptes bancaires :
// ▪ Ajouter(compte: Courant): void : ajoute un compte à la banque.
// ▪ Supprimer(numero: string): void : supprime un compte de la banque par 
// son numéro.
// ▪ Compte(numero: string): Courant | undefined : retourne un compte par son 
// numéro.
// ▪ AvoirDesComptes(titulaire: Personne): number : calcule l'avoir total d'un 
// client en additionnant les soldes de tous ses comptes courants.
// o Tester les interactions entre les classes Banque, Courant, et Personne
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banque = exports.Courant = exports.Personne = void 0;
class Personne {
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    get Prenom() { return this.prenom; }
    set Prenom(prenom) { this.prenom = prenom; }
    get DateNaiss() { return this.dateNaiss; }
    set DateNaiss(dateNaiss) { this.dateNaiss = dateNaiss; }
}
exports.Personne = Personne;
class Courant {
    get Numero() { return this.numero; }
    set Numero(numero) { this.numero = numero; }
    get Solde() { return this.solde; }
    set Solde(solde) { this.solde = solde; }
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) { this.ligneDeCredit = ligneDeCredit; }
    get Titulaire() { return this.titulaire; }
    set Titulaire(titulaire) { this.titulaire = titulaire; }
    //methode :
    Retrait(montant) {
        if (montant > 0)
            this.Solde -= montant;
    }
    Depot(montant) {
        if (montant > 0)
            this.Solde += montant;
    }
}
exports.Courant = Courant;
// prop's pour la class Banque
class Banque {
    // Constructeur
    constructor() {
        this.comptes = new Map();
    }
    get Nom() { return this.nom; }
    set Nom(nom) { this.nom = nom; }
    // methode : 
    // ajouter un compte a la banque
    // Méthode : ajouter un compte à la banque
    Ajouter(compte) {
        // Utilisez le numéro de compte comme clé
        const cle = `${compte.Numero}`;
        this.comptes.set(cle, compte);
    }
    // suppression d'un compte de la banque
    Supprimer(numero) {
        this.comptes.delete(numero);
    }
    // Compte(numero: string): Courant | undefined : retourne un compte par son numéro.
    Compte(numero) {
        return this.comptes.get(numero);
    }
    // AvoirDesComptes(titulaire: Personne): number : calcule l'avoir total d'un 
    // client en additionnant les soldes de tous ses comptes courants.
    AvoirDesComptes(titulaire) {
        let total = 0;
        for (const compte of this.comptes.values()) {
            if (compte.Titulaire === titulaire) {
                total += compte.Solde;
            }
        }
        return total;
    }
}
exports.Banque = Banque;
