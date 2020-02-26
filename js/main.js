
var difficolta = prompt("Scegli il livello di difficoltà tra 'Facile' 'Medio' e 'Difficile'");

if (difficolta.toLowerCase() === "facile") {
  dimensioneCampo = 100;
} else if (difficolta === "medio") {
  dimensioneCampo = 80;
} else if (difficolta === "difficile") {
  dimensioneCampo = 50;
}

console.log("Hai scelto il seguente livello di difficoltà: " + difficolta);

var dimensioneCampo = 100;
var totaleMine = 16;
var bombe = [];
var bandierinePiazzate = [];
var bandierineMax = dimensioneCampo - totaleMine;




while (bombe.length < totaleMine) {
  var bombaGenerata = generaRandomMinMax(1, dimensioneCampo);
  if (!bombe.includes(bombaGenerata)) {
    bombe.push(bombaGenerata);
  }
}

var boom = false;
while ((bandierinePiazzate.length < bandierineMax) && (boom === false)) {
  var bandierinaInserita = parseInt(prompt("Inserisci un numero da 1 a " + dimensioneCampo));
  if (!bandierinePiazzate.includes(bandierinaInserita)) {
    if (!bombe.includes(bandierinaInserita)) {
      if ((bandierinaInserita >= 1) && (bandierinaInserita <= 100)) {
        if (!isNaN(bandierinaInserita)) {
          bandierinePiazzate.push(bandierinaInserita);
          if (bandierinePiazzate.lengt == bandierineMax) {
            console.log("Hai vinto!!");
          } else {
            console.log("Hai inserito una bandierina");
          }
        } else {
          alert("Non hai inserito un numero");
        }
      } else {
        console.log("Devi inserire un numero compreso tra 1 e 100");
      }
    } else {
      console.log("Hai perso");
      boom = true;
    }
  } else {
    console.log("Questo numero è già stato inserito");
  }
}


//
function generaRandomMinMax(min, max) {
     var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
     return numeroRandom;
 }
