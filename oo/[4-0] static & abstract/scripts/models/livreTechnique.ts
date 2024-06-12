import { Livre } from "./livre";

export class LivreTechnique extends Livre{
    public static tva : number = 1.21

    private domaine! : string
    private niveau! : string
    
    get Domaine(): string {return this.domaine }
    set Domaine(domaine : string) {this.domaine = domaine }
    
    get Niveau(): string {return this.niveau }
    set Niveau(niveau : string) {this.niveau = niveau }
    
    
    public AfficherLivre(): void {
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
        console.log(` - Domaine : ${this.domaine}`);
        console.log(` - Niveau : ${this.Niveau}`);
    }
}