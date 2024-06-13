import { ILivre } from "./i-livre";

export interface ILivreTechnique extends ILivre{
    readonly Domaine : string
    readonly Niveau : string
}