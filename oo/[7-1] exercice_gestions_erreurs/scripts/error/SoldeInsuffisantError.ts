// SoldeInsuffisantError :
// o Déclenchée lorsque le solde d'un compte est insuffisant pour un retrait.
// o Déclenchée lorsque le solde d'un compte épargne est insuffisant pour un 
// retrait

export class SoldeInsuffisantError extends Error {
    constructor(message : string = "pour affectuer un retrait, le solde doit être supérieur a 0"){
        super(message)
        this.name = "soldeInsuffisantError"
    } 
}