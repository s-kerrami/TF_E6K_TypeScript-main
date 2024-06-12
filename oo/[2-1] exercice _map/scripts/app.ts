// script de test
import { Personne } from "./models/exos";
import { Banque } from "./models/exos";
import { Courant } from "./models/exos";

// Création d'une personne
const personne = new Personne();
personne.Nom = "Doe";
personne.Prenom = "John";
personne.DateNaiss = new Date("1986-05-16");

console.log("Test Affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Prenom : ${personne.Prenom}`);
console.log(`Date de Naissance : ${personne.DateNaiss}`);

// Création d'un compte courant pour cette personne
const courant = new Courant();
courant.Numero = "0000-0000-0001";
courant.Solde = 5000;
courant.LigneDeCredit = 500;
courant.Titulaire = personne;

console.log("Test affichage courant");
console.log(`Numéro : ${courant.Numero}`);
console.log(`Solde : ${courant.Solde}`);
console.log(`Ligne de crédit : ${courant.LigneDeCredit}`);
console.log(`Titulaire : ${courant.Titulaire.Nom} ${courant.Titulaire.Prenom}`);

// Test des méthodes retrait et dépôt
courant.Depot(200);
console.log(`Solde après dépôt de 200: ${courant.Solde}`);

courant.Retrait(300);
console.log(`Solde après retrait de 300: ${courant.Solde}`);

// Création d'une autre personne et d'un autre compte courant
const personne2 = new Personne();
personne2.Nom = "Smith";
personne2.Prenom = "Jane";
personne2.DateNaiss = new Date("1985-02-15");

const courant2 = new Courant();
courant2.Numero = "0000-0000-0002";
courant2.Solde = 2000;
courant2.LigneDeCredit = 1000;
courant2.Titulaire = personne2;

// Création de la banque et ajout des comptes
const banque = new Banque()
