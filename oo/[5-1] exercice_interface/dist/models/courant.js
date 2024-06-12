"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte");
class Courant extends compte_1.Compte {
    get LigneDeCredit() { return this.ligneDeCredit; }
    set LigneDeCredit(ligneDeCredit) { this.ligneDeCredit = ligneDeCredit; }
    Retrait(montant) {
        if (this.Solde - montant >= this.LigneDeCredit) {
            super.Retrait(montant);
        }
    }
}
exports.Courant = Courant;
