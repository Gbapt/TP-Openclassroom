/*********************
* 
* Les boucles : 
* 1. La boucle : for
* 2. La boucle : while
*
*********************/

// Les conditions en JavaScript permettent d'exécuter différents morceaux de code en fonction de certaines conditions.


// 1. La boucle : for

/* La boucle for est idéale quand tu sais combien de fois tu veux répéter une action. */

// Syntaxe :
for (initialisation; condition; incrémentation) {
  // Code à exécuter
}

// Exemple :
for (let i = 0; i < 5; i++) {
  console.log("Compteur :", i);
}

/* Ici, le code console.log("Compteur :", i); sera exécuté 5 fois, affichant les valeurs de i de 0 à 4. */


// 2. La boucle : while

/* La boucle while est plus flexible et elle s'exécute tant qu'une condition est vraie.
Elle est pratique si tu ne connais pas à l'avance le nombre d'itérations. */

// Syntaxe :
while (condition) {
  // code à exécuter
}

// Exemple :

let i = 0
while (i < 5) {
  console.log("Compteur ", i);
}

/* La boucle continue tant que i est inférieur à 5 (< 5).
Par contre si i est égale ou supérieur à 5 alors la boucle s'arrête. */