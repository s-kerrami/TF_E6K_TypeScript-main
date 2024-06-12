// Exercices 1
// Vous êtes chargé de développer une application bancaire simplifiée permettant de gérer les 
// comptes courants des clients. Vous devez créer deux classes principales :
// 1. Personne : représentant les clients de la banque.
// 2. Courant : représentant les comptes courants des clients.
// Objectifs :
// • Créer une classe Personne avec des propriétés privées nom, prenom, et dateNaiss.
// • Ajouter des getters et setters pour chaque propriété dans la classe Personne.
// • Créer une classe Courant avec des propriétés privées numero, solde, ligneDeCredit, et 
// titulaire (de type Personne).
// • Ajouter des getters et setters pour chaque propriété dans la classe Courant.
// • Ajouter des méthodes Retrait() et Depot() pour effectuer des opérations de retrait et 
// de dépôt sur le compte courant.
// Réaliser des tests dans votre programme pour vérifier que celui-ci fonctionne correctem
export class Personne{
    private nom! : string
    private prenom! : string
    private dateNaiss! : Date

    get Nom(): string { return this.nom }
    set Nom(nom : string){ this.nom = nom }

    get Prenom(): string { return this.prenom }
    set Prenom(prenom : string){ this.prenom = prenom }

    get DateNaiss(): Date { return this.dateNaiss }
    set DateNaiss(dateNaiss : Date){ this.dateNaiss = dateNaiss }
}



export class Courant {
    private numero! : string
    private solde! : number
    private ligneDeCredit! : number
    private titulaire! : Personne

    get Numero(): string { return this.numero }
    set Numero(numero : string){ this.numero = numero }

    get Solde(): number { return this.solde }
    set Solde(solde : number){ this.solde = solde }

    get LigneDeCredit(): number { return this.ligneDeCredit }
    set LigneDeCredit(ligneDeCredit : number){ this.ligneDeCredit = ligneDeCredit }
    
    get Titulaire(): Personne { return this.titulaire }
    set Titulaire(titulaire : Personne){ this.titulaire = titulaire }

    Retrait(montant : number) : void{
        if(montant > 0) this.Solde -= montant
    }

    Depot(montant : number) : void{
        if(montant > 0) this.Solde += montant
    }
}