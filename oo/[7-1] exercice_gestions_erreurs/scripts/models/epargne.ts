import { Compte } from "./compte";
import { Personne } from "./Personne";

export class Epargne extends Compte{
    private static TAUX : number = 0.045

    private dateDernierRetrait! : Date

    constructor(numero : string, solde : number, titulaire : Personne){
        super(numero, solde, titulaire)
    }

    get DateDernierRetrait() : Date{return this.dateDernierRetrait}

    Retrait(montant: number): void {
        if(this.Solde - montant >= 0){
            super.Retrait(montant)
            this.dateDernierRetrait = new Date()
        }
    }

    protected CalculInteret(): number {
        return this.Solde * Epargne.TAUX
    }
}