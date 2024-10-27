//AzerType : version 1

const listMots = ["Cachalot", "Pétunia","Serviette"]

let score = 0


let motUtilisateur = prompt("Entrer le mot suivant: " + listMots[0])

if (motUtilisateur === listMots[0]) {
    console.log("Bravo ! le mot entrez est correct.")
    score += 1 /* Possibilité d'utiliser score++ pour incrémenter de + 1 le score */
}
    else {
    console.log("Raté ! Le mot n'est pas identique");
}
console.log("Votre score est de : " + score + " / 3");


motUtilisateur = prompt("Entrer le mot suivant: " + listMots[1]);

if (motUtilisateur === listMots[1]) {
    console.log("Bravo ! le mot entrez est correct.");
    score += 1
}
    else {
    console.log("Raté ! Le mot n'est pas identique");
}
console.log("Votre score est de : " + score + " / 3");


motUtilisateur = prompt("Entrez le mot suivant: " + listMots[2]);

if (motUtilisateur === listMots[2]) {
    console.log("Bravo ! le mot entrez est correct.");
    score += 1
}
    else {
    console.log("Raté ! Le mot n'est pas identique");
}
console.log("Votre score finale est de : " + score + " /" +listMots.length);



//BONUS//
switch (score) {
    case 3:
    console.log("Félicitation ! c'est un sans faute.");
    break
    case 2:
    console.log("C'est pas mal ! continuez comme sa.");
    break
    case 1:
    console.log("Pas terrible ! Allez vous entraîner.");
    break
    default:
    console.log("Catastrophe ! Vous ne savez pas lire.");
}

