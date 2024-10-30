function lancerJeu() {
    let choixUtilisateur = ""
    
    choixUtilisateur = choisirPhrasesOuMots()

    let score = 0
    let nombreDeQuestions = 0

    if (choixUtilisateur === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nombreDeQuestions = listeMots.length
    }
    else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreDeQuestions = listePhrases.length
    }

    afficherResultat(score,nombreDeQuestions)

}

lancerJeu()