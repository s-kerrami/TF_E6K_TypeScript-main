import { Personne } from "../models/Personne";
import { ICustomer } from "./ICustomer";

export interface IBanker extends ICustomer{
    AppliquerInteret(): void
    readonly Titulaire : Personne
    readonly Numero : string
}