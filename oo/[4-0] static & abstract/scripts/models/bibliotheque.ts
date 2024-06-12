import { Livre } from "./livre"
import { LivreTechnique } from "./livreTechnique"

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

    // Achat d'un livre
    AcheterLivre(montant : number, livreAchete : Livre) : Livre | undefined{
        const livre : Livre | undefined = this.ObtenirLivre(livreAchete.Titre)
        if(livre){
            let prixLivre : number = livre.Prix * LivreTechnique.tva
            if(montant < prixLivre){
                console.log(`le montant n'est pas suffisant : (${prixLivre} €) `);
            }
            else{
                this.SupprimerLivre(livre.Titre)
                console.log(`Félicitation pour votre achat : (${livre.Titre})`);
                return livre
            }
        } 
        else{
            console.log(`Aucun livre portant le titre ${livreAchete.Titre} n'a été trouvé 😥`);
        }
    }
}