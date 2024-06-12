export abstract class Livre{
    // Attributs
    protected titre! : string
    protected auteur! : string
    protected anneePublication! : number
    protected prix! : number

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