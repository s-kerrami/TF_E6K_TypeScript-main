export class PrixInvalideError extends Error{
    constructor(message : string = "Prix invalide ❌"){
        super(message)
        this.name = "PrixInvalideError"
    }
}