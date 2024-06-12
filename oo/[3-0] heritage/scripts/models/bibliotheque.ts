import { Livre } from "./livre"

export class Biliotheque {
    private nom! : string
    private livres: Map<string,Livre> = new Map()
    
    get Nom() : string { return this.nom}
    set Nom(nom : string)  { this.nom = nom}

    // Ajouter un livre
    AjouterLivre(livre : Livre): void{
        if(!this.livres.has(livre.Titre)){
            this.livres.set(livre.Titre, livre)
        }
    }

    // Supprimer un livre
    SupprimerLivre(titre : string) : void {
        if(this.livres.has(titre)){
            this.livres.delete(titre)
        }
    }

    // Obtenir un livre
    ObtenirLivre(titre : string): Livre | undefined {
        return this.livres.get(titre)
    }

    // afficher livres
    AfficherLivres(): void{
        this.livres.forEach(livre => {
            livre.AfficherLivre()
        })
    }
}