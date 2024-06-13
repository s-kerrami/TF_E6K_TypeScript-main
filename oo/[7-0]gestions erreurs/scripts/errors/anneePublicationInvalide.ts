export class AnneePublicationInvalide extends Error{
    constructor(message : string = "L4année de publication encodée est invalide..."){
        super(message)
        this.name = "AnneePublicationInvalideError"
    }
}