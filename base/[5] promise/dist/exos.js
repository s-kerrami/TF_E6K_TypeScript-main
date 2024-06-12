"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Fonction pour récupérer les données d'un Pokémon par son nom
async function fetchPokemonData(name) {
    try {
        const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        return response.data;
    }
    catch (error) {
        // Gestion des erreurs lors de la récupération des données du Pokémon
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Impossible de récupérer les données pour le Pokémon ${name}:`, error.message);
        }
        else {
            console.error(`Erreur inattendue lors de la récupération des données pour le Pokémon ${name}:`, error);
        }
        throw error;
    }
}
// Fonction pour générer un Pokémon aléatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
// Fonction pour simuler un combat entre deux Pokémon et retourner le résultat
function battlePokemon(pokemon1, pokemon2) {
    let score1 = 0;
    let score2 = 0;
    // Le Pokémon le plus lourd obtient 50 points
    score1 += pokemon1.weight > pokemon2.weight ? 50 : 0;
    score2 += pokemon2.weight > pokemon1.weight ? 50 : 0;
    // Le Pokémon le plus grand obtient 30 points
    score1 += pokemon1.height > pokemon2.height ? 30 : 0;
    score2 += pokemon2.height > pokemon1.height ? 30 : 0;
    // Le Pokémon ayant le plus de types obtient 20 points
    score1 += pokemon1.types.length > pokemon2.types.length ? 20 : 0;
    score2 += pokemon2.types.length > pokemon1.types.length ? 20 : 0;
    if (score1 > score2)
        return 1;
    if (score1 < score2)
        return -1;
    return 0;
}
// Fonction pour simuler un combat entre deux équipes de Pokémon
async function battleTeams(userTeam, randomTeam) {
    let userWins = 0;
    let randomWins = 0;
    console.log("Début du combat entre les équipes :");
    console.log("--------------------------------------------");
    for (let i = 0; i < 6; i++) {
        const userPokemon = userTeam[i];
        const randomPokemon = randomTeam[i];
        console.log(`Combat ${i + 1}:`);
        console.log(`Équipe de l'utilisateur : ${userPokemon.name}`);
        console.log(`Équipe aléatoire : ${randomPokemon.name}`);
        const result = battlePokemon(userPokemon, randomPokemon);
        if (result === 1) {
            console.log(`Le gagnant du combat est : ${userPokemon.name}`);
            userWins++;
        }
        else if (result === -1) {
            console.log(`Le gagnant du combat est : ${randomPokemon.name}`);
            randomWins++;
        }
        else {
            console.log("Le combat est un match nul !");
        }
        console.log("--------------------------------------------");
    }
    console.log("Fin du combat entre les équipes.");
    console.log(`Nombre de victoires de l'utilisateur : ${userWins}`);
    console.log(`Nombre de victoires de l'équipe aléatoire : ${randomWins}`);
    console.log("--------------------------------------------");
    if (userWins > randomWins) {
        console.log("L'utilisateur remporte la victoire !");
        console.log("Pokémons restants pour le vainqueur :");
        userTeam.slice(6).forEach(pokemon => console.log(pokemon.name));
    }
    else if (userWins < randomWins) {
        console.log("L'équipe aléatoire remporte la victoire !");
        console.log("Pokémons restants pour le vainqueur :");
        randomTeam.slice(6).forEach(pokemon => console.log(pokemon.name));
    }
    else {
        console.log("Match nul !");
    }
}
async function main() {
    const userTeam = [];
    const randomTeam = [];
    // Remplissage de l'équipe de l'utilisateur avec des Pokémon prédéfinis
    const userPokemonNames = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'jigglypuff', 'meowth'];
    for (const name of userPokemonNames) {
        try {
            const pokemon = await fetchPokemonData(name);
            userTeam.push(pokemon);
        }
        catch (error) {
            console.error(`Erreur lors de la récupération du Pokémon ${name}:`, error);
        }
    }
    // Génération de l'équipe aléatoire
    for (let i = 0; i < 6; i++) {
        try {
            const randomId = getRandomInt(898); // On suppose qu'il y a 898 Pokémon dans l'API
            const pokemon = await fetchPokemonData(String(randomId));
            randomTeam.push(pokemon);
        }
        catch (error) {
            console.error("Erreur lors de la génération d'un Pokémon aléatoire :", error);
        }
    }
    // Affichage des équipes
    console.log("Équipe de l'utilisateur :");
    userTeam.forEach(pokemon => console.log(pokemon.name));
    console.log("--------------------------------------------");
    console.log("Équipe aléatoire :");
    randomTeam.forEach(pokemon => console.log(pokemon.name));
    console.log("--------------------------------------------");
    // Début du combat entre les équipes
    await battleTeams(userTeam, randomTeam);
}
main();
