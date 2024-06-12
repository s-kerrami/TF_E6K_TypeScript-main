// declarer une variable 

let age : number = 25;
let jour : number = 3;
let est_adult : boolean = age >= 18;
let hasId : boolean = true;


// condition if /else

console.log("condition if /else");
if (est_adult) {
    console.log("vous etes majeur");
} else {
    console.log("vous etes mineur");
}


// condition ternaire /!\ 

console.log( "--- condition ternaire /!\ --- ");
let message : string = (age>=18) ? "vous etes majeur" : "vous etes mineur" 

// condition switch /!\

console.log("--- condition switch /!\ --- ");
let nomdujour : string
switch (jour) {
    case 1:
        nomdujour = "lundi";
        break;
    case 2:
        nomdujour = "mardi";
        break;
    case 3:
        nomdujour = "mercredi";
        break;
    case 4:
        nomdujour = "jeudi";
        break;
    case 5:
        nomdujour = "vendredi";
        break;
    case 6:
        nomdujour = "samedi";
        break;
    case 7:
        nomdujour = "dimanche";
        break;
    default:
        nomdujour = "Jour non connu";
        break;
}
console.log(`aujourd'hui nous somme le  ${nomdujour}`);

console.log("-- Operateur logique --");

if(hasId && est_adult){
    console.log("vous autorisé a entrer");
}
else{
    console.log("vous ne pouvez pas entrer");
}
