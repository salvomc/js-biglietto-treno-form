//dicharo le variabili
let inputNomeCognome = '';
let inputDistanzaViaggio;
let inputEtaPasseggero ;
let prezzoViaggio;
let prezzoViaggioScontato;
let offertaMessage;
let prezzoMessage;
let generaButton = document.getElementById('genera_button');
//evento bottone genera
generaButton.addEventListener('click', function(){
    //recupero valori inseriti in input
    let inputNomeCognome = document.getElementById('nome_cognome').value;
    let inputDistanzaViaggio = document.getElementById('distanza_viaggio').value;
    let inputEtaPasseggero = document.getElementById('eta_passeggero').value;
    prezzoViaggio = inputDistanzaViaggio * 0.21;
    //
    if (inputEtaPasseggero === '2'){
            prezzoViaggioScontato = (prezzoViaggio - (prezzoViaggio * 20 / 100)).toFixed(2);
            prezzoMessage = `${prezzoViaggioScontato}€`;
            offertaMessage = `Biglietto Under-18`;  
    }
    else if (inputEtaPasseggero === '3'){
            prezzoViaggioScontato = (prezzoViaggio - (prezzoViaggio * 40 / 100)).toFixed(2);
            prezzoMessage = `${prezzoViaggioScontato}€`;
            offertaMessage = `Biglietto Over-65`; 
    }else {
            prezzoMessage = `${prezzoViaggio.toFixed(2)}€`;
            offertaMessage = `Biglietto Standard`;
    }
document.getElementById('nome_passeggero').innerHTML = `${inputNomeCognome}`;
document.getElementById('offerta').innerHTML = `${offertaMessage}`;
document.getElementById('costo_biglietto').innerHTML = `${prezzoMessage}`; 
})
