// Vous devez ajouter des gestionnaires d'erreurs pour assurer la robustesse du programme en 
// cas d'opérations invalides ou de valeurs incorrectes. L'objectif est de s'assurer que le 
// programme continue de fonctionner correctement après ces modifications et de démontrer 
// comment les erreurs sont gérées.
// Objectifs :
// InvalidOperationError :
// o Déclenchée lorsque la ligne de crédit est négative lors de la configuration dans 
// un compte courant.
export class InvalidOperationError extends Error {
    constructor(message : string = "La ligne de crédit ne peux être négative..."){
        super(message)
        this.name = "InvalidOperationError"
    } 
}