export class livre{
    // attributs
    // ? signifie nullable
    // ! signifie non nullable (une erreur est renvoyée si la valeur est null ou undefined)

    private titre! : string 
    auteur! : string 
    private anneePublication! : number


    // Prop's
    
    // Ecriture seule:

    set Titre(titre: string) {this.titre = titre} // setter

    

    // lecteur seule: 
    get AnneePublication(): number {return this.anneePublication} // getter  // seulement la lecture 

    // Methodes:

    afficherLivre() : void {
        console.log(`Titre : ${this.titre} - Auteur : ${this.auteur} - Annee de publication : ${this.anneePublication}`)
    }
}