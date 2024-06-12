// procedure (function) ne renboie rien en stipule un argument : void en retour

function addition(nombre1: number, nombre2: number): void {
    console.log(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
}

addition(10, 20);

// fonction (function) renvooie une valeur avec le type de la valeur: stipulé en retour 

function multiplication(nombre1: number, nombre2: number): number {
    return nombre1 * nombre2;
}   

let resultat = multiplication(10, 20);
console.log(resultat);
// console.log( `5 x 3 = ${resultat}` );


// Application de parametre optionnel

function bienvenue(nom : string, message? : string) : string {
    if(message){
        return `Bonjour ${nom} ${message}`;
    }
    return `Bonjour ${nom}`;
}

// fonction anonyme assignée à une variable

const additionAnonyme = function (nombre1: number, nombre2: number): number {
    return nombre1 + nombre2;
}


// fuction flechée (Array Function) 

const soustraction = (nombre1: number, nombre2: number): number => {
    return nombre1 - nombre2;
}
soustraction(20, 10);


// fonction generique

function id<T>(parametre : T): T {
    return parametre;
}

console.log(id<number>(10));
console.log(id<string>("Bonjour"));


