/******************
*
* Les tableaux
*
* 1. Création d'un tableau
* 2. Accéder aux éléments d'un tableau
* 3. Modifier un élément d'un tableau
* 4. Propriétés et méthodes courantes des tableaux
* 5. Boucles et itération
* 6. Tableaux multidimensionnels
* 7. 7. Utiliser les tableaux avec les méthodes de transformation
*
******************/

/* Les tableaux en JavaScript (appelés arrays en anglais) sont des objets utilisés pour stocker des collections de données. Contrairement à des variables simples qui ne peuvent contenir qu'une seule valeur, un tableau peut contenir plusieurs valeurs organisées sous forme de liste. */


// 1. Création d'un tableau

/* Tu peux créer un tableau de différentes façons* /

/* Méthode littérale */

// Exemple :
let fruits = ["pomme", "banane", "orange"];

/* Ici, fruits est un tableau contenant trois éléments : "pomme", "banane" et "orange". */

/* Constructeur Array */

// Exemple :
let fruits = new Array("pomme", "banane", "orange");


// 2. Accéder aux éléments d’un tableau

/* Les éléments sont indexés à partir de 0.
Pour accéder à un élément spécifique, tu peux utiliser l'indice de sa position dans le tableau */

// Exemple :
console.log(fruits[0]); // Affiche "pomme"
console.log(fruits[1]); // Affiche "banane"
console.log(fruits[2]); // "orange"


// 3. Modifier un élément du tableau

/* Pour modifier un élément, tu peux réassigner une nouvelle valeur à un index spécifique */

fruits[1] = "kiwi";
console.log(fruits); // Affiche ["pomme", "kiwi", "orange"]

// 4. Propriétés et méthodes courantes des tableaux

/* Les tableaux en JavaScript ont plusieurs propriétés et méthodes utiles. En voici quelques-unes des plus utilisées :

length : Renvoie le nombre d’éléments dans le tableau. */

console.log(fruits.length); // Affiche 3


// push() : Ajoute un élément à la fin du tableau.

fruits.push("mangue");
console.log(fruits); // Affiche ["pomme", "kiwi", "orange", "mangue"]


// pop() : Supprime le dernier élément du tableau.

fruits.pop();
console.log(fruits); // Affiche ["pomme", "kiwi", "orange"]


// unshift() : Ajoute un élément au début du tableau.
fruits.unshift("fraise");
console.log(fruits); // Affiche ["fraise", "pomme", "kiwi", "orange"]


// shift() : Supprime le premier élément du tableau.

fruits.shift();
console.log(fruits); // Affiche ["pomme", "kiwi", "orange"]


// indexOf() : Renvoie l'indice de la première occurrence d'un élément, ou -1 s'il n'est pas présent.

console.log(fruits.indexOf("kiwi")); // Affiche 1


// 5. Boucles et itération

/*Pour parcourir les éléments d'un tableau, tu peux utiliser une boucle for, une boucle for...of, ou encore la méthode forEach. */

// for classique :

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// for...of :

for (let fruit of fruits) {
  console.log(fruit);
}


// forEach() :

fruits.forEach((fruit) => {
  console.log(fruit);
});


// 6. Tableaux multidimensionnels

/* Tu peux aussi créer des tableaux qui contiennent d'autres tableaux.
C'est ce qu'on appelle des tableaux multidimensionnels. */

let tableau2D = [
  ["pomme", "banane"],
  ["carotte", "tomate"]
];

console.log(tableau2D[0][1]); // Affiche "banane"


// 7. Utiliser les tableaux avec les méthodes de transformation

/* Les tableaux offrent des méthodes puissantes pour transformer leur contenu, comme map, filter et reduce. */

// map : Crée un nouveau tableau en appliquant une fonction à chaque élément.

let longueurs = fruits.map(fruit => fruit.length);
console.log(longueurs); // Affiche les longueurs des mots ["pomme", "kiwi", "orange"]


// filter : Crée un nouveau tableau avec les éléments qui remplissent une condition.

let fruitsLongs = fruits.filter(fruit => fruit.length > 5);
console.log(fruitsLongs); // Affiche ["orange"]


// reduce : Réduit tous les éléments du tableau à une seule valeur.

let totalLongueur = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLongueur); // Affiche la somme des longueurs des chaînes


/* Les tableaux sont donc très utiles en JavaScript pour stocker et manipuler des collections de données facilement et efficacement ! */