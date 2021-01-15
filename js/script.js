//dichiaro funzione per generare numeri casuali
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//dichiaro variabile per array numeri casuali
var numeriDaIndovinare = 5;
var numeriGenerati = [];
var numeroInserito;
var numeriIndovinati = [];

//genero numeri casuali
for(var i = 0; i < numeriDaIndovinare; i++) {
  numeriGenerati.push(numeroCasuale = randomNumber(1, 1000));
}

console.log(numeriGenerati);

//mostro all'utente i numeri generati
alert('ora ti verranno mostrati 5 numeri. Memorizzali!')
alert(numeriGenerati);

setTimeout(function(){
  for(var x = 0; x < numeriDaIndovinare; x++) {
    numeroInserito = parseInt(prompt('inserisci un numero'));
    if(numeriGenerati.includes(numeroInserito)) {
      numeriIndovinati.push(numeroInserito);
    }
  }
}, 30000);

setTimeout(function(){
  alert('Hai indovinato questi numeri ' + numeriIndovinati + ' totale: ' + numeriIndovinati.length)
},30500)
