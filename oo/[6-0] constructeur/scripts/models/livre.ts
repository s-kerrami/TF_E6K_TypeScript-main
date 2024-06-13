import { ILivre } from "../interfaces/i-livre"

export abstract class Livre implements ILivre{
    // Attributs
    protected titre : string
    protected auteur! : string
    protected anneePublication! : number
    protected prix! : number

    constructor(titre : string, auteur : string, anneePublication : number = new Date().getFullYear(), prix : number){
        this.titre = titre
        this.auteur = auteur
        this.anneePublication = anneePublication
        this.prix = prix 
    }

    // Prop's
    get Titre() :string {return this.titre}
    set Titre(titre : string) {this.titre = titre}

    get Auteur() :string {return this.auteur}
    set Auteur(auteur : string) {this.auteur = auteur}

    set AnneePublication(anneePublication : number) {this.anneePublication = anneePublication} 
    get AnneePublication() :number {return this.anneePublication}

    set Prix(prix : number) {this.prix = prix}
    get Prix() :number {return this.prix}

    // Méthodes
    public abstract AfficherLivre() : void
}