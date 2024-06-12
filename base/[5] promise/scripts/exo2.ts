import axios from 'axios';
 
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
}
 
interface BattleResult {
  winner: string;
  points: number;
}
 
interface Points {
  pokemon: string;
  points: number;
}
 
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKE_API_NAMES_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
 
const getPokemonByName = async (name: string, language: string = 'fr'): Promise<Pokemon> => {
  try {
    const response = await axios.get(`${POKE_API_URL}/${name.toLowerCase()}`);
    const data = response.data;
 
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((typeInfo: any) => typeInfo.type.name),
    };
  } catch (error) {
    console.error(`Error fetching Pokémon ${name}:`, error);
    throw error;
  }
};
 
const getPokemonTranslatedName = async (name: string): Promise<{ name: string }> => {
  try {
    const response = await axios.get(`${POKE_API_NAMES_URL}/${name.toLowerCase()}`);
    const data = response.data;
    return {
      name: data.names.find((name: any) => name.language.name === 'fr').name,
    };
  } catch (error) {
    console.error(`Error fetching Pokémon ${name}:`, error);
    throw error;
  }
};
 
 
export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * 151) + 1;
  return getPokemonByName(randomId.toString());
};
 
const getWinner = (pokemon: Pokemon[]): Points[] => {
  let pokemon1 = {pokemon: pokemon[0].name, points: 0};
  let pokemon2 = {pokemon: pokemon[1].name, points: 0};
 
 
  if(pokemon[0].weight > pokemon[1].weight){
    pokemon1.points += 50;
  } else {
    pokemon2.points += 50;
  }
 
  if(pokemon[0].height > pokemon[1].height){
    pokemon1.points += 30;
  } else {
    pokemon2.points += 30;
  }
 
  if(pokemon[0].types.length > pokemon[1].types.length){
    pokemon1.points += 20;
  } else {
    pokemon2.points += 20;
  }
  return [pokemon1, pokemon2];
}
 
const battle = (pokemon1: Pokemon, pokemon2: Pokemon): BattleResult => {
  const points = getWinner([pokemon1, pokemon2]);
 
  const points1 = points[0].points;
  const points2 = points[1].points;
 
  if (points1 > points2) {
    console.log(`Le pokémon ${pokemon1.name} a gagné avec ${points1} points.`);
    return { winner: pokemon1.name, points: points1 - points2 };
  } else {
    console.log(`Le pokémon ${pokemon2.name} a gagné avec ${points2} points.`);
    return { winner: pokemon2.name, points: points2 - points1 };
  }
};
 
const createTeams = async (): Promise<{ userTeam: Pokemon[], opponentTeam: Pokemon[] }> => {
  const userTeam: Pokemon[] = [];
  const opponentTeam: Pokemon[] = [];
 
  const userSelectedNames = ['charizard', 'mewtwo', 'Blastoise', 'pikachu', 'nidorina', 'mew'];
  for (const name of userSelectedNames) {
    const pokemon = await getPokemonByName(name);
    const translatedPokemonName = await getPokemonTranslatedName(pokemon.name);
    pokemon.name = translatedPokemonName.name;
    userTeam.push(pokemon);
  }
 
  for (let i = 0; i < 6; i++) {
    const pokemon = await getRandomPokemon();
    const translatedPokemonName = await getPokemonTranslatedName(pokemon.name);
    pokemon.name = translatedPokemonName.name;
    opponentTeam.push(pokemon);
  }
 
  return { userTeam, opponentTeam };
};
 
const startBattle = async () => {
  const { userTeam, opponentTeam } = await createTeams();
  console.log("==================================");
  console.log("Votre équipe: ", userTeam.map((pokemon) => pokemon.name).join(', '));
  console.log("Equipe ennemie: ", opponentTeam.map((pokemon) => pokemon.name).join(', '));
  console.log("==================================");
 
  let userWins = 0;
  let opponentWins = 0;
 
  let your_left = [];
  let opponent_left = [];
 
  for (let i = 0; i < 6; i++) {
    const result = battle(userTeam[i], opponentTeam[i]);
    if (result.winner === userTeam[i].name) {
      userWins++;
      your_left.push(userTeam[i])
    } else {
      opponentWins++;
      opponent_left.push(opponentTeam[i])
    }
  }
 
  let finalWinner = userWins === opponentWins ? "Egalité" : userWins > opponentWins ? 'VOUS' : "L'ennemi";
 
  console.log("==================================");
  console.log(`Vainqueur: ${finalWinner}`);
  console.log(`Vos victoires: ${userWins}, Victoires de l'ennemi: ${opponentWins}`);
  console.log("Vos Pokemons restant sont: ", your_left.length > 0 ? your_left.map((pokemon) => pokemon.name).join(', ') : "Aucun pokémons n'ont survécu");
  console.log("Pokemons restant de votre ennemi: ", opponent_left.length > 0 ? opponent_left.map((pokemon) => pokemon.name).join(', ') : "Aucun pokémons n'ont survécu");
  console.log("==================================");
};
 
startBattle().catch((error) => console.error('Error starting battle:', error));