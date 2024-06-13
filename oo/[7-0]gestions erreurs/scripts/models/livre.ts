import { ILivre } from "../interfaces/i-livre"
import {PrixInvalideError} from "../errors/prixInvalideError"
import {AnneePublicationInvalide} from "../errors/anneePublicationInvalide"

export abstract class Livre implements ILivre{
    // Attributs
    protected titre : string
    protected auteur! : string
    protected anneePublication! : number
    protected prix! : number

    constructor(titre : string, auteur : string, anneePublication : number = new Date().getFullYear(), prix : number){
        // Vérification du prix, il ne doit pas être négatif
        if(prix < 0){
            throw new PrixInvalideError()
        }
        const anneeActuelle : number = new Date().getFullYear()
        // Vérification de l'année de publication, elle doit être réaliste
        if(anneePublication < 1800 ){
            throw new AnneePublicationInvalide("L'année de publication ne peut être inférieur a 1800...")
        }else if (anneePublication > anneeActuelle){
            throw new AnneePublicationInvalide("L'année de publication ne peut être ultérieur a l'année en cours...")
        }
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