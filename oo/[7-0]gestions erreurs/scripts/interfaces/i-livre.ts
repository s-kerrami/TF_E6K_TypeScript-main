export interface ILivre{
    readonly Titre : string
    readonly Auteur : string
    readonly AnneePublication : number
    readonly Prix : number
    AfficherLivre(): void
}