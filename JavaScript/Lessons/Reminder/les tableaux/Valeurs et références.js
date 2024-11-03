/********************
*
* Valeurs et références
*
* 1. Copie par valeur
* 2. Copie par référence
*
********************/


// 1. Copie par valeur

/* Avec les types de données simples (comme les nombres), une copie par valeur crée une nouvelle variable indépendante. Modifier l’une des variables n’affecte pas l’autre. */

let variableSimple1 = 25;
let variableSimple2 = variableSimple1; // copie de la valeur

variableSimple2 = 30;

console.log("variableSimple1", variableSimple1); // 25
console.log("variableSimple2", variableSimple2); // 30


// 2. Copie par référence

/* Pour les objets (comme les tableaux), une copie par référence signifie que deux variables peuvent pointer vers le même objet en mémoire. Modifier l’objet via une variable affecte aussi l’autre. */

let variableComplexe1 = ['pomme', 'cerise'];
let variableComplexe2 = variableComplexe1; // copie de la référence

variableComplexe2.push('poire');

console.log('variableComplexe1', variableComplexe1); // ['pomme', 'cerise', 'poire']
console.log('variableComplexe2', variableComplexe2); // ['pomme', 'cerise', 'poire']

// Pour créer une copie indépendante d’un tableau, utilise l’opérateur ... (spread) :

let variableComplexe3 = [...variableComplexe1]; // copie par valeur du tableau

variableComplexe3.push('banane');

console.log('variableComplexe1', variableComplexe1); // ['pomme', 'cerise', 'poire']
console.log('variableComplexe3', variableComplexe3); // ['pomme', 'cerise', 'poire', 'banane']

// Résumé
Types simples (nombres, strings, etc.) : copie par valeur.
Objets (tableaux, objets) : copie par référence, sauf si on utilise une copie par valeur (ex. ...).