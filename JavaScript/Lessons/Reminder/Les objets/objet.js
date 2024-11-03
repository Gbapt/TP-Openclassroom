/***************************
*
* Les objets :
*
* 1. Créer un objet
* 2. Accéder aux propriétés
* 3. Modifier les propriétés
* 4. Utiliser les méthodes
* 5. Objet imbriqués
* 6. Parcourir un objet
* 7. Prototypes et héritage
*
***************************/

/* Les objets en JavaScript sont des structures de données complexes qui permettent de regrouper des informations et des comportements liés dans une seule entité.
Ils fonctionnent comme des collections de paires clé-valeur, où chaque clé est une propriété ou une méthode (fonction associée) de l’objet. */

// 1. Créer un objet

/* Il existe plusieurs manières de créer un objet, la plus simple étant d’utiliser la notation littérale {}. */

// Création d'un objet avec des propriétés
const voiture = {
    marque: "Renault",
    modele: "Clio",
    annee: 2020,
    couleur: "rouge",
    demarrer: function() {
      console.log("La voiture démarre !");
    }
  };

/* Dans cet exemple :

marque, modele, annee, et couleur sont des propriétés de l’objet voiture.
demarrer est une méthode (fonction) de l’objet voiture. */


// 2. Accéder aux propriétés

/* On peut accéder aux propriétés d’un objet en utilisant la notation point (.) ou la notation entre crochets ([]). */

console.log(voiture.marque); // "Renault"
console.log(voiture["modele"]); // "Clio"


// 3. Modifier les propriétés

voiture.couleur = "bleu"; // Modification
voiture.prix = 15000; // Ajout d'une nouvelle propriété
delete voiture.annee; // Suppression d'une propriété


// 4. Utiliser les méthodes

/* Les méthodes sont appelées comme des fonctions, en utilisant la notation point. */

voiture.demarrer(); // Affiche "La voiture démarre !"


// 5. Objets imbriqués :

/* Les objets peuvent contenir d’autres objets en tant que propriétés, permettant ainsi des structures plus complexes. */

const utilisateur = {
    nom: "Alice",
    adresse: {
      ville: "Paris",
      codePostal: 75000
    }
  };
  
  console.log(utilisateur.adresse.ville); // "Paris"

// 6. Parcourir un objet

/* On peut utiliser une boucle for...in pour parcourir toutes les propriétés d’un objet. */

for (let cle in voiture) {
    console.log(cle + ": " + voiture[cle]);
  }


// 7. Prototype et héritage :

/* Les objets en JavaScript sont basés sur des prototypes, ce qui signifie qu’ils peuvent hériter des propriétés et des méthodes d’autres objets.
Quand on crée un objet, il hérite automatiquement des propriétés et méthodes de Object.prototype, mais on peut aussi créer des chaînes d’héritage en utilisant des fonctions constructeur ou Object.create(). */

/* Exemple complet

Voici un exemple d’utilisation d’un objet avec des propriétés et méthodes pour représenter une voiture : */

const voiture = {
    marque: "Tesla",
    modele: "Model S",
    annee: 2023,
    vitesse: 0,
    accelerer: function() {
      this.vitesse += 10;
      console.log("Vitesse actuelle : " + this.vitesse + " km/h");
    },
    freiner: function() {
      this.vitesse -= 10;
      console.log("Vitesse actuelle : " + this.vitesse + " km/h");
    }
  };
  
  voiture.accelerer(); // Augmente la vitesse
  voiture.freiner();   // Réduit la vitesse

/*  Ici, accelerer et freiner sont des méthodes qui modifient la propriété vitesse de l’objet voiture. */


/* Pourquoi utiliser les objets ?

Les objets sont très utiles pour structurer des données complexes, regrouper des informations qui se rapportent au même concept, et définir des comportements associés. Ils sont au cœur de la programmation orientée objet (POO), un paradigme qui permet de construire des applications modulaires et réutilisables. */