// Exercice 1 : Procédure pour afficher la somme des multiples
// Écrire une procédure qui prend deux nombres entiers positifs n et m, et affiche la somme de tous 
// les multiples de m qui sont inférieurs ou égaux à n.
console.log("------------------- Exo 1 -------------")

const sommeMultiples = (n: number, m: number): void => {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            somme += i;
        }
    }
    console.log(somme);
};

// exemple d'utilisation de la procédure
sommeMultiples(10, 3);




// Exercice 2 : Fonction pour renvoyer la factorielle d'un nombre
// Écrire une fonction qui prend un nombre entier positif n et renvoie la factorielle de n. La factorielle 
// de n (notée n!) est le produit de tous les entiers de 1 à n.

console.log("------------------- Exo 2 -------------")

function factorielle(n: number): number {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
// exemple d'utilisation de la procédure
console.log(factorielle(5));


// Exercice 3 : Fonction avec paramètre optionnel pour créer une liste d'entiers
// Écrire une fonction qui prend deux nombres entiers start et end, et un pas optionnel step (défaut 
// 1), et renvoie un tableau contenant tous les entiers de start à end avec le pas donné.

console.log("------------------- Exo 3 -------------")

function list(start: number, end: number, step: number = 1): number[] {
    let list = [];
    for (let i = start; i <= end; i += step) {
        list.push(i);
    }
    return list;
}

// exemple d'utilisation de la procédure
console.log(list(44, 50, 2));


// Exercice 4 : Fonction pour vérifier les nombres premiers dans un intervalle
// Écrire une fonction qui prend deux nombres start et end et renvoie un tableau contenant tous les 
// nombres premiers entre start et end inclusivement. Un nombre premier est un nombre entier 
// supérieur à 1 qui n'a aucun diviseur autre que 1 et lui-même.

console.log("------------------- Exo 4 -------------")

function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// exemple d'utilisation de la procédure
console.log(isPrime(13));


// Exercice 5 : Fonction anonyme pour trier un tableau d'objets
// Écrire une fonction anonyme assignée à une variable qui prend un tableau d'objets et un nom de 
// propriété, et renvoie un nouveau tableau trié par cette propriété. La fonction doit gérer les cas 
// où la propriété n'existe pas dans certains objets.

console.log("------------------- Exo 5 -------------")

function triTableau(tableau: any[], propriété: string): any[] {
    return tableau.sort((a, b) => a[propriété] - b[propriété]);
}

// exemple d'utilisation de la procédure
console.log(triTableau([{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }], "age"));


// Exercice 6 : Fonction pour générer un tableau de nombres aléatoires uniques
// Écrire une fonction qui prend deux nombres n et max et renvoie un tableau contenant n nombres 
// aléatoires uniques compris entre 1 et max inclusivement. Si n est supérieur à max, la fonction doit 
// renvoyer un tableau vide.
console.log("------------------- Exo 6 -------------")

function generateRandomNumbers(n: number, max: number): number[] {
    const uniqueNumbers = new Set<number>();
    while (uniqueNumbers.size < n) {
        uniqueNumbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(uniqueNumbers);
}

// exemple d'utilisation de la procédure
console.log(generateRandomNumbers(10, 20));






// Exercice 7 : Fonction générique pour fusionner deux tableaux
// Écrire une fonction générique qui prend deux tableaux de n'importe quel type et renvoie un 
// nouveau tableau contenant tous les éléments des deux tableaux sans duplication.

console.log("------------------- Exo 7 -------------")


function fusionnerTableaux(tableau1: any[], tableau2: any[]): any[] {
    return [...new Set([...tableau1, ...tableau2])];
}

// exemple d'utilisation de la procédure
console.log(fusionnerTableaux([1, 2, 3], [4, 5, 6]));



// Exercice 9 : Fonction pour appliquer une série d'opérations sur un nombre
// Écrire une fonction qui prend un nombre et un tableau de fonctions, et applique successivement 
// chaque fonction au nombre, en renvoyant le résultat final.

console.log("------------------- Exo 9 -------------")

// Déclaration de la fonction qui prend un nombre et un tableau de fonctions, et applique successivement chaque fonction au nombre, en renvoyant le résultat final
function appliquerOperations(nombre: number, operations: ((n: number) => number)[]): number {
             
    let resultat = nombre;     // Initialisation du résultat avec le nombre initial
    
            
    for (const operation of operations) {        // Boucle pour appliquer chaque fonction successivement
            
        resultat = operation(resultat);          // Appliquer l'opération actuelle et mettre à jour le résultat
    }
    
            
    return resultat;                               // Retourner le résultat final
}

// Exemple d'utilisation de la fonction
const operations = [
    (n: number) => n + 2,
    (n: number) => n * 3,
    (n: number) => n - 5
];
console.log(appliquerOperations(5, operations)); // ((5 + 2) * 3 - 5) => 16

// Exercice 10 : Fonction récursive pour générer la suite de Fibonacci
// Écrire une fonction récursive qui prend un nombre entier n et génère un tableau contenant les n
// premiers termes de la suite de Fibonacci. La suite de Fibonacci commence par 0 et 1, et chaque 
// terme suivant est la somme des deux termes précédents.

console.log("------------------- Exo 10 -------------")

function generateFibonacci(n: number): number[] {
    if (n <= 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    const suite = generateFibonacci(n - 1);
    suite.push(suite[suite.length - 1] + suite[suite.length - 2]);
    return suite;
}

// exemple d'utilisation de la procédure
console.log(generateFibonacci(10));



console.log("------------------- Exo 10 -2 -------------")

function suiteFibonacci(n: number): number[] {   // Déclaration de la fonction récursive qui prend un nombre entier n et génère un tableau contenant les n premiers termes de la suite de Fibonacci
  
    function fibonacciRecursif(num: number, a: number, b: number, result: number[]): void {    // Fonction récursive interne pour calculer la suite de Fibonacci

        if (num === 0) return;            // Condition de base pour arrêter la récursion
        

        result.push(a);           // Ajouter le terme actuel à la liste des résultats
        

        fibonacciRecursif(num - 1, b, a + b, result);          // Appeler récursivement avec les termes suivants de la suite
    }
    
 
    const result: number[] = [];      // Initialisation d'un tableau pour stocker les termes de la suite
    

    fibonacciRecursif(n, 0, 1, result);       // Appeler la fonction récursive interne pour remplir le tableau
    

    return result;      // Retourner le tableau contenant les n premiers termes de la suite de Fibonacci
}

// Exemple d'utilisation de la fonction
console.log(suiteFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]