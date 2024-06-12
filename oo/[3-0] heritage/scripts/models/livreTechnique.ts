import { Livre } from "./livre";

export class LivreTechnique extends Livre{
    private domaine! : string
    private niveau! : string

    get Domaine(): string {return this.domaine }
    set Domaine(domaine : string) {this.domaine = domaine }

    get Niveau(): string {return this.niveau }
    set Niveau(niveau : string) {this.niveau = niveau }

    // Redéfinition de méthode
    AfficherLivre(): void {
        super.AfficherLivre()
        console.log(` - Domaine : ${this.domaine}`);
        console.log(` - Niveau : ${this.Niveau}`);
    }
}