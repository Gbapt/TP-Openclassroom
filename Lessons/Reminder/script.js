 let yourAge = 18; /* Variable + valeur'int' */

 const yourFirstname = "John"; /* Constante + valeur'string' */

console.log(yourAge); /* Permet de d'afficher la valeur */

yourAge += 1; /* Permet d'incrémenter de + 1 la variable 'yourAge' */
console.log(yourAge);

const yourLastname = "Doe";

let yourName = yourFirstname + " " + yourLastname; /* Permet de concatener une chaîne de caractère */

console.log(yourName);



let firstHero = { /* Ceci est un objet */
    firstname: "Bruce",
    lastname: "Wayne",
    age: 70,
    favoriteColor: "black",
    hobby: "night walk",
}

firstHero.favoriteCar = "Batmobile" /* Permet d'ajouter une nouvelle variable à l'objet */

console.log(firstHero); /* Affiche le contenu de la varaible dîte objet */

const name = firstHero.firstname /* Permet de placer la variable d'un objet dans une constante */

console.log(name); /* Affiche uniquement la valeur contenu dans la variable 'nom' qui a récupéré une seule valeur dans l'object 'firsHero' */

const maCollectionDeFilms = ["Star Wars", "Harry Potter", "Le Seigneur des Anneaux"] /* Ceci est un tableau */

console.log(maCollectionDeFilms[0]); /* Permet d'accéder au premier élément 'Star Wars' */

console.log(maCollectionDeFilms[1]); /* Permet d'accéder au deuxième élément 'Harry Potter' */

const nombreDeFilms = maCollectionDeFilms.length; /* Créer une constance qui prends le nombre de films comme valeur */

console.log(nombreDeFilms); /* Affiche le nombre de films */

maCollectionDeFilms.push("Retour vers le futur") /* Ajoute une valeur supplémentaire à la variable 'maCollectionDeFilms' */

console.log(maCollectionDeFilms) /* Affiche désormais 4 noms de film au lieu de 3 précédemment. Ma variable vaut désormais 4 */

maCollectionDeFilms.pop() /* Supprime le dernier élément dans le tableau */

console.log(maCollectionDeFilms) /* Affiche désormais 3 noms de film au lieu de 4 précédemment. Ma variable vaut 3 */



////////////////////
// Copie par valeur
////////////////////
let variableSimple1 = 25
let variableSimple2 = variableSimple1

variableSimple2 = 30

// Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1
console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)

///////////////////////
// Copie par référence
///////////////////////
let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1
let variableComplexe3 = [...variableComplexe1];

variableComplexe2.push('poire')

// Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.
console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

/////////////
// IF - ELSE
/////////////
const motDemander = "intergouvernementalisations"

let motUtilisateur = prompt("Entrez le mot : " + motDemander)

if (motUtilisateur === motDemander ) {  /* 3 signes égal permet en JavaScript à dire est égal à */
    console.log("Bravo ! vous avez réussi.")
}
else {
    console.log("Raté, le mot saisi est incorrecte !.")
}


/////////////////
// SWITCH / CASE
/////////////////
const motApplication = "intergouvernementalisations"

let motTaper = prompt("Entrez le mot : " + motDemander)

switch (motApplication) {
    case motDemander:
        console.log("Bravo ! vous avez réussi.")
        break
    case "Gredin":
        console.log("Rester correct !")
        break
    case "Mécréant":
        console.log("Rester poli !")
    case "Vilain":
        console.log("Rester gentil !")
        break
    default:
        console.log("Raté, le mot saisi est incorrecte !.")
}


/////////////
//BOUCLE FOR
/////////////

for (let compteur = 0; compteur < 3; compteur + 1) {
    console.log(compteur)
}
/*
- première instruction : compteur = 0 // Ici nous définissons une nouvelle variable appelée “compteur”, et qui contient 0.

- deuxième instruction : compteur < 3 // Ceci est la condition d’arrêt.
La boucle continuera tant que compteur est plus petit que 3.

- troisième instruction : compteur = compteur + 1 // À chaque tour de boucle, on fait évoluer la valeur de compteur. Ici, on dit que compteur vaut la valeur précédente de compteur, plus 1.

Au premier tour de boucle, compteur vaut 0, puis 1, puis 2, jusqu’à ce que compteur arrive à 3 (la condition d'arrêt) et là, on sort de la boucle. 
*/

for (let i = 0; i < 3; i++) { /* Version abrégé de la 'boucle for' */
    console.log(i)
}


////////////////
// BOUCLE WHILE
////////////////

let i = 0
while (i < 3) {
    console.log(i)
    i++
}
/*
- on déclare la variable i, que l’on initialise à zéro, avant la boucle ;

- le while ne contient que la condition d’arrêt : tant que i est plus petit que 3 ;

- on incrémente i (i va gagner +1 à chaque tour de boucle). 

! ATTENTION ! Si vous oubliez d’augmenter la valeur de i, alors la condition i < 3 sera toujours vraie, et vous aurez une boucle infinie ! Cela peut même faire planter votre navigateur !
*/