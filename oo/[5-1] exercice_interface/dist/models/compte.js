"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
class Compte {
    get Numero() { return this.numero; }
    set Numero(numero) { this.numero = numero; }
    get Solde() { return this.solde; }
    set Solde(solde) { this.solde = solde; }
    get Titulaire() { return this.titulaire; }
    set Titulaire(titulaire) { this.titulaire = titulaire; }
    Retrait(montant) {
        if (montant > 0)
            this.Solde -= montant;
    }
    Depot(montant) {
        if (montant > 0)
            this.Solde += montant;
    }
}
exports.Compte = Compte;
