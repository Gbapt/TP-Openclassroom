/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()

let inputEcriture = document.getElementById("inputEcriture");
console.log(inputEcriture);

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)

let spanZoneScore = document.querySelector(".zoneScore span")
console.log(spanZoneScore)

let divzoneProposition = document.querySelector(".zoneProposition")
console.log(divzoneProposition)

let listeBtnRadio = document.querySelectorAll(".optionSource input")
console.log(listeBtnRadio)