/********************************************************************
*
* Les Variables (let) et les Constances (const)
** Les différents type de valeur de base (string, number et boolean,)
*** La concaténation
**** Les différents symboles mathématique (+, -, *, /, %)
*
********************************************************************/


/**
* Les variables
*/

let yourAge = 18 // let et le préfixe pour créer la varaible. Sa valeur est de type number (nombre).
console.log (yourAge)

yourAge = 19 // La valeur d'une variable peut être modifiable à l'infini.
console.log(yourAge)

yourAge++ // Ici ++ permet d'ajouter + 1 à la valeur (on dit qu'elle incrémente de 1).
console.log(yourAge)

// Ancienne version
yourAge = yourAge + 2 // Ici on ajoute aussi + 2 à la valeur contenue dans la variable yourAge.
console.log(yourAge)

// Nouvelle version
yourAge += 2 //  Ici on ajoute aussi + 2, mais cela est plus concis.
console.log(yourAge)


/**
* Les constances
*/

const yourFirstname = "John" // Const et le préfixe pour déclarer une constance. Sa valeur est de type string (chaîne de caractères / Texte).
// La valeur d'une constance est imuable.

console.log(yourFirstname, yourAge) // Permet d'afficher la valeur.

const yourLastname = "Doe"


/**
** Les types de valeur
*/

let typeString = "Je suis un texte" // une string est une chaîne de caractères (un texte)
console.log(typeString)
let typeNumber = 10 // un number est un nombre comme -5, 20.99, 777 etc ...
console.log(typeNumber)
let typeBoolean = true // un boolean est soit true (Vrai) soit false (Faux) on dit qu'il est binaire 1 ou 0.
console.log(typeBoolean)


/**
*** La concaténation
*/

// Ancienne Version
let yourNameV1 = yourFirstname + ' ' + yourLastname // Permet de concatener une chaîne de caractères (guillemets simple).
console.log(yourNameV1)
// Ici le nombre reste de type number

let yourNameV2 = yourFirstname + " " + yourLastname // Permet aussi de concatener une chaîne de caractères (guillemets = double).
// Ici le nombre devient de type string

// Nouvelle Version
let helloYou = `Bonjour ${yourFirstname}, votre nom de famille est ${yourLastname} et vous avez ${yourAge} ans.`
console.log(helloYou) // Permet de concatener une chaîne de caractères.
// Ici le nombre devient également de type string


/**
* Les symboles mathématique
*/

// Addition
let anAddition = 4 + 5 // le symbole + permet de faire une addition.
// Soustraction
let anSubtraction = 10 - 1 // le symbole - permet de faire une soustraction.
// Multiplication
let aMultiplication = 3 * 3 // le symbole * permet de faire une multiplication.
// Division
let aDivision = 18 / 2 // le symbole / permet de faire  une division.
// Modulo
let aModule = 29 % 10 // Un modulo permet de récupérer le reste de la division, ici 29 divisé par 10 donne un quotient de 2 et un reste de 9.