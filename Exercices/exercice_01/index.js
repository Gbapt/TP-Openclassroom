/*


Exercice 1: Total Livres

Instruction:

Vous gérez une bibliothèque qui contient 500 livres. Vous décidez de faire les opérations suivantes :

acheter 50 livres de plus ; 

en jeter 10 ;

racheter 5 des livres jetés.

1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres. 

2. Vérifiez le résultat grâce à l’instruction console.log.

3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le résultat total précédemment calculé. 

Cette variable devra contenir la chaîne de caractères ci-dessous :

“Notre bibliothèque possède TOTAL livres”

Avec TOTAL qui sera remplacé par le contenu de la variable totalLivres.

4. Affichez cette phrase grâce à l’instruction console.log.

*/

let totalLivres = 500;

totalLivres += 50;
totalLivres-= 10;
totalLivres+= 5;

console.log(totalLivres);

let affichageTotalLivres = "Notre bibliothèque possède "
affichageTotalLivres += totalLivres
affichageTotalLivres += " livres."

console.log(affichageTotalLivres);