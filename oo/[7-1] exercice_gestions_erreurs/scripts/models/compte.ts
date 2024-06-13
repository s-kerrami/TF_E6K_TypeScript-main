import { IBanker } from "../interfaces/IBanker"
import { ICustomer } from "../interfaces/ICustomer"
import { Personne } from "./personne"
import { ArgumentOutOfRangeError } from "../error/argumentOutOfRangeError"

export abstract class Compte implements IBanker, ICustomer{
    private numero! : string
    private solde! : number
    private titulaire! : Personne
    protected test : string = "test"

    constructor(numero : string, solde : number, titulaire : Personne){
        this.numero = numero
        this.solde = solde
        this.titulaire = titulaire
    }

    get Numero(): string { return this.numero }
    set Numero(numero : string){ this.numero = numero }

    get Solde(): number { return this.solde }
    set Solde(solde : number){ this.solde = solde }

    get Titulaire(): Personne { return this.titulaire }
    set Titulaire(titulaire : Personne){ this.titulaire = titulaire }

    Retrait(montant : number) : void{
        if(montant > 0) this.Solde -= montant
        else throw new ArgumentOutOfRangeError()
    }

    Depot(montant : number) : void{
        if(montant > 0) this.Solde += montant
        else throw new ArgumentOutOfRangeError()
    }

    protected abstract CalculInteret(): number

    public AppliquerInteret(): void{
        this.Solde += this.CalculInteret()
    }
}