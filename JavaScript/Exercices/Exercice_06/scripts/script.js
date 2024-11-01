function afficherResultat(score, nombreDeQuestions) {
    console.log("Votre score est de " + score + " sur " + nombreDeQuestions)
}

function choisirPhrasesOuMots() {
    let choixUtilisateur = ""
    while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
        choixUtilisateur = prompt("Faites votre choix pour la difficulté du jeu : entrer 'mots' pour choisir la liste de mots ou entrer 'phrases' si vous préférer une difficulté accrue. ")
    }
    return choixUtilisateur
}


function lancerBoucleDeJeu(choixUtilisateur) {
    let score = 0
    for (i = 0; i < choixUtilisateur.length; i++) {
        motUtilisateur = prompt("Essayer d'entrer le mot suivant : " + choixUtilisateur[i])
        if (motUtilisateur === choixUtilisateur[i]) {
            score++
        }
    }
    return score    
}