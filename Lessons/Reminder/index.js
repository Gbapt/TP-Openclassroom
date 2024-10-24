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

console.log(firstHero)

const name = firstHero.firstname /* Permet de placer la variable d'un objet dans une constante */

console.log(name)