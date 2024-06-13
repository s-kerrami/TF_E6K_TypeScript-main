import { ILivreTechnique } from "../interfaces/i-livre-technique";
import { Livre } from "./livre";
import { NiveauInvalideError } from "../errors/niveauInvalideError";

export class LivreTechnique extends Livre implements ILivreTechnique{
    public static tva : number = 1.21

    private domaine! : string
    private niveau! : string

    constructor(titre : string, auteur : string, anneePublication : number = new Date().getFullYear(), prix : number, domaine : string, niveau : string) {
        super(titre, auteur, anneePublication, prix)
        this.domaine = domaine
        this.niveau = niveau
    }
    
    get Domaine(): string {return this.domaine }
    set Domaine(domaine : string) {this.domaine = domaine }
    
    get Niveau(): string {return this.niveau }
    set Niveau(niveau : string) {
        const niveauxValides  : string[] = ["débutant", "intermédiaire", "avancé"]
        // Vérificaiton si le niveau est valide
        if(!niveauxValides.includes(niveau.toLocaleLowerCase())){
            throw new NiveauInvalideError(`Niveau invalide. Les niveaux valides sont : ${niveauxValides.join(", ")}`) // "débutant, intermédiaire, avancé"
        }
        this.niveau = niveau
    }
    
    
    public AfficherLivre(): void {
        console.log(`Description : \n - ${this.titre} \n - ${this.auteur} \n - ${this.anneePublication}`);
        console.log(` - Domaine : ${this.domaine}`);
        console.log(` - Niveau : ${this.Niveau}`);
    }
}