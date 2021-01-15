//dichiaro funzione per generare numeri casuali
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//dichiaro variabile per array numeri casuali
var numeriDaIndovinare = 5;
var numeriGenerati = [];
var numeroUtente;
var numeriInseriti = [];
var numeriIndovinati = [];

//genero numeri casuali
for(var i = 0; i < numeriDaIndovinare; i++) {
  numeriGenerati.push(numeroCasuale = randomNumber(1, 1000));
}

console.log(numeriGenerati);

//mostro all'utente i numeri generati
alert('Benvenuto in una nuova partita' + '\nOra ti verranno mostrati 5 numeri. Memorizzali!')
alert(numeriGenerati);
alert('Tra 30 secondi ti verrà chiesto di inserire i numeri che hai memorizzato' + '\nPremi ok per avviare il timer.')

//imposto callback che sarà richiamata dopo 30 secondi
setTimeout(function(){
  while(numeriInseriti.length < numeriDaIndovinare) {
    numeroUtente = parseInt(prompt('inserisci un numero'));
    if(isNaN(numeroUtente)) {
      alert('inserisci un numero!')
    } else {
      numeriInseriti.push(numeroUtente);
      if(numeriGenerati.includes(numeroUtente)) {
        numeriIndovinati.push(numeroUtente);
      }
    }
  }
  alert('Hai indovinato questi numeri: ' + numeriIndovinati + ' \nPer un totale di: ' + numeriIndovinati.length)
  console.log(numeriInseriti);
}, 30000);
