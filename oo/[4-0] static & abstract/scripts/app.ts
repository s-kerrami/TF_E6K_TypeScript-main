import { Biliotheque } from "./models/bibliotheque"
import { Livre } from "./models/livre"
import { LivreTechnique } from "./models/livreTechnique"

// Création d'un livre
const livre1 = new LivreTechnique()
livre1.Titre = "Le seigneur des anneaux"
livre1.AnneePublication = 1954
livre1.Auteur = "Tolkien"
livre1.Domaine = "SF"
livre1.Niveau = "NB"
livre1.Prix = 25


const livreTechnique = new LivreTechnique()
livreTechnique.Titre = "Administrations & sécurisations des réseaux"
livreTechnique.AnneePublication = 1997
livreTechnique.Auteur = "Tintin"
livreTechnique.Domaine = "Informatique"
livreTechnique.Niveau = "Expert"
livreTechnique.Prix = 250

const livre3 = new LivreTechnique()
livre3.Titre = "Martine à la plage"
livre3.AnneePublication = 2017
livre3.Auteur = "Gilbert delahaye"
livre3.Domaine = "Enfants"
livre3.Niveau = "6-8 ans"
livre3.Prix = 25

const bibliotheque = new Biliotheque()

bibliotheque.Nom = "bibliotheque centrale"

bibliotheque.AjouterLivre(livre1)
bibliotheque.AjouterLivre(livreTechnique)
bibliotheque.AjouterLivre(livre3)

// Affichage des livres
bibliotheque.AfficherLivres()

// Obtention et affichage d'un livre
const nomLivreRecherche : string = "Harryyy Potter"
const livreRecupere : Livre | undefined = bibliotheque.ObtenirLivre(nomLivreRecherche)
if (livreRecupere){
    livreRecupere.AfficherLivre()
}
else{
    console.log(`le livre "${nomLivreRecherche}" n'existe pas ...`);
}

// Suppression d'un livre
bibliotheque.SupprimerLivre("Martine à la plage")


console.log("Après suppresion : ");
// Affichage des livres
bibliotheque.AfficherLivres()

console.log("---- Achat ----");
const monNouveauLivre = bibliotheque.AcheterLivre(320, livreTechnique)

monNouveauLivre?.AfficherLivre()