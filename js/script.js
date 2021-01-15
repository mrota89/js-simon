//dichiaro funzione per generare numeri casuali
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//dichiaro variabili
var numeriDaIndovinare = 5;
var timing = 30;
var numeroUtente;
var numeriGenerati = [];
var numeriGeneratiAlert = [];
var numeriInseriti = [];
var numeriIndovinati = [];
var numeriIndovinatiAlert = [];

//genero numeri casuali
for(var i = 0; i < numeriDaIndovinare; i++) {
  numeriGenerati.push(randomNumber(1, 1000));
  numeriGeneratiAlert.push('  ' + numeriGenerati[i]);
}

console.log('numeri generati:' + numeriGenerati);

//mostro all'utente i numeri generati
alert('Benvenuto in una nuova partita!' + '\nOra ti verranno mostrati ' + numeriDaIndovinare + ' numeri. Memorizzali!' + '\nPoi attendi ' + timing + ' secondi.');
alert(numeriGeneratiAlert + '\nPremi Invio quando sei pronto.');

//imposto callback anonima che sarà richiamata dopo 30 secondi dalla chiusura dell'alert.
setTimeout(function(){
  while(numeriInseriti.length < numeriDaIndovinare) {//finchè non saranno inseriti 5 numeri, resto nel ciclo while
    numeroUtente = parseInt(prompt('inserisci un numero'));
    if(isNaN(numeroUtente)) {
      alert('inserisci un numero!');
    } else {
      numeriInseriti.push(numeroUtente);
      if(numeriGenerati.includes(numeroUtente)) {
        numeriIndovinati.push(numeroUtente);
        numeriIndovinatiAlert.push('  ' + numeroUtente);
      }
    }
  }

  console.log('numeri inseriti: ' + numeriInseriti);
  console.log('numeri indovinati: ' + numeriIndovinati);

  if(numeriIndovinati.length === 0) {
    alert('Hai Perso! Nessun numero indovinato.');
  } else {
    alert('Hai indovinato questi numeri: ' + numeriIndovinatiAlert + ' \nPer un totale di: ' + numeriIndovinati.length);
  }
}, timing * 1000);
