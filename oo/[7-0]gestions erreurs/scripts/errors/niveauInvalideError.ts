export class NiveauInvalideError extends Error{
    constructor(message : string = "le niveau n'est pas valide..."){
        super(message)
        this.name = "NiveauInvalideError"
    }
}