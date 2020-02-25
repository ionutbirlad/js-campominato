/*
  1. Mi creo le variabili necessarie;
  2. Genero i numeri con un ciclo for (magari faceno una fuznione);
  3. Faccio inserire i 16 numeri all'utente;
  4. Contemporaneamente cnfronto gli input inseriti con i numeri generati dal pc;
  5. Gestisco la fine della partita;
  6. Comunico i risultati.
*/

var nDiff = 0;
var difficolta = prompt("Scegli il livello di difficoltà tra 'Facile' 'Medio' e 'Difficile'");
while (!(isNaN(difficolta))) {
  difficolta = prompt("Hai inserito un numero. Devi scegliere il livello di difficoltà tra 'Facile' 'Medio' e 'Difficile'");
}
while ((difficolta.toLowerCase() !== "facile") && (difficolta.toLowerCase() !== "medio") && (difficolta.toLowerCase() !== "difficile")) {
  difficolta = prompt("Devi scegliere una difficoltà tra 'Facile' 'Medio' e 'Difficile'");
}



if (difficolta === "facile") {
  nDiff = 100;
} else if (difficolta === "medio") {
  nDiff = 80;
} else if (difficolta === "difficile") {
  nDiff = 50;
}

var numeriGenerati = [];
for (var i = 1; i <= nDiff; i++) {
  var g = generaRandomMinMax(1, 100);
  numeriGenerati.push(g);
}
// console.log(numeriGenerati);

while (isNaN(numeroUtente)) {
  var i = 1;
  var res;
  while (i <= 16) {
    i++;
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    res = true;
    if (numeriGenerati.includes(numeroUtente)) {
      res = false;
      break;
    }
  }
}

if (res == true) {
  console.log("Hai vinto!!");
} else if (res == false) {
  console.log("Purtroppo hai perso..");
}


function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
