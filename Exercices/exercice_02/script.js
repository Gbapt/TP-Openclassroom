// Exercice 2:

let maCollectionDeFilms = ["Pulp Fiction","Jurassic Park", "Titanic"];
                           
maCollectionDeFilms.push("Retour vers le futur");
console.log(maCollectionDeFilms);

let ticket = {
    nomFilm: "Batman",
    prix: "11€",
    numeroSalle: 1
}

maCollectionDeFilms.push(ticket.nomFilm)

console.log(maCollectionDeFilms)

let nom = "Clark";

let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + ".";

console.log(texteAffichage)
