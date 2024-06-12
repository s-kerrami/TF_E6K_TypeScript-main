"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// fonction pour recuperer des information d'un pokemon
async function getPokemonByName(pokemonName) {
    try {
        // affecter une requete GET a l'API pokemon pour obtenir un pokemon par son nom
        const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
    }
    catch (error) {
        // capture
        throw new Error(`Erreur lor de la recuperation de ${pokemonName} : \n ${error.message}`);
    }
}
// exemple d'utilisation de la fonction getPokemon 
/**
 * Cette fonction affiche les informations d'un pokemon
 * @async
 * @function main
 */
async function main() {
    // nom du pokemon a afficher
    const pokemonName = "pikachu";
    try {
        // obtenir les informations du pokemon
        const pokemon = await getPokemonByName(pokemonName);
        // afficher les informations du pokemon 
        console.log(`id : ${pokemon.id}, name : ${pokemon.name}`);
        // convertir les types en chaine de caractères
        console.log(`Types : ${pokemon.types.map(t => t.type.name).join(", ")}`);
    }
    catch (error) {
        // si une erreur se produit
        console.log(error);
    }
}
