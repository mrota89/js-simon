//dichiaro funzione per generare numeri casuali
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

//dichiaro variabili globali
var numeriDaIndovinare = 5;
var timing = 30;
var numeroGenerato;
var numeriGenerati = [];
var numeriGeneratiAlert = [];

//genero numeri casuali
while(numeriGenerati.length < numeriDaIndovinare) {
  numeroGenerato = randomNumber(1, 1000);
  if(!numeriGenerati.includes(numeroGenerato)) {
    numeriGenerati.push(numeroGenerato);
    numeriGeneratiAlert.push('  ' + numeroGenerato);
  }
}

console.log('numeri generati:' + numeriGenerati);

//mostro all'utente i numeri generati
alert('Benvenuto in una nuova partita!' + '\nOra ti verranno mostrati ' + numeriDaIndovinare + ' numeri. Memorizzali!' + '\nPoi attendi ' + timing + ' secondi.');
alert(numeriGeneratiAlert + '\nPremi Invio quando sei pronto.');

//imposto callback anonima che sarà richiamata dopo 30 secondi dalla chiusura dell'alert.
setTimeout(function(){

  //dichiaro variabili locali
  var numeroUtente;
  var numeriInseriti = [];
  var numeriIndovinati = [];
  var numeriIndovinatiAlert = [];

  while(numeriInseriti.length < numeriDaIndovinare) {//finchè non saranno inseriti 5 numeri, resto nel ciclo while
    numeroUtente = parseInt(prompt('inserisci un numero'));
    console.log(numeroUtente);
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
    alert('Hai ricordato questi numeri: ' + numeriIndovinatiAlert + ' \nPer un totale di: ' + numeriIndovinati.length);
  }
}, timing * 1000);
