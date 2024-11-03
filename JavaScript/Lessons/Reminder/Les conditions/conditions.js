/**************************
 * Les Conditions :
 * 1. if / else
 * 2. switch
 *************************/

// Les conditions en JavaScript permettent d'exécuter différents morceaux de code en fonction de certaines conditions.

// 1. condition : if - else

/* La condition if vérifie si une expression est vraie, et si c'est le cas, elle exécute un bloc de code.
La condition else est optionnelle et s'exécute seulement si la condition if est fausse. */

// Exemple simple:
let heure = 14;

if (heure < 19) {
  console.log("Bonjour !");
} else {
  console.log("Bonsoir !");
}

// Exemple avec else if:
let age = 20;

if (age < 18) {
  console.log("Mineur");
} else if (age >= 18 && age < 65) {
  console.log("Adulte");
} else {
  console.log("Senior");
}


// 2.condition switch

/* La structure switch est utile pour les cas où on veut tester une seule variable contre plusieurs valeurs possibles.
Elle peut être plus lisible que plusieurs if else lorsqu’il y a plusieurs options distinctes. */

// Exemple :
let jour = "mardi";

switch (jour) {
  case "lundi":
    console.log("Début de la semaine !");
    break;
  case "mardi":
    console.log("Deuxième jour de la semaine !");
    break;
  case "mercredi":
    console.log("Milieu de la semaine !");
    break;
  default:
    console.log("Jour non reconnu");
}

/* break : Il est important d'utiliser break à la fin de chaque case pour éviter que le code continue dans le case suivant.
Sans break, tous les case suivants s'exécuteront (c'est ce qu'on appelle le fall-through). */