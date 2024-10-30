const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = [ "Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]

let score = 0

let choixDuJoueur = ""

while (choixDuJoueur !== "mots" && choixDuJoueur !== "phrases") {
    choixDuJoueur = prompt("Faites votre choix pour la difficulté du jeu : entrer mots pour choisir la liste de mots ou entrer phrases si vous préférer une difficulté accrue. ")
}

if (choixDuJoueur === "mots") {
    for (i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Essayer d'entrer le mot suivant : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
}

else {
    for (i = 0; i < listePhrases.length; i++) {
        let motUtilisateur = prompt("Essayer d'entrer le mot suivant : " + listePhrases[i])
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
