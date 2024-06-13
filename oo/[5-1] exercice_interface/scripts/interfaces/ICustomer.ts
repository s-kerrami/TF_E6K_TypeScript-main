// Vous devez à présent introduire deux nouvelles interfaces ICustomer et IBanker, puis adapter les 
// classes existantes pour les implémenter. L'objectif est de s'assurer que le programme continue 
// de fonctionner correctement après ces modifications.
// Obectifs :
// 1. Définir l’interface ICustomer
// o Limiter l’accès à consulter la propriété Solde
// o Utiliser les méthodes Depot et Retrait

export interface ICustomer{
    readonly Solde : number
    Depot(montant : number) : void
    Retrait(montant : number) : void
}