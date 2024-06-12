
import {livre} from "./models/livre"


// creation d'un livre

const livre1 = new livre()
livre1.Titre = "Le seigneur des anneaux"
// auteur livre en lecture et en ecriture
livre1.auteur = "JRR Tolkien"
console.log(livre1.auteur)
// livre1.anneePublication = 1954  // envoie une erreur de par les proprietés non initialisees
livre1.afficherLivre()