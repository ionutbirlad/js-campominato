/*
  1. Mi creo le variabili necessarie;
  2. Genero i numeri con un ciclo for (magari faceno una fuznione);
  3. Faccio inserire i 16 numeri all'utente;
  4. Contemporaneamente cnfronto gli input inseriti con i numeri generati dal pc;
  5. Gestisco la fine della partita;
  6. Comunico i risultati.
*/

var numeriGenerati = [];

for (var i = 1; i <= 100; i++) {
  var n = generaRandomMinMax(1, 100);
  numeriGenerati.push(n);
}
console.log(numeriGenerati);

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

if (res == true) {
  console.log("Hai vinto!!");
} else if (res == false) {
  console.log("Purtroppo hai perso..");
}


function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
