// Exercice 1: Vérification d'âges
// Pour commencer, écrivez une fonction appelée verifierAge qui prend en 
// entrée un âge (de type number) et retourne un message. Si l'âge est inférieur 
// à 18, la fonction doit retourner "Vous êtes mineur". Si l'âge est compris entre 18 
// et 65 ans, la fonction doit retourner "Vous êtes adulte". Si l'âge est supérieur à 
// 65 ans, la fonction doit retourner "Vous êtes senior".


function verifierAge(age: number): string {
    if (age < 18) {
        return "Vous est mineur";
    } else if (age >= 18 && age <= 65) {
        return "Vous est adulte";
    } else {
        return "Vous est senior";
    }
}

console.log(verifierAge(15));
console.log(verifierAge(18));
console.log(verifierAge(66));

console.log("---------------------------------------------------------------");
// Exercice 2: Classification des nombres
// Créez une fonction appelée classerNombre qui prend un nombre comme 
// argument et retourne une chaîne de caractères. Si le nombre est positif, la 
// fonction doit retourner "Positif". Si le nombre est négatif, la fonction doit 
// retourner "Négatif". Si le nombre est zéro, la fonction doit retourner "Zéro".

function classerNombre(nb: number): string {
    if (nb > 0) {
        return "Positif";
    } else if (nb < 0) {
        return "Négatif";
    } else {
        return "Zéro";
    }
}

console.log(classerNombre(0));
console.log(classerNombre(1));
console.log(classerNombre(-1));

console.log("---------------------------------------------------------------");

// Exercice 3: Pair ou Impair
// Écrivez une fonction nommée estPair qui prend un nombre comme argument 
// et retourne un message. Si le nombre est pair, la fonction doit retourner "Pair". 
// Si le nombre est impair, la fonction doit retourner "Impair".

function estPair(nb: number): string {
    
    if (nb % 2 == 0) {
        return "Pair";
    } else {
        return "Impair";
    }
}

console.log(estPair(2));
console.log(estPair(3));



console.log("---------------------------------------------------------------");

// Exercice 4: Calcul de réduction
// Écrivez une fonction nommée calculerReduction qui prend en entrée un 
// montant (de type number) et applique une réduction basée sur les règles 
// suivantes. Si le montant est supérieur à 1000, appliquez une réduction de 20%. 
// Si le montant est compris entre 500 et 1000, appliquez une réduction de 10%. 
// Si le montant est inférieur à 500, appliquez une réduction de 5%. La fonction 
// doit retourner le montant après réduction.

function calculerReduction(montant: number): number {
    let reduction: number = 0;
    if (montant > 1000) {
        reduction = 20;
    } else if (montant > 500) {
        reduction = 10;
    } else if (montant > 0) {
        reduction = 5;
    }
    return montant - (montant * reduction / 100);
}


console.log(calculerReduction(1000));
console.log(calculerReduction(500));
console.log(calculerReduction(300));



console.log("---------------------------------------------------------------");

// Exercice 5: Vérification de mots de passe
// Créez une fonction appelée verifierMotDePasse qui prend un mot de passe 
// (de type string) et retourne un message. Si le mot de passe contient moins de 
// 8 caractères, la fonction doit retourner "Mot de passe trop court". Si le mot de 
// passe contient au moins 8 caractères mais pas de chiffres, la fonction doit 
// retourner "Le mot de passe doit contenir au moins un chiffre". Si le mot de passe 
// contient au moins 8 caractères et au moins un chiffre, la fonction doit retourner 
// "Mot de passe valide"

function verifierMotDePasse(motDePasse: string): string {
    if (motDePasse.length < 8) {
        return "Mot de passe trop court";
    } else if (!motDePasse.match(/\d/)) {
        return "Le mot de passe doit contenir au moins un chiffre";
    } else {
        return "Mot de passe valide";
    }
}

console.log(verifierMotDePasse("azerty"));
console.log(verifierMotDePasse("12345678"));
console.log(verifierMotDePasse("123456789"));


console.log("---------------------------------------------------------------");



// Exercice 6: Evaluation des notes
// Écrivez une fonction nommée evaluerNote qui prend une note (de type 
// number) sur 100 et retourne un grade basé sur les critères suivants. Si la note 
// est entre 90 et 100, la fonction doit retourner "A". Si la note est entre 80 et 89, la 
// fonction doit retourner "B". Si la note est entre 70 et 79, la fonction doit retourner 
// "C". Si la note est entre 60 et 69, la fonction doit retourner "D". Si la note est 
// inférieure à 60, la fonction doit retourner "F".

function evaluerNote(note: number): string {
    if (note >= 90) {
        return "A";
    } else if (note >= 80) {
        return "B";
    } else if (note >= 70) {
        return "C";
    } else if (note >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(evaluerNote(90));
console.log(evaluerNote(80));
console.log(evaluerNote(70));
console.log(evaluerNote(60));


console.log("---------------------------------------------------------------");

// Exercice 7: Vérification d'années bissextiles
// Écrivez une fonction nommée estBissextile qui prend une année (de type 
// number) et retourne true si l'année est bissextile, sinon false. Une année est 
// bissextile si elle est divisible par 4 mais pas par 100, ou si elle est divisible par 
// 400.


function estBissextile(annee: number): boolean {
    return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
}   

console.log(estBissextile(2020));
console.log(estBissextile(2021));
console.log(estBissextile(2022));


console.log("---------------------------------------------------------------");
// Exercice 8: Analyse des scores
// Écrivez une fonction appelée analyserScores qui prend un tableau de scores 
// (array de number) et retourne un objet avec les statistiques suivantes : le score 
// maximum, le score minimum, la moyenne des scores, et la médiane des 
// scores.

function analyserScores(scores: number[]): object {
    let max: number = Math.max(...scores);
    let min: number = Math.min(...scores);
    let moyenne: number = scores.reduce((a, b) => a + b, 0) / scores.length;
    let mediane: number = scores[Math.floor(scores.length / 2)];
    return { max, min, moyenne, mediane };
}


console.log(analyserScores([1, 2, 3, 4, 5]));


console.log("---------------------------------------------------------------");