import { ILivre } from "./interfaces/i-livre"
import { ILivreTechnique } from "./interfaces/i-livre-technique"
import { Biliotheque } from "./models/bibliotheque"
import { Livre } from "./models/livre"
import { LivreTechnique } from "./models/livreTechnique"




// Créations livres
const livre1 = new LivreTechnique(
    "Le seigneur des anneaux",
    "Tolkien",
    undefined,
    25,
    "SF",
    "NB"
)

const livre2 = new LivreTechnique(
    "Administrations & sécurisations des réseaux",
    "Tintin",
    1997,
    250,
    "Informatique",
    "Expert"
)

// Utilisation du polymorphisme pour manipuler les livres via l'interface ILivre
const livres : ILivre[] = [livre1, livre2]

// Parcourir chaque livre et afficher ses détails
console.log("--- ILivre ---");
livres.forEach(livre => {
    livre.AfficherLivre()
    console.log(`Prix : ${livre.Prix}`); // ReadOnly
})

// Manipulation spécifique aux livres techniques
// On caste les objets pour utiliser les propriétés et méthodes spécifiques à ILivretechnique
const LivresTechniques : ILivreTechnique[] = [livre1 as ILivreTechnique, livre2 as ILivreTechnique]

// PArcourir chaque livre technique et afficher les détails spécifiques
console.log("--- ILivreTechnique ---");

LivresTechniques.forEach(livreTechnique => {
    console.log(`Domaine : ${livreTechnique.Domaine}`);
    console.log(`Niveau : ${livreTechnique.Niveau}`);
})