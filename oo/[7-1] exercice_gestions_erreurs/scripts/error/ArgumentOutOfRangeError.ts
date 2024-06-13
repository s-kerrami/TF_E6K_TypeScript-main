

// . ArgumentOutOfRangeError :
// o Déclenchée lorsque le montant d'un dépôt ou d'un retrait est inférieur ou égal 
// à zéro.



export class ArgumentOutOfRangeError extends Error {
    constructor(message : string = "Le montant du dépôt / retrait est inférieur ou égal a 0"){
        super(message)
        this.name = "ArgumentOutOfRangeError"
    } 
}