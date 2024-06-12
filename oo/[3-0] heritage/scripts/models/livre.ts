export class Livre{
    // Attributs
    private titre! : string
    auteur! : string
    private anneePublication! : number

    // Prop's
    get Titre() :string {return this.titre}
    set Titre(titre : string) {this.titre = titre}

    set AnneePublication(anneePublication : number) {this.anneePublication = anneePublication} // Set
    get AnneePublication() :number {return this.anneePublication}

    // Méthodes
    AfficherLivre() : void{
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
    }
}